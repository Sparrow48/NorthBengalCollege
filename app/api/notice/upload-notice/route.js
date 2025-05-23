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

    const formData = await request.formData();
    const file = formData.get('file');
    const title = formData.get('title');
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, '')
      .trim()
      .replace(/\s+/g, '_');

    const department = formData.get('department');

    const findNotice = await prisma.notice.findFirst({
      where: {
        slug,
      },
    });

    if (findNotice) {
      return NextResponse.json(
        { error: 'Notice with this title already exists' },
        { status: 400 }
      );
    }

    if (!file || !file.name.endsWith('.pdf')) {
      return NextResponse.json(
        { error: 'Valid PDF file required' },
        { status: 400 }
      );
    }
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    if (!department) {
      return NextResponse.json(
        { error: 'Department is required' },
        { status: 400 }
      );
    }

    const fileBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(fileBuffer).toString('base64');
    const mimeType = file.type;

    const dataUri = `data:${mimeType};base64,${base64File}`;

    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      resource_type: 'raw',
      public_id: `notices/${Date.now()}`,
      upload_preset: 'e-shop',
    });

    const notice = await prisma.notice.create({
      data: {
        title,
        fileUrl: uploadResult.secure_url,
        department,
        slug,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(notice, { status: 200 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
