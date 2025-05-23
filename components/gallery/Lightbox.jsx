"use client"

import Image from "next/image"
import { X } from "lucide-react"
import useGallery from "@/hooks/useGallery"

export default function Lightbox() {
  const { selectedItem, closeLightbox, navigateToItem, filteredItems } = useGallery()

  if (!selectedItem) return null

  const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={closeLightbox}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={24} className="text-white" />
        </button>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          navigateToItem("prev")
        }}
        className="absolute left-4 md:left-8 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          navigateToItem("next")
        }}
        className="absolute right-4 md:right-8 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="w-full max-w-5xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl">
        {selectedItem.type === "image" ? (
          <div className="relative h-[50vh] md:h-[70vh]">
            <Image
              src={selectedItem.source || "/placeholder.svg"}
              alt={selectedItem.title}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="relative pt-[56.25%]">
            <iframe
              src={selectedItem.source}
              title={selectedItem.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        )}

        <div className="p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-theme-primary mb-2">{selectedItem.title}</h3>
          <p className="text-gray-700">{selectedItem.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {filteredItems.length}
            </span>
            <span className="text-sm font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1).replace("-", " ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
