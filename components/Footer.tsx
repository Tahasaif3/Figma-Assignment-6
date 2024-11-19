import Image from "next/image"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/Ddsgnr.png" 
                alt="Ddsgnr Logo" 
                width={120} 
                height={40}
              />
            </Link>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Courses</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Business</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Development</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Technology</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Design</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Programming</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Career</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Resume</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Learning</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Interview Preparation</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Jobs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Help/Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms and Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Partners</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            2023 Ddsgnr. All right reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900">
              Cookies Settings
            </Link>
          </div>
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
      </div>
    </footer>
  )
}