import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';

export async function GET(request, { params }) {
  try {
    const { page } = await params;
    const session = await getServerSession(authOptions);

    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = 12; // Number of articles per page
    const offset = (pageNumber - 1) * pageSize;
    const limit = pageSize;

    let news = [];
    let totalArticles = 0;
    let totalPages = 0;

    if (!session) {
      news = await prisma.article.findMany({
        where: {
          isPublished: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: offset,
        take: limit,
      });

      totalArticles = await prisma.article.count({
        where: {
          isPublished: true,
        },
      });
      totalPages = Math.ceil(totalArticles / pageSize);
    } else {
      news = await prisma.article.findMany({
        orderBy: {
          createdAt: 'desc',
        },

        skip: offset,
        take: limit,
      });

      totalArticles = await prisma.article.count();
      totalPages = Math.ceil(totalArticles / pageSize);
    }

    return NextResponse.json(
      { data: news, totalPages: totalPages, currentPage: pageNumber },
      { status: 200 }
    );
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
