import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Calendar, Briefcase, Clock, MapPin, FileText, ArrowLeft } from "lucide-react"
import { getJobById, getRelatedJobs } from "@/data/jobs"
import RelatedJobs from "@/components/career/RelatedJobs"

export async function generateMetadata({ params }) {
  const job = await getJobById(params?.slug)

  if (!job) {
    return {
      title: "Job Not Found | North Bengal Medical College",
    }
  }

  return {
    title: `${job.title} | Careers | North Bengal Medical College`,
    description: job.shortDescription,
  }
}

export default async function JobDetailPage({ params }) {
  const job = await getJobById(params?.slug)

  if (!job) {
    notFound()
  }

  const relatedJobs = await getRelatedJobs(job.id, job.department)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white py-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link href="/" className="hover:underline text-white/70">
                Home
              </Link>
              <ChevronRight size={16} className="text-white/50" />
              <Link href="/careers" className="hover:underline text-white/70">
                Careers
              </Link>
              <ChevronRight size={16} className="text-white/50" />
              <span className="truncate">{job.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  job.isUrgent ? "bg-red-500/20 text-red-100" : "bg-blue-500/20 text-blue-100"
                }`}
              >
                {job.isUrgent ? "Urgent Hiring" : job.type}
              </span>
              <span className="text-xs text-white/70">Job ID: {job.id}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>
            <p className="text-lg text-white/80 mb-6">{job.shortDescription}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-white/80">
                <Briefcase size={18} className="mr-2 text-white/60" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center text-white/80">
                <Calendar size={18} className="mr-2 text-white/60" />
                <span>Deadline: {job.deadline}</span>
              </div>
              <div className="flex items-center text-white/80">
                <Clock size={18} className="mr-2 text-white/60" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin size={18} className="mr-2 text-white/60" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8 bg-white flex-grow">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Job Description */}
              <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-theme-primary mb-4">Job Description</h2>
                <p className="text-gray-700 mb-6">{job.description}</p>

                {/* Responsibilities */}
                <h3 className="text-xl font-semibold text-theme-primary mb-3">Key Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>

                {/* Requirements */}
                <h3 className="text-xl font-semibold text-theme-primary mb-3">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>

                {/* Qualifications */}
                <h3 className="text-xl font-semibold text-theme-primary mb-3">Qualifications</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  {job.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>

                {/* Additional Information */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-theme-primary mb-3">Additional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Posted Date</p>
                      <p className="text-gray-700">{job.postedDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Application Deadline</p>
                      <p className="text-gray-700">{job.deadline}</p>
                    </div>
                    {job.salary && (
                      <div>
                        <p className="text-gray-500 text-sm">Salary</p>
                        <p className="text-gray-700">{job.salary}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-gray-500 text-sm">Job Type</p>
                      <p className="text-gray-700">{job.type}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-theme-primary mb-4">How to Apply</h2>
                <p className="text-gray-700 mb-4">
                  Interested candidates who meet the requirements are encouraged to apply by sending their CV, cover
                  letter, and relevant documents to{" "}
                  <span className="text-theme-red-light font-medium">careers@nbmc.edu.bd</span> with the subject line "
                  {job.id}: {job.title}".
                </p>
                <p className="text-gray-700 mb-6">
                  Alternatively, you can submit your application in person to the HR Department, North Bengal Medical
                  College, Rangpur Road, Sirajganj.
                </p>

                {job.pdfUrl && (
                  <div className="mt-6">
                    <a
                      href={job.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-theme-primary hover:bg-theme-primary-dark text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <FileText size={18} />
                      Download Job Circular (PDF)
                    </a>
                  </div>
                )}

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> Only shortlisted candidates will be contacted for the interview. North Bengal
                    Medical College is an equal opportunity employer.
                  </p>
                </div>
              </div>

              {/* Back to Careers */}
              <div className="mb-8">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 text-theme-primary hover:text-theme-red-light transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to All Job Openings
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Share Job */}
              <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-theme-primary mb-4">Share This Job</h3>
                <div className="flex gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5z"></path>
                      <path d="m7 15 5-5 5 5"></path>
                    </svg>
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Related Jobs */}
              {relatedJobs.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-theme-primary mb-4">Related Jobs</h3>
                  <RelatedJobs jobs={relatedJobs} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
