"use client"

import { useEffect } from "react"
import Lightbox from "./Lightbox"
import useGallery from "@/hooks/useGallery"
import GalleryFilters from "./GalleryFilters"
import GalleryGrid from "./GalleryGrid"

export default function GallerySection() {
  const { selectedItem, closeLightbox, navigateToItem } = useGallery()

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return

      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        navigateToItem("prev")
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        navigateToItem("next")
      }

      if (e.key === "Escape") {
        closeLightbox()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedItem, closeLightbox, navigateToItem])

  return (
    <section className="pb-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        {/* Filters */}
        <GalleryFilters />

        {/* Gallery Grid */}
        <GalleryGrid />

        {/* Lightbox */}
        {selectedItem && <Lightbox />}
      </div>
    </section>
  )
}
