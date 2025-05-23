import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-theme-primary text-white pt-12 pb-4 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* College Info & Socail Links */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/logo-icon.svg"
                  alt="North Bengal Medical College"
                  width={44}
                  height={48}
                  className="w-auto h-12 bg-white p-1 mb-0.5"
                />
                <div className="text-xl font-bold leading-tight">
                  <div>NORTH BENGAL</div>
                  <div>MEDICAL COLLEGE</div>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                North Bengal Medical College is a private medical school in
                Bangladesh. The college started its academic activities in 2000
                in Dhanbandhi, Sirajganj. It is an affiliated college of
                Rajshahi University.
              </p>

              <div className="flex flex-wrap justify-start gap-4 mb-4">
                <Link
                  href="#"
                  className="p-2 bg-white/10 rounded hover:bg-gray-700"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-white/10 rounded hover:bg-gray-700"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <nav className="space-y-2">
                  <Link
                    href="/about"
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about/mission-and-vision"
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    Mission & Vission
                  </Link>
                  <Link
                    href="/about/basic-info"
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    Basic Information
                  </Link>
                  <Link
                    href="/departments"
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    Departments
                  </Link>
                  <Link
                    href="/academic"
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    Academic
                  </Link>
                </nav>
              </div>
              <div className="space-y-2 mt-[32px]">
                <Link
                  href="#"
                  className="block text-sm text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-300 hover:text-white"
                >
                  Our Process
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-300 hover:text-white"
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-300 hover:text-white"
                >
                  Departments
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-300 hover:text-white"
                >
                  Member
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+8801711-140535</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>nbmc_srj@yahoo.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>North Bengal Medial College, J. C. Road, <br />
                  Dhanbandi, Sirajganj, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-gray-600">
            <div className="text-center text-sm text-gray-400">
              Copyright {new Date().getFullYear()} NBMC. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
