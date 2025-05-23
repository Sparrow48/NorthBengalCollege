'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchForm = ({ query }) => {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchParam = searchParams.get('search');

    if (searchParam) {
      setSearchString(searchParam);
    } else {
      setSearchString('');
    }
  }, [query]);

  const router = useRouter();

  const handleNoticeSearch = async () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set('search', searchString.toString());

    router.push(`?${searchParams.toString()}`);
  };

  return (
    <>
      <div className="flex gap-3">
        <Input
          name="keyword"
          type="text"
          placeholder="Search by title..."
          className="flex-1 bg-white h-12"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input name="department" type="hidden" value={query} />
        <Button
          type="submit"
          className="bg-theme-red-light hover:bg-theme-red-dark text-white px-8 h-12 disabled:opacity-30"
          onClick={() => {
            handleNoticeSearch();
          }}
        >
          <Search className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">SEARCH N</span>
        </Button>
      </div>
    </>
  );
};

export default SearchForm;
