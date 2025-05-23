"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Search, Filter, ChevronRight, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function NewsArchive() {
  const [searchQuery, setSearchQuery] = useState("")

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
            <span className="text-slate-400">News Archive</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-theme-primary py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">News Archive</h1>
          <p className="text-white/80 max-w-2xl">
            Browse through our comprehensive collection of news articles, announcements, and updates from North Bengal
            Medical College
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-theme-primary">Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search news..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-theme-primary">Filter By</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {["All", "College News", "Academic", "Research", "Events", "Achievements", "Student Life"].map(
                      (category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category}`} />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Date Range</h3>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-slate-500 mb-1 block">From</label>
                        <Input type="date" className="text-sm" />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 mb-1 block">To</label>
                        <Input type="date" className="text-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <Select defaultValue="newest">
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="a-z">A-Z</SelectItem>
                      <SelectItem value="z-a">Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-theme-primary hover:bg-theme-primary-dark">
                  <Filter className="h-4 w-4 mr-2" /> Apply Filters
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* News Listing */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=400&width=600" alt="News item" fill className="object-cover" />
                    <Badge className="absolute top-4 left-4 bg-theme-primary">
                      {["College News", "Academic", "Research", "Events"][index % 4]}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg hover:text-theme-red-light transition-colors">
                      <Link href={`/news-media/article/${index + 1}`}>
                        {index % 3 === 0 && "North Bengal Medical College Hosts International Conference"}
                        {index % 3 === 1 && "Students Achieve Outstanding Results in National Exams"}
                        {index % 3 === 2 && "New Medical Equipment Enhances Learning Experience"}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(2023, index % 12, (index % 28) + 1).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 line-clamp-3">
                      {index % 3 === 0 &&
                        "The college recently hosted an international conference on medical advancements, bringing together experts from around the world to discuss the latest research and innovations in healthcare..."}
                      {index % 3 === 1 &&
                        "Our students have once again demonstrated exceptional academic performance in the national medical examinations, with several ranking among the top performers nationwide..."}
                      {index % 3 === 2 &&
                        "The college has invested in state-of-the-art medical equipment to enhance the learning experience for students and provide them with hands-on training using the latest technology..."}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/news-media/article/${index + 1}`}
                      className="text-theme-red-light font-medium flex items-center"
                    >
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
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
        </div>
      </div>
    </div>
  )
}

