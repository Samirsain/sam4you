"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, ExternalLink, CheckCircle, AlertTriangle, Info, Clock, Smartphone, Monitor, Globe, BarChart3, TrendingUp } from "lucide-react"
import Link from "next/link"

interface SpeedTool {
  name: string
  description: string
  category: string
  free: boolean
  features: string[]
  link: string
  rating: number
  bestFor: string
}

const speedTools = [
  {
    name: "Google PageSpeed Insights",
    description: "Official Google tool for analyzing website performance and Core Web Vitals",
    category: "Performance Analysis",
    free: true,
    features: ["Core Web Vitals", "Performance scores", "Mobile optimization", "Real user metrics"],
    link: "https://pagespeed.web.dev/",
    rating: 5,
    bestFor: "Overall performance analysis"
  },
  {
    name: "GTmetrix",
    description: "Comprehensive website speed testing with detailed performance reports",
    category: "Speed Testing",
    free: true,
    features: ["Page load time", "Waterfall analysis", "Performance grades", "Video recording"],
    link: "https://gtmetrix.com/",
    rating: 5,
    bestFor: "Detailed speed analysis"
  },
  {
    name: "WebPageTest",
    description: "Advanced website performance testing from multiple locations worldwide",
    category: "Advanced Testing",
    free: true,
    features: ["Multiple locations", "Different devices", "Connection speeds", "Filmstrip view"],
    link: "https://www.webpagetest.org/",
    rating: 5,
    bestFor: "Global performance testing"
  },
  {
    name: "Pingdom Website Speed Test",
    description: "Simple and fast website speed testing with performance insights",
    category: "Quick Testing",
    free: true,
    features: ["Load time analysis", "Performance grade", "File size breakdown", "Request analysis"],
    link: "https://tools.pingdom.com/",
    rating: 4,
    bestFor: "Quick speed checks"
  },
  {
    name: "Google Mobile-Friendly Test",
    description: "Test if your website is optimized for mobile devices",
    category: "Mobile Testing",
    free: true,
    features: ["Mobile compatibility", "Usability issues", "Page loading", "Mobile optimization"],
    link: "https://search.google.com/test/mobile-friendly",
    rating: 4,
    bestFor: "Mobile optimization"
  },
  {
    name: "Lighthouse (Chrome DevTools)",
    description: "Built-in Chrome tool for comprehensive website auditing",
    category: "Development Tools",
    free: true,
    features: ["Performance audit", "Accessibility check", "SEO analysis", "Best practices"],
    link: "https://developers.google.com/web/tools/lighthouse",
    rating: 5,
    bestFor: "Developer-focused analysis"
  },
  {
    name: "Site24x7 Website Monitoring",
    description: "Continuous website monitoring and performance tracking",
    category: "Monitoring",
    free: true,
    features: ["Uptime monitoring", "Performance tracking", "Alert notifications", "Historical data"],
    link: "https://www.site24x7.com/",
    rating: 4,
    bestFor: "Continuous monitoring"
  },
  {
    name: "Dareboost",
    description: "Website performance and quality analysis with actionable recommendations",
    category: "Quality Analysis",
    free: true,
    features: ["Performance analysis", "Quality score", "Accessibility check", "SEO audit"],
    link: "https://www.dareboost.com/",
    rating: 4,
    bestFor: "Quality and performance"
  },
  {
    name: "Yellow Lab Tools",
    description: "Front-end performance testing and optimization recommendations",
    category: "Frontend Analysis",
    free: true,
    features: ["Frontend performance", "JavaScript analysis", "CSS optimization", "Image optimization"],
    link: "https://yellowlab.tools/",
    rating: 4,
    bestFor: "Frontend optimization"
  },
  {
    name: "Google Search Console",
    description: "Monitor Core Web Vitals and page experience metrics",
    category: "Core Web Vitals",
    free: true,
    features: ["Core Web Vitals", "Page experience", "Mobile usability", "Search performance"],
    link: "https://search.google.com/search-console",
    rating: 5,
    bestFor: "Core Web Vitals tracking"
  }
]

const categories = [
  { name: "All", icon: Globe },
  { name: "Performance Analysis", icon: BarChart3 },
  { name: "Speed Testing", icon: Zap },
  { name: "Advanced Testing", icon: TrendingUp },
  { name: "Quick Testing", icon: Clock },
  { name: "Mobile Testing", icon: Smartphone },
  { name: "Development Tools", icon: Monitor },
  { name: "Monitoring", icon: Info },
  { name: "Quality Analysis", icon: CheckCircle },
  { name: "Frontend Analysis", icon: AlertTriangle },
  { name: "Core Web Vitals", icon: BarChart3 }
]

export default function SpeedToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTools = speedTools.filter(tool => {
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Best Website Speed Testing Tools
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Top tools to test and optimize your website loading speed
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search speed testing tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.name
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{tool.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                        {tool.category}
                      </span>
                      {tool.free && (
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                          Free
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(tool.rating)}
                      <span className="text-sm text-gray-500 ml-1">({tool.rating}/5)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4">
                  {tool.description}
                </CardDescription>

                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-1">Best For:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{tool.bestFor}</p>
                </div>

                <Button asChild className="w-full group-hover:bg-blue-600">
                  <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Visit Tool
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Tips */}
        <div className="mt-12">
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Website Speed Optimization Tips
                  </h3>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• <strong>Optimize Images:</strong> Compress and use modern formats like WebP</li>
                    <li>• <strong>Enable Caching:</strong> Use browser and server-side caching</li>
                    <li>• <strong>Minify Code:</strong> Remove unnecessary characters from CSS, JS, and HTML</li>
                    <li>• <strong>Use CDN:</strong> Distribute content across multiple servers</li>
                    <li>• <strong>Optimize Core Web Vitals:</strong> Focus on LCP, FID, and CLS metrics</li>
                    <li>• <strong>Reduce HTTP Requests:</strong> Combine files and use sprites</li>
                    <li>• <strong>Enable Compression:</strong> Use Gzip or Brotli compression</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="#contact">
              Get Professional Speed Optimization
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools/seo-checker">
              Check Your Website SEO
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
