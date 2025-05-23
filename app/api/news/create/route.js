import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formDataToSend = await request.formData();

    const image = formDataToSend.get('image');
    const title = formDataToSend.get('title');
    const content = formDataToSend.get('content');
    const type = formDataToSend.get('type');
    const imageAlt = formDataToSend.get('imageAlt');
    const isFeatured = formDataToSend.get('isFeatured');
    const department = formDataToSend.get('department') || [];

    if (isFeatured === 'true') {
      const existingFeaturedNews = await prisma.article.findFirst({
        where: {
          isFeatured: true,
        },
      });

      if (existingFeaturedNews?.length >= 1) {
        return NextResponse.json(
          { error: 'You can only have 1 featured news' },
          { status: 400 }
        );
      }
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, '')
      .trim()
      .replace(/\s+/g, '_');

    const findNews = await prisma.article.findFirst({
      where: {
        slug,
      },
    });

    if (findNews) {
      return NextResponse.json(
        { error: 'News with this title already exists' },
        { status: 400 }
      );
    }

    if (
      !image ||
      (!image.name.endsWith('.png') &&
        !image.name.endsWith('.jpg') &&
        !image.name.endsWith('.jpeg'))
    ) {
      return NextResponse.json(
        { error: 'Valid image required' },
        { status: 400 }
      );
    }
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    if (!type) {
      return NextResponse.json({ error: 'Type is required' }, { status: 400 });
    }

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    const fileBuffer = await image.arrayBuffer();
    const base64File = Buffer.from(fileBuffer).toString('base64');
    const mimeType = image.type;

    const dataUri = `data:${mimeType};base64,${base64File}`;

    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      resource_type: 'image',
      public_id: `news/${Date.now()}`,
      upload_preset: 'e-shop',
    });

    const news = await prisma.article.create({
      data: {
        title,
        imageUrl: uploadResult.secure_url,
        imageAlt,
        content,
        type,
        isFeatured: isFeatured === 'true',
        isPublished: false,
        slug,
        authorId: session.user.id,
        department: department ? JSON.parse(department) : [],
      },
    });

    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
