import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';

export async function GET(request, { params }) {
  try {
    const { category, search } = await params;

    let query = '';

    if (search === 'null') {
      query = '';
    } else {
      query = search;
    }

    let news = [];

    if (category === 'all') {
      news = await prisma.article.findMany({
        where: {
          isPublished: true,
          OR: [
            {
              title: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
            {
              content: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
          ],
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 6,
      });
    } else {
      news = await prisma.article.findMany({
        where: {
          isPublished: true,
          type: category,
          OR: [
            {
              title: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
            {
              content: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
          ],
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 6,
      });
    }

    return NextResponse.json({ data: news }, { status: 200 });
  } catch (error) {
    console.error('Error fetching notices:', error);
    if (isDynamicServerError(error)) {
      throw error;
    }
    return NextResponse.json(
      { error: 'An error occurred while fetching notices' },
      { status: 500 }
    );
  }
}
