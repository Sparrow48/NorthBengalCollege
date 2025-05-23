import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Clock, Download, FileText, GraduationCap } from "lucide-react";

const CourseSidebar = () => {
  return (
    <div className="md:col-span-1">
      <div className="sticky top-24 space-y-6">
        <Card className="overflow-hidden">
          <div className="bg-theme-primary p-4 text-primary-foreground">
            <h3 className="text-xl font-semibold">Quick Information</h3>
          </div>
          <div className="space-y-4 p-4">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">Duration</h4>
                <p className="text-sm text-muted-foreground">
                  5 years + 1 year internship
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">Medium</h4>
                <p className="text-sm text-muted-foreground">English</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">Degree Awarded</h4>
                <p className="text-sm text-muted-foreground">
                  Bachelor of Medicine and Bachelor of Surgery
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="p-4">
            <h3 className="mb-4 text-lg font-semibold">
              Need More Information?
            </h3>
            <div className="space-y-3">
              <Button className="w-full justify-start gap-2 py-4 h-auto">
                <FileText className="h-4 w-4" />
                Admission Information
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 py-4 h-auto"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default CourseSidebar;
