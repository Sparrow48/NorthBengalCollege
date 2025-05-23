'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';

const SearchForm = ({ departmentSlug = '' }) => {
  const searchParams = useSearchParams();
  const keyWord = decodeURIComponent(searchParams?.get('keyword') || '');

  return (
    <>
      <form className="flex gap-3" action={formAction}>
        <Input
          name="keyword"
          type="text"
          placeholder="Search by title..."
          className="flex-1 bg-white h-12"
          defaultValue={keyWord || ''}
        />
        <input name="department" type="hidden" value={departmentSlug} />
        <Button
          type="submit"
          className="bg-theme-red-light hover:bg-theme-red-dark text-white px-8 h-12 disabled:opacity-30"
          disabled={pending}
        >
          <Search className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">SEARCH</span>
        </Button>
      </form>
    </>
  );
};

export default SearchForm;
