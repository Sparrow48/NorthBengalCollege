import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function PATCH(request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  const formDataToSend = await request.formData();
  const isPublished = formDataToSend.get('isPublished');

  const payload = {};

  if (isPublished) {
    payload.isPublished = isPublished === 'true';
  } else {
    const title = formDataToSend.get('title');
    const content = formDataToSend.get('content');
    const type = formDataToSend.get('type');
    const imageAlt = formDataToSend.get('imageAlt');
    const isFeatured = formDataToSend.get('isFeatured');
    const image = formDataToSend.get('image');
    const department = formDataToSend.get('department') || [];

    payload.title = title;
    payload.content = content;
    payload.type = type;
    payload.imageAlt = imageAlt;
    payload.isFeatured = isFeatured === 'true';
    payload.department = JSON.parse(department);

    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, '')
      .trim()
      .replace(/\s+/g, '_');

    payload.slug = slug;

    if (image?.type) {
      const fileBuffer = await image.arrayBuffer();
      const base64File = Buffer.from(fileBuffer).toString('base64');
      const mimeType = image.type;

      const dataUri = `data:${mimeType};base64,${base64File}`;

      const uploadResult = await cloudinary.uploader.upload(dataUri, {
        resource_type: 'image',
        public_id: `news/${Date.now()}`,
        upload_preset: 'e-shop',
      });

      payload.imageUrl = uploadResult.secure_url;
    }
  }

  try {
    const updatedNews = await prisma.article.update({
      where: { id: parseInt(id) },
      data: payload,
    });

    return NextResponse.json({
      message: 'News updated successfully',
      data: updatedNews,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error updating news' }, { status: 500 });
  }
}
