"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowLeft, Download, Share2, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PhotoAlbum() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Sample album data
  const album = {
    title: "Annual Medical Conference 2023",
    date: "April 15, 2023",
    description:
      "Photos from the Annual Medical Conference held at North Bengal Medical College, featuring keynote speakers, panel discussions, and networking events.",
    photos: Array.from({ length: 24 }).map((_, index) => ({
      id: index + 1,
      src: "/placeholder.svg?height=800&width=1200",
      alt: `Conference photo ${index + 1}`,
      caption:
        index % 3 === 0
          ? "Keynote speech by Dr. Sharma on advances in medical research"
          : index % 3 === 1
            ? "Panel discussion on healthcare innovations"
            : "Networking session with medical professionals",
    })),
  }

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? album.photos.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === album.photos.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-theme-red-light">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news-media" className="hover:text-theme-red-light">
              News & Media
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news-media/gallery" className="hover:text-theme-red-light">
              Media Gallery
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">{album.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Link href="/news-media/gallery" className="inline-flex items-center text-theme-primary hover:text-theme-red-light mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Gallery
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-2">{album.title}</h1>
          <div className="flex items-center text-sm text-slate-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" /> {album.date}
          </div>
          <p className="text-slate-600 max-w-3xl">{album.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" className="flex items-center">
            <Download className="h-4 w-4 mr-2" /> Download All
          </Button>
          <Button variant="outline" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" /> Share Album
          </Button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {album.photos.map((photo, index) => (
            <div key={photo.id} className="cursor-pointer group" onClick={() => openLightbox(index)}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToPrevious}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 rotate-180"
            onClick={goToNext}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <div className="w-full max-w-4xl px-4">
            <div className="relative aspect-video">
              <Image
                src={album.photos[currentPhotoIndex].src || "/placeholder.svg"}
                alt={album.photos[currentPhotoIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-white text-center">
              <p>{album.photos[currentPhotoIndex].caption}</p>
              <p className="text-white/70 text-sm mt-1">
                {currentPhotoIndex + 1} of {album.photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

