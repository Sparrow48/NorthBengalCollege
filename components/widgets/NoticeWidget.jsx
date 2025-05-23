import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardDescription } from '../ui/card';
import { Calendar } from 'lucide-react';

const NoticeWidget = async ({ departmentSlug }) => {
  const res = await fetch(
    `https://north-bengal-college-lilac.vercel.app/api/notice/latest?department=${departmentSlug}`,
    {
      cache: 'no-store',
    }
  );
  const data = await res.json();
  const notices = data.data;
  return (
    <>
      <section className="bg-slate-100 rounded-md">
        <div className="flex items-center justify-between border-b-4 border-theme-red-light p-4">
          <h2 className="text-lg font-semibold">NOTICES</h2>
          <Button variant="link" size="md" className="text-pink-600">
            SEE ALL
          </Button>
        </div>
        <div className="p-4 divide-y-2 divide-black/10">
          {notices?.map((item, index) => (
            <div key={`notice-${index}`} className="w-full">
              <Link href="#" className="inline-block hover:bg-slate-200 p-3">
                <p className="text-sm">{item?.title}</p>
                <div className="text-xs text-gray-500">
                  <CardDescription className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />{' '}
                    {new Date(item?.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NoticeWidget;
