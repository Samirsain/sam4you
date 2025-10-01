import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User, Tag, Search, Filter, TrendingUp, BookOpen, PenTool, Code, Megaphone, Target, Globe, Smartphone } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "How to Start a Blog and Make Money in 2024",
    excerpt: "Complete beginner guide to starting a profitable blog with monetization strategies and growth tips.",
    content: "Starting a blog in 2024 can be an excellent way to share your knowledge, build an audience, and generate income. This comprehensive guide covers everything from choosing a niche to monetization strategies...",
    author: "Sam4You Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Blogging",
    tags: ["Blogging", "Monetization", "SEO", "Content Marketing"],
    image: "/blog/blog-start.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Importance of SEO in Digital Marketing",
    excerpt: "Complete guide to SEO strategies and techniques to improve website visibility and organic traffic.",
    content: "Search Engine Optimization (SEO) is crucial for any digital marketing strategy. Learn how to implement effective SEO techniques to improve your website's visibility and drive organic traffic...",
    author: "Sam4You Team",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "SEO",
    tags: ["SEO", "Digital Marketing", "Search Engines", "Organic Traffic"],
    image: "/blog/seo-guide.jpg",
    featured: true
  },
  {
    id: 3,
    title: "WordPress vs Webflow: Which is Better?",
    excerpt: "Detailed comparison of WordPress and Webflow for website building, including pros, cons, and use cases.",
    content: "Choosing the right website builder is crucial for your online presence. This detailed comparison of WordPress and Webflow will help you make an informed decision...",
    author: "Sam4You Team",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["WordPress", "Webflow", "Website Builders", "Comparison"],
    image: "/blog/wordpress-vs-webflow.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Digital Marketing Trends 2024",
    excerpt: "Latest trends and strategies in digital marketing for business growth and customer engagement.",
    content: "Stay ahead of the competition with these cutting-edge digital marketing trends for 2024. From AI-powered marketing to voice search optimization...",
    author: "Sam4You Team",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Digital Marketing",
    tags: ["Digital Marketing", "Trends", "AI", "Strategy"],
    image: "/blog/marketing-trends.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Best AI Tools for PPT Presentations",
    excerpt: "Discover top AI-powered tools for creating engaging PowerPoint presentations that captivate your audience.",
    content: "AI is revolutionizing how we create presentations. Explore the best AI tools that can help you create stunning, professional presentations in minutes...",
    author: "Sam4You Team",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "AI Tools",
    tags: ["AI", "Presentations", "PowerPoint", "Productivity"],
    image: "/blog/ai-presentations.jpg",
    featured: false
  },
  {
    id: 6,
    title: "AI Integration in Next.js: Complete Guide",
    excerpt: "Learn how to integrate AI features into your Next.js applications with practical examples and best practices.",
    content: "Integrating AI into Next.js applications opens up endless possibilities. This comprehensive guide shows you how to add AI features to your web applications...",
    author: "Sam4You Team",
    date: "2024-01-03",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Next.js", "AI", "JavaScript", "Web Development"],
    image: "/blog/nextjs-ai.jpg",
    featured: false
  },
  {
    id: 7,
    title: "ChatGPT vs Claude: Which AI is Better?",
    excerpt: "Comprehensive comparison of the top AI chatbots for different use cases and business needs.",
    content: "AI chatbots are transforming how we work and communicate. This detailed comparison of ChatGPT and Claude will help you choose the right AI assistant...",
    author: "Sam4You Team",
    date: "2024-01-01",
    readTime: "9 min read",
    category: "AI Tools",
    tags: ["ChatGPT", "Claude", "AI Chatbots", "Comparison"],
    image: "/blog/chatgpt-vs-claude.jpg",
    featured: false
  },
  {
    id: 8,
    title: "AI Content Writing Tools Review",
    excerpt: "Top AI tools for automated content creation and copywriting that can boost your productivity.",
    content: "AI content writing tools are revolutionizing how we create content. Discover the best AI tools for content creation and copywriting...",
    author: "Sam4You Team",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "AI Tools",
    tags: ["AI", "Content Writing", "Copywriting", "Productivity"],
    image: "/blog/ai-content-tools.jpg",
    featured: false
  }
]

const categories = [
  { name: "All", icon: BookOpen, count: 8 },
  { name: "Blogging", icon: PenTool, count: 1 },
  { name: "SEO", icon: Target, count: 1 },
  { name: "Web Development", icon: Code, count: 2 },
  { name: "Digital Marketing", icon: Megaphone, count: 1 },
  { name: "AI Tools", icon: TrendingUp, count: 3 }
]

const featuredPosts = blogPosts.filter(post => post.featured)
const regularPosts = blogPosts.filter(post => !post.featured)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Latest Insights
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Digital <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span> & Tips
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and strategies in digital marketing, web development, and technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Link href="#featured">
                  Read Latest Posts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 py-4">
                <Link href="#newsletter">
                  Subscribe to Newsletter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-6xl mx-auto">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category.name === "All"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                    <span className="ml-1 text-xs opacity-75">({category.count})</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-primary">Articles</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our most popular and trending articles that you shouldn't miss.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white dark:bg-gray-900">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <Clock className="w-4 h-4 ml-4" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" className="group-hover:bg-blue-50 group-hover:text-blue-600">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All <span className="text-primary">Articles</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our complete collection of articles covering various topics in digital marketing and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white dark:bg-gray-800">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-40 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-600 text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <Clock className="w-4 h-4 ml-4" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="group-hover:bg-blue-50 group-hover:text-blue-600">
                      <Link href={`/blog/${post.id}`}>
                        Read
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest insights, tips, and strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 bg-white/90 text-gray-900 placeholder-gray-500"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}