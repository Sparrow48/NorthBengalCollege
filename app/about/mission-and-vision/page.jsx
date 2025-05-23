import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png'
import PageHeader from "@/components/common/PageHeader"

const MissionVisionPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Page Header */}
        <PageHeader
          className={"text-white md:min-h-60 bg-cover bg-no-repeat flex items-center"}
          titleClass="text-4xl md:text-6xl"
          breadcumbClass="text-white"
          title={"Mission & Vision"}
          style={{
              backgroundImage: `url('${PageHeaderBanner?.src}')`,
          }}
          paths={[
              { name: <Home className='size-5' />, url: "/" },
              { name: "About", url: "/about" },
              { name: "Mission & Vision", url: "" },
          ]}
      />

        {/* Mission & Vision Content */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="container mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-theme-primary mb-6 inline-block border-b-4 border-theme-red-light pb-2">
                Our Vision
              </h2>

              <p className="text-gray-700 mb-4">
                To be a center of excellence in medical education, healthcare services, and research that contributes
                significantly to the improvement of health standards in Bangladesh and beyond.
              </p>

              <p className="text-gray-700 mb-4">We envision North Bengal Medical College as an institution that:</p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Produces competent medical professionals who are not only skilled in their field but also compassionate,
                  ethical, and committed to serving humanity.
                </li>
                <li>
                  Serves as a hub for innovative medical research that addresses local and global health challenges.
                </li>
                <li>
                  Provides exemplary healthcare services that are accessible, affordable, and of the highest quality.
                </li>
                <li>Contributes to health policy development and implementation at regional and national levels.</li>
                <li>
                  Establishes itself as a leading medical institution recognized nationally and internationally for its
                  academic excellence and healthcare services.
                </li>
              </ul>

              <p className="text-gray-700">
                Through this vision, we aim to transform healthcare education and delivery in Bangladesh, particularly in
                the northern region, and make a lasting impact on the health and wellbeing of the communities we serve.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-theme-primary mb-6 inline-block border-b-4 border-theme-red-light pb-2">
                Our Mission
              </h2>

              <p className="text-gray-700 mb-4">
                The mission of North Bengal Medical College is to provide high-quality medical education that meets
                international standards while being responsive to local healthcare needs.
              </p>

              <p className="text-gray-700 mb-4">We are committed to:</p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Delivering a comprehensive medical curriculum that integrates basic sciences, clinical skills, and
                  community health perspectives.
                </li>
                <li>
                  Fostering a learning environment that encourages critical thinking, problem-solving, and lifelong
                  learning.
                </li>
                <li>
                  Providing students with hands-on clinical experience through our affiliated teaching hospital and
                  community health programs.
                </li>
                <li>
                  Promoting research and scholarly activities among faculty and students to advance medical knowledge and
                  improve healthcare practices.
                </li>
                <li>
                  Instilling in our students the values of professionalism, ethics, compassion, and social responsibility.
                </li>
                <li>
                  Collaborating with other educational institutions, healthcare organizations, and government agencies to
                  enhance medical education and healthcare delivery.
                </li>
                <li>
                  Serving the community through outreach programs, health education, and preventive care initiatives.
                </li>
              </ul>

              <p className="text-gray-700">
                Through this mission, we strive to contribute to the development of a healthcare system that is effective,
                equitable, and responsive to the needs of all citizens, particularly those in underserved areas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-theme-primary mb-6 inline-block border-b-4 border-theme-red-light pb-2">
                Core Values
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-theme-primary mb-2">Excellence</h3>
                  <p className="text-gray-700 mb-4">
                    We strive for excellence in all aspects of our work, from teaching and research to patient care and
                    community service.
                  </p>

                  <h3 className="text-lg font-semibold text-theme-primary mb-2">Integrity</h3>
                  <p className="text-gray-700 mb-4">
                    We uphold the highest standards of honesty, transparency, and ethical conduct in all our activities.
                  </p>

                  <h3 className="text-lg font-semibold text-theme-primary mb-2">Compassion</h3>
                  <p className="text-gray-700">
                    We approach our work with empathy, respect, and a genuine concern for the wellbeing of our students,
                    patients, and community.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-theme-primary mb-2">Innovation</h3>
                  <p className="text-gray-700 mb-4">
                    We encourage creativity, critical thinking, and the pursuit of new knowledge and approaches to
                    healthcare education and delivery.
                  </p>

                  <h3 className="text-lg font-semibold text-theme-primary mb-2">Collaboration</h3>
                  <p className="text-gray-700 mb-4">
                    We value teamwork, partnership, and the sharing of knowledge and resources to achieve common goals.
                  </p>

                  <h3 className="text-lg font-semibold text-theme-primary mb-2">Social Responsibility</h3>
                  <p className="text-gray-700">
                    We are committed to serving the community and addressing the healthcare needs of all citizens,
                    particularly those who are underserved or marginalized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MissionVisionPage