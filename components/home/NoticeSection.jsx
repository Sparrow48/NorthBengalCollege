import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/common/SectionHeader';
import { NOTICES } from '@/data/notices';

const NoticeSection = async () => {
  const res = await fetch(
    'https://north-bengal-college-lilac.vercel.app/api/notice/latest',
    {
      cache: 'no-store',
    }
  );
  const data = await res.json();
  const notices = data.data;
  return (
    <>
      <div className="lg:col-span-1">
        <SectionHeader title="NOTICE" subtitle="IMPORTANT NOTICES" />
        <div className="space-y-4">
          {notices?.map((notice, index) => (
            <Card
              key={index}
              className="flex overflow-hidden border-none shadow-none rounded-none"
            >
              <div className="flex-shrink-0 w-20 bg-theme-primary border-b-8 border-theme-red-light text-white text-center py-2 flex flex-col justify-center">
                <div className="text-xl font-bold">
                  <span className="text-base">
                    {new Date(notice?.createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="text-sm">
                  {' '}
                  <span className="text-xl">
                    {new Date(notice?.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                    })}
                  </span>
                </div>
              </div>
              <CardContent className="flex items-center gap-4 px-4 py-2">
                <Link href={`/notices/${notice?.slug}`} className="block group">
                  <span className="text-base font-medium text-muted-foreground line-clamp-2">
                    {notice.title}
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-right mt-4">
          <Link
            href={'/notices'}
            className="text-theme-red-light hover:text-theme-red-dark border-b border-b-theme-red-light hover:border-b-theme-red-dark"
          >
            View All Notice
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoticeSection;
