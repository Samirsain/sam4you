"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Lightbulb, Wrench, FileText, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const resources = {
  "AI": [
    {
      title: "What is Artificial Intelligence? Complete Beginner's Guide",
      description: "Learn everything about AI from basics to advanced concepts. Understand machine learning, deep learning, and how AI is transforming our world.",
      badge: "AI Basics",
      link: "/blog/what-is-artificial-intelligence-guide",
    },
    {
      title: "Top 15 AI Tools Everyone Should Know in 2025",
      description: "Discover the most powerful AI tools for productivity, creativity, and business. From ChatGPT to Midjourney - complete tool reviews and comparisons.",
      badge: "AI Tools",
      link: "/blog/top-15-ai-tools-2025",
    },
    {
      title: "How AI is Changing Business Operations",
      description: "Explore how artificial intelligence is revolutionizing business processes, automation, and decision-making across industries.",
      badge: "Business AI",
      link: "/blog/ai-changing-business-operations",
    },
    {
      title: "Machine Learning vs Deep Learning: What's the Difference?",
      description: "Understand the key differences between machine learning and deep learning. Learn when to use each approach for your projects.",
      badge: "ML vs DL",
      link: "/blog/machine-learning-vs-deep-learning",
    },
    {
      title: "AI Ethics and Future Implications",
      description: "Dive deep into AI ethics, bias, privacy concerns, and what the future holds for artificial intelligence in society.",
      badge: "AI Ethics",
      link: "/blog/ai-ethics-future-implications",
    },
    {
      title: "How to Start Learning AI and Machine Learning",
      description: "Complete roadmap for beginners to start their AI journey. Best courses, resources, and step-by-step learning path.",
      badge: "Learning AI",
      link: "/blog/how-to-start-learning-ai-ml",
    },
  ],
  "Blogs": [
    {
      title: "10 Essential SEO Strategies That Actually Work in 2025",
      description: "Discover proven SEO techniques that deliver real results. Learn the strategies that top-performing websites use to dominate search rankings.",
      badge: "SEO",
      link: "/blog/essential-seo-strategies-2025",
    },
    {
      title: "How AI Tools Are Revolutionizing Content Creation",
      description: "Explore the latest AI-powered content creation tools and learn how to leverage them for better productivity and quality.",
      badge: "AI Tools",
      link: "/blog/ai-content-creation-tools",
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
  ],
  "Tools": [
    {
      title: "SEO Checker Tool",
      description: "Analyze your website SEO performance and get actionable insights with our free SEO checker",
      badge: "SEO Tools",
      link: "/tools/seo-checker",
    },
    {
      title: "AI Content Generator",
      description: "Generate high-quality content for blogs, social media, and marketing with AI-powered tools",
      badge: "AI Tools",
      link: "/tools/content-generator",
    },
    {
      title: "Meta Caption Generator",
      description: "Create engaging social media captions for all platforms instantly with our caption generator",
      badge: "Social Media",
      link: "/tools/meta-caption",
    },
    {
      title: "Pinterest Video Downloader",
      description: "Download videos from Pinterest pins easily and quickly with our free video downloader",
      badge: "Video Tools",
      link: "/tools/pinterest-downloader",
    },
    {
      title: "Instagram Tools Suite",
      description: "Generate Instagram bios, name suggestions, and username ideas all in one place",
      badge: "Instagram",
      link: "/tools/instagram-tools",
    },
    {
      title: "Free SEO Tools for Website Analysis",
      description: "Essential free tools to analyze and improve your website's SEO performance",
      badge: "SEO Tools",
      link: "/tools/seo-tools",
    },
    {
      title: "Best Website Speed Testing Tools",
      description: "Top tools to test and optimize your website loading speed",
      badge: "Performance",
      link: "/tools/speed-tools",
    },
    {
      title: "Social Media Management Tools",
      description: "Best tools for managing and scheduling social media posts across platforms",
      badge: "Social Media",
      link: "/tools/social-tools",
    },
    {
      title: "Email Marketing Tools Comparison",
      description: "Compare the best email marketing platforms for your business needs",
      badge: "Email",
      link: "/tools/email-tools",
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
