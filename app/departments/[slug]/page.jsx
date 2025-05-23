import PageHeader from '@/components/common/PageHeader';
import { DEPARTMENTS } from '@/data/departments';
import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import Image from 'next/image';
import Link from 'next/link';
import MemberCard from '@/components/faculty/MemberCard';
import NewsAndMediaWidget from '@/components/widgets/NewsAndMediaWidget';
import OtherDepartmentsWidget from '@/components/widgets/OtherDepartmentsWidget';
import NoticeWidget from '@/components/widgets/NoticeWidget';
import { Home } from 'lucide-react';
import NoticeCarousal from '@/components/notice/NoticeCarousal';
import { notFound } from 'next/navigation';

const DepartmentDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const department = DEPARTMENTS?.find(
    (department) => department.slug === slug
  );
  const OtherDepartments = DEPARTMENTS?.filter(
    (dep) =>
      dep.parent_id === department?.parent_id && dep.id !== department?.id
  );
  // const childDepartments = DEPARTMENTS?.filter(dep => dep.parent_id === department?.id);

  if (!department) {
    notFound();
  }

  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-4xl md:text-6xl"
        breadcumbClass="text-white"
        title={department?.name}
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: 'Departments', url: '/departments' },
          { name: department?.name, url: '' },
        ]}
      />

      <main className="py-10">
        <div className="w-full">
          <div className="container px-4">
            <div className="w-full lg:col-span-3">
              <NoticeCarousal className="mb-10" department={department} />
            </div>
          </div>

          <div className="container px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 content space-y-4">
                {/* Welcome Section */}
                <section className="space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-gray-700">
                    {department?.title}
                  </h2>
                  <p>{department?.desc}</p>
                </section>

                {/* Department Information */}
                <section className="space-y-4">
                  {department?.content?.length > 0 &&
                    department?.content?.map((content, index) => (
                      <div
                        key={`content-${index}`}
                        className="flex flex-col gap-2"
                      >
                        {content?.title && (
                          <h3 className="text-theme-red-light font-semibold">
                            {content?.title}
                          </h3>
                        )}
                        {content?.desc && <p>{content?.desc}</p>}
                      </div>
                    ))}
                </section>

                {/* Academic Activities */}
                <section className="!mt-10">
                  {department?.gallery?.length > 0 && (
                    <>
                      <h3 className="text-theme-red-light font-semibold mb-4">
                        Gallery:
                      </h3>
                      <div className="grid grid-cols-5 gap-2">
                        {department?.gallery?.slice(0, 4)?.map((img, index) => (
                          <Image
                            className="w-full cursor-pointer rounded-lg"
                            key={`${img}-${index}`}
                            src={img}
                            width={165}
                            height={146}
                            alt={`${department?.name} activities`}
                          />
                        ))}
                        {department?.gallery?.length > 4 && (
                          <Link
                            href={`/departments/${department?.slug}/gallery`}
                            className="flex justify-center items-center bg-theme-red-light hover:bg-theme-red-dark uppercase text-white rounded-lg p-4 duration-100"
                          >
                            See More
                          </Link>
                        )}
                      </div>
                    </>
                  )}
                </section>

                {/* Faculty Members */}
                <section className="!mt-14">
                  <h2 className="relative mb-10 text-xl md:text-2xl lg:text-3xl font-semibold text-pink-600 text-center after:content-[''] after:absolute after:left-0 after:right-0 after:h-1 after:bg-theme-primary after:top-1/2 after:-translate-y-1/2 after:z-0">
                    <span className="relative z-10 bg-white p-4">
                      FACULTY MEMBERS
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 gap-14">
                    {department?.facultyMembers?.map((member) => (
                      <MemberCard
                        key={`faculty-member-${member?.name}`}
                        department={department}
                        member={member}
                      />
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Other Departments */}
                {OtherDepartments?.length > 0 && (
                  <OtherDepartmentsWidget departments={OtherDepartments} />
                )}

                {/* News & Media */}
                <NewsAndMediaWidget departmentSlug={department?.slug} />

                {/* Notices */}

                <NoticeWidget departmentSlug={department?.slug} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DepartmentDetailsPage;
