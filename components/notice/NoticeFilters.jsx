'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DEPARTMENTS } from '@/data/departments';
import { useRouter } from 'next/navigation';
import SearchForm from '@/components/notice/SearchForm';
import { Suspense } from 'react';
import SearchSkeleton from '@/components/skeletons/SearchSkeleton';

const NoticeFilters = ({ department = null, query }) => {
  const router = useRouter();

  const handleFilter = (slug) => {
    if (slug) {
      const toPath =
        slug !== 'all' ? `/notices/department/${slug}` : '/notices';
      router.push(toPath);
    }
  };

  return (
    <div className="w-full bg-sky-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col sm:flex-row gap-4">
          <Select value={department?.slug} onValueChange={handleFilter}>
            <SelectTrigger className="w-full sm:w-[300px] bg-white h-12">
              <SelectValue placeholder="Select a department..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {DEPARTMENTS?.map((department) => (
                <SelectItem key={department?.id} value={department?.slug}>
                  {department?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex-1 max-w-xl">
            <Suspense fallback={<SearchSkeleton />}>
              <SearchForm query />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeFilters;
