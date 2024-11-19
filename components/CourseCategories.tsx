import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LayoutGrid, LineChart, Settings, MessageCircle, Brain, Building2, Wallet, Briefcase } from 'lucide-react'

const categories = [
  { name: "Design & Development", courses: "50+", icon: LayoutGrid },
  { name: "Marketing", courses: "50+", icon: LineChart },
  { name: "Development", courses: "50+", icon: Settings },
  { name: "Communication", icon: MessageCircle },
  { name: "Digital Marketing", icon: LineChart },
  { name: "Self Development", icon: Brain },
  { name: "Business", icon: Building2 },
  { name: "Finance", icon: Wallet },
  { name: "Consulting", icon: Briefcase },
]

export default function CourseCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Courses By Category</h2>
          <p className="text-gray-600">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <category.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">50+ Courses Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}