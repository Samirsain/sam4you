import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Brain, MessageSquare, ImageIcon, Code, TrendingUp, ExternalLink, Smartphone, Globe, HelpCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIToolsDirectory() {
  const aiTools = [
    {
      name: "ChatGPT",
      description: "Advanced AI chatbot for writing, coding, and problem-solving assistance",
      logo: "/logos/chatgpt.svg",
      rating: "4.8",
      views: "125000",
      published: "5/6/2024",
      status: "Verified",
      category: "AI Chatbot",
      features: ["GPT-4 Turbo", "productivity", "Freemium"],
      shortDesc: "ChatGPT optimizes language models for dialogue, enhancing the quality and relevance of your chatbot's responses.",
      longDesc: "ChatGPT AI is a revolutionary tool developed by OpenAI that specializes in natural language conversations. It offers versatile capabilities for answering questions, content generation, and much more. Since its release, ChatGPT has been attracting headlines for its much-hyped potential.",
      externalLink: "https://chat.openai.com",
      detailUrl: "/ai-tools/chatgpt"
    },
    {
      name: "Claude AI",
      description: "Anthropic's AI assistant for complex reasoning and analysis",
      logo: "/logos/claude.svg",
      rating: "4.7",
      views: "98000",
      published: "3/15/2024",
      status: "Verified",
      category: "AI Assistant",
      features: ["Claude 3", "reasoning", "Freemium"],
      shortDesc: "Claude AI provides advanced reasoning capabilities with ethical AI principles and long context understanding.",
      longDesc: "Claude AI is an AI assistant developed by Anthropic, designed to be helpful, harmless, and honest. It excels at complex reasoning tasks and can process very long documents while maintaining context throughout conversations.",
      externalLink: "https://claude.ai",
      detailUrl: "/ai-tools/claude"
    },
    {
      name: "Google Gemini",
      description: "Google's multimodal AI that understands text, images, and more",
      logo: "/logos/gemini.svg",
      rating: "4.6",
      views: "87000",
      published: "2/8/2024",
      status: "Verified",
      category: "Multimodal AI",
      features: ["Gemini Pro", "multimodal", "Free"],
      shortDesc: "Google Gemini integrates with Google ecosystem and provides real-time information with multimodal capabilities.",
      longDesc: "Google Gemini is Google's most capable AI model, designed to handle text, images, and other modalities. It's integrated with Google's ecosystem and provides access to real-time information.",
      externalLink: "https://gemini.google.com",
      detailUrl: "/ai-tools/gemini"
    },
    {
      name: "Midjourney",
      description: "AI image generation tool for creating stunning visual content",
      logo: "/logos/midjourney.svg",
      rating: "4.9",
      views: "156000",
      published: "7/12/2022",
      status: "Verified",
      category: "Image AI",
      features: ["v6", "artistic", "Premium"],
      shortDesc: "Midjourney creates high-quality artistic images from text descriptions with advanced AI algorithms.",
      longDesc: "Midjourney is a leading AI image generation tool that creates stunning artwork and visual content from text prompts. It's known for its artistic capabilities and high-quality output.",
      externalLink: "https://www.midjourney.com",
      detailUrl: "/ai-tools/midjourney"
    },
    {
      name: "DALL-E 3",
      description: "OpenAI's image generator integrated with ChatGPT",
      logo: "/logos/dalle.svg",
      rating: "4.5",
      views: "92000",
      published: "10/17/2023",
      status: "Verified",
      category: "Image AI",
      features: ["DALL-E 3", "integration", "Premium"],
      shortDesc: "DALL-E 3 generates images from text descriptions with safety measures and commercial usage rights.",
      longDesc: "DALL-E 3 is OpenAI's latest image generation model, integrated with ChatGPT for easy access. It creates high-quality images from text descriptions with built-in safety measures.",
      externalLink: "https://openai.com/dall-e-3",
      detailUrl: "/ai-tools/dalle"
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps write code faster",
      logo: "/logos/copilot.svg",
      rating: "4.3",
      views: "78000",
      published: "6/29/2021",
      status: "Verified",
      category: "Code AI",
      features: ["Copilot X", "coding", "Freemium"],
      shortDesc: "GitHub Copilot provides intelligent code suggestions and completions in your IDE.",
      longDesc: "GitHub Copilot is an AI pair programmer that helps you write code faster and with fewer errors. It provides intelligent code suggestions and completions directly in your IDE.",
      externalLink: "https://github.com/features/copilot",
      detailUrl: "/ai-tools/copilot"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              AI Tools <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Directory</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the most popular AI tools with detailed reviews, features, and direct access links.
            </p>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm">
                        <Image 
                          src={tool.logo} 
                          alt={`${tool.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                          {tool.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {tool.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600 dark:text-gray-300">{tool.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs">
                      {tool.status}
                    </Badge>
          </div>

                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{tool.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{tool.published}</span>
          </div>
        </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" asChild className="flex-1 bg-green-600 hover:bg-green-700">
                      <a href={tool.externalLink} target="_blank" rel="noopener noreferrer">
                        Try Now
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <Link href={tool.detailUrl}>
                        Explore
                      </Link>
                    </Button>
              </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore AI Tools?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the power of AI and transform your productivity with these cutting-edge tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="https://wa.me/919352410667?text=Hi!%20I%27m%20interested%20in%20AI%20consultation%20and%20tools%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                Get AI Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
