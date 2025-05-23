import PageHeader from '@/components/common/PageHeader';
import { Home } from 'lucide-react';

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import JournalArticleCard from '@/components/journal/JournalArticleCard';
import JournalHeader from '@/components/journal/JournalHeader';

const JournalDetailsPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-4xl md:text-6xl"
        breadcumbClass="text-white"
        title={'Journal Details'}
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: 'Journals', url: '/journals' },
          { name: 'MicroBiology', url: '/journals/department/microbiology' },
          { name: 'Details', url: '' },
        ]}
      />

      <main className="py-10">
        <div className="w-full">
          <div className="container px-4">
            <div className="mx-auto p-6 space-y-8">
              {/* Header */}
              <JournalHeader journal={slug} />

              {/* Editorial Section */}
              <section>
                <h2 className="text-lg font-bold text-theme-red-light border-b pb-2 mb-4">
                  EDITORIAL
                </h2>
                <JournalArticleCard />
              </section>

              {/* Original Articles Section */}
              <section>
                <h2 className="text-lg font-bold text-theme-red-light border-b pb-2 mb-4">
                  ORIGINAL ARTICLES
                </h2>
                <div className="space-y-4">
                  <JournalArticleCard />
                  <JournalArticleCard />
                </div>
              </section>

              {/* Review Articles Section */}
              <section>
                <h2 className="text-lg font-bold text-theme-red-light border-b pb-2 mb-4">
                  REVIEW ARTICLES
                </h2>
                <div className="space-y-4">
                  <JournalArticleCard />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default JournalDetailsPage;
