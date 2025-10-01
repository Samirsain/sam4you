"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, ExternalLink, CheckCircle, AlertTriangle, Info, Users, BarChart3, Zap, Target, DollarSign, Star } from "lucide-react"
import Link from "next/link"

interface EmailTool {
  name: string
  description: string
  category: string
  free: boolean
  features: string[]
  link: string
  rating: number
  pricing: string
  bestFor: string
}

const emailTools = [
  {
    name: "Mailchimp",
    description: "Popular email marketing platform with drag-and-drop email builder",
    category: "All-in-One Platform",
    free: true,
    features: ["Email campaigns", "Automation", "Analytics", "Landing pages", "CRM"],
    link: "https://mailchimp.com/",
    rating: 4,
    pricing: "Free up to 2,000 contacts",
    bestFor: "Small to medium businesses"
  },
  {
    name: "ConvertKit",
    description: "Creator-focused email marketing with advanced automation features",
    category: "Creator Platform",
    free: true,
    features: ["Email automation", "Landing pages", "Forms", "Analytics", "Tagging"],
    link: "https://convertkit.com/",
    rating: 4,
    pricing: "Free up to 1,000 subscribers",
    bestFor: "Content creators and bloggers"
  },
  {
    name: "Constant Contact",
    description: "User-friendly email marketing with event marketing features",
    category: "Small Business",
    free: false,
    features: ["Email campaigns", "Event marketing", "Social media integration", "Analytics"],
    link: "https://www.constantcontact.com/",
    rating: 3,
    pricing: "Starting at $9.99/month",
    bestFor: "Small businesses and nonprofits"
  },
  {
    name: "AWeber",
    description: "Reliable email marketing platform with excellent deliverability",
    category: "Reliable Platform",
    free: true,
    features: ["Email campaigns", "Automation", "Landing pages", "Analytics", "Split testing"],
    link: "https://www.aweber.com/",
    rating: 4,
    pricing: "Free up to 500 subscribers",
    bestFor: "Businesses focused on deliverability"
  },
  {
    name: "GetResponse",
    description: "Comprehensive marketing platform with email, automation, and webinars",
    category: "Marketing Suite",
    free: true,
    features: ["Email marketing", "Marketing automation", "Webinars", "Landing pages", "CRM"],
    link: "https://www.getresponse.com/",
    rating: 4,
    pricing: "Free up to 1,000 contacts",
    bestFor: "All-in-one marketing needs"
  },
  {
    name: "ActiveCampaign",
    description: "Advanced email marketing with powerful automation and CRM features",
    category: "Advanced Platform",
    free: true,
    features: ["Email marketing", "Marketing automation", "CRM", "Sales automation", "Analytics"],
    link: "https://www.activecampaign.com/",
    rating: 4,
    pricing: "Free up to 500 contacts",
    bestFor: "Advanced automation needs"
  },
  {
    name: "Sendinblue (Brevo)",
    description: "European-based email marketing with SMS and chat features",
    category: "Multi-Channel",
    free: true,
    features: ["Email marketing", "SMS marketing", "Chat", "CRM", "Landing pages"],
    link: "https://www.brevo.com/",
    rating: 4,
    pricing: "Free up to 300 emails/day",
    bestFor: "Multi-channel marketing"
  },
  {
    name: "Moosend",
    description: "Affordable email marketing with advanced segmentation features",
    category: "Budget-Friendly",
    free: true,
    features: ["Email campaigns", "Automation", "Segmentation", "Analytics", "A/B testing"],
    link: "https://moosend.com/",
    rating: 4,
    pricing: "Free up to 1,000 subscribers",
    bestFor: "Budget-conscious businesses"
  },
  {
    name: "Drip",
    description: "E-commerce focused email marketing with advanced personalization",
    category: "E-commerce",
    free: true,
    features: ["Email automation", "Personalization", "E-commerce integration", "Analytics"],
    link: "https://www.drip.com/",
    rating: 4,
    pricing: "Free up to 100 subscribers",
    bestFor: "E-commerce businesses"
  },
  {
    name: "MailerLite",
    description: "Simple and affordable email marketing with beautiful templates",
    category: "Simple Platform",
    free: true,
    features: ["Email campaigns", "Automation", "Landing pages", "Pop-ups", "Analytics"],
    link: "https://www.mailerlite.com/",
    rating: 4,
    pricing: "Free up to 1,000 subscribers",
    bestFor: "Simple email marketing needs"
  }
]

const categories = [
  { name: "All", icon: Mail },
  { name: "All-in-One Platform", icon: BarChart3 },
  { name: "Creator Platform", icon: Users },
  { name: "Small Business", icon: Target },
  { name: "Reliable Platform", icon: CheckCircle },
  { name: "Marketing Suite", icon: Zap },
  { name: "Advanced Platform", icon: Star },
  { name: "Multi-Channel", icon: Mail },
  { name: "Budget-Friendly", icon: DollarSign },
  { name: "E-commerce", icon: Target },
  { name: "Simple Platform", icon: Info }
]

export default function EmailToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTools = emailTools.filter(tool => {
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
              Email Marketing Tools Comparison
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Compare the best email marketing platforms for your business needs
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search email marketing tools..."
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
                          Free Plan
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
                  <h4 className="font-medium text-sm mb-1">Pricing:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{tool.pricing}</p>
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

        {/* Email Marketing Tips */}
        <div className="mt-12">
          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                    Email Marketing Best Practices
                  </h3>
                  <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                    <li>• <strong>Build Quality Lists:</strong> Focus on engaged subscribers, not just quantity</li>
                    <li>• <strong>Segment Your Audience:</strong> Send targeted content to specific groups</li>
                    <li>• <strong>Mobile Optimization:</strong> Ensure emails look great on mobile devices</li>
                    <li>• <strong>Personalization:</strong> Use subscriber names and relevant content</li>
                    <li>• <strong>Clear Subject Lines:</strong> Write compelling, non-spammy subject lines</li>
                    <li>• <strong>Test Everything:</strong> A/B test subject lines, content, and send times</li>
                    <li>• <strong>Monitor Deliverability:</strong> Keep your sender reputation high</li>
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
              Get Professional Email Marketing Help
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools/content-generator">
              Generate Email Content
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
