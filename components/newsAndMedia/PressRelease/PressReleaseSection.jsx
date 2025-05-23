import { ArrowRight, Calendar, FileText } from "lucide-react";
import Link from "next/link";

const PressReleaseSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-theme-primary mb-2">
              Press Releases
            </h2>
            <p className="text-slate-600">
              Official announcements and press releases
            </p>
          </div>
          <Link
            href="/news-media/press-releases"
            className="flex items-center text-theme-red-light font-medium mt-4 md:mt-0"
          >
            View all press releases <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <FileText className="h-10 w-10 text-theme-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">
                  North Bengal Medical College Receives National Accreditation
                </h3>
                <p className="text-sm text-slate-500 mb-2">
                  The college has been recognized for its excellence in medical
                  education and research...
                </p>
                <div className="flex items-center text-xs text-slate-400">
                  <Calendar className="h-3 w-3 mr-1" /> March 15, 2023
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PressReleaseSection;
