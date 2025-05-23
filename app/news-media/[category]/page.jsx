import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { plainText } from '@/lib';
import Pagination from '@/components/common/Pagination';

const CategoryNewsList = async ({ params, searchParams }) => {
  const { category } = await params;
  const { page = '1' } = await searchParams;

  const news = await fetch(
    `http://localhost:3000/api/news/category/${category}/${page}`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
      return [];
    });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-theme-red-light">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news-media" className="hover:text-theme-red-light">
              News & Media
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">{category}</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-theme-primary py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {category} News
          </h1>
          <p className="text-white/80 max-w-2xl">
            Browse the latest {category.toLowerCase()} news and updates from
            North Bengal Medical College
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Latest Category News */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news?.data?.map((data, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={data?.imageUrl || '/images/news-placeholder.jpg'}
                    alt={data?.imageAlt || 'News Image'}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-theme-primary">
                    {category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-theme-red-light transition-colors">
                    <Link href={`/news-media/article/${data?.slug}`}>
                      {data?.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(data?.createdAt || Date.now()).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 line-clamp-3">
                    {plainText(data?.content).slice(0, 150) + '...'}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/news-media/article/${data?.slug}`}
                    className="text-theme-red-light font-medium flex items-center"
                  >
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <Pagination
          currentPage={news?.currentPage}
          totalPages={news?.totalPages}
          url={`/news-media/${category}`}
        />
      </div>
    </div>
  );
};

export default CategoryNewsList;
