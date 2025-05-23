import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const department = searchParams.get('department') || '';

    let news = [];
    if (department === '' || department === null) {
      news = news = await prisma.article.findMany({
        where: {
          isPublished: true,
        },
        take: 5,
        orderBy: {
          createdAt: 'desc',
        },
      });
    } else {
      news = await prisma.article.findMany({
        where: {
          isPublished: true,
          department: {
            has: department,
          },
        },
        take: 5,
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
