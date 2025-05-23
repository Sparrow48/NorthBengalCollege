"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { cn } from '@/lib/utils';

const NoticeCarousal = ({ className = "", notices = [], department = {} }) => {
  return (
    <>
        <div className={cn("w-full relative z-40 bg-slate-200 rounded-2xl overflow-hidden", className)}>
            <div className="flex justify-between items-center gap-4 p-4 lg:px-8 mb-4 border-b border-gray-300">
                <h3 className='text-gray-400 font-medium'>Department Notices</h3>
                {
                    department?.slug && (
                        <Button className="px-0" size="lg" variant="link" asChild>
                            <Link href={`/notices/department/${department?.slug}`}>See All</Link>
                        </Button>
                    )
                }
            </div>
            <Swiper
                className='w-full'
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
            >
                {
                    [...Array(3).keys()].map(slider => (
                        <SwiperSlide key={slider} className="relative bg-slate-200 p-4 pb-16 lg:px-20 lg:pb-20">
                            <div className="container">
                                <div className="relative flex flex-col items-start z-30 text-gray-700 gap-4">
                                    <span className='text-theme-red-light font-semibold'>08 DEC 2024</span>
                                    <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold line-clamp-2'>Last Day to Withdraw From a Course Without Academic Penalty</h2>
                                    <Button className="bg-theme-primary mt-4 lg:mt-10 py-6" size="lg" asChild>
                                        <Link href={"/"} className='text-lg'>Download PDF</Link>
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </>
  )
}

export default NoticeCarousal