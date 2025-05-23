import NewsAndMediaSection from './NewsAndMediaSection';
import NoticeSection from './NoticeSection';

const NewsAndNoticeSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <NewsAndMediaSection />
        <NoticeSection />
      </div>
    </section>
  );
};

export default NewsAndNoticeSection;
