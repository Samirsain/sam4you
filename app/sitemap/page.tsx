import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SitemapPage() {
  const pages = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/", description: "Landing page with overview of our services" },
        { name: "Services", url: "/services", description: "Our comprehensive digital services" },
        { name: "AI Tools", url: "/ai-tools", description: "Discover AI-powered tools and solutions" },
        { name: "Blog", url: "/blog", description: "Latest insights and articles" },
        { name: "About", url: "/about", description: "Learn about our team and mission" },
      ]
    },
    {
      category: "Legal Pages",
      links: [
        { name: "Privacy Policy", url: "/privacy", description: "How we collect and use your data" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions for using our services" },
      ]
    },
    {
      category: "External Resources",
      links: [
        { name: "GitHub Profile", url: "https://github.com/samirsain", description: "Our open-source projects and code", external: true },
        { name: "LinkedIn Profile", url: "https://linkedin.com/in/samirsain", description: "Professional network and updates", external: true },
        { name: "Instagram", url: "https://instagram.com/samir_sain0001", description: "Behind-the-scenes and updates", external: true },
      ]
    },
    {
      category: "Blog Resources",
      links: [
        { name: "SEO Strategies 2025", url: "#", description: "Latest SEO techniques and best practices", external: false },
        { name: "AI Marketing Guide", url: "#", description: "How AI is transforming digital marketing", external: false },
        { name: "Web Development", url: "#", description: "Building high-performance web applications", external: false },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Site <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Navigate through all pages and resources on our website
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {pages.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {section.category}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {link.name}
                        </h3>
                        {link.external && (
                          <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                        )}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {link.description}
                      </p>
                      
                      <Link 
                        href={link.url} 
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                      >
                        Visit Page
                        <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Website Statistics
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">12+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Total Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Blog Articles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Social Profiles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
