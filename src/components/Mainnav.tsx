import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <header className="w-full bg-[#0A2B6C] text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SjarWDbiBsK9OXBwWK07nkpZAIbPa7.png"
                alt="Border States Logo"
                width={120}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-semibold">PXP</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/nav1" className="text-sm font-medium hover:text-gray-200 transition-colors">
              Nav 1
            </Link>
            <Link href="/nav2" className="text-sm font-medium hover:text-gray-200 transition-colors">
              Nav 2
            </Link>
            <Link href="/nav3" className="text-sm font-medium hover:text-gray-200 transition-colors">
              Nav 3
            </Link>
          </nav>

          {/* Right Section - Search & Profile */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
              <Search className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Kelly</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

