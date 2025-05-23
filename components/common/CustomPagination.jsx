"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CustomPagination({ totalPages, currentPage }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max to show
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always include first page
      pages.push(1)

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if at the beginning
      if (currentPage <= 2) {
        end = 4
      }

      // Adjust if at the end
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push("ellipsis-start")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push("ellipsis-end")
      }

      // Always include last page
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-1">
        {/* Previous button */}
        <button
          onClick={() => router.push(createPageURL(currentPage - 1))}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${
            currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-400">
                ...
              </span>
            )
          }

          return (
            <button
              key={`page-${page}`}
              onClick={() => router.push(createPageURL(page))}
              className={`px-4 py-2 rounded-md ${
                currentPage === page ? "bg-theme-primary text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          )
        })}

        {/* Next button */}
        <button
          onClick={() => router.push(createPageURL(currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${
            currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </nav>
    </div>
  )
}
