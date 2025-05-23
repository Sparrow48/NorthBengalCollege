import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft, Home } from 'lucide-react';
import { notFound } from 'next/navigation';

import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import PageHeader from '@/components/common/PageHeader';

// This would typically come from a database or API
const facilitiesData = {
  'modern-campus': {
    title: 'Modern Campus',
    heroImage: '/placeholder.svg?height=600&width=1200',
    description:
      'Our modern campus spans over 25 acres of lush greenery, providing an ideal environment for academic excellence and personal growth. The campus features contemporary architecture, spacious classrooms, and state-of-the-art facilities designed to enhance the learning experience.',
    features: [
      {
        title: 'Eco-Friendly Design',
        description:
          'Our campus is designed with sustainability in mind, featuring energy-efficient buildings, rainwater harvesting systems, and extensive green spaces.',
        icon: 'leaf',
      },
      {
        title: 'Advanced Infrastructure',
        description:
          'The campus is equipped with modern infrastructure including high-speed internet, backup power systems, and smart classrooms.',
        icon: 'building',
      },
      {
        title: 'Accessibility',
        description:
          'All buildings and facilities are designed to be accessible to everyone, with ramps, elevators, and other accommodations.',
        icon: 'accessibility',
      },
    ],
    gallery: [
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Main Academic Building',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Campus Gardens',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Student Center',
      },
    ],
    details:
      'High standard of health care with updated diagnostic and service facilities are available in the attached teaching hospital KYAMCH. It has modern teaching and research facilities in all the required subjects as well as the super-specialized Cardiology, Cardio-thoracic, Urology, Neurosurgery and Oncology in particular. The hospital is also having a number of clean Operation Theaters with central air-conditioning both in inpatient and outpatient departments.',
  },
  'hostel-accommodation': {
    title: 'Hostel & Accommodation',
    heroImage: '/placeholder.svg?height=600&width=1200',
    description:
      'Our hostel facilities provide a comfortable and secure living environment for students. Separate hostels for male and female students are available, with a range of amenities to ensure a pleasant stay during their academic journey.',
    features: [
      {
        title: 'Secure Environment',
        description:
          '24/7 security, CCTV surveillance, and controlled access ensure the safety of all residents.',
        icon: 'shield',
      },
      {
        title: 'Comfortable Living',
        description:
          'Well-furnished rooms with essential furniture, adequate lighting, and proper ventilation for a comfortable stay.',
        icon: 'bed',
      },
      {
        title: 'Modern Amenities',
        description:
          'Access to high-speed internet, common rooms with TV, dining facilities, and laundry services.',
        icon: 'wifi',
      },
    ],
    gallery: [
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Hostel Building',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Student Room',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Common Area',
      },
    ],
    details:
      'Our hostels are designed to provide a home away from home for our students. Each hostel has a dedicated warden and support staff to address the needs and concerns of the residents. Regular maintenance ensures that the facilities remain in excellent condition. The hostels are located within the campus, providing easy access to academic buildings, library, and other facilities.',
  },
  'central-library': {
    title: 'Central Library',
    heroImage: '/placeholder.svg?height=600&width=1200',
    description:
      'The Central Library is the intellectual heart of our institution, housing a vast collection of medical literature, journals, and digital resources. It provides a conducive environment for study, research, and academic exploration.',
    features: [
      {
        title: 'Extensive Collection',
        description:
          'Over 10,000 books, journals, and reference materials covering all aspects of medical science and related fields.',
        icon: 'book',
      },
      {
        title: 'Digital Resources',
        description:
          'Access to online databases, e-journals, and digital archives for comprehensive research capabilities.',
        icon: 'database',
      },
      {
        title: 'Study Environment',
        description:
          'Quiet reading areas, discussion rooms, and computer workstations for individual and group study.',
        icon: 'lamp',
      },
    ],
    gallery: [
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Library Building',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Reading Area',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Digital Resource Center',
      },
    ],
    details:
      'Our library operates from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 5:00 PM on weekends, providing ample time for students to utilize its resources. The library staff includes professional librarians who assist students and faculty in finding and accessing the resources they need. Regular updates to the collection ensure that the latest medical literature is available to our community.',
  },
  auditorium: {
    title: 'Auditorium',
    heroImage: '/placeholder.svg?height=600&width=1200',
    description:
      'The Auditorium is a state-of-the-art venue for academic events, conferences, cultural activities, and other gatherings. With a seating capacity of 500, it serves as the primary space for large-scale events at our institution.',
    features: [
      {
        title: 'Advanced Acoustics',
        description:
          'Designed with optimal acoustics for clear sound projection and minimal echo, ensuring an excellent auditory experience.',
        icon: 'music',
      },
      {
        title: 'Multimedia Capabilities',
        description:
          'Equipped with high-definition projectors, sound systems, and lighting for presentations and performances.',
        icon: 'video',
      },
      {
        title: 'Comfortable Seating',
        description:
          'Ergonomically designed seats with adequate spacing for comfort during long events.',
        icon: 'armchair',
      },
    ],
    gallery: [
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Auditorium Exterior',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Seating Area',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Stage and Presentation Area',
      },
    ],
    details:
      'The auditorium hosts a variety of events throughout the academic year, including orientation programs, graduation ceremonies, scientific conferences, and cultural performances. The venue is also available for departmental events and student activities, fostering a vibrant campus community.',
  },
  transport: {
    title: 'Transport',
    heroImage: '/placeholder.svg?height=600&width=1200',
    description:
      'Our transport service provides reliable and convenient transportation for students, faculty, and staff. With a fleet of modern vehicles and experienced drivers, we ensure safe and timely travel between various locations.',
    features: [
      {
        title: 'Regular Schedules',
        description:
          'Fixed schedules for routes covering key areas, ensuring timely arrival and departure.',
        icon: 'clock',
      },
      {
        title: 'Safe Travel',
        description:
          'Well-maintained vehicles with experienced drivers and safety features for secure transportation.',
        icon: 'shield-check',
      },
      {
        title: 'Convenience',
        description:
          'Multiple pickup and drop-off points to accommodate the needs of our community members.',
        icon: 'map-pin',
      },
    ],
    gallery: [
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'College Bus',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Transport Schedule Board',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Bus Stop Area',
      },
    ],
    details:
      'Our transport service operates daily, with special arrangements for weekends and holidays. The service covers routes to major residential areas, hospitals, and other important locations. Students can purchase monthly passes at subsidized rates, making it an economical option for regular commuters. The transport department also arranges special vehicles for educational trips, field visits, and other off-campus activities.',
  },
  playground: {
    title: 'Play Ground',
    heroImage: '/placeholder.svg?height=600&width=1200',
    description:
      'Our playground provides excellent facilities for various sports and outdoor activities. It serves as a venue for physical education, recreational sports, and competitive events, promoting physical fitness and team spirit among our students.',
    features: [
      {
        title: 'Multiple Sports Facilities',
        description:
          'Fields and courts for cricket, football, basketball, volleyball, and other sports.',
        icon: 'trophy',
      },
      {
        title: 'Well-Maintained Grounds',
        description:
          'Regularly maintained grounds with proper drainage systems for year-round usability.',
        icon: 'scissors',
      },
      {
        title: 'Outdoor Fitness Area',
        description:
          'Dedicated space with exercise equipment for outdoor fitness activities.',
        icon: 'dumbbell',
      },
    ],
    gallery: [
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Main Playground',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Volleyball Court',
      },
      {
        image: '/placeholder.svg?height=400&width=600',
        caption: 'Outdoor Fitness Area',
      },
    ],
    details:
      'Our playground is an integral part of campus life, hosting regular physical education classes, intramural sports competitions, and annual sports events. The facilities are available to students during designated hours for recreational activities. Professional coaches are available to guide students in various sports, helping them develop their skills and compete at intercollegiate levels. The playground also serves as a venue for outdoor gatherings, cultural events, and community activities.',
  },
};

// Helper function to render the appropriate icon
const renderIcon = (iconName) => {
  switch (iconName) {
    case 'leaf':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      );
    case 'building':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      );
    case 'accessibility':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="16" cy="4" r="1"></circle>
          <path d="m18 19 1-7-6 1"></path>
          <path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
          <path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
          <path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path>
        </svg>
      );
    case 'shield':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case 'bed':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 4v16"></path>
          <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
          <path d="M2 17h20"></path>
          <path d="M6 8v9"></path>
        </svg>
      );
    case 'wifi':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13a10 10 0 0 1 14 0"></path>
          <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
          <path d="M2 8.82a15 15 0 0 1 20 0"></path>
          <line x1="12" x2="12.01" y1="20" y2="20"></line>
        </svg>
      );
    case 'book':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      );
    case 'database':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'lamp':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 2h8l4 10H4L8 2Z"></path>
          <path d="M12 12v6"></path>
          <path d="M8 22v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2H8Z"></path>
        </svg>
      );
    case 'music':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      );
    case 'video':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect>
        </svg>
      );
    case 'armchair':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
          <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path>
          <path d="M5 18v2"></path>
          <path d="M19 18v2"></path>
        </svg>
      );
    case 'clock':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      );
    case 'shield-check':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      );
    case 'map-pin':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      );
    case 'trophy':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
        </svg>
      );
    case 'scissors':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="20" x2="8.12" y1="4" y2="15.88"></line>
          <line x1="14.47" x2="20" y1="14.48" y2="20"></line>
          <line x1="8.12" x2="12" y1="8.12" y2="12"></line>
        </svg>
      );
    case 'dumbbell':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6.5 6.5 11 11"></path>
          <path d="m21 21-1-1"></path>
          <path d="m3 3 1 1"></path>
          <path d="m18 22 4-4"></path>
          <path d="m2 6 4-4"></path>
          <path d="m3 10 7-7"></path>
          <path d="m14 21 7-7"></path>
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="16"></line>
          <line x1="8" x2="16" y1="12" y2="12"></line>
        </svg>
      );
  }
};

const FacilityDetailsPage = async ({ params }) => {
  const facilityId = await params?.slug;
  const facility = facilitiesData[facilityId];

  if (!facility) {
    notFound();
  }

  return (
    <>
      {/* Page Header */}
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-4xl md:text-6xl"
        breadcumbClass="text-white"
        title={'About Us'}
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: 'Facilities', url: '/facilities' },
          { name: facility?.title, url: '' },
        ]}
      />

      <div className="min-h-screen flex flex-col">
        {/* Content Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-theme-primary mb-8 pb-2 border-b border-gray-200">
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-theme-primary/10 flex items-center justify-center text-theme-primary">
                          {renderIcon(feature.icon)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-theme-primary mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-theme-primary mb-8 pb-2 border-b border-gray-200">
                    Gallery
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {facility.gallery.map((item, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg shadow-sm"
                      >
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={item.caption}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-4 font-medium">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h2 className="text-2xl font-bold text-theme-primary mb-8 pb-2 border-b border-gray-200">
                    Additional Information
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700">{facility.details}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm sticky top-8">
                  <h3 className="text-xl font-bold text-theme-primary mb-6 pb-2 border-b border-gray-200">
                    Other Facilities
                  </h3>
                  <nav className="space-y-2">
                    {Object.entries(facilitiesData).map(([id, item]) => (
                      <Link
                        key={id}
                        href={`/facilities/${id}`}
                        className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                          id === facilityId
                            ? 'bg-theme-primary text-white'
                            : 'hover:bg-gray-100 text-gray-700 hover:text-theme-primary'
                        }`}
                      >
                        <span>{item.title}</span>
                        {id !== facilityId && (
                          <ChevronRight size={16} className="ml-auto" />
                        )}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-theme-primary mb-4">
                      Need Assistance?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Have questions about our facilities or want to schedule a
                      visit? Our team is here to help.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-theme-red-light hover:bg-theme-red-dark text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors"
                    >
                      Contact Us
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Facilities */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 text-theme-primary hover:text-theme-red-light transition-colors"
              >
                <ArrowLeft size={16} />
                Back to All Facilities
              </Link>
            </div>
          </div>
        </section>

        {/* Related Facilities */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-theme-primary mb-12 text-center">
              Explore Other Facilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(facilitiesData)
                .filter(([id]) => id !== facilityId)
                .slice(0, 3)
                .map(([id, item]) => (
                  <Link
                    key={id}
                    href={`/facilities/${id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.heroImage || '/placeholder.svg'}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-theme-primary mb-2 group-hover:text-theme-red-light transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center text-theme-red-light font-medium">
                        <span>Learn more</span>
                        <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FacilityDetailsPage;
