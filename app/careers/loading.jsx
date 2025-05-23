export default function Loading() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Hero Section Skeleton */}
        <div className="bg-theme-primary text-white py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="h-12 bg-white/20 rounded-lg w-3/4 mb-4 animate-pulse"></div>
              <div className="h-6 bg-white/10 rounded-lg w-1/2 mb-6 animate-pulse"></div>
              <div className="h-4 bg-white/10 rounded-lg w-1/4 animate-pulse"></div>
            </div>
          </div>
        </div>
  
        {/* Main Content Skeleton */}
        <div className="py-16 px-4 md:px-8 bg-white flex-grow">
          <div className="container mx-auto">
            {/* Introduction Skeleton */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="h-8 bg-gray-200 rounded-lg w-1/3 mx-auto mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded-lg w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded-lg w-5/6 mx-auto animate-pulse"></div>
            </div>
  
            {/* Filter Skeleton */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded-full w-28 animate-pulse"></div>
                ))}
              </div>
            </div>
  
            {/* Job Cards Skeleton */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 p-6">
                  <div className="flex justify-between mb-4">
                    <div className="h-6 bg-gray-200 rounded-full w-1/3 animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded-lg w-1/4 animate-pulse"></div>
                  </div>
                  <div className="h-7 bg-gray-200 rounded-lg w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded-lg w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded-lg w-5/6 mb-6 animate-pulse"></div>
                  <div className="space-y-3 mb-6">
                    <div className="h-4 bg-gray-100 rounded-lg w-2/3 animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded-lg w-1/2 animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded-lg w-3/5 animate-pulse"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded-lg w-1/3 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  