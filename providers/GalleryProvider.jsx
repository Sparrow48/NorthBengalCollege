"use client"

import { GalleryContext } from "@/contexts"
import { useState, useCallback } from "react"

const GalleryProvider = ({ children, items }) => {
    const [activeFilter, setActiveFilter] = useState("all")
    const [mediaType, setMediaType] = useState("all")
    const [selectedItem, setSelectedItem] = useState(null)
  
    // Filter gallery items based on active filter and media type
    const filteredItems = items.filter((item) => {
      const categoryMatch = activeFilter === "all" || item.category === activeFilter
      const typeMatch = mediaType === "all" || item.type === mediaType
      return categoryMatch && typeMatch
    })
  
    // Open lightbox for an item
    const openLightbox = useCallback((item) => {
      setSelectedItem(item)
      document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
    }, [])
  
    // Close lightbox
    const closeLightbox = useCallback(() => {
      setSelectedItem(null)
      document.body.style.overflow = "auto" // Restore scrolling
    }, [])
  
    // Navigate to next or previous item
    const navigateToItem = useCallback(
      (direction) => {
        if (!selectedItem) return
  
        const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)
  
        if (direction === "prev") {
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
          setSelectedItem(filteredItems[prevIndex])
        } else {
          const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
          setSelectedItem(filteredItems[nextIndex])
        }
      },
      [selectedItem, filteredItems],
    )
  
    return (
      <GalleryContext.Provider
        value={{
          items,
          activeFilter,
          setActiveFilter,
          mediaType,
          setMediaType,
          selectedItem,
          setSelectedItem,
          filteredItems,
          openLightbox,
          closeLightbox,
          navigateToItem,
        }}
      >
        {children}
      </GalleryContext.Provider>
    )
  }
  
  export default GalleryProvider;