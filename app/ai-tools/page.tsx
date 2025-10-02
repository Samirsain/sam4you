import Header from "@/components/header"
import Footer from "@/components/footer"
import AITools from "@/components/ai-tools"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Star, Bot, Zap, Target } from "lucide-react"

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              AI-Powered Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Discover <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Tools</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge AI tools and automation solutions to boost your productivity and business growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Link href="#ai-tools">
                  Browse All Tools
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 py-4">
                <Link href="/services">
                  Get AI Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <AITools />

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose AI Tools?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Leverage the power of artificial intelligence to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Boost Productivity",
                description: "Automate repetitive tasks and streamline workflows to increase efficiency by up to 300%.",
                color: "text-yellow-500"
              },
              {
                icon: Target,
                title: "Precision Results",
                description: "AI-powered tools deliver accurate, consistent results with minimal human intervention.",
                color: "text-green-500"
              },
              {
                icon: Bot,
                title: "24/7 Automation",
                description: "Round-the-clock operation ensures your business never sleeps and always performs.",
                color: "text-blue-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <div className={`w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "400+", label: "AI Tools Reviewed" },
              { value: "50+", label: "Categories Covered" },
              { value: "100K+", label: "Users Helped" },
              { value: "4.9/5", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Embrace AI?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Start exploring AI tools today and transform your business with cutting-edge automation and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="https://wa.me/919352410667?text=Hi!%20I%27m%20interested%20in%20AI%20consultation%20and%20tools%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                Get AI Consultation
              </a>
            </Button>
            <div className="flex gap-6 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Free Tool Reviews
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Expert Recommendations
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
