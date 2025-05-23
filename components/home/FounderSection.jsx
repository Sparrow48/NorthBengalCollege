import SplitSection from '@/components/layouts/SplitSection'
import Image from 'next/image'
import Link from 'next/link'

const FounderSection = () => {
  return (
    <>
      <SplitSection
        stickySide="left"
        className="group"
        gridClassName="md:grid md:grid-cols-5 gap-2 md:gap-5 xl:gap-10"
        leftWrapperClassName="relative col-span-5 md:col-span-2 flex items-start justify-center px-10 pt-10"
        rightWrapperClassName="col-span-5 md:col-span-3"
        LeftContent ={
          <div className="max-w-52 md:max-w-full inline-block backbox">
            <Image
              className='relative z-20'
              src={"/assets/images/static/founder.png"} 
              width={318} 
              height={362} 
              alt='Founder' 
            />
          </div>
        }
        RightContent ={
          <div className='max-w-screen-sm px-4 mx-auto mt-10'>
              <h3 className='text-2xl font-semibold'>Professor Dr. M. A. Matin</h3>
              <span className='text-lg'>Founder</span>
              <p className='text-lg my-10'>
                Professor Dr. M. A. Matin was a well-khown personality in our country. Besides being a very senior medical teacher in his profession, he has already estabilished a number of Eye and Mother Child Hospitals in different parts of the country as a social worker. He has estabilished two Girls High Schools in the district of Sirajganj...
              </p>
              <Link href="/founder-message" className='text-lg text-theme-red-light border-b border-theme-red-light hover:text-theme-primary hover:border-theme-primary'>Read More</Link>
          </div>
        }
      />
    </>
  )
}

export default FounderSection