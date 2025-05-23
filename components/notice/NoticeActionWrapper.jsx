'use client';
import { useRouter } from 'next/navigation';

export const NoticeActionWrapper = ({ notice }) => {
  const router = useRouter();

  const handleNewsPublish = async (id, isPublished) => {
    const formDataToSend = new FormData();
    formDataToSend.append('isPublished', isPublished);

    const response = await fetch(`/api/notice/update/${id}`, {
      method: 'PATCH',
      body: formDataToSend,
    });
    const data = await response.json();

    if (!response.ok) {
      console.error('Failed to update notice');
    }
    router.refresh();
  };

  return (
    <div className="relative inline-block w-11 h-5">
      <input
        checked={notice.isPublished}
        onChange={(e) => handleNewsPublish(notice.id, e.target.checked)}
        id="switch-component"
        type="checkbox"
        className="peer appearance-none w-11 h-5 bg-gray-400 rounded-full checked:bg-green-600 cursor-pointer transition-colors duration-300"
      />
      <label
        htmlFor="switch-component"
        className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
      ></label>
    </div>
  );
};
