import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const facilities = [
  {
    id: "modern-campus",
    title: "Modern Campus",
    description: "State-of-the-art campus with modern infrastructure and green surroundings",
    image: "/assets/images/placeholder.svg",
  },
  {
    id: "hostel-accommodation",
    title: "Hostel & Accommodation",
    description: "Comfortable and secure residential facilities for students",
    image: "/assets/images/placeholder.svg",
  },
  {
    id: "central-library",
    title: "Central Library",
    description: "Comprehensive library with extensive collection of medical literature",
    image: "/assets/images/placeholder.svg",
  },
  {
    id: "auditorium",
    title: "Auditorium",
    description: "Spacious auditorium for academic events and cultural activities",
    image: "/assets/images/placeholder.svg",
  },
  {
    id: "transport",
    title: "Transport",
    description: "Reliable transportation services for students and faculty",
    image: "/assets/images/placeholder.svg",
  },
  {
    id: "playground",
    title: "Play Ground",
    description: "Outdoor sports facilities for physical activities and recreation",
    image: "/assets/images/placeholder.svg",
  },
]

const FacilitiesPage = () => {
  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-slate-100">
        <div className="container mx-auto">
          {/* Intro Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-primary mb-6">Excellence in Infrastructure</h2>
            <p className="text-gray-700 text-lg">
              Our state-of-the-art facilities are designed to provide an optimal environment for learning, research, and
              healthcare. From modern classrooms and laboratories to specialized medical equipment and recreational
              spaces, we ensure that our students and faculty have access to the resources they need to excel.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="md:max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility) => (
                <Link
                  key={facility.id}
                  href={`/facilities/${facility.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={facility.image || "/assets/images/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-flex items-center gap-1 text-sm font-medium">
                        View Details <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-theme-primary mb-2 group-hover:text-theme-red-light transition-colors duration-300">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default FacilitiesPage