import Link from 'next/link'
import Image from 'next/image'
import SplitSection from '@/components/layouts/SplitSection'
import CollgeIcon from '@/assets/images/icons/college.png'
import CampusIcon from '@/assets/images/banner/campus.png'

const CampusSection = () => {
  return (
    <>
        <SplitSection
            gridClassName="items-center gap-x-2 gap-y-4 md:gap-5 xl:gap-10"
            leftWrapperClassName="order-1 md:order-0 relative px-4 md:px-0"
            rightWrapperClassName="order-0 md:order-1"
            LeftContent = {
                <>
                    <div className="">
                        <Image className='mb-6' src={CollgeIcon} width={64} height={64} alt='college icon' />
                        <div className="text-2xl md:text-[36px] lg:text-[48px] font-semibold leading-snug mb-6">
                            <h3>Campus Information</h3>
                        </div>
                        <p className='max-w-lg mb-8 text-lg'>
                            The campus has a special scenic beauty with lush green trees and meadows interspersed by newly constructed modern buildings and old heritage buildings.
                        </p>
                        <Link href="/campus-tour" className='text-lg text-theme-red-light border-b border-theme-red-light hover:text-theme-primary hover:border-theme-primary'>Campus Tour</Link>
                    </div>
                </>
            }
            RightContent = {
                <>
                    <div className="max-w-lg mx-auto">
                        <Image src={CampusIcon} width={1038} height={968} alt='Campus' />
                    </div>
                </>
            }
        />
    </>
  )
}

export default CampusSection