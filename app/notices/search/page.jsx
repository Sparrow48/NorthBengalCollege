import PageHeader from '@/components/common/PageHeader';
import { Home } from 'lucide-react';

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import NoticeListItem from '@/components/notice/NoticeListItem';
import NoticeFilters from '@/components/notice/NoticeFilters';
import NoticePagination from '@/components/notice/NoticePagination';
import { DEPARTMENTS } from '@/data/departments';

const NoticeSearchPage = async ({ searchParams }) => {
  const { keyword, department: depSlug } = await searchParams;
  const department = DEPARTMENTS?.find(
    (department) => department?.slug === depSlug
  );
  const searchKeyWord = decodeURIComponent(keyword);

  const getBreadCumbPaths = () => {
    const breadcumbPaths = [
      { name: <Home className="size-5" />, url: '/' },
      { name: 'Notices', url: '/notices' },
      // { name: "Search", url: "" },
    ];

    if (department) {
      breadcumbPaths?.push({
        name: department?.name,
        url: `/notices/department/${department?.slug}`,
      });
    }

    breadcumbPaths?.push({ name: 'Search', url: '' });

    return breadcumbPaths;
  };

  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-2xl md:text-4xl"
        breadcumbClass="text-white"
        title={`${department?.name} Notice`}
        description={`Searched for "${searchKeyWord}"`}
        descriptionClass="text-white/80"
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={getBreadCumbPaths()}
      />

      <NoticeFilters department={department} />

      <main className="py-10">
        <div className="w-full">
          <div className="container px-4">
            <span className="inline-block text-lg lg:text-xl font-bold text-theme-red-light mb-8">
              Search Results:
            </span>

            <div className="flex flex-col bg-slate-100 px-10 py-6 rounded-lg divide-y">
              {[...Array(10).keys()].map((i) => (
                <NoticeListItem key={`notice-${i + 1}`} />
              ))}
            </div>
            <div className="my-12">
              <NoticePagination />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NoticeSearchPage;
