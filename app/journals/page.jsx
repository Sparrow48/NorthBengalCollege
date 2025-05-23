import PageHeader from "@/components/common/PageHeader"
import { Book, FileText, Home, Library } from "lucide-react"
import PageHeaderBanner from '@/assets/images/banner/page-header-bg.png'
import Link from "next/link"
import JournalPagination from "@/components/journal/JournalPagination"
import JournalFilters from "@/components/journal/JournalFilters"
import JournalCard from "@/components/journal/JournalCard"
import JournalStats from "@/components/journal/JournalStats"

const JournalsPage = () => {
  return (
    <>
        <PageHeader
            className={"text-white md:min-h-60 bg-cover bg-no-repeat flex items-center"}
            titleClass="text-4xl md:text-6xl"
            breadcumbClass="text-white"
            title={"Journals"}
            style={{
                backgroundImage: `url('${PageHeaderBanner?.src}')`,
            }}
            paths={[
                { name: <Home className='size-5' />, url: "/" },
                { name: "Journals", url: "" },
            ]}
        />

        
        {/* Stats Bar */}
        <JournalStats />

        {/* Search Section */}
        <JournalFilters />

        <main className="py-10">
            <div className="w-full">
                <div className="container px-4">
                    <div className="bg-white">

                        {/* Journal Grid */}
                        <div className="container mx-auto py-8">
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

export default JournalsPage