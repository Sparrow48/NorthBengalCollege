"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Calendar, Briefcase, Clock, ChevronRight } from "lucide-react"
import CustomPagination from "@/components/common/CustomPagination"

const JobListings = ({
    jobs,
    totalPages,
    currentPage,
    departments,
    selectedDepartment,
  }) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleDepartmentChange = (department) => {
        const params = new URLSearchParams(searchParams)
        if (department === "all") {
        params.delete("department")
        } else {
        params.set("department", department)
        }
        params.delete("page") // Reset to first page when changing department
        router.push(`/careers?${params.toString()}`, { scroll: false })
    }

  return (
    <div>
      {/* Department Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => handleDepartmentChange("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedDepartment === "all" ? "bg-theme-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Departments
          </button>
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => handleDepartmentChange(department)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDepartment === department
                  ? "bg-theme-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {department}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards */}
      {jobs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      job.isUrgent ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {job.isUrgent ? "Urgent Hiring" : job.type}
                  </span>
                  <span className="text-xs text-gray-500">Job ID: {job.id}</span>
                </div>

                <h3 className="text-xl font-bold text-theme-primary mb-2 group-hover:text-theme-red-light transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{job.shortDescription}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Briefcase size={16} className="mr-2 text-gray-400" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    <span>Deadline: {job.deadline}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock size={16} className="mr-2 text-gray-400" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <div className="flex items-center text-theme-red-light font-medium text-sm">
                  View Details
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">No job openings found for the selected department.</p>
          <button
            onClick={() => handleDepartmentChange("all")}
            className="mt-4 text-theme-primary hover:text-theme-red-light font-medium"
          >
            View all departments
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && <CustomPagination totalPages={totalPages} currentPage={currentPage} />}
    </div>
  )
}

export default JobListings