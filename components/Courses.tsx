import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const courses = [
  {
    id: 1,
    title: "UX/UI Design 201",
    description: "Learn advanced concepts in user experience and interface design",
    price: "499",
    image: "/Blog1.png?height=200&width=300",
    tag: { text: "Featured", color: "#22c55e" }
  },
  {
    id: 2,
    title: "Introduction to Python",
    description: "Master the basics of Python programming language",
    price: "399",
    image: "/Blog2.png?height=200&width=300",
    tag: { text: "Popular", color: "#ec4899" }
  },
  {
    id: 3,
    title: "Data Analysis for Beginners",
    description: "Start your journey in data analysis with practical examples",
    price: "449",
    image: "/Blog3.png?height=200&width=300"
  },
  {
    id: 4,
    title: "AI Specialization",
    description: "Dive deep into artificial intelligence and machine learning",
    price: "599",
    image: "/Blog4.png?height=200&width=300"
  },
  {
    id: 5,
    title: "Rule of Law",
    description: "Understanding legal principles and their applications",
    price: "349",
    image: "/Blog5.png?height=200&width=300"
  },
  {
    id: 6,
    title: "Introduction to Webflow",
    description: "Build professional websites without coding",
    price: "299",
    image: "/Blog6.png?height=200&width=300"
  }
]

export default function Courses() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>
        <p className="font-roboto font-normal text-[18px] leading-[27px] text-center mb-8">
          Your Ultimate Guide to learning
        </p>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button variant="outline" className="rounded-l-md rounded-r-none">Popular</Button>
            <Button variant="outline" className="rounded-none border-x-0">Recommended</Button>
            <Button variant="outline" className="rounded-r-md rounded-l-none">Best Price</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {course.tag && (
                  <span className="absolute top-4 left-4 px-2 py-1 text-xs font-medium text-white rounded-full" 
                    style={{ backgroundColor: course.tag.color }}>
                    {course.tag.text}
                  </span>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="inline-flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    Enroll Now
                  </Button>
                  <span className="font-bold">${course.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline">View All Courses</Button>
        </div>
      </div>
    </section>
  )}