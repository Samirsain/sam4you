import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
                  <Link href="/" className="mb-4 block">
                    <Image
                      src="/Sam4You.svg"
                      alt="Sam4You Logo"
                      width={150}
                      height={50}
                      className="object-contain h-10 w-auto"
                    />
                  </Link>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              We design systems that grow while you sleep.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses through innovative digital solutions, AI-powered tools, and strategic growth marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/ai-tools" className="text-gray-300 hover:text-white transition-colors">
                        AI Tools
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                        Blog & Guides
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Free Tools
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Templates
                      </a>
                    </li>
                  </ul>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="font-semibold text-white">Stay Updated</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/codexmir" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/samirsain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400">© {currentYear} Sam4You. All rights reserved.</p>
              <p className="text-gray-500">Built with Next.js, TypeScript & Tailwind CSS</p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Crafted with ♥ by <span className="text-white font-medium">SamirSain</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

