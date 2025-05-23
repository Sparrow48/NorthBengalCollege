import { Book, FileText, Library } from 'lucide-react'
import React from 'react'

const JournalStats = () => {
  return (
    <>
        <div className="w-full">
            <div className="container px-4">
                <div className="grid grid-cols-3 gap-x-2 md:gap-x-16 gap-y-5 py-6 border-b">
                    <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-start">
                        <div className='flex-shrink-0 size-14 md:size-24 p-3 md:p-5 rounded-full bg-slate-100'>
                            <Library className="size-8 md:size-14" />
                        </div>
                        <div>
                            <div className="text-xl md:text-2xl lg:text-3xl font-semibold">13</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">journals</div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-start">
                        <div className='flex-shrink-0 size-14 md:size-24 p-3 md:p-5 rounded-full bg-slate-100'>
                            <Book className="size-8 md:size-14" />
                        </div>
                        <div>
                            <div className="text-xl md:text-2xl lg:text-3xl font-semibold">142</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">books</div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-start">
                        <div className='flex-shrink-0 size-14 md:size-24 p-3 md:p-5 rounded-full bg-slate-100'>
                            <FileText className="size-8 md:size-14" />
                        </div>
                        <div>
                            <div className="text-xl md:text-2xl lg:text-3xl font-semibold">20,391</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">peer-reviewed articles</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default JournalStats