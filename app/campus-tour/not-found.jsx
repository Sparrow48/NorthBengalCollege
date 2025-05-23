import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-theme-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The campus tour page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="bg-theme-primary hover:bg-theme-primary-dark text-white px-6 py-3 rounded-md inline-block transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
