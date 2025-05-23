import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ChevronRight } from 'lucide-react';
import NewsUploadWrapper from './NewUploadWrapper';
import { plainText } from '@/lib';

const FeaturedNews = async () => {
  const news = await fetch(`http://localhost:3000/api/news/feature`, {
    method: 'POST',
    cache: 'no-store',
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.error('Error fetching news:', data.error);
        throw new Error(data.error);
      }
      return data;
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
      return [];
    });

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-theme-primary mb-6">
          Featured News
        </h2>
        <NewsUploadWrapper />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* <div className="lg:col-span-2">
            <Card className="overflow-hidden h-full">
              <div className="relative md:h-80">
                <Image src={`https://picsum.photos/800/600?random=1`} alt="Featured news" fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-theme-red-light">Featured</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl hover:text-theme-red-bg-theme-red-light transition-colors">
                  <Link href="/news-media/article/1">North Bengal Medical College Launches New Research Center</Link>
                </CardTitle>
                <CardDescription className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" /> April 10, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The state-of-the-art research center will focus on innovative medical research and provide advanced
                  training opportunities for students and faculty members...
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/news-media/article/1" className="text-theme-red-bg-theme-red-light font-medium flex items-center">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div> */}
        <div className="lg:col-span-2">
          {news?.featuredNew && (
            <Card className="overflow-hidden h-full relative">
              <div className="relative h-full">
                <Image
                  src={news?.featuredNew?.imageUrl}
                  alt={news?.featuredNew?.imageAlt}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-theme-red-light">
                  Featured
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 hover:text-theme-red-light transition-colors">
                    <Link
                      href={`/news-media/article/${news?.featuredNew?.slug}`}
                    >
                      {news?.featuredNew?.title}
                    </Link>
                  </h3>
                  <div className="flex items-center text-sm text-white/80 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />{' '}
                    {new Date(news?.featuredNew?.createdAt).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </div>
                  <p className="text-white/90 line-clamp-2">
                    {plainText(news?.featuredNew?.content).slice(0, 150) +
                      '...'}
                  </p>
                  <Link
                    href={`/news-media/article/${news?.featuredNew?.slug}`}
                    className="text-theme-red-light font-medium flex items-center mt-3"
                  >
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </div>
        <div className="space-y-6">
          {news?.news &&
            news?.news?.map((item) => (
              <Card key={item?.id} className="overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={item?.imageUrl}
                    alt={item?.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg hover:text-theme-red-bg-theme-red-light transition-colors">
                    <Link href={`/news-media/article/${item?.slug}`}>
                      {item?.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(item?.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {plainText(item?.content).slice(0, 150) + '...'}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
