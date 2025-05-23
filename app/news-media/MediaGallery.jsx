"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Search, Grid, List, Camera, Video, Play, ChevronRight, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function MediaGallery() {
  const [viewMode, setViewMode] = useState("grid")

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
            <span className="text-slate-400">Media Gallery</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-theme-primary py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Media Gallery</h1>
          <p className="text-white/80 max-w-2xl">
            Explore our collection of photos and videos showcasing campus life, events, and achievements
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search media..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              className={viewMode === "grid" ? "bg-theme-primary hover:bg-theme-primary-dark" : ""}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              className={viewMode === "list" ? "bg-theme-primary hover:bg-theme-primary-dark" : ""}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Media Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-theme-primary data-[state=active]:text-white">
              All Media
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-theme-primary data-[state=active]:text-white">
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-theme-primary data-[state=active]:text-white">
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <MediaAlbums viewMode={viewMode} includeVideos={true} />
          </TabsContent>

          <TabsContent value="photos">
            <MediaAlbums viewMode={viewMode} includeVideos={false} />
          </TabsContent>

          <TabsContent value="videos">
            <VideoGallery viewMode={viewMode} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function MediaAlbums({ viewMode, includeVideos }) {
  const albums = [
    {
      title: "Annual Medical Conference 2023",
      date: "April 15, 2023",
      count: 24,
      type: "photo",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "New Medical Equipment Inauguration",
      date: "March 10, 2023",
      count: 3,
      type: "video",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Campus Life",
      date: "February 28, 2023",
      count: 42,
      type: "photo",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Graduation Ceremony 2023",
      date: "February 15, 2023",
      count: 36,
      type: "photo",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Research Symposium",
      date: "January 25, 2023",
      count: 18,
      type: "photo",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Campus Tour Videos",
      date: "January 10, 2023",
      count: 5,
      type: "video",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Faculty Profiles",
      date: "December 20, 2022",
      count: 15,
      type: "photo",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Student Activities",
      date: "December 5, 2022",
      count: 28,
      type: "photo",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredAlbums = includeVideos ? albums : albums.filter((album) => album.type === "photo")

  return (
    <div>
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlbums.map((album, index) => (
            <Link
              key={index}
              href={`/news-media/gallery/${album.type}/${album.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="group relative overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src={album.image || "/placeholder.svg"}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center mb-2">
                    {album.type === "photo" ? <Camera className="h-5 w-5 mr-2" /> : <Video className="h-5 w-5 mr-2" />}
                    <span className="text-sm">
                      {album.count} {album.type === "photo" ? "Photos" : "Videos"}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">{album.title}</h3>
                  <p className="text-sm text-white/80 flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" /> {album.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAlbums.map((album, index) => (
            <Card key={index}>
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48">
                  <Image src={album.image || "/placeholder.svg"} alt={album.title} fill className="object-cover" />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="text-xl font-medium text-theme-primary">{album.title}</h3>
                  <div className="flex items-center text-sm text-slate-500 mt-2 mb-4">
                    <Calendar className="h-4 w-4 mr-2" /> {album.date}
                  </div>
                  <div className="flex items-center text-sm">
                    {album.type === "photo" ? (
                      <Camera className="h-4 w-4 mr-2 text-theme-primary" />
                    ) : (
                      <Video className="h-4 w-4 mr-2 text-theme-primary" />
                    )}
                    <span>
                      {album.count} {album.type === "photo" ? "Photos" : "Videos"}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/news-media/gallery/${album.type}/${album.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-theme-red-light font-medium flex items-center"
                    >
                      View Album <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              className={page === 1 ? "bg-theme-primary hover:bg-theme-primary-dark" : ""}
              size="sm"
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function VideoGallery({ viewMode }) {
  const videos = Array.from({ length: 8 }).map((_, index) => ({
    title: [
      "Campus Tour: Medical Facilities",
      "Interview with the Dean",
      "Student Life at North Bengal Medical College",
      "Research Highlights 2023",
      "Graduation Ceremony Highlights",
      "Faculty Insights: Modern Medical Education",
      "Medical Equipment Demonstration",
      "International Conference Highlights",
    ][index],
    date: new Date(2023, index % 12, (index % 28) + 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    duration: `${Math.floor(Math.random() * 10) + 2}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, "0")}`,
    thumbnail: "/placeholder.svg?height=400&width=600",
  }))

  return (
    <div>
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer group">
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2 font-medium text-theme-primary group-hover:text-theme-red-light line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" /> {video.date}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="aspect-video bg-black flex items-center justify-center">
                  <div className="text-white text-center">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <p>Video player would appear here</p>
                    <p className="text-sm text-white/70 mt-2">{video.title}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {videos.map((video, index) => (
            <Card key={index}>
              <div className="flex flex-col md:flex-row">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-full md:w-64 h-48 cursor-pointer">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="aspect-video bg-black flex items-center justify-center">
                      <div className="text-white text-center">
                        <Play className="h-16 w-16 mx-auto mb-4" />
                        <p>Video player would appear here</p>
                        <p className="text-sm text-white/70 mt-2">{video.title}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="flex-1 p-4">
                  <h3 className="text-xl font-medium text-theme-primary">{video.title}</h3>
                  <div className="flex items-center text-sm text-slate-500 mt-2 mb-4">
                    <Calendar className="h-4 w-4 mr-2" /> {video.date}
                  </div>
                  <div className="flex items-center text-sm">
                    <Video className="h-4 w-4 mr-2 text-theme-primary" />
                    <span>Duration: {video.duration}</span>
                  </div>
                  <div className="mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-theme-red-light hover:bg-theme-red-dark">
                          <Play className="h-4 w-4 mr-2" /> Watch Video
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <div className="aspect-video bg-black flex items-center justify-center">
                          <div className="text-white text-center">
                            <Play className="h-16 w-16 mx-auto mb-4" />
                            <p>Video player would appear here</p>
                            <p className="text-sm text-white/70 mt-2">{video.title}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[1, 2].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              className={page === 1 ? "bg-theme-primary hover:bg-theme-primary-dark" : ""}
              size="sm"
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

