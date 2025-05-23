import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const formData = await request.formData();
    const isPublished = formData.get('isPublished') === 'true';

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const notice = await prisma.notice.update({
      where: { id: parseInt(id, 10) },
      data: { isPublished },
    });

    return NextResponse.json(
      { message: 'Notice updated successfully', notice },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating notice:', error);
    if (isDynamicServerError(error)) {
      throw error;
    }
    return NextResponse.json(
      { error: 'Failed to update notice' },
      { status: 500 }
    );
  }
}
