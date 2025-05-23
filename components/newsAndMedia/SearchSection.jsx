'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SearchSection = ({ query }) => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchParam = searchParams.get('search');

    if (searchParam) {
      setSearchQuery(searchParam);
    } else {
      setSearchQuery('');
    }
  }, [query]);

  const HandleSearchQuery = () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set('search', searchQuery.toString());

    router.push(`?${searchParams.toString()}`);
  };

  return (
    <section className="relative bg-theme-primary py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            News & Media
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Stay updated with the latest news, events, and achievements from
            North Bengal Medical College
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search news and articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              className="bg-theme-red-light hover:bg-theme-red-dark text-white"
              onClick={() => HandleSearchQuery()}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchSection;
