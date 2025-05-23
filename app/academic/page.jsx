import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const academics = [
  {
    id: "mbbs-course",
    title: "MBBS Curriculum",
    description: "Detailed information about the MBBS course at North Bengal Medical College",
    image: "/assets/images/placeholder.svg",
    url: "/curriculum",
  },
  {
    id: "admission",
    title: "Admission",
    description: "Admission process for new students and international students",
    image: "/assets/images/placeholder.svg",
    url: "/admission",
  },
  {
    id: "notices",
    title: "Notices",
    description: "Important notices of North Bengal Medical College",
    image: "/assets/images/placeholder.svg",
    url: "/notices",
  },
  {
    id: "campus-tour",
    title: "Campus Tour",
    description: "See a glimpse of the campus and its surroundings",
    image: "/assets/images/placeholder.svg",
    url: "/campus-tour",
  }
]

const AcademicPage = () => {
  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-slate-100">
        <div className="container mx-auto">
          {/* Intro Section */}
          {/* <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-primary mb-6">Excellence in Infrastructure</h2>
            <p className="text-gray-700 text-lg">
              Our state-of-the-art facilities are designed to provide an optimal environment for learning, research, and
              healthcare. From modern classrooms and laboratories to specialized medical equipment and recreational
              spaces, we ensure that our students and faculty have access to the resources they need to excel.
            </p>
          </div> */}

          {/* Academics Grid */}
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {academics.map((academic) => (
                <Link
                  key={academic.id}
                  href={`${academic?.url}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={academic.image || "/assets/images/placeholder.svg"}
                      alt={academic.title}
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
                      {academic.title}
                    </h3>
                    <p className="text-gray-600">{academic.description}</p>
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

export default AcademicPage