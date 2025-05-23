import { Calendar } from 'lucide-react';
import Link from 'next/link';

const NoticeListItem = ({ notice }) => {
  return (
    <>
      <Link
        href={`/notices/${notice?.slug}`}
        className="group flex gap-10 py-4 hover:bg-theme-primary rounded-lg duration-200"
      >
        <div className="w-[120px] text-center p-4 flex flex-col flex-shrink-0 overflow-hidden rounded-lg bg-theme-primary text-white">
          <span className="text-base">
            {new Date(notice?.createdAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="text-xl">
            {new Date(notice?.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="flex-grow space-y-2 py-2">
          <span className="text-theme-red-light group-hover:text-red-300 font-medium">
            {notice?.department}
          </span>
          <h4 className="text-2xl leading-tight line-clamp-2 text-gray-700 group-hover:text-white">
            {notice?.title}
          </h4>
        </div>
      </Link>
    </>
  );
};

export default NoticeListItem;
