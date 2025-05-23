import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CourseStructure = () => {
  return (
    <>
      <section>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-1.5 rounded-full bg-theme-primary"></div>
          <h2 className="text-3xl font-bold tracking-tight text-theme-primary">
            Course Structure
          </h2>
        </div>
        <div className="mb-4 text-lg text-muted-foreground">
          The MBBS program is structured into four distinct phases, each with
          specific subjects and examinations:
        </div>

        {/* Mobile view - Card layout */}
        <div className="space-y-4 md:hidden">
            {/* Phase 1 */}
            <Card className="overflow-hidden border-2 border-theme-red-light/20 shadow-md dark:border-theme-red-light">
            <div className="bg-theme-red-light/10 p-3 dark:bg-theme-border-theme-red-light/50">
                <h3 className="text-lg font-semibold text-theme-red-light dark:text-theme-red-light/70">
                1st Phase
                </h3>
            </div>
            <div className="p-4 space-y-3">
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Duration:
                </span>
                <p>1.5 years</p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Subjects:
                </span>
                <p>Anatomy, Physiology, Biochemistry</p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Examination:
                </span>
                <p>First Professional MBBS</p>
                </div>
            </div>
            </Card>

            {/* Phase 2 */}
            <Card className="overflow-hidden border-2 border-theme-red-light/20 shadow-md dark:border-theme-red-light">
            <div className="bg-theme-red-light/10 p-3 dark:bg-theme-border-theme-red-light/50">
                <h3 className="text-lg font-semibold text-theme-red-light dark:text-theme-red-light/70">
                2nd Phase
                </h3>
            </div>
            <div className="p-4 space-y-3">
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Duration:
                </span>
                <p>1 year</p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Subjects:
                </span>
                <p>Pharmacology & Therapeutics, Forensic Medicine & Toxicology</p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Examination:
                </span>
                <p>Second Professional MBBS</p>
                </div>
            </div>
            </Card>

            {/* Phase 3 */}
            <Card className="overflow-hidden border-2 border-theme-red-light/20 shadow-md dark:border-theme-red-light">
            <div className="bg-theme-red-light/10 p-3 dark:bg-theme-border-theme-red-light/50">
                <h3 className="text-lg font-semibold text-theme-red-light dark:text-theme-red-light/70">
                3rd Phase
                </h3>
            </div>
            <div className="p-4 space-y-3">
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Duration:
                </span>
                <p>1 year</p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Subjects:
                </span>
                <p>Community Medicine & Public Health, Pathology, Microbiology</p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Examination:
                </span>
                <p>Third Professional MBBS</p>
                </div>
            </div>
            </Card>

            {/* Phase 4 */}
            <Card className="overflow-hidden border-2 border-theme-red-light/20 shadow-md dark:border-theme-red-light">
            <div className="bg-theme-red-light/10 p-3 dark:bg-theme-border-theme-red-light/50">
                <h3 className="text-lg font-semibold text-theme-red-light dark:text-theme-red-light/70">
                4th Phase
                </h3>
            </div>
            <div className="p-4 space-y-3">
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Duration:
                </span>
                <p>1.5 years</p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Subjects:
                </span>
                <p>
                    Medicine & Allied Subjects, Surgery & Allied Subjects,
                    Obstetrics & Gynecology
                </p>
                </div>
                <div>
                <span className="font-semibold text-sm text-muted-foreground">
                    Examination:
                </span>
                <p>Final Professional MBBS</p>
                </div>
            </div>
            </Card>
        </div>

        {/* Desktop view - Full table */}
        <Card className="hidden md:block overflow-hidden border-2 border-gray-200 shadow-md">
          <div className="bg-theme-primary p-3">
            <h3 className="text-lg font-semibold text-white">Program Phases</h3>
          </div>
          <Table>
            <TableHeader className="">
              <TableRow className="bg-theme-red-light/80 hover:bg-theme-red-light/80">
                <TableHead className="text-white font-semibold px-4">
                  Phase
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Subjects
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Duration
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Examination
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-purple-50 dark:hover:bg-purple-950/20">
                <TableCell className="font-medium text-theme-red-light text-nowrap px-4">
                  1st Phase
                </TableCell>
                <TableCell className="text-gray-600">
                  Anatomy, Physiology, Biochemistry
                </TableCell>
                <TableCell className="px-4 text-nowrap">1.5 years</TableCell>
                <TableCell className="text-theme-primary text-nowrap px-4">
                  First Professional MBBS
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-purple-50 dark:hover:bg-purple-950/20">
                <TableCell className="font-medium text-theme-red-light text-nowrap px-4">
                  2nd Phase
                </TableCell>
                <TableCell className="text-gray-600">
                  Pharmacology & Therapeutics, Forensic Medicine & Toxicology
                </TableCell>
                <TableCell className="px-4 text-nowrap">1 year</TableCell>
                <TableCell className="text-theme-primary text-nowrap px-4">
                  Second Professional MBBS
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-purple-50 dark:hover:bg-purple-950/20">
                <TableCell className="font-medium text-theme-red-light text-nowrap px-4">
                  3rd Phase
                </TableCell>
                <TableCell className="text-gray-600">
                  Community Medicine & Public Health, Pathology, Microbiology
                </TableCell>
                <TableCell className="px-4 text-nowrap">1 year</TableCell>
                <TableCell className="text-theme-primary text-nowrap px-4">
                  Third Professional MBBS
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-purple-50 dark:hover:bg-purple-950/20">
                <TableCell className="font-medium text-theme-red-light text-nowrap px-4">
                  4th Phase
                </TableCell>
                <TableCell className="text-gray-600">
                  Medicine & Allied Subjects, Surgery & Allied Subjects,
                  Obstetrics & Gynecology
                </TableCell>
                <TableCell className="px-4 text-nowrap">1.5 years</TableCell>
                <TableCell className="text-theme-primary text-nowrap px-4">
                  Final Professional MBBS
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </>
  );
};
export default CourseStructure;
