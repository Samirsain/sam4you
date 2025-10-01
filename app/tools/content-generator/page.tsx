"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wand2, Copy, Download, RefreshCw, FileText, Hash, MessageSquare, Megaphone, PenTool, Users, Target, Zap } from "lucide-react"
import Link from "next/link"

interface ContentRequest {
  type: string
  topic: string
  keywords: string
  tone: string
  length: string
  targetAudience: string
  additionalInfo: string
}

interface GeneratedContent {
  title: string
  content: string
  metaDescription?: string
  hashtags?: string[]
  callToAction?: string
}

const contentTypes = [
  { id: 'blog-post', name: 'Blog Post', icon: FileText, description: 'Long-form articles and blog posts' },
  { id: 'social-media', name: 'Social Media', icon: MessageSquare, description: 'Posts for Facebook, Instagram, Twitter' },
  { id: 'ad-copy', name: 'Ad Copy', icon: Megaphone, description: 'Marketing and advertising content' },
  { id: 'email', name: 'Email', icon: PenTool, description: 'Email newsletters and campaigns' },
  { id: 'product-description', name: 'Product Description', icon: Target, description: 'E-commerce product descriptions' },
  { id: 'landing-page', name: 'Landing Page', icon: Users, description: 'Website landing page content' }
]

const tones = [
  'Professional', 'Casual', 'Friendly', 'Authoritative', 'Conversational', 
  'Persuasive', 'Educational', 'Humorous', 'Inspirational', 'Technical'
]

const lengths = [
  'Short (50-100 words)', 'Medium (100-300 words)', 'Long (300-500 words)', 
  'Very Long (500+ words)', 'Custom'
]

export default function ContentGeneratorPage() {
  const [selectedType, setSelectedType] = useState('blog-post')
  const [request, setRequest] = useState<ContentRequest>({
    type: 'blog-post',
    topic: '',
    keywords: '',
    tone: 'Professional',
    length: 'Medium (100-300 words)',
    targetAudience: '',
    additionalInfo: ''
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [error, setError] = useState("")

  const generateContent = async () => {
    if (!request.topic.trim()) {
      setError("Please enter a topic for your content")
      return
    }

    setIsGenerating(true)
    setError("")
    setGeneratedContent(null)

    try {
      // Simulate API call - in real implementation, this would call your AI backend
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock generated content based on type
      const mockContent: GeneratedContent = generateMockContent(request)
      setGeneratedContent(mockContent)
    } catch (err) {
      setError("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const generateMockContent = (req: ContentRequest): GeneratedContent => {
    const baseContent = {
      title: `The Ultimate Guide to ${req.topic}`,
      content: `# ${req.topic}: A Comprehensive Overview\n\nIn today's digital landscape, understanding ${req.topic} has become crucial for success. This comprehensive guide will walk you through everything you need to know about ${req.topic}.\n\n## Why ${req.topic} Matters\n\n${req.topic} plays a vital role in modern business strategies. Whether you're a beginner or an experienced professional, mastering ${req.topic} can significantly impact your results.\n\n## Key Benefits\n\n- **Improved Performance**: ${req.topic} helps optimize your processes\n- **Better Results**: Achieve your goals more effectively\n- **Competitive Advantage**: Stay ahead of the competition\n\n## Getting Started\n\nTo begin with ${req.topic}, follow these essential steps:\n\n1. **Research and Planning**: Understand your objectives\n2. **Implementation**: Put your strategy into action\n3. **Monitoring**: Track your progress and adjust as needed\n\n## Best Practices\n\nWhen working with ${req.topic}, remember these key principles:\n\n- Focus on quality over quantity\n- Stay updated with latest trends\n- Measure your results regularly\n\n## Conclusion\n\n${req.topic} is an essential component of modern success. By following the guidelines outlined in this article, you'll be well-equipped to leverage ${req.topic} for your benefit.\n\n${req.additionalInfo ? `\n## Additional Information\n\n${req.additionalInfo}` : ''}`,
      metaDescription: `Learn everything about ${req.topic} with our comprehensive guide. Discover best practices, benefits, and implementation strategies.`,
      hashtags: req.keywords ? req.keywords.split(',').map(k => `#${k.trim().replace(/\s+/g, '')}`) : [`#${req.topic.replace(/\s+/g, '')}`],
      callToAction: `Ready to get started with ${req.topic}? Contact us today for personalized assistance!`
    }

    // Customize content based on type
    switch (req.type) {
      case 'social-media':
        return {
          title: `${req.topic} - Quick Tips`,
          content: `🚀 Excited to share some insights about ${req.topic}!\n\n✨ Key points to remember:\n• Focus on your goals\n• Stay consistent\n• Measure results\n\n${req.tone === 'Humorous' ? '😄 Remember, Rome wasn\'t built in a day, but they were laying bricks every hour!' : 'Ready to take action?'}\n\n#${req.topic.replace(/\s+/g, '')} ${req.keywords ? req.keywords.split(',').map(k => `#${k.trim().replace(/\s+/g, '')}`).join(' ') : ''}`,
          hashtags: req.keywords ? req.keywords.split(',').map(k => `#${k.trim().replace(/\s+/g, '')}`) : [`#${req.topic.replace(/\s+/g, '')}`],
          callToAction: "What's your experience with this? Share in the comments! 👇"
        }
      
      case 'ad-copy':
        return {
          title: `Transform Your Business with ${req.topic}`,
          content: `🎯 ATTENTION: Stop struggling with ${req.topic}!\n\n✅ Get instant results\n✅ Save time and money\n✅ Join thousands of satisfied customers\n\n🔥 LIMITED TIME OFFER: Get started today and see the difference!\n\n💡 Why choose us?\n• Expert guidance\n• Proven results\n• 24/7 support\n\nDon't wait - your competition isn't!`,
          callToAction: "Click here to get started NOW! 🚀"
        }
      
      case 'email':
        return {
          title: `Your Weekly Update: ${req.topic}`,
          content: `Hi there!\n\nI hope this email finds you well. I wanted to share some exciting updates about ${req.topic} that I think you'll find valuable.\n\n## What's New in ${req.topic}\n\nThis week, we've seen some significant developments in the world of ${req.topic}. Here are the key highlights:\n\n• **Trending Topic**: Latest insights and updates\n• **Expert Tips**: Best practices from industry leaders\n• **Case Studies**: Real-world examples of success\n\n## Your Action Items\n\nBased on your interests in ${req.topic}, here are some recommended next steps:\n\n1. Review the latest trends\n2. Implement new strategies\n3. Track your progress\n\n## Upcoming Events\n\nDon't miss our upcoming webinar on ${req.topic} - register now!\n\nBest regards,\nThe Team`,
          callToAction: "Reply to this email with your questions!"
        }
      
      case 'product-description':
        return {
          title: `Premium ${req.topic} Solution`,
          content: `## Product Overview\n\nIntroducing our revolutionary ${req.topic} solution designed to meet all your needs. This premium product combines cutting-edge technology with user-friendly design.\n\n## Key Features\n\n✅ **Advanced Technology**: State-of-the-art features\n✅ **Easy to Use**: Intuitive interface for all skill levels\n✅ **Reliable Performance**: Consistent results every time\n✅ **24/7 Support**: Expert assistance when you need it\n\n## Benefits\n\n• Save time and increase productivity\n• Reduce costs and improve efficiency\n• Get professional results instantly\n• Scale your business effortlessly\n\n## Perfect For\n\nThis ${req.topic} solution is ideal for:\n• Small businesses\n• Entrepreneurs\n• Marketing professionals\n• Content creators\n\n## Specifications\n\n• Compatible with all major platforms\n• Cloud-based for easy access\n• Regular updates and improvements\n• Secure and reliable\n\n## Customer Reviews\n\n⭐⭐⭐⭐⭐ "This ${req.topic} solution transformed our workflow!" - Sarah M.\n⭐⭐⭐⭐⭐ "Best investment we've made!" - John D.`,
          callToAction: "Order now and get 30% off your first month!"
        }
      
      case 'landing-page':
        return {
          title: `Welcome to ${req.topic} - Your Success Starts Here`,
          content: `# Transform Your Business with ${req.topic}\n\n## The Problem\n\nAre you struggling with ${req.topic}? You're not alone. Many businesses face challenges when it comes to ${req.topic}, leading to:\n\n• Wasted time and resources\n• Missed opportunities\n• Frustrated customers\n• Lost revenue\n\n## The Solution\n\nOur ${req.topic} platform is designed to solve these problems once and for all. With our innovative approach, you can:\n\n✅ **Increase Efficiency**: Streamline your processes\n✅ **Boost Results**: See measurable improvements\n✅ **Save Money**: Reduce operational costs\n✅ **Scale Faster**: Grow your business effortlessly\n\n## How It Works\n\n### Step 1: Setup\nGet started in minutes with our easy setup process.\n\n### Step 2: Configure\nCustomize the platform to match your specific needs.\n\n### Step 3: Launch\nDeploy your solution and start seeing results immediately.\n\n## Success Stories\n\n> "This platform revolutionized our approach to ${req.topic}. We've seen a 300% improvement in our results!" - CEO, Tech Company\n\n## Pricing\n\n### Starter Plan - $29/month\n• Basic features\n• Email support\n• Perfect for small businesses\n\n### Professional Plan - $79/month\n• Advanced features\n• Priority support\n• Ideal for growing companies\n\n### Enterprise Plan - $199/month\n• Full feature set\n• Dedicated support\n• Custom integrations\n\n## FAQ\n\n**Q: How quickly can I get started?**\nA: You can be up and running in less than 10 minutes!\n\n**Q: Do you offer a free trial?**\nA: Yes! Start with our 14-day free trial, no credit card required.\n\n**Q: What kind of support do you provide?**\nA: We offer 24/7 email support and live chat during business hours.`,
          callToAction: "Start Your Free Trial Today - No Credit Card Required!"
        }
      
      default:
        return baseContent
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const downloadContent = () => {
    if (!generatedContent) return
    
    const content = `Title: ${generatedContent.title}\n\n${generatedContent.content}\n\n${generatedContent.metaDescription ? `Meta Description: ${generatedContent.metaDescription}\n\n` : ''}${generatedContent.hashtags ? `Hashtags: ${generatedContent.hashtags.join(' ')}\n\n` : ''}${generatedContent.callToAction ? `Call to Action: ${generatedContent.callToAction}` : ''}`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${request.topic.replace(/\s+/g, '_')}_content.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const regenerateContent = () => {
    generateContent()
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
              AI Content Generator
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create high-quality, engaging content for any platform with our AI-powered content generator
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Content Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Content Type
                </CardTitle>
                <CardDescription>
                  Choose the type of content you want to generate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {contentTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => {
                          setSelectedType(type.id)
                          setRequest(prev => ({ ...prev, type: type.id }))
                        }}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedType === type.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-6 h-6 mb-2" />
                        <div className="font-medium text-sm">{type.name}</div>
                        <div className="text-xs text-muted-foreground">{type.description}</div>
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Content Parameters */}
            <Card>
              <CardHeader>
                <CardTitle>Content Parameters</CardTitle>
                <CardDescription>
                  Customize your content with these parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Topic/Subject *</label>
                  <Input
                    placeholder="e.g., Digital Marketing Strategies"
                    value={request.topic}
                    onChange={(e) => setRequest(prev => ({ ...prev, topic: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Keywords (comma-separated)</label>
                  <Input
                    placeholder="e.g., SEO, content marketing, social media"
                    value={request.keywords}
                    onChange={(e) => setRequest(prev => ({ ...prev, keywords: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tone</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={request.tone}
                    onChange={(e) => setRequest(prev => ({ ...prev, tone: e.target.value }))}
                  >
                    {tones.map(tone => (
                      <option key={tone} value={tone}>{tone}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Length</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={request.length}
                    onChange={(e) => setRequest(prev => ({ ...prev, length: e.target.value }))}
                  >
                    {lengths.map(length => (
                      <option key={length} value={length}>{length}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <Input
                    placeholder="e.g., Small business owners, Marketing professionals"
                    value={request.targetAudience}
                    onChange={(e) => setRequest(prev => ({ ...prev, targetAudience: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <Textarea
                    placeholder="Any specific requirements, examples, or context..."
                    value={request.additionalInfo}
                    onChange={(e) => setRequest(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    rows={3}
                  />
                </div>

                <Button 
                  onClick={generateContent} 
                  disabled={isGenerating || !request.topic.trim()}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                      Generating Content...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 w-4 h-4" />
                      Generate Content
                    </>
                  )}
                </Button>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Generated Content */}
          <div>
            {generatedContent ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Generated Content
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(generatedContent.content)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={downloadContent}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={regenerateContent}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Title</h3>
                      <p className="text-lg font-medium">{generatedContent.title}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Content</h3>
                      <div className="prose max-w-none">
                        <pre className="whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          {generatedContent.content}
                        </pre>
                      </div>
                    </div>

                    {generatedContent.metaDescription && (
                      <div>
                        <h3 className="font-semibold mb-2">Meta Description</h3>
                        <p className="text-sm text-muted-foreground">{generatedContent.metaDescription}</p>
                      </div>
                    )}

                    {generatedContent.hashtags && (
                      <div>
                        <h3 className="font-semibold mb-2">Hashtags</h3>
                        <div className="flex flex-wrap gap-2">
                          {generatedContent.hashtags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {generatedContent.callToAction && (
                      <div>
                        <h3 className="font-semibold mb-2">Call to Action</h3>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{generatedContent.callToAction}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center text-muted-foreground">
                    <Wand2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Your generated content will appear here</p>
                    <p className="text-sm">Fill in the parameters and click "Generate Content"</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {generatedContent && (
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <Link href="#contact">
                Get Professional Content Help
              </Link>
            </Button>
            <Button variant="outline" onClick={() => {
              setGeneratedContent(null)
              setRequest(prev => ({ ...prev, topic: '', keywords: '', additionalInfo: '' }))
            }}>
              Generate New Content
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
