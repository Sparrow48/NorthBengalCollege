import Link from "next/link"
import { Download, ChevronRight, ChevronLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const PressReleasesPage = () => {
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
            <span className="text-slate-400">Press Releases</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-theme-primary py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Press Releases</h1>
          <p className="text-white/80 max-w-2xl">
            Official announcements and press releases from North Bengal Medical College
          </p>
        </div>
      </div>

      {/* Press Releases Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input placeholder="Search press releases..." />
          </div>
          <div className="w-full md:w-48">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48">
            <Select defaultValue="newest">
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Press Releases List */}
        <div className="space-y-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="bg-theme-primary text-white p-6 flex flex-col items-center justify-center md:w-48">
                  <div className="text-3xl font-bold">{15 - index}</div>
                  <div className="text-lg">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"][index % 10]}
                  </div>
                  <div className="text-lg">2023</div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-medium text-theme-primary hover:text-theme-red-light transition-colors">
                    <Link href={`/news-media/press-releases/${index + 1}`}>
                      {index % 4 === 0 && "North Bengal Medical College Receives National Accreditation"}
                      {index % 4 === 1 && "New Partnership Announced with International Medical Universities"}
                      {index % 4 === 2 && "College Launches Telemedicine Program for Rural Communities"}
                      {index % 4 === 3 && "Medical Research Grant Awarded for Innovative Healthcare Solutions"}
                    </Link>
                  </h3>
                  <p className="mt-3 text-slate-600">
                    {index % 4 === 0 &&
                      "North Bengal Medical College is proud to announce that it has received national accreditation for its excellence in medical education and research..."}
                    {index % 4 === 1 &&
                      "We are pleased to announce a new partnership with leading international medical universities to enhance global learning opportunities for our students..."}
                    {index % 4 === 2 &&
                      "In an effort to improve healthcare access in rural areas, North Bengal Medical College has launched a comprehensive telemedicine program..."}
                    {index % 4 === 3 &&
                      "The college has been awarded a prestigious research grant to develop innovative healthcare solutions addressing critical medical challenges..."}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/news-media/press-releases/${index + 1}`}
                      className="text-theme-red-light font-medium flex items-center"
                    >
                      Read full press release <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" /> Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[1, 2, 3, 4].map((page) => (
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

      {/* Press Kit and Media Resources Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Press Kit Section */}
            <div className="col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-primary mb-4">Press Kit</h2>
              <p className="text-slate-600 mb-8">
                Download official logos, images, and information about North Bengal Medical College for media use.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Media Resources</CardTitle>
                  <CardDescription>Official assets for media and publication use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <FileText className="h-8 w-8 text-theme-primary" />
                    <div className="flex-1">
                      <h3 className="font-medium">College Fact Sheet</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Key information and statistics about North Bengal Medical College
                      </p>
                      <Button variant="outline" size="sm" className="mt-3 flex items-center">
                        <Download className="h-4 w-4 mr-2" /> Download PDF (2.4 MB)
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <FileText className="h-8 w-8 text-theme-primary" />
                    <div className="flex-1">
                      <h3 className="font-medium">College Logo Package</h3>
                      <p className="text-sm text-slate-500 mt-1">Official logos in various formats (PNG, SVG, EPS)</p>
                      <Button variant="outline" size="sm" className="mt-3 flex items-center">
                        <Download className="h-4 w-4 mr-2" /> Download ZIP (5.8 MB)
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <FileText className="h-8 w-8 text-theme-primary" />
                    <div className="flex-1">
                      <h3 className="font-medium">Campus Photos</h3>
                      <p className="text-sm text-slate-500 mt-1">High-resolution images of the campus and facilities</p>
                      <Button variant="outline" size="sm" className="mt-3 flex items-center">
                        <Download className="h-4 w-4 mr-2" /> Download ZIP (18.2 MB)
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <FileText className="h-8 w-8 text-theme-primary" />
                    <div className="flex-1">
                      <h3 className="font-medium">Brand Guidelines</h3>
                      <p className="text-sm text-slate-500 mt-1">Official brand guidelines and usage instructions</p>
                      <Button variant="outline" size="sm" className="mt-3 flex items-center">
                        <Download className="h-4 w-4 mr-2" /> Download PDF (3.6 MB)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Media Contact Section */}
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="flex-shrink-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-theme-primary mb-4">Media Contact</h2>
                  <p className="text-slate-600 mb-8">
                    For media inquiries, interview requests, or additional information, please contact our media relations
                    team.
                  </p>
                </div>
                <Card className="flex-grow">
                  <CardContent className="p-6">
                    <div className="grid gap-6">
                      <div>
                        <h3 className="font-medium text-lg text-theme-primary">Media Relations Office</h3>
                        <p className="text-slate-600 mt-2">
                          Our media relations team is available to assist journalists and media professionals with inquiries
                          about North Bengal Medical College.
                        </p>
                      </div>

                      <Separator />

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <h4 className="font-medium text-theme-primary">Contact Information</h4>
                          <ul className="mt-2 space-y-2 text-slate-600">
                            <li>Email: media@northbengalmedical.edu</li>
                            <li>Phone: +880 123 456 789</li>
                            <li>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-theme-primary">Media Spokesperson</h4>
                          <ul className="mt-2 space-y-2 text-slate-600">
                            <li>Dr. Rahman Khan</li>
                            <li>Director of Communications</li>
                            <li>Email: r.khan@northbengalmedical.edu</li>
                            <li>Phone: +880 123 456 790</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PressReleasesPage