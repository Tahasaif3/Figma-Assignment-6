import Image from "next/image"
import Link from "next/link"
import { LinkedinIcon, TwitterIcon, GlobeIcon } from 'lucide-react'

const team = [
  {
    name: "James Nduku",
    role: "Marketing Coordinator",
    image: "/Team1.png?height=400&width=400",
  },
  {
    name: "Joseph Munyambu",
    role: "Nursing Assistant",
    image: "/Team2.png?height=400&width=400",
  },
  {
    name: "Joseph Ngumbau",
    role: "Medical Assistant",
    image: "/Team3.png?height=400&width=400",
  },
  {
    name: "Erick Kipkemboi",
    role: "Web Designer",
    image: "/Team4.png?height=400&width=400",
  },
  {
    name: "Stephen Kerubo",
    role: "President of Sales",
    image: "/Team5.png?height=400&width=400",
  },
  {
    name: "John Leboo",
    role: "Dog Trainer",
    image: "/Team6.png?height=400&width=400",
  },
]

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our team</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{member.role}</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <GlobeIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}