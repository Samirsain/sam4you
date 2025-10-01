"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search, ExternalLink, CheckCircle, AlertTriangle, Info, Zap, Target, TrendingUp, Globe, Eye, BarChart3 } from "lucide-react"
import Link from "next/link"

interface SEOTool {
  name: string
  description: string
  category: string
  free: boolean
  features: string[]
  link: string
  rating: number
}

const seoTools = [
  {
    name: "Google Search Console",
    description: "Official Google tool for monitoring website performance in search results",
    category: "Analytics",
    free: true,
    features: ["Search performance", "Index coverage", "Core Web Vitals", "Mobile usability"],
    link: "https://search.google.com/search-console",
    rating: 5
  },
  {
    name: "Google PageSpeed Insights",
    description: "Analyze your website's loading speed and performance metrics",
    category: "Performance",
    free: true,
    features: ["Page speed analysis", "Core Web Vitals", "Mobile optimization", "Performance suggestions"],
    link: "https://pagespeed.web.dev/",
    rating: 5
  },
  {
    name: "Google Analytics",
    description: "Comprehensive website traffic and user behavior analytics",
    category: "Analytics",
    free: true,
    features: ["Traffic analysis", "User behavior", "Conversion tracking", "Real-time data"],
    link: "https://analytics.google.com/",
    rating: 5
  },
  {
    name: "Screaming Frog SEO Spider",
    description: "Website crawler for technical SEO analysis and auditing",
    category: "Technical SEO",
    free: true,
    features: ["Website crawling", "Technical issues", "Link analysis", "Site structure"],
    link: "https://www.screamingfrog.co.uk/seo-spider/",
    rating: 4
  },
  {
    name: "Ubersuggest",
    description: "Keyword research and SEO analysis tool by Neil Patel",
    category: "Keyword Research",
    free: true,
    features: ["Keyword research", "Competitor analysis", "Site audit", "Backlink checker"],
    link: "https://neilpatel.com/ubersuggest/",
    rating: 4
  },
  {
    name: "Answer The Public",
    description: "Discover what questions people are asking about your topics",
    category: "Content Research",
    free: true,
    features: ["Question research", "Content ideas", "Trend analysis", "Visual data"],
    link: "https://answerthepublic.com/",
    rating: 4
  },
  {
    name: "Google Keyword Planner",
    description: "Free keyword research tool for finding relevant keywords",
    category: "Keyword Research",
    free: true,
    features: ["Keyword ideas", "Search volume", "Competition data", "Ad group suggestions"],
    link: "https://ads.google.com/home/tools/keyword-planner/",
    rating: 4
  },
  {
    name: "GTmetrix",
    description: "Website speed testing and performance optimization tool",
    category: "Performance",
    free: true,
    features: ["Speed testing", "Performance grades", "Waterfall analysis", "Optimization tips"],
    link: "https://gtmetrix.com/",
    rating: 4
  },
  {
    name: "Google Mobile-Friendly Test",
    description: "Test if your website is mobile-friendly according to Google",
    category: "Mobile SEO",
    free: true,
    features: ["Mobile compatibility", "Usability issues", "Page loading", "Mobile optimization"],
    link: "https://search.google.com/test/mobile-friendly",
    rating: 4
  },
  {
    name: "Rich Results Test",
    description: "Test your structured data markup for rich snippets",
    category: "Structured Data",
    free: true,
    features: ["Structured data testing", "Rich snippets preview", "Error detection", "Schema validation"],
    link: "https://search.google.com/test/rich-results",
    rating: 4
  }
]

const categories = [
  { name: "All", icon: Globe },
  { name: "Analytics", icon: BarChart3 },
  { name: "Performance", icon: Zap },
  { name: "Keyword Research", icon: Search },
  { name: "Technical SEO", icon: Target },
  { name: "Content Research", icon: Eye },
  { name: "Mobile SEO", icon: TrendingUp },
  { name: "Structured Data", icon: Info }
]

export default function SEOToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTools = seoTools.filter(tool => {
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
              Free SEO Tools for Website Analysis
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Essential free tools to analyze and improve your website's SEO performance
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search SEO tools..."
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

        {/* Info Section */}
        <div className="mt-12">
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Why Use These SEO Tools?
                  </h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• <strong>Free Access:</strong> All tools listed are completely free to use</li>
                    <li>• <strong>Official Sources:</strong> Many tools are from Google and other trusted providers</li>
                    <li>• <strong>Comprehensive Analysis:</strong> Cover all aspects of SEO from technical to content</li>
                    <li>• <strong>Regular Updates:</strong> Tools are regularly updated with latest SEO standards</li>
                    <li>• <strong>No Registration Required:</strong> Most tools can be used without creating accounts</li>
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
              Get Professional SEO Help
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools/seo-checker">
              Try Our SEO Checker
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
