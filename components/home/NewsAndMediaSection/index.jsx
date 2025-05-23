import SectionHeader from '@/components/common/SectionHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { NOTICES } from '@/data/notices';
import { CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NewsAndMediaSection = async () => {
  const res = await fetch(
    'https://north-bengal-college-lilac.vercel.app/api/news/latest-five',
    {
      cache: 'no-store',
    }
  );
  const data = await res.json();
  const news = data.data;
  const [firstNews, ...restNews] = news || [];

  return (
    <div className="lg:col-span-2">
      <SectionHeader title="NEWS & MEDIA" subtitle="SEE WHATS GOING ON" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            <div className="space-y-4">
              {firstNews && (
                <Image
                  src={firstNews?.imageUrl}
                  alt={firstNews?.imageAlt}
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              )}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(firstNews?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <Badge variant="secondary">ADMIN</Badge>
              </div>
              <Link
                href={`/news-media/article/${firstNews?.slug}`}
                className="block"
              >
                <h3 className="text-xl font-semibold text-theme-primary hover:text-theme-red-light transition-colors line-clamp-2">
                  {firstNews?.title}
                </h3>
              </Link>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-8">
          {restNews?.map((item, index) => (
            <Card
              key={index}
              className="flex overflow-hidden border-none shadow-none"
            >
              <CardContent className="flex gap-4 px-4 pb-0">
                <Image
                  src={item?.imageUrl}
                  alt={item?.imageAlt}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <Link
                    href={`/news-media/article/${item?.slug}`}
                    className="block group"
                  >
                    <h3 className="font-medium text-theme-primary group-hover:text-theme-red-light transition-colors line-clamp-2">
                      {item?.title}
                    </h3>
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    {new Date(item?.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndMediaSection;
