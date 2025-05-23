import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req, { params }) {
  try {
    const { slug } = params;
    const notice = await prisma.notice.findUnique({
      where: {
        slug,
      },
    });

    if (!notice) {
      return NextResponse.json({ error: 'Notice not found' }, { status: 404 });
    }

    return NextResponse.json({ data: notice }, { status: 200 });
  } catch (error) {
    console.error('Error fetching notice:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching the notice' },
      { status: 500 }
    );
  }
}
