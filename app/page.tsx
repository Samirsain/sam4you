import Header from "@/components/header"
import Hero from "@/components/hero"
import Resources from "@/components/resources"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Resources />
      
      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Platform
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive suite of digital solutions and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/services" className="group">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Services</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Professional web development, SEO, and digital marketing solutions</p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/ai-tools" className="group">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Tools</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Discover and review the best AI tools for your business needs</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Browse AI Tools
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Blog</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Latest insights, guides, and tips for digital growth</p>
                <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                  Read Articles
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">About Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Learn about our team, mission, and success stories</p>
                <div className="flex items-center text-orange-600 dark:text-orange-400 font-medium">
                  Know More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />
      
      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get the latest insights, tips, and updates delivered to your inbox
            </p>
          </div>
          <NewsletterSignup />
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  )
}
