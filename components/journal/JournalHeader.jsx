import Image from 'next/image'

const JournalHeader = ({ journal }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
        <Image
            src={`https://picsum.photos/120/150?random=${journal}`}
            alt="Journal cover"
            width={120}
            height={150}
            className="border border-gray-200"
        />
        <div className="space-y-2">
            <h1 className="text-xl font-semibold">Vol. 14 No. 04 (2024)</h1>
            <div className="text-sm">
                <div className="space-y-3">
                    <div className="font-medium space-x-2">
                        <span className="">Published:</span>
                        <span className="text-theme-red-light">2024-10-15</span>
                    </div>
                    <div className="">
                        <span className="font-medium">Publisher:</span>
                        <div className="text-muted-foreground">Name of Publisher</div>
                    </div>
                    <div className="">
                        <span className="font-medium">Author:</span>
                        <span className="text-muted-foreground">
                            John Doe, Dave Joe, John Doe, Dave Joe, John Doe, Dave Joe
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JournalHeader