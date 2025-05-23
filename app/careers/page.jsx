import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import JobListings from "@/components/career/JobListings"
import { getJobs } from "@/data/jobs"
import PageHeaderBigSub from "@/components/common/PageHeaderBigSub"

export const metadata = {
  title: "Careers | North Bengal Medical College",
  description: "Explore career opportunities at North Bengal Medical College",
}

export default async function CareersPage({ searchParams }) {
  const currentPage = Number(searchParams.page) || 1
  const selectedDepartment = searchParams.department || "all"

  // Get jobs with pagination
  const { jobs, totalPages, departments } = await getJobs({
    page: currentPage,
    department: selectedDepartment,
    pageSize: 6,
  })

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <PageHeaderBigSub
        title="Career Opportunities"
        subtitle="Join our team of dedicated professionals and contribute to excellence in medical education and healthcare."
        breadcumbClass="text-white"
        paths={[
            { name: <Home className='size-5' />, url: "/" },
            { name: "Careers", url: "/careers" },
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 bg-white flex-grow">
        <div className="container mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-theme-primary mb-4">Work With Us</h2>
            <p className="text-gray-700 text-lg">
              North Bengal Medical College offers rewarding career opportunities for academic, clinical, and
              administrative professionals. Explore our current openings and join our mission to provide excellence in
              medical education and healthcare.
            </p>
          </div>

          {/* Job Listings */}
          <JobListings
            jobs={jobs}
            totalPages={totalPages}
            currentPage={currentPage}
            departments={departments}
            selectedDepartment={selectedDepartment}
          />
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-theme-primary mb-12 text-center">Why Work With Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-theme-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a3a5f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-theme-primary mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Be part of an institution committed to the highest standards of medical education and research. Work
                alongside distinguished faculty and contribute to shaping the future of healthcare professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-theme-red-light/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d10a43"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-theme-primary mb-3">Collaborative Environment</h3>
              <p className="text-gray-600">
                Experience a supportive and collaborative work culture that values teamwork, diversity, and innovation.
                We foster an environment where every team member can grow professionally and personally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-theme-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a3a5f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-theme-primary mb-3">Professional Development</h3>
              <p className="text-gray-600">
                Benefit from continuous learning opportunities, including workshops, conferences, and research
                collaborations. We invest in our staff's growth and provide pathways for career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
