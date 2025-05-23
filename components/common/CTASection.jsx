import { cn } from "@/lib/utils"
import Link from "next/link"

export default function CTASection({ className }) {
    return (
        <section className={cn("py-16 px-4 md:px-8 bg-theme-primary text-white", className)}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Join Our Medical College</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Begin your journey towards becoming a skilled and compassionate medical professional. Apply for admission today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/admission"
                        className="bg-theme-red-light hover:bg-theme-red-dark text-white px-6 py-3 rounded-md transition"
                    >
                        Apply for Admission
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-white hover:bg-gray-100 text-theme-primary px-6 py-3 rounded-md transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}