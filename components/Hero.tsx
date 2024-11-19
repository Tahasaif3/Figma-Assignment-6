import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6">
              Learn new skills
              <br />
              online with ease
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-black text-white hover:bg-black/90"
              >
                Start learn
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-black hover:bg-gray-50"
              >
                Explore Courses
              </Button>
            </div>
          </div>
          <div className="relative h-[600px] bg-[#F8F0EA] rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Student with orange folder"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}