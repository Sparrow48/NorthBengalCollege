import PageHeader from '@/components/common/PageHeader';
import { Home } from 'lucide-react';

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import Pagination from '@/components/common/Pagination';
import { NoticeActionWrapper } from '@/components/notice/NoticeActionWrapper';
import NoticeFilters from '@/components/notice/NoticeFilters';
import NoticeListItem from '@/components/notice/NoticeListItem';
import NoticeUploadWrapper from '@/components/notice/NoticeUploadWrapper';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';

const NoticesPage = async ({ searchParams }) => {
  const { page = '1', search } = await searchParams;
  const session = await getServerSession(authOptions);
  const headersList = await headers();

  const queryParams = new URLSearchParams();
  queryParams.set('page', page);
  if (search) queryParams.set('search', search);

  const notices = await fetch(
    `https://north-bengal-college-lilac.vercel.app/api/notice/all??${queryParams.toString()}`,
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
      console.error('Error fetching notices:', error);
      return [];
    });

  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-4xl md:text-6xl"
        breadcumbClass="text-white"
        title={'Notices'}
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: 'Notices', url: '' },
        ]}
      />

      <NoticeFilters query={search} />

      <main className="py-10">
        <div className="w-full">
          <div className="container px-4">
            {session && <NoticeUploadWrapper />}
            <div className="flex flex-col bg-slate-100 px-10 py-6 rounded-lg divide-y">
              {notices?.data?.map((notice, index) => (
                <div
                  className="flex items-center"
                  key={`div-notice-${index + 1}`}
                >
                  <div className="flex-grow">
                    <NoticeListItem
                      key={`notice-${index + 1}`}
                      notice={notice}
                    />
                  </div>
                  {session && (
                    <NoticeActionWrapper
                      key={`notice-action-${index + 1}`}
                      notice={notice}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="my-12">
              <Pagination
                currentPage={notices?.currentPage}
                totalPages={notices?.totalPages}
                url={`/notices`}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NoticesPage;
