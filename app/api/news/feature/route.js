import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const existingFeaturedNews = await prisma.article.findFirst({
      where: {
        isFeatured: true,
      },
    });

    const findNews = await prisma.article.findMany({
      where: {
        isPublished: true,
      },
      take: 2,
    });

    return NextResponse.json(
      {
        featuredNew: existingFeaturedNews,
        news: findNews,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
