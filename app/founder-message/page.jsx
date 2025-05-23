import Image from "next/image"
import PageHeaderBigSub from '@/components/common/PageHeaderBigSub'
import { Home } from 'lucide-react'

export const metadata = {
    title: "Message From Founder | North Bengal Medical College",
    description:
      "Read the inspiring message from Professor Dr. M. A. Matin, the founder of North Bengal Medical College.",
}

const FounderMessage = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <PageHeaderBigSub
                title="Message From Founder"
                subtitle="The vision and inspiration behind North Bengal Medical College"
                breadcumbClass="text-white"
                paths={[
                    { name: <Home className='size-5' />, url: "/" },
                    { name: "Founder's Message", url: "" },
                ]}
            />

            {/* Founder Profile */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                    <div className="relative">
                        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl">
                        <Image
                            src="/assets/images/static/founder-square.jpg"
                            alt="Professor Dr. M. A. Matin"
                            width={960}
                            height={960}
                            className="object-cover w-full h-full"
                        />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-theme-primary text-white py-2 px-6 rounded-full text-lg font-semibold whitespace-nowrap">
                        1945 - 2010
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h2 className="text-2xl font-bold text-theme-primary">Professor Dr. M. A. Matin</h2>
                        <p className="text-theme-red-light font-medium">Founder, North Bengal Medical College</p>
                    </div>
                    </div>

                    <div className="md:w-2/3">
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border-l-4 border-theme-primary mb-8">
                        <p className="text-xl italic text-gray-700 leading-relaxed">
                        "Education is not just about imparting knowledge; it's about inspiring change, fostering compassion,
                        and building a community of healers who will serve humanity with dedication and excellence."
                        </p>
                        <p className="mt-4 text-right text-theme-primary font-semibold">— Professor Dr. M. A. Matin</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <h3 className="text-2xl font-bold text-theme-primary mb-4">Dear Students, Faculty, and Well-wishers,</h3>

                        <p className="text-gray-700 mb-4">
                        It is with great pride and humility that I welcome you to North Bengal Medical College, an institution
                        born from a vision to transform medical education and healthcare in the northern region of Bangladesh.
                        </p>

                        <p className="text-gray-700 mb-4">
                        When we laid the foundation of this college, we dreamed of creating not just a medical institution,
                        but a center of excellence that would nurture compassionate healers, innovative researchers, and
                        responsible citizens. Today, as I see the progress we have made, I am filled with gratitude for all
                        who have contributed to this journey.
                        </p>

                        <p className="text-gray-700 mb-4">
                        The path of medicine is both challenging and rewarding. It demands not only intellectual rigor but
                        also empathy, integrity, and a lifelong commitment to learning. At North Bengal Medical College, we
                        strive to instill these values in our students, preparing them not just for a career, but for a
                        calling.
                        </p>

                        <p className="text-gray-700 mb-4">
                        Our region has long faced disparities in healthcare access and quality. By establishing this
                        institution, we aimed to address these challenges by producing skilled medical professionals who
                        understand the unique health needs of our communities. I am proud to see our graduates serving with
                        distinction, bringing quality healthcare to those who need it most.
                        </p>

                        <p className="text-gray-700 mb-4">
                        To our students: Remember that the knowledge you gain here is a privilege and a responsibility. Use it
                        wisely to alleviate suffering, promote health, and uphold the dignity of every patient you serve.
                        </p>

                        <p className="text-gray-700 mb-4">
                        To our faculty: Your dedication to teaching, research, and mentorship shapes the future of healthcare.
                        Continue to inspire our students with your expertise and compassion.
                        </p>

                        <p className="text-gray-700 mb-4">
                        To our community partners and supporters: Your belief in our mission has been instrumental in our
                        growth. Together, we can continue to advance medical education and improve health outcomes in our
                        region.
                        </p>

                        <p className="text-gray-700 mb-6">
                        As we move forward, let us remain committed to our founding principles of excellence, equity, and
                        service. May North Bengal Medical College continue to be a beacon of hope and healing for generations
                        to come.
                        </p>

                        <div className="mt-8">
                        <p className="text-theme-primary font-semibold">With warm regards,</p>
                        {/* <Image
                            src="/placeholder.svg?height=80&width=200"
                            alt="Signature of Professor Dr. M. A. Matin"
                            width={200}
                            height={80}
                            className="my-2"
                        /> */}
                        <p className="font-bold text-theme-primary">Professor Dr. M. A. Matin</p>
                        <p className="text-gray-700">Founder, North Bengal Medical College</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </div>
    </>
  )
}

export default FounderMessage