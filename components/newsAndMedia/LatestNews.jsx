import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { plainText } from '@/lib';
import { ArrowRight, Calendar, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LatestNews = async ({ category, query }) => {
  const _latestNews = await fetch(
    `https://north-bengal-college-lilac.vercel.app/api/news/latest/${category}/${
      query || 'null'
    }`
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
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a54]">
          Latest News
        </h2>
        {category && (
          <Link
            href={`/news-media/${category}`}
            className="flex items-center text-[#d30d4b] font-medium mt-2 md:mt-0"
          >
            View all news <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {_latestNews?.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={item?.imageUrl || '/images/news-placeholder.jpg'}
                alt={item?.imageAlt || 'News Image'}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-[#1a3a54]">
                {item?.type}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-lg hover:text-[#d30d4b] transition-colors">
                <Link href={`/news-media/article/${item?.slug}`}>
                  {item?.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2" />{' '}
                {new Date(item?.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 line-clamp-3">
                {plainText(item?.content).slice(0, 150) + '...'}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/news-media/article/${item?.slug}`}
                className="text-[#d30d4b] font-medium flex items-center"
              >
                {' '}
                Read more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* <div className="mt-8 text-center">
        <Button
          variant="outline"
          className="border-[#1a3a54] text-[#1a3a54] hover:bg-[#1a3a54] hover:text-white"
        >
          Load more
        </Button>
      </div> */}
    </div>
  );
};

export default LatestNews;
