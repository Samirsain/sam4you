"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Lightbulb, Wrench, FileText, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const resources = {
  "AI": [
    {
      title: "GitaGPT AI",
      description: "Ask Krishna questions and get AI-powered answers based on the Bhagavad Gita. Spiritual guidance meets artificial intelligence.",
      badge: "New",
      link: "/ai-tools/gitagpt",
    },
    {
      title: "AI Content Generator",
      description: "Generate high-quality content for blogs, social media, and marketing with AI-powered tools",
      badge: "AI Tools",
      link: "/tools/content-generator",
    },
    {
      title: "AI Chatbot Builder",
      description: "Create intelligent chatbots for your website with our AI-powered chatbot builder",
      badge: "AI Tools",
      link: "/tools/chatbot-builder",
    },
    {
      title: "AI Image Generator",
      description: "Generate stunning images using AI for your projects, social media, and marketing campaigns",
      badge: "AI Tools",
      link: "/tools/ai-image-generator",
    },
  ],
  "Free Tools": [
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
      badge: "Text Tools",
      link: "/tools/css-unit-converter",
    },
  ],
  "Blog": [
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
  ],
}

const categories = [
  { name: "AI", icon: Lightbulb },
  { name: "Free Tools", icon: Wrench },
  { name: "Blog", icon: FileText },
]

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("AI")

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Top Rated Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Top Rated!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resources for You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Free utilities, AI tools reviews, guides, and services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.name
                    ? "bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources[activeCategory].map((resource, index) => (
            <Card
              key={index}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                  {resource.badge}
                </span>
                {resource.link.startsWith('/tools/') && (
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Interactive Tool
                  </span>
                )}
              </div>

              <CardHeader className="pt-12 pb-4">
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {resource.title}
                </CardTitle>

                <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 pb-6">
                {/* Action Link */}
                <Link 
                  href={resource.link}
                  className={`inline-flex items-center font-medium text-sm transition-colors group/link ${
                    resource.link.startsWith('/tools/') 
                      ? "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300" 
                      : "text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                  }`}
                >
                  {resource.link.startsWith('/tools/') ? 'Try Now' : 'Read More'}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
