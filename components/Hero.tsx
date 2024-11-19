import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Learn new skills
              <br />
              online with ease
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-black text-white hover:bg-black/90 px-8 py-6"
              >
                Start learn
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-black hover:bg-gray-50 px-8 py-6"
              >
                Explore Courses
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl" />
            <Image
              src="/Image.png?height=800&width=600"
              alt="Student with orange folder"
              width={600}
              height={800}
              className="relative rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}