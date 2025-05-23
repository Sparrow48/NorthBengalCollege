import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import PageHeaderBigSub from "@/components/common/PageHeaderBigSub"

export const metadata = {
  title: "Curriculum | North Bengal Medical College",
  description: "Learn about the MBBS curriculum at North Bengal Medical College",
}

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <PageHeaderBigSub
            title="MBBS Curriculum"
            subtitle="A comprehensive medical education program designed to produce competent and compassionate physicians"
            breadcumbClass="text-white"
            paths={[
                { name: <Home className='size-5' />, url: "/" },
                { name: "Academic", url: "/academic" },
                { name: "Curriculum", url: "" },
            ]}
        />

        {/* Overview Section */}
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-theme-primary mb-6">Program Overview</h2>
                <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                    The MBBS program at North Bengal Medical College is a five-year undergraduate medical degree followed by
                    a one-year compulsory internship. The curriculum follows the guidelines prescribed by the Bangladesh
                    Medical and Dental Council (BMDC) and is designed to provide students with a strong foundation in basic
                    medical sciences, clinical knowledge, and practical skills.
                </p>
                <p className="text-gray-700">
                    Our curriculum emphasizes a holistic approach to medical education, integrating theoretical knowledge
                    with clinical exposure from the early years. Students benefit from small group learning, problem-based
                    approaches, and extensive clinical rotations in our teaching hospital.
                </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-theme-primary mb-2">Program Duration</h3>
                    <p className="text-gray-700">5 years + 1 year internship</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-theme-primary mb-2">Medium of Instruction</h3>
                    <p className="text-gray-700">English</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-theme-primary mb-2">Degree Awarded</h3>
                    <p className="text-gray-700">Bachelor of Medicine and Bachelor of Surgery (MBBS)</p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Curriculum Structure */}
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-theme-primary mb-8 text-center">Curriculum Structure</h2>

            <div className="space-y-8">
                {/* Phase 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-theme-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    1
                    </div>
                    <h3 className="text-xl font-bold text-theme-primary">Phase I: Pre-Clinical (Year 1-2)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                    The first two years focus on basic medical sciences, providing the foundation for understanding human
                    body structure and function in health and disease.
                </p>
                <div className="mt-4">
                    <h4 className="font-semibold text-theme-primary mb-2">Key Subjects:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Anatomy</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Physiology</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Biochemistry</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Community Medicine</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Behavioral Science</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Medical Ethics</span>
                    </li>
                    </ul>
                </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-theme-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    2
                    </div>
                    <h3 className="text-xl font-bold text-theme-primary">Phase II: Para-Clinical (Year 3)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                    The third year bridges basic sciences with clinical medicine, focusing on the causes and mechanisms of
                    disease and the principles of pharmacology.
                </p>
                <div className="mt-4">
                    <h4 className="font-semibold text-theme-primary mb-2">Key Subjects:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Pathology</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Microbiology</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Pharmacology</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Forensic Medicine</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Community Medicine</span>
                    </li>
                    </ul>
                </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-theme-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    3
                    </div>
                    <h3 className="text-xl font-bold text-theme-primary">Phase III: Clinical (Year 4-5)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                    The final two years focus on clinical subjects with extensive rotations in various departments of the
                    teaching hospital, developing diagnostic and therapeutic skills.
                </p>
                <div className="mt-4">
                    <h4 className="font-semibold text-theme-primary mb-2">Key Subjects:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Medicine & Allied Specialties</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Surgery & Allied Specialties</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Obstetrics & Gynecology</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Pediatrics</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Psychiatry</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Community Medicine</span>
                    </li>
                    </ul>
                </div>
                </div>

                {/* Internship */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-theme-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    4
                    </div>
                    <h3 className="text-xl font-bold text-theme-primary">Internship (1 Year)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                    After completing the five-year MBBS program, students undergo a mandatory one-year rotating internship
                    in various departments of the teaching hospital.
                </p>
                <div className="mt-4">
                    <h4 className="font-semibold text-theme-primary mb-2">Rotations Include:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Medicine (3 months)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Surgery (3 months)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Obstetrics & Gynecology (2 months)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Pediatrics (1 month)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Emergency Medicine (1 month)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-theme-red-light rounded-full"></span>
                        <span className="text-gray-700">Rural Health (2 months)</span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Teaching & Assessment */}
        <section className="py-12 px-4 md:px-8 bg-white">
            <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h2 className="text-2xl font-bold text-theme-primary mb-6">Teaching Methods</h2>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Lectures:</span> Traditional classroom teaching by
                        experienced faculty
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Small Group Discussions:</span> Interactive
                        learning in small groups
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Problem-Based Learning:</span> Case-based approach
                        to develop clinical reasoning
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Laboratory Work:</span> Hands-on practical sessions
                        in well-equipped labs
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Clinical Rotations:</span> Supervised patient care
                        in hospital settings
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Simulation-Based Training:</span> Practice in
                        controlled environments
                        </p>
                    </div>
                    </li>
                </ul>
                </div>

                <div>
                <h2 className="text-2xl font-bold text-theme-primary mb-6">Assessment Methods</h2>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Formative Assessments:</span> Regular feedback
                        throughout the course
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Summative Examinations:</span> End-of-term and
                        professional exams
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Written Tests:</span> MCQs, short answers, and
                        essay questions
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Practical Examinations:</span> Laboratory and
                        clinical skills assessment
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">OSCE:</span> Objective Structured Clinical
                        Examinations
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="mt-1 text-theme-red-light">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-700">
                        <span className="font-semibold text-theme-primary">Viva Voce:</span> Oral examinations by internal and
                        external examiners
                        </p>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 md:px-8 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-theme-primary to-theme-primary-dark rounded-xl overflow-hidden shadow-lg">
                <div className="p-8 md:p-10 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Medical Journey?</h2>
                <p className="text-white/80 mb-6">
                    Join North Bengal Medical College and embark on a rewarding career in medicine. Our comprehensive
                    curriculum and supportive learning environment will prepare you for excellence in healthcare.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link
                    href="/admission"
                    className="bg-white text-theme-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
                    >
                    Apply for Admission
                    </Link>
                    <Link
                    href="/contact"
                    className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
                    >
                    Contact Us
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default page