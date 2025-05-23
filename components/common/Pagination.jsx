'use client';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';

export default function Pagination({ currentPage, totalPages, url }) {
  const router = useRouter();

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set('page', selectedPage.toString());

    router.push(`?${searchParams.toString()}`);
  };
  return (
    <>
      <ReactPaginate
        className="flex items-center justify-center mt-6 gap-4 p-2"
        breakLabel="..."
        nextLabel=">>>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<<<"
        renderOnZeroPageCount={null}
        pageClassName="flex items-center justify-center w-8 h-8 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
        activeClassName="bg-theme-primary text-white pagination-active hover:bg-theme-primary"
        forcePage={currentPage - 1}
      />
    </>
  );
}
