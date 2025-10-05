import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Brain, MessageSquare, Code, BookOpen, Users, TrendingUp, ExternalLink, ArrowLeft, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChatGPTPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "ChatGPT understands context and maintains conversation flow naturally, making interactions feel human-like."
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Write, debug, and explain code in multiple programming languages including Python, JavaScript, Java, and more."
    },
    {
      icon: BookOpen,
      title: "Creative Writing",
      description: "Generate articles, stories, marketing copy, poetry, and creative content tailored to your needs."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analyze complex problems, provide step-by-step solutions, and offer multiple approaches to challenges."
    }
  ]

  const pricingPlans = [
    {
      name: "Free Tier",
      price: "Free",
      description: "Access to GPT-3.5 with basic features",
      features: [
        "GPT-3.5 access",
        "Standard response times",
        "Limited usage per day",
        "Basic conversation capabilities"
      ],
      popular: false
    },
    {
      name: "ChatGPT Plus",
      price: "$20/month",
      description: "Premium access with advanced features",
      features: [
        "Access to GPT-4",
        "Priority access during peak times",
        "Faster response times",
        "DALL-E 3 integration",
        "Advanced data analysis",
        "File upload capabilities"
      ],
      popular: true
    }
  ]

  const useCases = [
    {
      category: "Content Creation",
      examples: [
        "Blog post writing and editing",
        "Social media content generation",
        "Email marketing campaigns",
        "Product descriptions"
      ]
    },
    {
      category: "Programming",
      examples: [
        "Code debugging and optimization",
        "Algorithm explanation",
        "API documentation",
        "Code review and suggestions"
      ]
    },
    {
      category: "Business",
      examples: [
        "Business plan development",
        "Market research analysis",
        "Customer service automation",
        "Presentation creation"
      ]
    },
    {
      category: "Education",
      examples: [
        "Tutoring and explanations",
        "Study material creation",
        "Language learning",
        "Research assistance"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link href="/ai-tools" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to AI Tools
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-6">
                  {/* Logo */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center flex-shrink-0">
                    <Image 
                      src="/logos/chatgpt.svg" 
                      alt="ChatGPT logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        ChatGPT
                      </h1>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-600 text-white">GPT-4 Turbo</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                      <Badge variant="secondary">productivity</Badge>
                      <Badge variant="outline">Freemium</Badge>
                    </div>

                    <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                        Try Now
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  ChatGPT optimizes language models for dialogue, enhancing the quality and relevance of your chatbot's responses.
                </p>

                {/* What is ChatGPT Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    What is ChatGPT AI?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    ChatGPT AI is a revolutionary tool developed by OpenAI that specializes in natural language conversations. 
                    It offers versatile capabilities for answering questions, content generation, and much more. Since its release, 
                    ChatGPT has been attracting headlines for its much-hyped potential.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-6">
                  {/* Tool Overview */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Tool Overview</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">4.8</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Views</span>
                        <span className="font-medium">125000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Published</span>
                        <span className="font-medium">5/6/2024</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Status</span>
                        <div className="flex items-center gap-1">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="font-medium text-green-600 dark:text-green-400">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Apps */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Mobile Apps</h3>
                    <div className="space-y-2">
                      <a href="https://apps.apple.com/app/chatgpt/id6448311069" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                        <Smartphone className="w-4 h-4" />
                        <span className="text-sm">iOS App</span>
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.openai.chatgpt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                        <Smartphone className="w-4 h-4" />
                        <span className="text-sm">Android App</span>
                      </a>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Quick Links</h3>
                    <div className="space-y-2">
                      <Button size="sm" asChild className="w-full bg-green-600 hover:bg-green-700">
                        <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                          Visit Official Website
                        </a>
                      </Button>
                      <Link href="#faq" className="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        View FAQ
                      </Link>
                      <Link href="/ai-tools" className="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        Related Tools
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover what makes ChatGPT the most popular AI assistant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose the plan that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-green-500 shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-500 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">{plan.price}</div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                        {plan.price === 'Free' ? 'Start Free' : 'Upgrade Now'}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How professionals use ChatGPT across different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience ChatGPT?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join millions of users who are already using ChatGPT to boost their productivity and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100">
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/ai-tools">
                Explore More AI Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
