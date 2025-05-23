import SplitSection from "../layouts/SplitSection"
import Link from "next/link"

const AboutSection = () => {
  return (
    <>
        <SplitSection
            stickySide="left"
            className="bg-gray-50"
            gridClassName="md:grid md:grid-cols-5 gap-x-2 gap-y-4 md:gap-5 xl:gap-10"
            leftWrapperClassName="relative col-span-5 md:col-span-2 px-4 md:px-0"
            rightWrapperClassName="col-span-5 md:col-span-3"
            LeftContent = {
                <div className="text-2xl md:text-[36px] lg:text-[48px] font-semibold leading-snug">
                    <h3>About the <br className="hidden md:inline-block" /> College</h3>
                </div>
            }
            RightContent = {
                <div className='max-w-screen-sm px-4 mx-auto'>
                    <p className="text-lg mb-10">NBMCH (North Bengal Medical College and Hospital) was established in 2000 after the permission of the People’s Republic Bangladesh’ Government. Situated on the scenic bank of Jamuna River. This establishment of excellence is spread around 6.17 acres of land in Sirajganj, Bangladesh.</p>
                    <Link href="/about" className='text-lg text-theme-red-light border-b border-theme-red-light hover:text-theme-primary hover:border-theme-primary'>College Overview</Link>
                </div>
            }
        />
    </>
  )
}

export default AboutSection