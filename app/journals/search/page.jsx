import { DEPARTMENTS } from '@/data/departments';
import { Home } from 'lucide-react';
import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png'
import JournalFilters from '@/components/journal/JournalFilters';
import JournalCard from '@/components/journal/JournalCard';
import PageHeader from '@/components/common/PageHeader';
import JournalPagination from '@/components/journal/JournalPagination';
import Link from 'next/link';

const JournalSearchPage = async ({ searchParams }) => {
    const { keyword, department : depSlug } = await searchParams;
    const department = DEPARTMENTS?.find(department => department?.slug === depSlug);
    const searchKeyWord = decodeURIComponent(keyword)

    const getBreadCumbPaths = () => {
        const breadcumbPaths = [
            { name: <Home className='size-5' />, url: "/" },
            { name: "Journal", url: "/journals" },
            // { name: "Search", url: "" },
        ]
    
        if (department) {
            breadcumbPaths?.push({
                name: department?.name,
                url: `/journals/department/${department?.slug}`
            })
        }
    
        breadcumbPaths?.push({ name: "Search", url: "" })

        return breadcumbPaths;
    }

  return (
    <>
        <PageHeader
            className={"text-white md:min-h-60 bg-cover bg-no-repeat flex items-center"}
            titleClass="text-2xl md:text-4xl"
            breadcumbClass="text-white"
            title={`${department?.name || ""} Journal`}
            description={`Searched for "${searchKeyWord}"`}
            descriptionClass="text-white/80"
            style={{
                backgroundImage: `url('${PageHeaderBanner?.src}')`,
            }}
            paths={getBreadCumbPaths()}
        />

        <JournalFilters department={department} />

        <main className="py-10">
            <div className="w-full">
                <div className="container px-4">
                    <div className="bg-white">

                        <span className='inline-block text-lg lg:text-xl font-bold text-theme-red-light'>Search Results:</span>

                        {/* Journal Grid */}
                        <div className="py-8">
                            <div className="grid md:grid-cols-2 gap-6">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <Link key={i} href={`/journals/journal-${i+1}`} className="group flex gap-4">
                                    <JournalCard journal={`journal-${i+1}`} />
                                </Link>
                            ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-2 py-8">
                            <JournalPagination />
                        </div>
                    </div>  
                </div>
            </div>
        </main>
    </>
  )
}

export default JournalSearchPage