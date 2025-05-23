import { Skeleton } from "@/components/ui/skeleton"

const SearchSkeleton = () => {
  return (
    <div className="flex w-full gap-2">
      <Skeleton className="h-12 flex-1 rounded-md bg-white" />
      <Skeleton className="h-12 w-28 rounded-md bg-[#E31C79]/20" />
    </div>
  )
}

export default SearchSkeleton;