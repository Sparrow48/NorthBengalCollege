import { cn } from "@/lib/utils"
import Image from "next/image"

const JournalCard = ({ className = "", journal }) => {
  return (
    <>
        <div className={cn("w-full group flex gap-4", className)}>
            <div className="overflow-hidden">
                <Image
                    src={`https://picsum.photos/120/150?random=${journal}`}
                    alt="Journal cover"
                    width={120}
                    height={150}
                    className="border border-gray-200 group-hover:scale-110 duration-200"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Published: 2024-10-15</span>
                <h2 className="text-lg font-semibold group-hover:text-theme-red-light mb-1">Oncoimmunology</h2>
                <div className="space-y-1">
                    <div className="text-sm">
                        <span className="font-medium">Publisher:</span>
                        <div className="text-sm text-muted-foreground">Name of Publisher</div>
                    </div>
                    <div className="text-xs">
                        <span className="font-medium">Author:</span>
                        <span className="text-muted-foreground">
                            John Doe, Dave Joe, John Doe, Dave Joe, John Doe, Dave Joe
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default JournalCard