"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Download, ArrowLeft, Share2, FileText, ChevronLeft, ChevronRight, Printer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const PressReleaseDetailsPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 4 // Example total pages in the PDF

    // Sample press release data
    const pressRelease = {
        title: "North Bengal Medical College Receives National Accreditation",
        date: "March 15, 2023",
        excerpt:
        "North Bengal Medical College is proud to announce that it has received national accreditation for its excellence in medical education and research. This prestigious recognition highlights the college's commitment to providing high-quality education and maintaining rigorous academic standards.",
        pdfUrl: "/placeholder.svg?height=800&width=600", // This would be the actual PDF URL in production
        fileSize: "2.4 MB",
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
        }
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
                <Link href="/news-media/press-releases" className="hover:text-theme-red-light">
                  Press Releases
                </Link>
                <span className="mx-2">/</span>
                <span className="text-slate-400">{pressRelease.title}</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <Link
              href="/news-media/press-releases"
              className="inline-flex items-center text-theme-primary hover:text-theme-red-light mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Press Releases
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Press Release Info */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-theme-primary text-white px-4 py-2 rounded-md text-center">
                        <div className="text-xl font-bold">15</div>
                        <div className="text-sm">Mar</div>
                        <div className="text-sm">2023</div>
                      </div>
                      <FileText className="h-12 w-12 text-theme-primary" />
                    </div>

                    <h1 className="text-2xl font-bold text-theme-primary mb-4">{pressRelease.title}</h1>

                    <div className="flex items-center text-sm text-slate-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" /> {pressRelease.date}
                    </div>

                    <Separator className="my-4" />

                    <div className="mb-6">
                      <h3 className="font-medium text-theme-primary mb-2">Description</h3>
                      <p className="text-slate-600">{pressRelease.excerpt}</p>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      <Button className="w-full bg-theme-red-light hover:bg-theme-red-dark">
                        <Download className="h-4 w-4 mr-2" /> Download PDF ({pressRelease.fileSize})
                      </Button>

                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 flex items-center justify-center">
                          <Printer className="h-4 w-4 mr-2" /> Print
                        </Button>
                        <Button variant="outline" className="flex-1 flex items-center justify-center">
                          <Share2 className="h-4 w-4 mr-2" /> Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* PDF Viewer */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <Card className="overflow-hidden">
                  <div className="bg-theme-primary text-white p-4 flex justify-between items-center">
                    <h2 className="font-medium">Press Release Document</h2>
                    <div className="flex items-center text-sm">
                      <span>
                        Page {currentPage} of {totalPages}
                      </span>
                      <div className="flex ml-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20"
                          onClick={prevPage}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20"
                          onClick={nextPage}
                          disabled={currentPage === totalPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-4 min-h-[600px] flex flex-col items-center">
                    {/* PDF Preview */}
                    <div className="bg-white shadow-lg w-full max-w-3xl mx-auto rounded-md overflow-hidden">
                      {/* This would be replaced with an actual PDF viewer component in production */}
                      <div className="aspect-[8.5/11] relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                          {/* Sample PDF content for demonstration */}
                          <div className="w-full max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                              <h1 className="text-2xl font-bold text-theme-primary mb-2">PRESS RELEASE</h1>
                              <h2 className="text-xl font-bold">
                                North Bengal Medical College Receives National Accreditation
                              </h2>
                              <p className="text-sm text-slate-500 mt-2">For Immediate Release: March 15, 2023</p>
                            </div>

                            <div className="space-y-4 text-sm">
                              <p>
                                <strong>BENGAL, INDIA</strong> — North Bengal Medical College is proud to announce that it
                                has received national accreditation for its excellence in medical education and research.
                                This prestigious recognition highlights the college's commitment to providing high-quality
                                education and maintaining rigorous academic standards.
                              </p>

                              <p>
                                The accreditation, awarded by the National Medical Commission, follows a comprehensive
                                evaluation of the college's facilities, faculty, curriculum, and student outcomes. The
                                assessment team particularly commended the college's state-of-the-art laboratories,
                                dedicated faculty, and innovative teaching methodologies.
                              </p>

                              <p>
                                "This accreditation is a testament to the hard work and dedication of our faculty, staff,
                                and students," said Professor Dr. M. A. Matin, Founder of North Bengal Medical College. "We
                                have always strived to provide the highest quality of medical education, and this
                                recognition validates our efforts."
                              </p>

                              <p>
                                The accreditation is valid for five years and places North Bengal Medical College among the
                                top medical institutions in the country. It also opens up new opportunities for research
                                collaborations, faculty exchanges, and student internships with other prestigious
                                institutions.
                              </p>

                              <p>
                                North Bengal Medical College has been at the forefront of medical education since its
                                establishment, producing highly skilled medical professionals who serve communities across
                                the country and beyond.
                              </p>

                              <div className="mt-8">
                                <p>
                                  <strong>For media inquiries, please contact:</strong>
                                </p>
                                <p>
                                  Dr. Rahman Khan
                                  <br />
                                  Director of Communications
                                  <br />
                                  Email: r.khan@northbengalmedical.edu
                                  <br />
                                  Phone: +880 123 456 790
                                </p>
                              </div>

                              <div className="mt-8 text-center">
                                <p>###</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-sm text-slate-500 mt-4">
                      This is a preview. Download the PDF for the full document.
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )
}
export default PressReleaseDetailsPage