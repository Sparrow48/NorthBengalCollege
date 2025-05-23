import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CardDescription } from '../ui/card';
import { Calendar } from 'lucide-react';

const NewsAndMediaWidget = async ({ departmentSlug }) => {
  const _latestNews = await fetch(
    `https://north-bengal-college-lilac.vercel.app/api/news/latest-five?department=${departmentSlug}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data?.error) {
        console.error('Error fetching news:', data.error);
      }
      return data?.data;
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
      return [];
    });

  return (
    <>
      <section className="bg-slate-100 rounded-md">
        <div className="flex items-center justify-between border-b-4 border-theme-red-light p-4">
          <h2 className="text-lg font-semibold">NEWS & MEDIA</h2>
          <Button variant="link" size="md" className="text-pink-600">
            SEE ALL
          </Button>
        </div>
        <div className="space-y-8 px-4 py-8">
          {_latestNews?.map((item, index) => (
            <Link
              href={'#'}
              key={`news-${index}`}
              className="group flex items-start gap-3"
            >
              <div className="w-[60px] h-auto overflow-hidden rounded">
                <Image
                  src={item?.imageUrl}
                  alt={item?.imageAlt}
                  width={60}
                  height={60}
                  className="group-hover:scale-110 group-hover:rotate-3 duration-200"
                />
              </div>
              <div>
                <h4 className="text-sm leading-tight group-hover:text-theme-red-light">
                  {item?.title}
                </h4>
                <div className="text-xs text-gray-500 group-hover:text-theme-primary">
                  <CardDescription className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />{' '}
                    {new Date(item?.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsAndMediaWidget;
