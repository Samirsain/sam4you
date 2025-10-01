"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Share2, ExternalLink, CheckCircle, AlertTriangle, Info, Calendar, BarChart3, Users, MessageSquare, Camera, Hash, Zap } from "lucide-react"
import Link from "next/link"

interface SocialTool {
  name: string
  description: string
  category: string
  free: boolean
  features: string[]
  link: string
  rating: number
  platforms: string[]
}

const socialTools = [
  {
    name: "Hootsuite",
    description: "Comprehensive social media management platform for scheduling and analytics",
    category: "Management Platform",
    free: true,
    features: ["Post scheduling", "Analytics dashboard", "Team collaboration", "Content calendar"],
    link: "https://hootsuite.com/",
    rating: 4,
    platforms: ["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"]
  },
  {
    name: "Buffer",
    description: "Simple and intuitive social media scheduling and analytics tool",
    category: "Scheduling Tool",
    free: true,
    features: ["Post scheduling", "Analytics", "Team management", "Content suggestions"],
    link: "https://buffer.com/",
    rating: 4,
    platforms: ["Facebook", "Twitter", "Instagram", "LinkedIn", "Pinterest"]
  },
  {
    name: "Later",
    description: "Visual content calendar and Instagram-focused social media tool",
    category: "Visual Planning",
    free: true,
    features: ["Visual calendar", "Instagram stories", "Hashtag suggestions", "Analytics"],
    link: "https://later.com/",
    rating: 4,
    platforms: ["Instagram", "Facebook", "Twitter", "Pinterest", "TikTok"]
  },
  {
    name: "Canva",
    description: "Design tool with social media templates and scheduling features",
    category: "Design & Scheduling",
    free: true,
    features: ["Social media templates", "Design tools", "Brand kit", "Content scheduling"],
    link: "https://canva.com/",
    rating: 5,
    platforms: ["All platforms"]
  },
  {
    name: "TweetDeck",
    description: "Twitter's official dashboard for managing multiple Twitter accounts",
    category: "Twitter Management",
    free: true,
    features: ["Multiple accounts", "Tweet scheduling", "Column layout", "Real-time updates"],
    link: "https://tweetdeck.twitter.com/",
    rating: 4,
    platforms: ["Twitter"]
  },
  {
    name: "Facebook Creator Studio",
    description: "Official Facebook tool for managing Facebook and Instagram content",
    category: "Facebook Tools",
    free: true,
    features: ["Post scheduling", "Analytics", "Monetization", "Content library"],
    link: "https://www.facebook.com/creatorstudio/",
    rating: 4,
    platforms: ["Facebook", "Instagram"]
  },
  {
    name: "Sprout Social",
    description: "Advanced social media management with customer service features",
    category: "Enterprise Platform",
    free: true,
    features: ["Social listening", "Customer service", "Analytics", "Team collaboration"],
    link: "https://sproutsocial.com/",
    rating: 4,
    platforms: ["All major platforms"]
  },
  {
    name: "Tailwind",
    description: "Pinterest and Instagram focused scheduling and analytics tool",
    category: "Visual Platforms",
    free: true,
    features: ["Pinterest scheduling", "Instagram planning", "Hashtag finder", "Analytics"],
    link: "https://www.tailwindapp.com/",
    rating: 4,
    platforms: ["Pinterest", "Instagram", "Facebook"]
  },
  {
    name: "Crowdfire",
    description: "Social media management with content curation and scheduling",
    category: "Content Curation",
    free: true,
    features: ["Content curation", "Post scheduling", "Analytics", "Hashtag suggestions"],
    link: "https://crowdfireapp.com/",
    rating: 3,
    platforms: ["Twitter", "Facebook", "Instagram", "LinkedIn", "Pinterest"]
  },
  {
    name: "SocialBee",
    description: "Social media management with evergreen content recycling",
    category: "Content Recycling",
    free: true,
    features: ["Content recycling", "Post scheduling", "Analytics", "Team collaboration"],
    link: "https://socialbee.io/",
    rating: 4,
    platforms: ["Facebook", "Twitter", "Instagram", "LinkedIn", "Pinterest"]
  }
]

const categories = [
  { name: "All", icon: Share2 },
  { name: "Management Platform", icon: BarChart3 },
  { name: "Scheduling Tool", icon: Calendar },
  { name: "Visual Planning", icon: Camera },
  { name: "Design & Scheduling", icon: Zap },
  { name: "Twitter Management", icon: MessageSquare },
  { name: "Facebook Tools", icon: Users },
  { name: "Enterprise Platform", icon: BarChart3 },
  { name: "Visual Platforms", icon: Camera },
  { name: "Content Curation", icon: Hash },
  { name: "Content Recycling", icon: Calendar }
]

export default function SocialToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTools = socialTools.filter(tool => {
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
              Social Media Management Tools
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Best tools for managing and scheduling social media posts across platforms
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search social media tools..."
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
                  <h4 className="font-medium text-sm mb-1">Supported Platforms:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tool.platforms.map((platform, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                        {platform}
                      </span>
                    ))}
                  </div>
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

        {/* Social Media Tips */}
        <div className="mt-12">
          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Share2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Social Media Management Best Practices
                  </h3>
                  <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                    <li>• <strong>Consistent Posting:</strong> Maintain a regular posting schedule</li>
                    <li>• <strong>Engage with Audience:</strong> Respond to comments and messages promptly</li>
                    <li>• <strong>Use Analytics:</strong> Track performance and adjust strategy accordingly</li>
                    <li>• <strong>Content Planning:</strong> Plan content in advance using content calendars</li>
                    <li>• <strong>Platform Optimization:</strong> Tailor content for each platform's audience</li>
                    <li>• <strong>Hashtag Strategy:</strong> Use relevant and trending hashtags</li>
                    <li>• <strong>Visual Content:</strong> Use high-quality images and videos</li>
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
              Get Professional Social Media Help
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools/meta-caption">
              Generate Social Media Captions
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
