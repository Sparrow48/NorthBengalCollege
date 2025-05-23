import Link from "next/link"
import { Calendar, Briefcase } from "lucide-react"

export default function RelatedJobs({ jobs }) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Link
          key={job.id}
          href={`/careers/${job.id}`}
          className="block p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h4 className="font-semibold text-theme-primary hover:text-theme-red-light transition-colors mb-2">{job.title}</h4>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Briefcase size={14} className="mr-1 text-gray-400" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1 text-gray-400" />
              <span>Deadline: {job.deadline}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
