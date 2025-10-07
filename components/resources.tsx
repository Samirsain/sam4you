"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Lightbulb, Wrench, FileText, Zap, MessageSquare, Brain, ImageIcon, Video, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const resources: { [key: string]: any[] } = {
  "AI": [
    {
      title: "ChatGPT",
      description: "OpenAI's conversational AI that can help with writing, coding, analysis, and more. Most popular AI tool with free tier available.",
      badge: "Free Tier",
      link: "https://chat.openai.com",
      logo: "/logos/chatgpt.svg",
      rating: "4.8★",
      external: true,
      detailUrl: "/ai-tools/chatgpt"
    },
    {
      title: "Claude AI",
      description: "Anthropic's AI assistant focused on helpful, harmless, and honest responses. Better context understanding and ethical AI.",
      badge: "Free Tier",
      link: "https://claude.ai",
      logo: "/logos/claude.svg",
      rating: "4.7★",
      external: true,
      detailUrl: "/ai-tools/claude"
    },
    {
      title: "Google Gemini",
      description: "Google's multimodal AI that can understand text, images, and more. Integrated with Google ecosystem and real-time data.",
      badge: "Free Tier",
      link: "https://gemini.google.com",
      logo: "/logos/gemini.svg",
      rating: "4.6★",
      external: true,
      detailUrl: "/ai-tools/gemini"
    },
    {
      title: "Midjourney",
      description: "AI image generator that creates stunning artwork and visuals. Best image quality with artistic capabilities.",
      badge: "Premium",
      link: "https://www.midjourney.com",
      logo: "/logos/midjourney.svg",
      rating: "4.9★",
      external: true,
      detailUrl: "/ai-tools/midjourney"
    },
    {
      title: "DALL-E 3",
      description: "OpenAI's image generator integrated with ChatGPT. Easy to use with good safety measures and commercial usage.",
      badge: "ChatGPT Plus",
      link: "https://openai.com/dall-e-3",
      logo: "/logos/dalle.svg",
      rating: "4.5★",
      external: true,
      detailUrl: "/ai-tools/dalle"
    },
    {
      title: "GitHub Copilot",
      description: "AI pair programmer that helps write code faster. Excellent for coding with multi-language support and IDE integration.",
      badge: "Free for Students",
      link: "https://github.com/features/copilot",
      logo: "/logos/copilot.svg",
      rating: "4.3★",
      external: true,
      detailUrl: "/ai-tools/copilot"
    },
  ],
  "Free Tools": [
    {
      title: "AI Image Generator",
      description: "Generate stunning images from text descriptions using advanced AI technology",
      badge: "AI Tools",
      link: "/tools/image-generator",
    },
    {
      title: "AI Content Generator",
      description: "Generate high-quality content for blogs, social media, and marketing with AI-powered tools",
      badge: "AI Tools",
      link: "/tools/ai-content-generator",
    },
    {
      title: "Pinterest Downloader",
      description: "Download Pinterest pins with AI-powered Pinterest Downloader. Save images and videos from Pinterest easily.",
      badge: "Downloaders",
      link: "/tools/pinterest-downloader",
    },
    {
      title: "EMI Calculator",
      description: "Calculate your loan EMI, interest, and total amount with our free EMI calculator",
      badge: "Calculators",
      link: "/tools/emi-calculator",
    },
    {
      title: "GST Calculator",
      description: "Calculate GST amount, tax rates, and total price with our comprehensive GST calculator",
      badge: "Calculators",
      link: "/tools/gst-calculator",
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages, percentage change, and percentage of a number with ease",
      badge: "Calculators",
      link: "/tools/percentage-calculator",
    },
    {
      title: "SKU Generator",
      description: "Generate unique SKU codes for your products with our free SKU generator tool",
      badge: "Generators",
      link: "/tools/sku-generator",
    },
    {
      title: "Case Converter",
      description: "Convert text between different cases - uppercase, lowercase, title case, and more",
      badge: "Text Tools",
      link: "/tools/case-converter",
    },
    {
      title: "Word Counter",
      description: "Count words, characters, sentences, and paragraphs in your text with our word counter",
      badge: "Text Tools",
      link: "/tools/word-counter",
    },
    {
      title: "CSS Unit Converter",
      description: "Convert between different CSS units - px, em, rem, %, vw, vh, and more",
      badge: "Web Tools",
      link: "/tools/css-unit-converter",
    },
    {
      title: "SEO Checker",
      description: "Analyze your website SEO performance and get actionable insights",
      badge: "SEO Tools",
      link: "/tools/seo-checker",
    },
    {
      title: "Instagram Tools",
      description: "Generate Instagram bios, name suggestions, and username ideas",
      badge: "Social Media",
      link: "/tools/instagram-tools",
    },
  ],
  "Blog": [
    {
      title: "Free AI Tools Guide - Complete List 2024",
      description: "Discover the best free AI tools available in 2024. Complete guide to free AI tools for content creation, productivity, and business.",
      badge: "AI Tools",
      link: "/blog/free-ai-tools-guide",
    },
    {
      title: "Supercharge your AI Workflow",
      description: "Find the right best AI tools for your workflow. Complete guide to AI tools and their applications.",
      badge: "AI",
      link: "/blog/ai-workflow-tools",
    },
    {
      title: "Complete Guide to Building a Professional Website",
      description: "Step-by-step guide to creating a stunning, professional website that converts visitors into customers.",
      badge: "Web Development",
      link: "/blog/professional-website-guide",
    },
    {
      title: "Digital Marketing Trends Every Business Should Know",
      description: "Stay ahead of the competition with these emerging digital marketing trends that are shaping the future of online business.",
      badge: "Marketing",
      link: "/blog/digital-marketing-trends-2025",
    },
    {
      title: "How AI Tools Are Revolutionizing Content Creation",
      description: "Explore the latest AI-powered content creation tools and learn how to leverage them for better productivity and quality.",
      badge: "AI Tools",
      link: "/blog/ai-content-creation-tools",
    },
    {
      title: "Best Free SEO Tools for Website Optimization",
      description: "Comprehensive list of free SEO tools to improve your website's search engine ranking and visibility.",
      badge: "SEO",
      link: "/blog/free-seo-tools-guide",
    },
  ],
}

const categories = [
  { name: "AI", icon: Lightbulb },
  { name: "Free Tools", icon: Wrench },
  { name: "Blog", icon: FileText },
]

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("AI")
  
  console.log("Active category:", activeCategory)
  console.log("Resources for category:", resources[activeCategory])

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 sm:mb-12">
          {/* Top Rated Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            Top Rated!
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Resources for You
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Free utilities, AI tools reviews, guides, and services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                onClick={() => {
                  console.log("Category clicked:", category.name)
                  setActiveCategory(category.name)
                }}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category.name
                    ? "bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent"
                }`}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {resources[activeCategory] ? resources[activeCategory].map((resource, index) => {
            const Icon = resource.icon
            return (
              <Card
                key={index}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer"
                onClick={() => {
                  if (resource.external) {
                    window.open(resource.link, '_blank', 'noopener,noreferrer')
                  } else {
                    window.location.href = resource.link
                  }
                }}
              >
                {/* Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 flex flex-col gap-1 sm:gap-2">
                  <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    {resource.badge}
                  </span>
                  {resource.rating && (
                    <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {resource.rating}
                    </span>
                  )}
                  {resource.link.startsWith('/tools/') && (
                    <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Interactive Tool
                    </span>
                  )}
                </div>

                <CardHeader className="pt-10 sm:pt-12 pb-3 sm:pb-4 px-4 sm:px-6">
                  {/* Logo/Icon and Title */}
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    {resource.logo ? (
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                        <Image 
                          src={resource.logo} 
                          alt={`${resource.title} logo`}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : Icon ? (
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    ) : null}
                    <CardTitle className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {resource.title}
                    </CardTitle>
                  </div>

                  <CardDescription className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 pb-4 sm:pb-6 px-4 sm:px-6">
                  {/* Action Links */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {resource.external ? (
                      <>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(resource.link, '_blank', 'noopener,noreferrer')
                          }}
                          className="inline-flex items-center justify-center font-medium text-xs sm:text-sm transition-colors group/link text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 px-3 py-2 rounded-md border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          Try Now
                          <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (resource.detailUrl) {
                              window.location.href = resource.detailUrl
                            }
                          }}
                          className="inline-flex items-center justify-center font-medium text-xs sm:text-sm transition-colors group/link text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 px-3 py-2 rounded-md border border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
                        >
                          View Details
                          <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          window.location.href = resource.link
                        }}
                        className={`inline-flex items-center justify-center font-medium text-xs sm:text-sm transition-colors group/link px-3 py-2 rounded-md border ${
                          resource.link.startsWith('/tools/') 
                            ? "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20" 
                            : "text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
                        }`}
                      >
                        {resource.link.startsWith('/tools/') ? 'Try Now' : 'Read More'}
                        <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          }) : (
            <div className="col-span-2 text-center py-8">
              <p className="text-gray-500">No resources found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
