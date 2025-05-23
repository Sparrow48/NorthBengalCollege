import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Phone, Mail, Clock, MapPin, Home } from "lucide-react"
import PageHeaderBigSub from "@/components/common/PageHeaderBigSub"

export const metadata = {
  title: "Contact Us | North Bengal Medical College",
  description:
    "Get in touch with North Bengal Medical College. Find our location, contact information, and department contacts.",
}

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <PageHeaderBigSub
            title="Contact Us"
            subtitle="Get in touch with North Bengal Medical College. We're here to answer your questions and provide assistance."
            breadcumbClass="text-white"
            paths={[
                { name: <Home className='size-5' />, url: "/" },
                { name: "Contact", url: "/contact" },
            ]}
          />
    
          {/* Main Contact Information */}
          <section className="py-16 px-4 md:px-8 bg-white">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-theme-primary mb-6">Get In Touch</h2>
                  <p className="text-gray-700 mb-8">
                    We welcome your inquiries and feedback. Please feel free to contact us using the information below, or
                    visit us during our office hours.
                  </p>
    
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-theme-primary/10 p-3 rounded-full">
                        <MapPin size={24} className="text-theme-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-theme-primary mb-1">Address</h3>
                        <p className="text-gray-700">
                          North Bengal Medical College
                          <br />
                          Rangpur Road, Sirajganj
                          <br />
                          Bangladesh
                        </p>
                      </div>
                    </div>
    
                    <div className="flex items-start gap-4">
                      <div className="bg-theme-primary/10 p-3 rounded-full">
                        <Phone size={24} className="text-theme-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-theme-primary mb-1">Phone</h3>
                        <p className="text-gray-700">+8801234567890</p>
                        <p className="text-gray-700">+8801234567891</p>
                      </div>
                    </div>
    
                    <div className="flex items-start gap-4">
                      <div className="bg-theme-primary/10 p-3 rounded-full">
                        <Mail size={24} className="text-theme-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-theme-primary mb-1">Email</h3>
                        <p className="text-gray-700">info@nbmc.edu.bd</p>
                        <p className="text-gray-700">admissions@nbmc.edu.bd</p>
                      </div>
                    </div>
    
                    <div className="flex items-start gap-4">
                      <div className="bg-theme-primary/10 p-3 rounded-full">
                        <Clock size={24} className="text-theme-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-theme-primary mb-1">Office Hours</h3>
                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-700">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="mt-8 flex gap-4">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-theme-primary/10 hover:bg-theme-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a3a5f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-theme-primary/10 hover:bg-theme-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a3a5f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-theme-primary/10 hover:bg-theme-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a3a5f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-theme-primary/10 hover:bg-theme-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="YouTube"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a3a5f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
    
                <div className="h-[400px] md:h-[500px] relative rounded-lg overflow-hidden shadow-lg">
                  {/* Replace with actual Google Maps iframe in production */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0071569903893!2d89.67373!3d24.4073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI0JzI2LjMiTiA4OcKwNDAnMjUuNCJF!5e0!3m2!1sen!2sbd!4v1636123456789!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="North Bengal Medical College Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
    
          {/* Department Contacts */}
          <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-theme-primary mb-12 text-center">Department Contacts</h2>
    
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-4">Admissions Office</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-theme-red-light" />
                      <span>+8801234567892</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-theme-red-light" />
                      <span>admissions@nbmc.edu.bd</span>
                    </p>
                    <p className="text-sm mt-2">
                      For inquiries related to admission procedures, eligibility criteria, and application status.
                    </p>
                  </div>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-4">Academic Affairs</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-theme-red-light" />
                      <span>+8801234567893</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-theme-red-light" />
                      <span>academic@nbmc.edu.bd</span>
                    </p>
                    <p className="text-sm mt-2">
                      For matters related to curriculum, examinations, academic calendar, and faculty inquiries.
                    </p>
                  </div>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-4">Hospital Services</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-theme-red-light" />
                      <span>+8801234567894</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-theme-red-light" />
                      <span>hospital@nbmc.edu.bd</span>
                    </p>
                    <p className="text-sm mt-2">
                      For patient services, appointments, medical records, and hospital-related inquiries.
                    </p>
                  </div>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-4">Student Affairs</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-theme-red-light" />
                      <span>+8801234567895</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-theme-red-light" />
                      <span>studentaffairs@nbmc.edu.bd</span>
                    </p>
                    <p className="text-sm mt-2">
                      For student services, extracurricular activities, counseling, and accommodation inquiries.
                    </p>
                  </div>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-4">Research & Development</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-theme-red-light" />
                      <span>+8801234567896</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-theme-red-light" />
                      <span>research@nbmc.edu.bd</span>
                    </p>
                    <p className="text-sm mt-2">
                      For research collaborations, grants, publications, and academic projects.
                    </p>
                  </div>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-4">Administration</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-theme-red-light" />
                      <span>+8801234567897</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-theme-red-light" />
                      <span>admin@nbmc.edu.bd</span>
                    </p>
                    <p className="text-sm mt-2">
                      For administrative matters, human resources, facilities management, and general inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Visit Us Section */}
          {/* <section className="py-16 px-4 md:px-8 bg-white">
            <div className="container mx-auto">
              <div className="bg-gradient-to-r from-theme-primary to-theme-primary-dark rounded-2xl overflow-hidden shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-8 md:p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
                    <p className="text-white/80 mb-6">
                      We invite you to visit our campus and experience the facilities, environment, and community firsthand.
                      Our staff will be happy to show you around and answer any questions you may have.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="mt-1 text-white/60" />
                        <div>
                          <h3 className="font-semibold">Location</h3>
                          <p className="text-white/80">
                            North Bengal Medical College is located in Sirajganj, approximately 150 km northwest of Dhaka.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={20} className="mt-1 text-white/60" />
                        <div>
                          <h3 className="font-semibold">Campus Tour Hours</h3>
                          <p className="text-white/80">Monday - Thursday: 10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/campus-tour"
                        className="inline-block bg-white text-theme-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
                      >
                        Take a Virtual Tour
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative min-h-[300px]">
                    <Image src="/placeholder.svg?height=600&width=800" alt="NBMC Campus" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
    
          {/* FAQ Section */}
          {/* <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-theme-primary mb-12 text-center">Frequently Asked Questions</h2>
    
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-2">How can I apply for admission?</h3>
                  <p className="text-gray-700">
                    You can apply for admission by visiting our Admissions page, where you'll find detailed information
                    about the application process, eligibility criteria, and required documents. For specific inquiries,
                    please contact our Admissions Office.
                  </p>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-2">What are the visiting hours for patients?</h3>
                  <p className="text-gray-700">
                    Patient visiting hours at our teaching hospital are from 4:00 PM to 6:00 PM daily. Special arrangements
                    can be made for critical cases by contacting the nursing station of the respective ward.
                  </p>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-2">How can I request academic transcripts?</h3>
                  <p className="text-gray-700">
                    To request academic transcripts, please submit a written application to the Academic Affairs office
                    along with the required fee. Processing typically takes 7-10 working days. For urgent requests, please
                    contact the Academic Affairs office directly.
                  </p>
                </div>
    
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-theme-primary mb-2">Is accommodation available for students?</h3>
                  <p className="text-gray-700">
                    Yes, we provide separate hostel facilities for male and female students. Accommodation is allocated
                    based on availability and distance from hometown. For details about hostel facilities, fees, and
                    application process, please contact the Student Affairs office.
                  </p>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      )
}

export default ContactPage