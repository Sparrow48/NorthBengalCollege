import PageHeader from "@/components/common/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Book, FileText, Home, Library } from "lucide-react"
import Image from "next/image"
import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png'
import Link from "next/link"
import JournalPagination from "@/components/journal/JournalPagination"
import JournalFilters from "@/components/journal/JournalFilters"
import { DEPARTMENTS } from "@/data/departments"
import JournalStats from "@/components/journal/JournalStats"
import JournalCard from "@/components/journal/JournalCard"

const JournalsDepartmentPage = async ({ params }) => {
    const { slug } = await params;
    const department = DEPARTMENTS?.find(department => department?.slug === slug)

  return (
    <>
        <PageHeader
            className={"text-white md:min-h-60 bg-cover bg-no-repeat flex items-center"}
            titleClass="text-2xl md:text-4xl"
            breadcumbClass="text-white"
            title={`${department?.name} Journals`}
            style={{
                backgroundImage: `url('${PageHeaderBanner?.src}')`,
            }}
            paths={[
                { name: <Home className='size-5' />, url: "/" },
                { name: "Journals", url: "/journals" },
                { name: department?.name, url: "" },
            ]}
        />

        
        {/* Stats Bar */}
        <JournalStats />

        {/* Search Section */}
        <JournalFilters department={department} />

        <main className="py-10">
            <div className="w-full">
                <div className="container px-4">
                    <div className="bg-white">

                        {/* Journal Grid */}
                        <div className="container mx-auto py-8">
                            <div className="grid md:grid-cols-2 md:gap-6 divide-y md:divide-none child:py-6 md:child:py-2">
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

export default JournalsDepartmentPage