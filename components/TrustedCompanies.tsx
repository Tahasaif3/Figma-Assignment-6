import Image from "next/image"

export default function TrustedCompanies() {
  return (
    <div className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Trusted by 2000+ companies worldwide
          </h2>
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src="/Logos.png"
              alt="Company logos"
              width={720}
              height={48}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}