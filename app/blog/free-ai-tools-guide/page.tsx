import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Brain, MessageSquare, Image as ImageIcon, Video, Music, Code, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FreeAIToolsGuide() {
  const aiTools = [
    {
      name: "ChatGPT",
      description: "OpenAI's conversational AI that can help with writing, coding, analysis, and more",
      pricing: "Free tier available, Plus at $20/month",
      features: [
        "Natural conversation",
        "Code generation & debugging",
        "Creative writing",
        "Data analysis",
        "Language translation",
        "Problem solving"
      ],
      pros: ["Most popular AI tool", "Excellent for general tasks", "Regular updates"],
      cons: ["Limited free usage", "Can be slow during peak times"],
      rating: 4.8,
      category: "General Purpose",
      icon: MessageSquare,
      color: "bg-green-500"
    },
    {
      name: "Claude AI",
      description: "Anthropic's AI assistant focused on helpful, harmless, and honest responses",
      pricing: "Free tier available, Pro at $20/month",
      features: [
        "Long context understanding",
        "Ethical AI responses",
        "Document analysis",
        "Creative writing",
        "Code assistance",
        "Research help"
      ],
      pros: ["Better context understanding", "More ethical responses", "Good for analysis"],
      cons: ["Newer platform", "Limited integrations"],
      rating: 4.7,
      category: "General Purpose",
      icon: Brain,
      color: "bg-orange-500"
    },
    {
      name: "Google Gemini",
      description: "Google's multimodal AI that can understand text, images, and more",
      pricing: "Free tier available, Advanced at $19.99/month",
      features: [
        "Multimodal understanding",
        "Google integration",
        "Real-time information",
        "Code generation",
        "Image analysis",
        "Voice interaction"
      ],
      pros: ["Google ecosystem integration", "Real-time data", "Multimodal capabilities"],
      cons: ["Newer to market", "Limited free features"],
      rating: 4.6,
      category: "Multimodal",
      icon: Zap,
      color: "bg-blue-500"
    },
    {
      name: "Midjourney",
      description: "AI image generator that creates stunning artwork and visuals",
      pricing: "Basic at $10/month, Standard at $30/month",
      features: [
        "High-quality image generation",
        "Artistic styles",
        "Commercial usage rights",
        "Custom parameters",
        "Community features",
        "Multiple aspect ratios"
      ],
      pros: ["Best image quality", "Artistic capabilities", "Active community"],
      cons: ["Discord-based interface", "Paid service"],
      rating: 4.9,
      category: "Image Generation",
      icon: ImageIcon,
      color: "bg-purple-500"
    },
    {
      name: "DALL-E 3",
      description: "OpenAI's image generator integrated with ChatGPT",
      pricing: "Free with ChatGPT Plus ($20/month)",
      features: [
        "Text-to-image generation",
        "ChatGPT integration",
        "High resolution output",
        "Safety filters",
        "Commercial usage",
        "Multiple styles"
      ],
      pros: ["Easy to use", "Integrated with ChatGPT", "Good safety measures"],
      cons: ["Requires ChatGPT Plus", "Limited customization"],
      rating: 4.5,
      category: "Image Generation",
      icon: ImageIcon,
      color: "bg-pink-500"
    },
    {
      name: "Runway ML",
      description: "AI-powered video editing and generation platform",
      pricing: "Free tier available, Standard at $12/month",
      features: [
        "AI video generation",
        "Video editing tools",
        "Background removal",
        "Object removal",
        "Style transfer",
        "Motion graphics"
      ],
      pros: ["Professional video tools", "AI-powered editing", "Creative features"],
      cons: ["Complex interface", "Limited free credits"],
      rating: 4.4,
      category: "Video Generation",
      icon: Video,
      color: "bg-red-500"
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps write code faster",
      pricing: "Free for students/teachers, Individual at $10/month",
      features: [
        "Code autocompletion",
        "Multi-language support",
        "Context awareness",
        "IDE integration",
        "Code suggestions",
        "Bug detection"
      ],
      pros: ["Excellent for coding", "Multiple language support", "IDE integration"],
      cons: ["Subscription required", "Code quality varies"],
      rating: 4.3,
      category: "Code Generation",
      icon: Code,
      color: "bg-gray-500"
    },
    {
      name: "Jasper AI",
      description: "AI writing assistant for marketing content and copywriting",
      pricing: "Creator at $49/month, Teams at $125/month",
      features: [
        "Marketing copy generation",
        "Blog post writing",
        "Email campaigns",
        "Social media content",
        "SEO optimization",
        "Brand voice training"
      ],
      pros: ["Marketing-focused", "Brand consistency", "Multiple templates"],
      cons: ["Expensive", "Limited free trial"],
      rating: 4.2,
      category: "Content Writing",
      icon: MessageSquare,
      color: "bg-indigo-500"
    }
  ]

  const categories = [
    { name: "General Purpose", count: 3, icon: Brain },
    { name: "Image Generation", count: 2, icon: ImageIcon },
    { name: "Video Generation", count: 1, icon: Video },
    { name: "Code Generation", count: 1, icon: Code },
    { name: "Content Writing", count: 1, icon: MessageSquare }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              <Brain className="w-4 h-4 mr-2" />
              Complete Guide
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Best <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free AI Tools</span> in 2024
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the most powerful free AI tools that can transform your productivity. From ChatGPT to Claude AI, explore detailed reviews, features, and pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                <a href="#ai-tools">
                  Explore AI Tools
                  <TrendingUp className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/ai-tools">
                  All AI Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI Tool Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore different types of AI tools available for free or with affordable pricing
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{category.count} tools</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Tools Detailed Section */}
      <section id="ai-tools" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Detailed AI Tools Review
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive reviews of the most popular AI tools with features, pricing, and detailed analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{tool.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{tool.category}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{tool.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Pricing
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                          {tool.pricing}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {tool.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-green-600 dark:text-green-400 mb-1 text-sm">Pros</h5>
                          <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                            {tool.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-start gap-1">
                                <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-600 dark:text-red-400 mb-1 text-sm">Cons</h5>
                          <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                            {tool.cons.map((con, conIndex) => (
                              <li key={conIndex} className="flex items-start gap-1">
                                <span className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0">•</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ChatGPT Deep Dive */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                ChatGPT: The Game Changer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Why ChatGPT became the most popular AI tool and how to use it effectively
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Makes ChatGPT Special?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Natural Conversations</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">ChatGPT understands context and maintains conversation flow naturally.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Code Generation</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Write, debug, and explain code in multiple programming languages.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Creative Writing</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Generate articles, stories, marketing copy, and creative content.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pricing Breakdown</h3>
                <div className="space-y-4">
                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Free Tier</CardTitle>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Free</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          Basic GPT-3.5 access
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          Limited usage per day
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          Standard response times
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">ChatGPT Plus</CardTitle>
                        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">$20/month</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          Access to GPT-4
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          Priority access
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          Faster response times
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          DALL-E 3 integration
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Get the Most from Free AI Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Expert tips to maximize your productivity with free AI tools
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Be Specific</h3>
                <p className="text-gray-600 dark:text-gray-300">Provide detailed prompts and context for better AI responses.</p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Iterate & Improve</h3>
                <p className="text-gray-600 dark:text-gray-300">Refine your prompts based on results to get better outcomes.</p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Combine Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">Use multiple AI tools together for comprehensive solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Start using these free AI tools today and transform how you work, create, and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="https://wa.me/919352410667?text=Hi!%20I%27m%20interested%20in%20AI%20consultation%20and%20tools%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                Get AI Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/ai-tools">
                Explore More Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
