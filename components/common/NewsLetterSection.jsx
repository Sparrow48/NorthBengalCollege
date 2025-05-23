import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const NewsLetterSection = () => {
  return (
    <section className="py-12 bg-theme-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">
              Stay updated with the latest news, events, and announcements from North Bengal Medical College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-theme-red-light hover:bg-theme-red-dark text-white">Subscribe</Button>
            </div>
          </div>
        </div>
    </section>
  )
}
export default NewsLetterSection