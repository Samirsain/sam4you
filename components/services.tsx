"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Search, ShoppingCart, Share2, Bot, TrendingUp, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Web Design",
    category: "Development",
    featured: true,
    description: "Performance-first websites that convert visitors into customers.",
    features: [
      "Custom WordPress & WooCommerce builds",
      "Full-stack Web & Mobile App Development",
      "Clean, responsive, and fast-loading pages",
      "CMS you can easily manage"
    ],
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50/50",
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    category: "SEO",
    featured: true,
    description: "Dominate search rankings and drive organic growth.",
    features: [
      "On-page & technical SEO optimization",
      "Keyword research & content planning",
      "Blog content creation (long-form, optimized)",
      "Local & global ranking strategy"
    ],
    color: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-50/50",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    category: "Development",
    featured: false,
    description: "Build powerful, scalable e-commerce solutions that drive sales and growth.",
    features: [
      "Custom e-commerce platforms",
      "WooCommerce & Shopify development",
      "Payment gateway integration",
      "Inventory management systems"
    ],
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50/50",
  },
  {
    icon: Share2,
    title: "Digital Marketing & Automation",
    category: "Marketing",
    featured: true,
    description: "Comprehensive digital marketing solutions and automation.",
    features: [
      "Google Ads & Meta Ads strategy",
      "Marketing funnel optimization",
      "Landing page design & development",
      "Email marketing & CRM setup"
    ],
    color: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50/50",
  },
  {
    icon: Bot,
    title: "Technical SEO",
    category: "SEO",
    featured: false,
    description: "Optimize your website's technical foundation for maximum search engine performance.",
    features: [
      "Site speed optimization",
      "Core Web Vitals improvement",
      "Mobile responsiveness",
      "Technical audit & fixes"
    ],
    color: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50/50",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    category: "Marketing",
    featured: false,
    description: "Build your brand and engage your audience with strategic social media marketing.",
    features: [
      "Social media strategy & planning",
      "Content creation & management",
      "Community building & engagement",
      "Performance tracking & analytics"
    ],
    color: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50/50",
  },
]

const categories = ["All", "Development", "SEO", "Marketing", "Automation"]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const getCategoryCount = (category: string) => {
    if (category === "All") return services.length
    return services.filter(s => s.category === category).length
  }

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-gray-900">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Digital Growth. AI Automation. Systems That Scale.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
              <span className="ml-2 opacity-70">{getCategoryCount(category)}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {filteredServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600"
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {service.category}
                    </span>
                </div>
                
                <CardHeader className="pt-16 pb-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} strokeWidth={2} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 pb-6">
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Check className={`w-4 h-4 mt-0.5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent flex-shrink-0`} strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group/btn hover:bg-blue-50 hover:border-blue-300 transition-all"
                  >
                    <Link href="#contact">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/50 rounded-2xl px-8 py-6 shadow-lg border border-blue-100 dark:border-blue-800">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+ Projects Completed</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Trusted by businesses worldwide</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have grown with our expert digital services. Let's discuss your project and create a custom strategy for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="#contact">
                Free Consultation
              </Link>
            </Button>
            <div className="flex gap-6 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                24-48h Response
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                5-Star Rated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
