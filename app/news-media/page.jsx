import Link from 'next/link';

import FeaturedNews from '@/components/newsAndMedia/FeaturedNews';
import LatestNews from '@/components/newsAndMedia/LatestNews';
import PressReleaseSection from '@/components/newsAndMedia/PressRelease/PressReleaseSection';
import SearchSection from '@/components/newsAndMedia/SearchSection';
// import NewsLetterSection from "@/components/common/NewsLetterSection"

const NewsAndMediaPage = async ({ searchParams }) => {
  const { tab: activeTab = 'all', search } = await searchParams;
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <SearchSection query={search} />

      {/* News Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-5 mb-8">
            <Link
              href="/news-media?tab=all"
              className={`p-2 text-center ${
                activeTab === 'all'
                  ? 'bg-theme-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              All News
            </Link>
            <Link
              href="/news-media?tab=college"
              className={`p-2 text-center ${
                activeTab === 'college'
                  ? 'bg-theme-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              College News
            </Link>
            <Link
              href="/news-media?tab=academic"
              className={`p-2 text-center ${
                activeTab === 'academic'
                  ? 'bg-theme-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Academic
            </Link>
            <Link
              href="/news-media?tab=research"
              className={`p-2 text-center ${
                activeTab === 'research'
                  ? 'bg-theme-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Research
            </Link>
            <Link
              href="/news-media?tab=events"
              className={`p-2 text-center ${
                activeTab === 'events'
                  ? 'bg-theme-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Events
            </Link>
          </div>

          {activeTab === 'all' && (
            <div className="mt-0">
              {!search && <FeaturedNews category={activeTab} />}
              <LatestNews category={activeTab} query={search} />
            </div>
          )}
          {activeTab === 'college' && (
            <div className="mt-0">
              <LatestNews category={activeTab} query={search} />
            </div>
          )}
          {activeTab === 'academic' && (
            <div className="mt-0">
              <LatestNews category={activeTab} query={search} />
            </div>
          )}
          {activeTab === 'research' && (
            <div className="mt-0">
              <LatestNews category={activeTab} query={search} />
            </div>
          )}
          {activeTab === 'events' && (
            <div className="mt-0">
              <LatestNews category={activeTab} query={search} />
            </div>
          )}
        </div>
      </section>

      {/* Media Gallery Section */}
      {/* <MediaGallery /> */}

      {/* Press Releases */}
      <PressReleaseSection />

      {/* Newsletter Subscription */}
      {/* <NewsLetterSection /> */}
    </div>
  );
};
export default NewsAndMediaPage;
