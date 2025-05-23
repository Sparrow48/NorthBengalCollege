import PageHeader from '@/components/common/PageHeader';
import { Home } from 'lucide-react';

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import NoticeListItem from '@/components/notice/NoticeListItem';
import NoticeFilters from '@/components/notice/NoticeFilters';
import NoticePagination from '@/components/notice/NoticePagination';
import { DEPARTMENTS } from '@/data/departments';

const NoticesPage = async ({ params }) => {
  const { slug } = await params;
  const department = DEPARTMENTS?.find(
    (department) => department?.slug === slug
  );

  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-2xl md:text-4xl"
        breadcumbClass="text-white"
        title={`${department?.name} Notice`}
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: 'Notices', url: '/notices' },
          { name: department?.name, url: '' },
        ]}
      />

      <NoticeFilters department={department} />

      <main className="py-10">
        <div className="w-full">
          <div className="container px-4">
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

export default NoticesPage;
