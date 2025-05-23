export default function GalleryLoading() {
  return (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-theme-primary/20 border-t-theme-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-theme-primary font-medium">Loading gallery...</p>
      </div>
    </div>
  )
}
