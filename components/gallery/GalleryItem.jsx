"use client"

import Image from "next/image"
import { Play, ExternalLink } from "lucide-react"
import useGallery from "@/hooks/useGallery"

export default function GalleryItem({ item }) {
  const { openLightbox } = useGallery()

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => openLightbox(item)}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={item.thumbnail || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {item.type === "video" ? (
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <Play size={24} className="text-white ml-1" />
            </div>
          ) : (
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <ExternalLink size={20} className="text-white" />
            </div>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              item.type === "video" ? "bg-theme-red-light/80 text-white" : "bg-theme-primary/80 text-white"
            }`}
          >
            {item.type === "video" ? "Video" : "Image"}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-theme-primary mb-1 group-hover:text-theme-red-light transition-colors duration-300 line-clamp-1">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
      </div>
    </div>
  )
}
