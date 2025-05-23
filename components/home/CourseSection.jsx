import Image from "next/image"
import SplitSection from "@/components/layouts/SplitSection"
import { Building2, GraduationCap, Stethoscope, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import MBBSBanner from '@/assets/images/banner/mbbs.jpg';

const CourseSection = () => {
  const { src: BannerSrc, blurDataURL } = MBBSBanner;
  
  return (
    <>
      <SplitSection
        className="bg-slate-100"
        gridClassName="items-center"
        LeftContent={
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={BannerSrc}
              blurDataURL={blurDataURL}
              alt="Medical laboratory practical session"
              fill
              className="object-cover"
              priority
            />
          </div>
        }
        RightContent={
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                5 Years Program
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Bachelor of Medicine & Bachelor of Surgery (MBBS)
              </h3>
              <p className="text-muted-foreground">
                Our MBBS program is a comprehensive 5-year course designed to
                provide extensive clinical exposure, modern facilities, and
                training under experienced medical professionals. The curriculum
                combines theoretical knowledge with practical clinical
                experience, followed by a mandatory one-year internship.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Program Highlights</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Recognized by Medical Council</li>
                  <li>• Modern Teaching Methodology</li>
                  <li>• Integrated Learning Approach</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Clinical Training</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Attached Teaching Hospital</li>
                  <li>• Hands-on Clinical Practice</li>
                  <li>• Regular Medical Camps</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Faculty</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Experienced Professors</li>
                  <li>• Visiting Specialists</li>
                  <li>• Dedicated Mentors</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Facilities</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced Laboratories</li>
                  <li>• Digital Library</li>
                  <li>• Research Centers</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1 py-3" asChild>
                <Link href="/courses/mbbs">
                  See More Details
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="flex-1 py-3">
                Download Brochure
              </Button>
            </div>
          </div>
        }
      />
    </>
  );
}

export default CourseSection