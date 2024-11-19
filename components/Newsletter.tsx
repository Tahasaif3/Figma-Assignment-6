import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button variant="outline" className="hover:bg-black hover:text-white bg-white-200 text-black px-4 py-2 rounded">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500">
              By subscribing you agree to with our{" "}
              <Link href="/privacy" className="underline hover:text-gray-900">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}