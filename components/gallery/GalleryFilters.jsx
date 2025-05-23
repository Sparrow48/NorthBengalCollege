"use client"

import useGallery from "@/hooks/useGallery"
import { categories } from "@/data/gallery"

export default function GalleryFilters() {
  const { activeFilter, setActiveFilter, mediaType, setMediaType, filteredItems } = useGallery()

  return (
    <div className="mb-12">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                activeFilter === category ? "bg-theme-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Media Type Filters */}
        <div className="flex gap-1 md:gap-2 border rounded-lg overflow-hidden">
          <button
            onClick={() => setMediaType("all")}
            className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-colors ${
              mediaType === "all" ? "bg-theme-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setMediaType("image")}
            className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-colors ${
              mediaType === "image" ? "bg-theme-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setMediaType("video")}
            className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-colors ${
              mediaType === "video" ? "bg-theme-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Videos
          </button>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No items match your current filters.</p>
          <button
            onClick={() => {
              setActiveFilter("all")
              setMediaType("all")
            }}
            className="mt-4 text-theme-primary hover:text-theme-red-light font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
