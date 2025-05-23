'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      <div className="slider relative z-40">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
        >
          {[...Array(3).keys()].map((slider) => (
            <SwiperSlide key={slider} className="relative bg-gray-50">
              <section className="relative h-[500px] md:h-[580px] bg-gradient-to-r from-theme-primary/80 to-theme-primary/80 md:pb-20">
                <Image
                  src="/assets/images/sliders/slider-1.png"
                  alt="Students celebrating graduation"
                  width={1920}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <div className="container mx-auto h-full flex items-center px-4 md:px-8">
                  <div className="max-w-2xl text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Start your career & pursue your passion
                    </h2>
                    <p className="text-lg mb-8">
                      Providing quality medical education and healthcare
                      services since 1992
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Link
                        href="/curriculum"
                        className="bg-theme-red-light hover:bg-theme-red-dark text-white px-6 py-3 rounded-md transition flex items-center gap-2"
                      >
                        View Our Curriculums
                        <ChevronRight size={18} />
                      </Link>
                      <Link
                        href="/admission"
                        className="bg-white hover:bg-gray-100 text-theme-primary px-6 py-3 rounded-md transition"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative w-full py-6 md:py-0 md:-mt-[76px] z-40">
        <div className="container px-4">
          <div className="text-sm md:text-xl grid grid-cols-1 md:grid-cols-3 even:child:bg-theme-red-dark odd:child:bg-theme-red-light child:px-2 child:md:px-4 child:font-semibold child:text-center md:first:child:rounded-tl-lg md:last:child:rounded-tr-lg child:text-white child:py-6 hover:child:bg-theme-primary rounded-lg md:rounded-none overflow-hidden">
            <Link href={'/campus-tour'}>CAMPUS TOUR</Link>
            <Link href={'/departments'}>OUR DEPARTMENTS</Link>
            <Link href={'/journals'}>JOURNALS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
