import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png';
import PageHeader from '@/components/common/PageHeader';
import { DEPARTMENTS } from '@/data/departments';
import { Home } from 'lucide-react';
import Image from 'next/image';

const DepartmentGalleryPage = async ({ params }) => {
  const { slug } = await params;
  const department = DEPARTMENTS?.find(
    (department) => department.slug === slug
  );

  return (
    <>
      <PageHeader
        className={
          'text-white md:min-h-60 bg-cover bg-no-repeat flex items-center'
        }
        titleClass="text-4xl md:text-6xl mb-5"
        descriptionClass="text-white/60"
        breadcumbClass="text-white"
        title={`Gallery`}
        description={department?.name}
        style={{
          backgroundImage: `url('${PageHeaderBanner?.src}')`,
        }}
        paths={[
          { name: <Home className="size-5" />, url: '/' },
          { name: department?.name, url: `/departments/${department?.slug}` },
          { name: 'Gallery', url: '' },
        ]}
      />

      <main className="py-10">
        <section className="py-10">
          <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {department?.gallery?.map((img, index) => (
                <Image
                  className="w-full cursor-pointer"
                  key={`${img}-${index}`}
                  src={img}
                  width={165}
                  height={146}
                  alt={`${department?.name} activities`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DepartmentGalleryPage;
