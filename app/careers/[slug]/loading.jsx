export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section Skeleton */}
            <div className="bg-theme-primary text-white py-16 px-4 md:px-8">
                <div className="container mx-auto">
                <div className="max-w-3xl">
                    <div className="h-4 bg-white/10 rounded-lg w-1/3 mb-4 animate-pulse"></div>
                    <div className="h-6 bg-white/20 rounded-lg w-1/4 mb-4 animate-pulse"></div>
                    <div className="h-10 bg-white/20 rounded-lg w-3/4 mb-4 animate-pulse"></div>
                    <div className="h-6 bg-white/10 rounded-lg w-full mb-6 animate-pulse"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="h-6 bg-white/10 rounded-lg animate-pulse"></div>
                    <div className="h-6 bg-white/10 rounded-lg animate-pulse"></div>
                    <div className="h-6 bg-white/10 rounded-lg animate-pulse"></div>
                    <div className="h-6 bg-white/10 rounded-lg animate-pulse"></div>
                    </div>
                </div>
                </div>
            </div>

            {/* Main Content Skeleton */}
            <div className="py-12 px-4 md:px-8 bg-white flex-grow">
                <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Skeleton */}
                    <div className="lg:w-2/3">
                    {/* Job Description Skeleton */}
                    <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="h-8 bg-gray-200 rounded-lg w-1/3 mb-6 animate-pulse"></div>
                        <div className="h-4 bg-gray-100 rounded-lg w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-100 rounded-lg w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-100 rounded-lg w-5/6 mb-6 animate-pulse"></div>

                        <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-4 animate-pulse"></div>
                        <div className="space-y-2 mb-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-4 bg-gray-100 rounded-lg w-full animate-pulse"></div>
                        ))}
                        </div>

                        <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-4 animate-pulse"></div>
                        <div className="space-y-2 mb-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-4 bg-gray-100 rounded-lg w-full animate-pulse"></div>
                        ))}
                        </div>

                        <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-4 animate-pulse"></div>
                        <div className="space-y-2 mb-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-4 bg-gray-100 rounded-lg w-full animate-pulse"></div>
                        ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-4 animate-pulse"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                            <div key={i}>
                                <div className="h-4 bg-gray-100 rounded-lg w-1/3 mb-1 animate-pulse"></div>
                                <div className="h-5 bg-gray-200 rounded-lg w-2/3 animate-pulse"></div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* Application Process Skeleton */}
                    <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="h-8 bg-gray-200 rounded-lg w-1/3 mb-6 animate-pulse"></div>
                        <div className="h-4 bg-gray-100 rounded-lg w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-100 rounded-lg w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-100 rounded-lg w-5/6 mb-6 animate-pulse"></div>

                        <div className="mt-6">
                        <div className="h-10 bg-gray-200 rounded-md w-48 animate-pulse"></div>
                        </div>

                        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
                        <div className="h-4 bg-yellow-100 rounded-lg w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-yellow-100 rounded-lg w-5/6 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Back to Careers Skeleton */}
                    <div className="mb-8">
                        <div className="h-6 bg-gray-200 rounded-lg w-40 animate-pulse"></div>
                    </div>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="lg:w-1/3">
                    {/* Share Job Skeleton */}
                    <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="h-6 bg-gray-200 rounded-lg w-1/2 mb-4 animate-pulse"></div>
                        <div className="flex gap-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
                        ))}
                        </div>
                    </div>

                    {/* Related Jobs Skeleton */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="h-6 bg-gray-200 rounded-lg w-1/2 mb-4 animate-pulse"></div>
                        <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-lg">
                            <div className="h-5 bg-gray-200 rounded-lg w-3/4 mb-2 animate-pulse"></div>
                            <div className="flex flex-wrap gap-4">
                                <div className="h-4 bg-gray-100 rounded-lg w-1/3 animate-pulse"></div>
                                <div className="h-4 bg-gray-100 rounded-lg w-1/2 animate-pulse"></div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}