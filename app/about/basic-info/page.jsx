import Image from "next/image"
import PageHeader from '@/components/common/PageHeader';
import { Home } from "lucide-react"

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import CTASection from "@/components/common/CTASection";

const BasicInfoPage = () => {
    return (
        <>
            {/* Page Header */}
            <PageHeader
                className={"text-white md:min-h-60 bg-cover bg-no-repeat flex items-center"}
                titleClass="text-4xl md:text-6xl"
                breadcumbClass="text-white"
                title={"Basic Information"}
                style={{
                    backgroundImage: `url('${PageHeaderBanner?.src}')`,
                }}
                paths={[
                    { name: <Home className='size-5' />, url: "/" },
                    { name: "About", url: "/about" },
                    { name: "Basic Info", url: "" },
                ]}
            />

            {/* Basic Information Content */}
            <section className="py-12 px-4 md:px-8 bg-slate-200">
                <div className="container mx-auto">
                    {/* College Information */}
                    <div className="mb-16 bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="bg-theme-primary text-white  px-6 py-3">
                            <h2 className="text-2xl font-bold">College Information</h2>
                            <p className="text-white/70 mt-1">General details about North Bengal Medical College</p>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Name of the Institution</h3>
                                        <p className="text-gray-700 text-lg">North Bengal Medical College</p>
                                    </div>

                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Year of Establishment</h3>
                                        <p className="text-gray-700 text-lg">1992</p>
                                    </div>

                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Type of Institution</h3>
                                        <p className="text-gray-700 text-lg">Private Medical College</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Affiliated University</h3>
                                        <p className="text-gray-700 text-lg">University of Rajshahi</p>
                                    </div>

                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Recognized by</h3>
                                        <p className="text-gray-700 text-lg">Bangladesh Medical and Dental Council (BMDC)</p>
                                    </div>

                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Campus Area</h3>
                                        <p className="text-gray-700 text-lg">25 acres</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Academic Information */}
                    <div className="mb-16 bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="bg-theme-primary text-white px-6 py-3">
                            <h2 className="text-2xl font-bold">Academic Information</h2>
                            <p className="text-white/70 mt-1">Details about our educational programs</p>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-primary/10 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
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
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Programs Offered</h3>
                                        <p className="text-gray-700">MBBS (Bachelor of Medicine and Bachelor of Surgery)</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-primary/10 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1a3a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Duration of MBBS Program</h3>
                                        <p className="text-gray-700">5 years followed by 1 year of internship</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-primary/10 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
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
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Medium of Instruction</h3>
                                        <p className="text-gray-700">English</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-primary/10 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1a3a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Annual Intake</h3>
                                        <p className="text-gray-700">100 students</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-primary/10 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1a3a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Academic Calendar</h3>
                                        <p className="text-gray-700">January to December</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="mb-16 bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="bg-theme-red-light text-white  px-6 py-3">
                            <h2 className="text-2xl font-bold">Facilities</h2>
                            <p className="text-white/70 mt-1">State-of-the-art infrastructure and amenities</p>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Teaching Hospital</h3>
                                        <p className="text-gray-700">500-bed teaching hospital with modern facilities</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Library</h3>
                                        <p className="text-gray-700">Comprehensive library with over 10,000 books and journals</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Laboratories</h3>
                                        <p className="text-gray-700">Well-equipped laboratories for all basic science subjects</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                            <line x1="8" y1="21" x2="16" y2="21"></line>
                                            <line x1="12" y1="17" x2="12" y2="21"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Computer Lab</h3>
                                        <p className="text-gray-700">Modern computer lab with internet facilities</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                            <line x1="8" y1="2" x2="8" y2="18"></line>
                                            <line x1="16" y1="6" x2="16" y2="22"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Lecture Halls</h3>
                                        <p className="text-gray-700">Air-conditioned lecture halls with audiovisual facilities</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Accommodation</h3>
                                        <p className="text-gray-700">Separate hostels for male and female students</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Sports Facilities</h3>
                                        <p className="text-gray-700">Indoor and outdoor sports facilities</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-theme-red-light/10 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#d10a43"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                                            <line x1="6" y1="1" x2="6" y2="4"></line>
                                            <line x1="10" y1="1" x2="10" y2="4"></line>
                                            <line x1="14" y1="1" x2="14" y2="4"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Cafeteria</h3>
                                        <p className="text-gray-700">Modern cafeteria serving nutritious meals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Administration */}
                    <div className="mb-16 bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="bg-theme-primary text-white  px-6 py-3">
                            <h2 className="text-2xl font-bold">Administration</h2>
                            <p className="text-white/70 mt-1">Leadership and management team</p>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                                    <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1a3a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h3 className="text-theme-primary font-semibold mb-1">Principal</h3>
                                    <p className="text-gray-700">Professor Dr. [Principal's Name]</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                                    <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1a3a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h3 className="text-theme-primary font-semibold mb-1">Vice Principal</h3>
                                    <p className="text-gray-700">Professor Dr. [Vice Principal's Name]</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                                    <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1a3a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h3 className="text-theme-primary font-semibold mb-1">Academic Coordinator</h3>
                                    <p className="text-gray-700">Professor Dr. [Academic Coordinator's Name]</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                                    <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1a3a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h3 className="text-theme-primary font-semibold mb-1">Administrative Officer</h3>
                                    <p className="text-gray-700">Mr. [Administrative Officer's Name]</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="bg-theme-red-light text-white  px-6 py-3">
                            <h2 className="text-2xl font-bold">Contact Information</h2>
                            <p className="text-white/70 mt-1">How to reach North Bengal Medical College</p>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/2">
                                    <Image
                                        src="https://picsum.photos/400/250"
                                        alt="College Map Location"
                                        width={400}
                                        height={250}
                                        className="rounded-lg shadow-sm w-full h-auto"
                                    />
                                </div>

                                <div className="md:w-1/2 space-y-6">
                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Address</h3>
                                        <p className="text-gray-700">
                                            North Bengal Medical College
                                            <br />
                                            Rangpur Road, Sirajganj
                                            <br />
                                            Bangladesh
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Phone</h3>
                                        <p className="text-gray-700">+8801234567890</p>
                                    </div>

                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Email</h3>
                                        <p className="text-gray-700">info@nbmc.edu.bd</p>
                                    </div>

                                    <div>
                                        <h3 className="text-theme-primary font-semibold mb-1">Website</h3>
                                        <p className="text-gray-700">www.nbmc.edu.bd</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CTASection className="rounded-lg mt-16" />
                </div>
            </section>
        </>
    )
}

export default BasicInfoPage