import PageHeaderBigSub from '@/components/common/PageHeaderBigSub'
import GalleryLoading from '@/components/gallery/GalleryLoading'
import GallerySection from '@/components/gallery/GallerySection'
import { galleryItems } from '@/data/gallery'
import GalleryProvider from '@/providers/GalleryProvider'
import { Home } from 'lucide-react'
import { Suspense } from 'react'

const CampusTourPage = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <PageHeaderBigSub
                breadcumbClass="text-white"
                title="Campus Tour"
                subtitle="Explore our beautiful campus through images and videos. Get a glimpse of the facilities, environment, and student life at North Bengal Medical College."
                paths={[
                    { name: <Home className='size-5' />, url: "/" },
                    { name: "Campus Tour", url: "/campus-tour" },
                ]}
            />

            {/* Introduction */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-theme-primary mb-4">Welcome to Our Virtual Campus Tour</h2>
                        <p className="text-gray-700 text-lg">
                            Take a virtual journey through our campus and facilities. Browse through our collection of images and videos
                            to get a feel of what it's like to be at North Bengal Medical College. For a more immersive experience, we
                            invite you to schedule an in-person tour.
                        </p>
                    </div>
                </div>
            </section>

            <GalleryProvider items={galleryItems}>
                {/* Gallery */}
                <Suspense fallback={<GalleryLoading />}>
                    <GallerySection />
                </Suspense>
            </GalleryProvider>

        </div>
    </>
  )
}

export default CampusTourPage