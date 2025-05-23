import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Share2,
  Printer,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
} from 'lucide-react';
import { headers } from 'next/headers';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { plainText } from '@/lib';
import { notFound } from 'next/navigation';

const NewsArticle = async ({ params }) => {
  const headersList = await headers();
  const { slug } = await params;

  const news = await fetch(`http://localhost:3000/api/news/${slug}`, {
    headers: new Headers(headersList),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  if (!news || Object.keys(news).length === 0) {
    notFound();
  }

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
            <span className="text-slate-400" title={news?.title}>
              {news?.title?.length > 25
                ? news?.title?.slice(0, 25)?.concat('...')
                : news?.title}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link
              href="/news-media"
              className="inline-flex items-center text-theme-primary hover:text-theme-red-light mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to News
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
              {news?.title}
            </h1>

            <div className="flex items-center text-sm text-slate-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />{' '}
                {new Date(news?.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <Separator orientation="vertical" className="mx-4 h-4" />
              <div>By Admin</div>
              <Separator orientation="vertical" className="mx-4 h-4" />
              <Badge className="bg-theme-primary">{news?.type}</Badge>
            </div>

            <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image
                src={news?.imageUrl || 'https://picsum.photos/800/600'}
                alt={news?.imageAlt || 'News Image'}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose max-w-none">
              {
                <div
                  dangerouslySetInnerHTML={{ __html: news?.content || '' }}
                />
              }
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-medium text-theme-primary flex items-center">
                  <Share2 className="h-4 w-4 mr-2" /> Share this article:
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <Twitter className="h-4 w-4 text-sky-500" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-theme-primary">
                  Recent News
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="flex-shrink-0 relative w-20 h-20 rounded-md overflow-hidden">
                      <Image
                        src={`https://picsum.photos/200/200?random=${item + 2}`}
                        alt="News thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm hover:text-theme-red-light transition-colors">
                        <Link href={`/news-media/article/${item}`}>
                          Medical Students Win National Competition
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" /> March 28, 2023
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-theme-primary">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'College News',
                    'Academic',
                    'Research',
                    'Events',
                    'Achievements',
                    'Student Life',
                  ].map((category) => (
                    <li key={category}>
                      <Link
                        href={`/news-media/category/${category
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between text-slate-600 hover:text-theme-red-light"
                      >
                        <span>{category}</span>
                        <Badge variant="outline" className="text-xs">
                          12
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter Card */}
            {/* <Card className="mt-6 bg-theme-primary text-white">
              <CardHeader>
                <CardTitle>Subscribe to Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/80 mb-4">
                  Stay updated with the latest news and events from North Bengal Medical College
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="w-full bg-theme-red-light hover:bg-theme-red-dark">Subscribe</Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
