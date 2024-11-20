import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md"

const testimonials = [
  {
    name: "Sarah Wilson",
    role: "UX Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique Duis cursus mi quis viverra ornare",
    image: "/Team3.png",
  },
  {
    name: "John Smith",
    role: "Web Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique. Duis cursus mi quis viverra ornare",
    image: "/Team1.png",
  },
  {
    name: "Emily Brown",
    role: "Marketing Manager",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique. Duis cursus mi quis viverra ornare",
    image: "/Team6.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer testimonials</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.name} 
                className="border-2 border-black min-h-[250px] flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <MdStar key={i} className="h-4 w-4 fill-black text-black" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground flex-grow">
                   `{testimonial.text}`
                  </p>
                  
                  <div className="flex items-center gap-3 mt-6">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center">
            {/* left side dots */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === 0 ? "bg-black" : "bg-gray-200"
                  }`}
                  />
              ))}
            </div>
  
             {/* left side navigation */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200"
                aria-label="Previous slide"
              >
                <MdChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200"
                aria-label="Next slide"
              >
                <MdChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}