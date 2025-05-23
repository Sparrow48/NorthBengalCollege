import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import NewsActionWrapper from '@/components/newsAndMedia/NewsActionWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { plainText } from '@/lib';
import Pagination from '@/components/common/Pagination';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const NewsList = async ({ searchParams }) => {
  const { page = '1' } = await searchParams;
  const headersList = await headers();
  const session = await getServerSession(authOptions);
  const news = await fetch(
    `https://north-bengal-college-lilac.vercel.app/api/news/all/${page}`,
    {
      headers: new Headers(headersList),
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
            <span className="text-slate-400">All News</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-theme-primary py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            All News
          </h1>
          <p className="text-white/80 max-w-2xl">
            Stay updated with the latest news, events, and achievements from
            North Bengal Medical College
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Featured News */}
        {/* <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={`https://picsum.photos/800/600?random=1`}
                  alt="Featured news"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-theme-red-light">
                  Featured
                </Badge>
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <CardTitle className="text-xl md:text-2xl hover:text-theme-red-light transition-colors mb-2">
                  <Link href="/news-media/article/1">
                    North Bengal Medical College Launches New Research Center
                  </Link>
                </CardTitle>
                <CardDescription className="flex items-center text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" /> April 10, 2023
                </CardDescription>
                <CardContent className="p-0 flex-grow">
                  <p className="text-slate-600">
                    The state-of-the-art research center will focus on
                    innovative medical research and provide advanced training
                    opportunities for students and faculty members. The center
                    aims to address critical healthcare challenges and
                    contribute to the development of new medical treatments and
                    technologies.
                  </p>
                </CardContent>
                <CardFooter className="px-0 pt-4 pb-0">
                  <Link
                    href="/news-media/article/1"
                    className="text-theme-red-light font-medium flex items-center"
                  >
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div> */}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {news?.data?.map((data, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={data?.imageUrl}
                  alt={data?.imageAlt}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-theme-primary">
                  {data?.type}
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
                  {new Date(data?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 line-clamp-3">
                  {plainText(data?.content).slice(0, 150) + '...'}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full">
                  <Link
                    href={`/news-media/article/${data?.slug}`}
                    className="text-theme-red-light font-medium flex items-center"
                  >
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  {session && <NewsActionWrapper news={data} />}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={news?.currentPage}
          totalPages={news?.totalPages}
          url={`/news-media/all`}
        />
      </div>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-theme-primary text-white mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-6">
              Stay updated with the latest news, events, and announcements from
              North Bengal Medical College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-theme-red-light hover:bg-theme-red-dark text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsList;
