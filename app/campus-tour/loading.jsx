export default function Loading() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-theme-primary/20 border-t-theme-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-theme-primary font-medium">Loading gallery...</p>
      </div>
    )
  }
  