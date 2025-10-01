import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogSection from "@/components/blog-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, FileText, Calendar, User, Tag } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Latest Insights
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and expert advice on digital growth and technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                <Link href="#blog">
                  Read Latest Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 py-4">
                <Link href="/services">
                  Get Content Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our most popular content categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Tag,
                title: "SEO & Marketing",
                description: "Latest SEO strategies, digital marketing tips, and growth hacking techniques.",
                count: "25+ Articles",
                color: "text-purple-500"
              },
              {
                icon: FileText,
                title: "Web Development",
                description: "Technical guides, coding tutorials, and best practices for modern web development.",
                count: "18+ Articles",
                color: "text-blue-500"
              },
              {
                icon: Calendar,
                title: "Business Growth",
                description: "Entrepreneurship insights, business strategies, and success stories.",
                count: "15+ Articles",
                color: "text-green-500"
              }
            ].map((item, index) => (
              <Link key={index} href="#blog" className="group">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                  <div className={`w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Blog Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out our most popular and trending articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "10 SEO Strategies to Boost Your Rankings in 2025",
                excerpt: "Discover the latest SEO techniques and best practices to improve your search engine visibility and drive organic traffic.",
                date: "March 15, 2025",
                category: "SEO",
                link: "#",
                readTime: "8 min read"
              },
              {
                title: "How AI is Transforming Digital Marketing",
                excerpt: "Explore how artificial intelligence is revolutionizing marketing automation, customer engagement, and campaign optimization.",
                date: "March 10, 2025",
                category: "AI & Marketing",
                link: "#",
                readTime: "12 min read"
              },
              {
                title: "Building High-Performance Web Applications",
                excerpt: "Learn the essential techniques for creating fast, scalable, and user-friendly web applications that deliver exceptional user experience.",
                date: "March 5, 2025",
                category: "Development",
                link: "#",
                readTime: "15 min read"
              },
              {
                title: "WordPress vs Webflow: Complete Comparison 2025",
                excerpt: "Detailed comparison of WordPress and Webflow to help you choose the best platform for your website needs.",
                date: "Feb 28, 2025",
                category: "Web Design",
                link: "#",
                readTime: "10 min read"
              },
              {
                title: "Digital Marketing Trends to Watch in 2025",
                excerpt: "Stay ahead of the curve with the latest digital marketing trends and strategies that will dominate 2025.",
                date: "Feb 22, 2025",
                category: "Marketing",
                link: "#",
                readTime: "7 min read"
              },
              {
                title: "How to Start a Profitable Blog in 2025",
                excerpt: "Complete guide to starting a successful blog with monetization strategies and growth techniques.",
                date: "Feb 18, 2025",
                category: "Blogging",
                link: "#",
                readTime: "20 min read"
              }
            ].map((post, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest insights and updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700 px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Join 10,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Content?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Let us create high-quality, SEO-optimized content for your business to drive engagement and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/services">
                Get Content Services
              </Link>
            </Button>
            <div className="flex gap-6 text-sm text-green-100">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                SEO Optimized
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Fast Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}