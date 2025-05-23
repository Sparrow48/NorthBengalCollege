"use client"

import useGallery from "@/hooks/useGallery"
import GalleryItem from "./GalleryItem"

export default function GalleryGrid() {
  const { filteredItems } = useGallery()

  if (filteredItems.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {filteredItems.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  )
}
