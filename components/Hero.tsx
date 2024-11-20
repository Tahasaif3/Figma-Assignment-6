import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-center">
            <div className="space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Learn new skills
                <br />
                online with ease
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
                Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 h-12 px-6 sm:px-8 text-base w-full sm:w-auto"
                >
                  Start learning now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-black hover:bg-gray-50 h-12 px-6 sm:px-8 text-base w-full sm:w-auto"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
            <div className="relative w-full md:w-[600px] h-[400px] sm:h-[600px] md:h-[860px] mt-8 md:mt-0 md:ml-auto">
              <Image
                src="/Image.png"
                alt="Student with orange folder"
                fill
                className="object-contain object-center md:object-right"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center md:text-left">
              Trusted by 2000+<br className="hidden sm:inline" />
              companies worldwide.
            </h2>
            <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
              <Image
                src="/Logos.png"
                alt="Trusted companies logos"
                width={720}
                height={48}
                className="h-6 sm:h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}