import RequirementsSection from '@/components/admission/RequirementsSection';
import SplitSection from '@/components/layouts/SplitSection';
import Link from 'next/link';

const AdmissionPage = async () => {
  return (
    <>
      <SplitSection
        stickySide="left"
        className="bg-gray-50"
        gridClassName="md:grid md:grid-cols-5 gap-x-2 gap-y-4 md:gap-5 xl:gap-10"
        leftWrapperClassName="relative col-span-5 md:col-span-2 px-4 md:px-0"
        rightWrapperClassName="col-span-5 md:col-span-3"
        LeftContent={
          <div className="text-2xl md:text-[36px] lg:text-[48px] font-semibold leading-snug">
            <h3>
              Local <br className="hidden md:inline-block" /> Students
            </h3>
          </div>
        }
        RightContent={
          <div className="max-w-screen-sm px-4 mx-auto">
            <p className="text-lg mb-10">
              NBMCH (North Bengal Medical College and Hospital) was established
              in 2000 after the permission of the People's Republic Bangladesh'
              Government. Situated on the scenic bank of Jamuna River. This
              establishment of excellence is spread around 6.17 acres of land in
              Sirajganj, Bangladesh.
            </p>
            <Link
              href="#"
              className="text-lg text-theme-red-light border-b border-theme-red-light hover:text-theme-primary hover:border-theme-primary"
            >
              Learn More
            </Link>
          </div>
        }
      />

      <SplitSection
        stickySide="left"
        className="bg-white"
        gridClassName="md:grid md:grid-cols-5 gap-x-2 gap-y-4 md:gap-5 xl:gap-10"
        leftWrapperClassName="relative col-span-5 md:col-span-2 px-4 md:px-0"
        rightWrapperClassName="col-span-5 md:col-span-3"
        LeftContent={
          <div className="text-2xl md:text-[36px] lg:text-[48px] font-semibold leading-snug">
            <h3>
              Foriegn <br className="hidden md:inline-block" /> Students
            </h3>
          </div>
        }
        RightContent={
          <div className="max-w-screen-sm px-4 mx-auto">
            <p className="text-lg mb-10">
              NBMCH (North Bengal Medical College and Hospital) was established
              in 2000 after the permission of the People's Republic Bangladesh'
              Government. Situated on the scenic bank of Jamuna River. This
              establishment of excellence is spread around 6.17 acres of land in
              Sirajganj, Bangladesh.
            </p>
            <Link
              href="#"
              className="text-lg text-theme-red-light border-b border-theme-red-light hover:text-theme-primary hover:border-theme-primary"
            >
              Learn More
            </Link>
          </div>
        }
      />

      {/* <section className="py-14 bg-gray-50">
        <div className="container">
          <div className="flex justify-center items-center pb-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Requirements
              </h2>
          </div>

          <SplitSection
            LeftContent={
              <div className="max-w-screen-sm px-4 mx-auto">
                <h3 className="text-xl font-semibold leading-snug mb-6">Graduate Diploma Requirements:</h3>
                <div>
                  <p>— Open to students 18 years and over at course commencement</p>
                  <p>— If English is not your first Language, you will need to demonstrate English language proficiency equivalent to IELTS (Academic) 6.0 overall, with a minimum of 5.5 in each and 6.0 in spealing</p>
                  <p>— All applicants are interviewed as part Of the process.</p>
                  <p>— Applicants not meeting the entry criteria may be considered on a case by case basis by the Academic Director. Consideration will given to those with appropriate and evidanced previous history. prior work experience and life skills experience.</p>
                </div>
              </div>
            }
            RightContent={
              <div className="max-w-screen-sm px-4 mx-auto">
                <h3 className="text-xl font-semibold leading-snug mb-6">Undergraduate Diploma Requirements:</h3>
                <div>
                  <p>— Open to students 18 years and over at course commencement</p>
                  <p>— If English is not your first Language, you will need to demonstrate English language proficiency equivalent to IELTS (Academic) 6.0 overall, with a minimum of 5.5 in each and 6.0 in spealing</p>
                  <p>— All applicants are interviewed as part Of the process.</p>
                  <p>— Applicants not meeting the entry criteria may be considered on a case by case basis by the Academic Director. Consideration will given to those with appropriate and evidanced previous history. prior work experience and life skills experience.</p>
                </div>
              </div>
            }
          />
        </div>
      </section> */}
      <RequirementsSection />
    </>
  );
};
export default AdmissionPage;
