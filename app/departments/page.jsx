import PageHeader from '@/components/common/PageHeader';
import SectionHeader from '@/components/common/SectionHeader';
import { DEPARTMENTS } from '@/data/departments';
import Image from 'next/image';
import Link from 'next/link';
import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import { Home } from 'lucide-react';
import { DEPARTMENTS_CATEGORY } from '@/data/departments';

const DepartmentsPage = () => {
  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-4xl md:text-6xl"
        breadcumbClass="text-white"
        title="Departments"
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: 'Departments', url: '' },
        ]}
      />

      <main className="py-10">
        {Object.values(DEPARTMENTS_CATEGORY)?.length > 0 &&
          Object.values(DEPARTMENTS_CATEGORY)?.map((mainDepartment) => (
            <section key={mainDepartment?.id} className="py-10">
              <div className="container px-4">
                <SectionHeader
                  title="Departments OF"
                  subtitle={mainDepartment?.name}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {DEPARTMENTS?.filter(
                    (dep) => dep?.parent_id === mainDepartment?.id
                  )?.map((subDepartment) => (
                    <Link
                      href={`/departments/${subDepartment?.slug}`}
                      key={subDepartment?.id}
                      className="hover:scale-95 duration-300"
                    >
                      <div className="bg-gray-100 p-6 md:p-8 lg:p-10 rounded-xl h-full">
                        <Image
                          className="size-16 mb-4"
                          src={subDepartment?.icon}
                          width={100}
                          height={100}
                          alt={`${subDepartment?.name} icon`}
                        />
                        <h3 className="text-lg font-bold mb-2">
                          {subDepartment?.name}
                        </h3>
                        <p className="text-theme-primary text-xs">
                          {subDepartment?.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
      </main>
    </>
  );
};

export default DepartmentsPage;
