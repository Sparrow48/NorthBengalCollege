import { useContext } from "react"
import { GalleryContext } from "@/contexts"

const useGallery = () => {
    const context = useContext(GalleryContext)
    
    if (context === undefined) {
      throw new Error("useGallery must be used within a GalleryProvider")
    }

    return context
}

export default useGallery