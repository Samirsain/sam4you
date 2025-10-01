"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Lightbulb, Wrench, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const resources = {
  "AI": [
    {
      title: "Best AI Tools for PPT Presentations",
      description: "Discover top AI-powered tools for creating engaging PowerPoint presentations",
      badge: "AI Tools",
      link: "#ai-tools",
    },
    {
      title: "AI Integration in Next.js: Complete Guide",
      description: "Learn how to integrate AI features into your Next.js applications with practical examples",
      badge: "Tutorial",
      link: "#tutorial",
    },
    {
      title: "ChatGPT vs Claude: Which AI is Better?",
      description: "Comprehensive comparison of the top AI chatbots for different use cases",
      badge: "Comparison",
      link: "#ai-comparison",
    },
    {
      title: "AI Content Writing Tools Review",
      description: "Top AI tools for automated content creation and copywriting",
      badge: "Content",
      link: "#ai-content",
    },
  ],
  "Blogs": [
    {
      title: "How to Start Blog and Make Money",
      description: "Complete beginner guide to starting a profitable blog with monetization strategies",
      badge: "Blogging",
      link: "#blogging-guide",
    },
    {
      title: "Importance of SEO in Digital Marketing",
      description: "Complete guide to SEO strategies and techniques to improve website visibility",
      badge: "SEO",
      link: "#seo-guide",
    },
    {
      title: "WordPress vs Webflow: Which is Better?",
      description: "Detailed comparison of WordPress and Webflow for website building",
      badge: "Comparison",
      link: "#wordpress-vs-webflow",
    },
    {
      title: "Digital Marketing Trends 2024",
      description: "Latest trends and strategies in digital marketing for business growth",
      badge: "Marketing",
      link: "#marketing-trends",
    },
  ],
  "Tools": [
    {
      title: "Free SEO Tools for Website Analysis",
      description: "Essential free tools to analyze and improve your website's SEO performance",
      badge: "SEO Tools",
      link: "#seo-tools",
    },
    {
      title: "Best Website Speed Testing Tools",
      description: "Top tools to test and optimize your website loading speed",
      badge: "Performance",
      link: "#speed-tools",
    },
    {
      title: "Social Media Management Tools",
      description: "Best tools for managing and scheduling social media posts across platforms",
      badge: "Social Media",
      link: "#social-tools",
    },
    {
      title: "Email Marketing Tools Comparison",
      description: "Compare the best email marketing platforms for your business needs",
      badge: "Email",
      link: "#email-tools",
    },
  ],
}

const categories = [
  { name: "AI", icon: Lightbulb },
  { name: "Blogs", icon: FileText },
  { name: "Tools", icon: Wrench },
]

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("Blogs")

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
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                  {resource.badge}
                </span>
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
                {/* Read More Link */}
                <Link 
                  href={resource.link}
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm transition-colors group/link"
                >
                  Read More
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
