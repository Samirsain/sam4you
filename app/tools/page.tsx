import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Download, 
  Calculator, 
  Hash, 
  Package, 
  Type, 
  FileText, 
  Code, 
  Image,
  Search,
  Mail,
  BarChart3,
  Zap,
  Instagram,
  Share2
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Tools - AI & Productivity Tools | Sam4You",
  description: "Access our collection of free AI tools, calculators, generators, and productivity tools. Boost your workflow with our comprehensive toolkit.",
  keywords: "free tools, AI tools, calculators, generators, productivity tools, online tools",
}

const tools = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "Generate high-quality content for blogs, social media, and marketing with AI-powered tools",
    icon: Sparkles,
    link: "/tools/ai-content-generator",
    color: "bg-purple-100 text-purple-600",
    badge: "AI Tools"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Generate stunning images from text descriptions using advanced AI technology",
    icon: Image,
    link: "/tools/image-generator",
    color: "bg-pink-100 text-pink-600",
    badge: "AI Tools"
  },
  {
    id: 3,
    title: "Pinterest Downloader",
    description: "Download Pinterest pins with AI-powered Pinterest Downloader. Save images and videos from Pinterest easily.",
    icon: Download,
    link: "/tools/pinterest-downloader",
    color: "bg-red-100 text-red-600",
    badge: "Downloaders"
  },
  {
    id: 4,
    title: "EMI Calculator",
    description: "Calculate your loan EMI, interest, and total amount with our free EMI calculator",
    icon: Calculator,
    link: "/tools/emi-calculator",
    color: "bg-green-100 text-green-600",
    badge: "Calculators"
  },
  {
    id: 5,
    title: "GST Calculator",
    description: "Calculate GST amount, tax rates, and total price with our comprehensive GST calculator",
    icon: Calculator,
    link: "/tools/gst-calculator",
    color: "bg-emerald-100 text-emerald-600",
    badge: "Calculators"
  },
  {
    id: 6,
    title: "Percentage Calculator",
    description: "Calculate percentages, percentage change, and percentage of a number with ease",
    icon: Hash,
    link: "/tools/percentage-calculator",
    color: "bg-indigo-100 text-indigo-600",
    badge: "Calculators"
  },
  {
    id: 7,
    title: "SKU Generator",
    description: "Generate unique SKU codes for your products with our free SKU generator tool",
    icon: Package,
    link: "/tools/sku-generator",
    color: "bg-orange-100 text-orange-600",
    badge: "Generators"
  },
  {
    id: 8,
    title: "Case Converter",
    description: "Convert text between different cases - uppercase, lowercase, title case, and more",
    icon: Type,
    link: "/tools/case-converter",
    color: "bg-cyan-100 text-cyan-600",
    badge: "Text Tools"
  },
  {
    id: 9,
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in your text with our word counter",
    icon: FileText,
    link: "/tools/word-counter",
    color: "bg-teal-100 text-teal-600",
    badge: "Text Tools"
  },
  {
    id: 10,
    title: "CSS Unit Converter",
    description: "Convert between different CSS units - px, em, rem, %, vw, vh, and more",
    icon: Code,
    link: "/tools/css-unit-converter",
    color: "bg-blue-100 text-blue-600",
    badge: "Web Tools"
  },
  {
    id: 11,
    title: "SEO Checker",
    description: "Analyze your website SEO performance and get actionable insights",
    icon: Search,
    link: "/tools/seo-checker",
    color: "bg-yellow-100 text-yellow-600",
    badge: "SEO Tools"
  },
  {
    id: 12,
    title: "Email Tools",
    description: "Validate email addresses, extract emails, and manage email lists efficiently",
    icon: Mail,
    link: "/tools/email-tools",
    color: "bg-gray-100 text-gray-600",
    badge: "Utilities"
  },
  {
    id: 13,
    title: "SEO Tools Suite",
    description: "Essential free tools to analyze and improve your website's SEO performance",
    icon: BarChart3,
    link: "/tools/seo-tools",
    color: "bg-green-100 text-green-600",
    badge: "SEO Tools"
  },
  {
    id: 14,
    title: "Instagram Tools",
    description: "Generate Instagram bios, name suggestions, and username ideas",
    icon: Instagram,
    link: "/tools/instagram-tools",
    color: "bg-pink-100 text-pink-600",
    badge: "Social Media"
  },
  {
    id: 15,
    title: "Social Media Tools",
    description: "Best tools for managing and scheduling social media posts across platforms",
    icon: Share2,
    link: "/tools/social-tools",
    color: "bg-purple-100 text-purple-600",
    badge: "Social Media"
  },
  {
    id: 16,
    title: "Speed Testing Tools",
    description: "Top tools to test and optimize your website loading speed",
    icon: Zap,
    link: "/tools/speed-tools",
    color: "bg-red-100 text-red-600",
    badge: "Performance"
  }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Free Productivity Tools</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Free Tools Collection
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Boost your productivity with our comprehensive collection of free AI tools, 
                calculators, generators, and utilities. Everything you need in one place.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculators
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Type className="w-4 h-4 mr-2" />
                  Text Tools
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Download className="w-4 h-4 mr-2" />
                  Free to Use
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Explore Our Tools
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose from our wide range of free tools designed to enhance your workflow and productivity
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tools.map((tool) => {
                  const Icon = tool.icon
                  return (
                    <Link key={tool.id} href={tool.link}>
                      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50/50">
                        <CardHeader className="text-center pb-4">
                          <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-2">
                            {tool.badge}
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {tool.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pt-0">
                          <CardDescription className="text-gray-600 text-sm leading-relaxed">
                            {tool.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our Tools?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our tools are designed with user experience and functionality in mind
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Reliable</h3>
                    <p className="text-gray-600">
                      All tools are optimized for speed and reliability, ensuring smooth performance every time.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Free</h3>
                    <p className="text-gray-600">
                      Access all our tools completely free of charge. No hidden fees, no subscriptions required.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered</h3>
                    <p className="text-gray-600">
                      Many of our tools leverage advanced AI technology to deliver superior results and user experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Start using our free tools today and experience the difference
              </p>
              <Link 
                href="#tools" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <Zap className="w-5 h-5" />
                Explore All Tools
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
