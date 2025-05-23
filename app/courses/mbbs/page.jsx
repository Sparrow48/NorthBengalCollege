import Image from "next/image";
import {
  Clock,
  GraduationCap,
  CheckCircle,
  Award,
  BookOpen,
  FileText,
  Download,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CourseStructure from "@/components/courses/mbbs/CourseStructure";
import CourseSidebar from "@/components/courses/mbbs/CourseSidebar";

const MBBSCoursePage = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-theme-red-dark to-theme-primary text-white">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={"/assets/images/courses/mbbs-banner.jpg"}
              alt="Medical students background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                MBBS Program
              </h1>
              <p className="text-xl md:text-2xl">
                Comprehensive medical education to shape the healthcare leaders
                of tomorrow
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="space-y-12">
                {/* Course Overview */}
                <section className="rounded-xl bg-blue-50 p-8">
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-theme-primary">
                    Course Overview
                  </h2>
                  <p className="mb-6 text-lg text-foreground">
                    Our MBBS program is designed to provide comprehensive
                    medical education, combining theoretical knowledge with
                    practical clinical experience to prepare students for a
                    successful career in medicine.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="p-6 shadow-none border-none">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-theme-red-light/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-theme-red-light">
                        Duration
                      </h3>
                      <p className="text-theme-primary">
                        The MBBS program spans 5 years, divided into four
                        phases, followed by a mandatory one-year logbook based
                        rotatory internship.
                      </p>
                    </Card>
                    <Card className="p-6 shadow-none border-none">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-theme-red-light/10">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-theme-red-light">
                        Medium of Instruction
                      </h3>
                      <p className="text-theme-primary">
                        English is the medium of instruction for all lectures,
                        practical sessions, and examinations.
                      </p>
                    </Card>
                  </div>
                </section>

                {/* Eligibility Criteria */}
                <section className="">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-10 w-1.5 rounded-full bg-green-500"></div>
                    <h2 className="text-3xl font-bold tracking-tight text-green-600 dark:text-green-400">
                      Eligibility Criteria
                    </h2>
                  </div>
                  <Card className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-green-500" />
                        <span>
                          Completion of HSC or equivalent with Science subjects
                          (Biology, Physics, Chemistry).
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-green-500" />
                        <span>
                          Candidates must secure the required grade point in SSC
                          and HSC examinations.
                        </span>
                      </li>
                    </ul>
                  </Card>
                </section>

                {/* Selection Procedure */}
                <section className="rounded-xl bg-amber-50 p-8 shadow-sm dark:bg-amber-950/30">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-10 w-1.5 rounded-full bg-amber-500"></div>
                    <h2 className="text-3xl font-bold tracking-tight text-amber-600 dark:text-amber-400">
                      Selection Procedure
                    </h2>
                  </div>
                  <Card className="border-l-4 border-l-amber-500 p-6 shadow-md">
                    <div className="flex items-start gap-3">
                      <Award className="mt-1 h-5 w-5 text-amber-500" />
                      <p>
                        Admissions are based on merit as determined by the
                        competent authority.
                      </p>
                    </div>
                  </Card>
                </section>

                {/* Course Structure */}
                <CourseStructure />

                {/* Special Notes */}
                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-10 w-1.5 rounded-full bg-theme-red-light"></div>
                    <h2 className="text-3xl font-bold tracking-tight text-theme-red-light">
                      Course Structure
                    </h2>
                  </div>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Info className="flex-shrink-0 mt-1 h-5 w-5 text-theme-red-light" />
                        <p className="text-theme-red-light">
                          All academic activities and professional examinations
                          must be completed within the specified timeline for
                          each phase.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Info className="flex-shrink-0 mt-1 h-5 w-5 text-primary" />
                        <p>
                          Students must complete the entire MBBS program
                          (including passing the final professional examination)
                          within a maximum period of 12 years from admission.
                        </p>
                      </div>
                    </div>
                  </Card>
                </section>

                {/* CTA */}
                {/* <section className="rounded-lg bg-theme-primary/10 p-6">
                  <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        Ready to begin your medical journey?
                      </h3>
                      <p className="text-muted-foreground">
                        Apply now or contact our admissions office for more
                        information.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <Button size="lg">Apply Now</Button>
                      <Button variant="outline" size="lg">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </section> */}
              </div>
            </div>

            {/* Sidebar */}
            <CourseSidebar />
          </div>
        </div>
      </div>
    </>
  );
};
export default MBBSCoursePage;
