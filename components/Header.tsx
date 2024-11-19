import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      <div className="hidden md:flex justify-between items-center px-4 py-2 text-sm border-b">
        <div>Phone Number: +92 342 45345</div>
        <div>Email: info@ddsgnr.com</div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/Ddsgnr.png"
                  alt="Logo" 
                  width={150}
                  height={50}
                />          
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-700">Home</Link>
              <Link href="/courses" className="text-gray-900 hover:text-gray-700">Courses</Link>
              <Link href="/services" className="text-gray-900 hover:text-gray-700">Services</Link>
              <Link href="/achievement" className="text-gray-900 hover:text-gray-700">Achievement</Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-700">About Us</Link>
              <Link href="/testimonial" className="text-gray-900 hover:text-gray-700">Testimonial</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Login</Button>
              <Button>Sign Up</Button>
            </div>
            <Button className="md:hidden" variant="ghost" onClick={() => setMobileMenuOpen((prev) => !prev)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
              <Link href="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Courses</Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
              <Link href="/achievement" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Achievement</Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About Us</Link>
              <Link href="/testimonial" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Testimonial</Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <Button variant="ghost" className="w-full justify-center">Login</Button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Button className="w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}