import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';

export async function GET(request, { params }) {
  try {
    const { category, page } = await params;

    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = 12; // Number of articles per page
    const offset = (pageNumber - 1) * pageSize;
    const limit = pageSize;

    const news = await prisma.article.findMany({
      where: {
        type: category,
        isPublished: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: offset,
      take: limit,
    });
    const totalArticles = await prisma.article.count({
      where: {
        type: category,
        isPublished: true,
      },
    });
    const totalPages = Math.ceil(totalArticles / pageSize);

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
