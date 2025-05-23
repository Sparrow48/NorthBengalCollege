import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const search = searchParams.get('search') || '';

    const session = await getServerSession(authOptions);

    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = 10;
    const offset = (pageNumber - 1) * pageSize;
    const limit = pageSize;

    let query = '';

    if (search === 'null') {
      query = '';
    } else {
      query = search;
    }

    let notices = [];
    let totalArticles = 0;
    let totalPages = 0;
    if (!session) {
      notices = await prisma.notice?.findMany({
        where: {
          isPublished: true,
          OR: [
            {
              title: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
          ],
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: offset,
        take: limit,
      });

      totalArticles = await prisma.notice?.count({
        where: {
          isPublished: true,
          OR: [
            {
              title: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
          ],
        },
      });
      totalPages = Math.ceil(totalArticles / pageSize);
    } else {
      notices = await prisma.notice?.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
          ],
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: offset,
        take: limit,
      });

      totalArticles = await prisma.notice?.count({
        where: {
          OR: [
            {
              title: {
                contains: query || '',
                mode: 'insensitive',
              },
            },
          ],
        },
      });
      totalPages = Math.ceil(totalArticles / pageSize);
    }

    return NextResponse.json(
      { data: notices, totalPages: totalPages, currentPage: pageNumber },
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
