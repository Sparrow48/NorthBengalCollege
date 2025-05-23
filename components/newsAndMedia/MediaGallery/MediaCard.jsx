import Link from "next/link"
import Image from "next/image"
import { Camera, Video } from "lucide-react"

const MediaCard = ({ title, type, count, image }) => {
    return (
      <Link href={`/news-media/gallery/${type}/${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="group relative overflow-hidden rounded-lg">
          <div className="relative h-64">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-center mb-2">
              {type === "photo" ? <Camera className="h-5 w-5 mr-2" /> : <Video className="h-5 w-5 mr-2" />}
              <span className="text-sm">
                {count} {type === "photo" ? "Photos" : "Videos"}
              </span>
            </div>
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        </div>
      </Link>
    )
}

export default MediaCard