import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MediaCard from "./MediaCard";

const MediaGallery = () => {
  return (
    <>
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-theme-primary mb-2">
                Media Gallery
              </h2>
              <p className="text-slate-600">
                Explore our collection of photos and videos
              </p>
            </div>
            <Link
              href="/news-media/gallery"
              className="flex items-center text-theme-red-light font-medium mt-4 md:mt-0"
            >
              View all media <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MediaCard
              title="Annual Medical Conference 2023"
              type="photo"
              count={24}
              image={`https://picsum.photos/600/400?random=1`}
            />
            <MediaCard
              title="New Medical Equipment Inauguration"
              type="video"
              count={3}
              image={`https://picsum.photos/600/400?random=2`}
            />
            <MediaCard
              title="Campus Life"
              type="photo"
              count={42}
              image={`https://picsum.photos/600/400?random=3`}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default MediaGallery;
