import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import CampusIcon from '@/assets/images/banner/campus.png'
import PageHeader from "@/components/common/PageHeader"

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png'
import CTASection from "@/components/common/CTASection"

const AboutPage = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <PageHeader
          className={"text-white md:min-h-60 bg-cover bg-no-repeat flex items-center"}
          titleClass="text-4xl md:text-6xl"
          breadcumbClass="text-white"
          title={"About Us"}
          style={{
              backgroundImage: `url('${PageHeaderBanner?.src}')`,
          }}
          paths={[
              { name: <Home className='size-5' />, url: "/" },
              { name: "About", url: "/about" },
              // { name: "Mission & Vision", url: "" },
          ]}
      />

      {/* About Content */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-theme-primary mb-6">North Bengal Medical College</h2>

              <p className="text-gray-700 mb-4">
                North Bengal Medical College (NBMC) is a premier medical institution established to provide quality
                medical education in the northern region of Bangladesh. The college offers a comprehensive five-year
                MBBS program followed by a one-year internship, designed to produce competent and compassionate medical
                professionals.
              </p>

              <p className="text-gray-700 mb-4">
                The college is affiliated with the University of Rajshahi and recognized by the Bangladesh Medical and
                Dental Council (BMDC). Our curriculum integrates theoretical knowledge with practical clinical
                experience, ensuring that our graduates are well-prepared to meet the healthcare challenges of today and
                tomorrow.
              </p>

              <p className="text-gray-700 mb-4">
                At NBMC, we pride ourselves on our state-of-the-art facilities, including modern lecture halls,
                well-equipped laboratories, a comprehensive library, and a teaching hospital that provides students with
                valuable clinical exposure. Our faculty comprises experienced medical professionals who are dedicated to
                excellence in teaching and research.
              </p>

              <p className="text-gray-700">
                The college maintains a student-centered approach to education, with small class sizes that allow for
                personalized attention and mentoring. We also emphasize the importance of ethics, professionalism, and
                social responsibility in medical practice, preparing our students to become not just skilled physicians
                but also compassionate healers and responsible citizens.
              </p>
            </div>

            <div>
              <Image
                src={CampusIcon}
                alt="North Bengal Medical College Campus"
                width={1038}
                height={968}
                className="rounded-lg max-w-full mx-auto"
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-theme-primary mb-4">Our Educational Approach</h3>

            <p className="text-gray-700 mb-4">
              The MBBS program at North Bengal Medical College follows the curriculum prescribed by the Bangladesh
              Medical and Dental Council, with additional emphasis on clinical skills, research methodology, and
              community health. The program is structured to provide a strong foundation in basic medical sciences in
              the early years, followed by intensive clinical training in the later years.
            </p>

            <p className="text-gray-700 mb-4">
              Our teaching methodology combines traditional lectures with problem-based learning, small group
              discussions, and clinical case presentations. Students also participate in research projects under the
              guidance of faculty members, developing critical thinking and analytical skills essential for
              evidence-based medical practice.
            </p>

            <p className="text-gray-700 mb-4">
              The college organizes regular seminars, workshops, and conferences to expose students to the latest
              developments in medical science and healthcare. We also encourage participation in extracurricular
              activities, including sports, cultural events, and community service, to promote holistic development.
            </p>

            <p className="text-gray-700">
              Upon graduation, our students are well-prepared for postgraduate studies, clinical practice, research, or
              public health careers. Many of our alumni have gone on to distinguished careers in various medical
              specialties, both in Bangladesh and abroad, contributing significantly to healthcare and medical
              education.
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <Link
              href="/about/mission-and-vision"
              className="bg-theme-primary hover:bg-theme-primary-dark text-white px-6 py-3 rounded-md transition flex items-center gap-2"
            >
              Our Mission & Vision
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/about/basic-info"
              className="bg-theme-red-light hover:bg-theme-red-dark text-white px-6 py-3 rounded-md transition flex items-center gap-2"
            >
              Basic Information
              <ChevronRight size={18} />
            </Link>
          </div>

          <CTASection className="rounded-lg mt-16" />
        </div>
      </section>
    </div>    
    </>
  )
}

export default AboutPage