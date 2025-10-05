"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Sparkles, FileText, Hash, Users, ShoppingCart, Lightbulb } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function AIContentGenerator() {
  const [contentType, setContentType] = useState("blog")
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [tone, setTone] = useState("professional")
  const [length, setLength] = useState("medium")
  const [generatedContent, setGeneratedContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const contentTypes = [
    { value: "blog", label: "Blog Post", icon: FileText, description: "Informative blog articles" },
    { value: "social", label: "Social Media", icon: Users, description: "Social media posts" },
    { value: "marketing", label: "Marketing Copy", icon: ShoppingCart, description: "Marketing and sales content" },
    { value: "seo", label: "SEO Content", icon: Hash, description: "SEO-optimized content" },
    { value: "creative", label: "Creative Writing", icon: Lightbulb, description: "Creative and engaging content" }
  ]

  const tones = [
    { value: "professional", label: "Professional" },
    { value: "casual", label: "Casual" },
    { value: "friendly", label: "Friendly" },
    { value: "authoritative", label: "Authoritative" },
    { value: "conversational", label: "Conversational" },
    { value: "humorous", label: "Humorous" }
  ]

  const lengths = [
    { value: "short", label: "Short (100-200 words)" },
    { value: "medium", label: "Medium (300-500 words)" },
    { value: "long", label: "Long (600-1000 words)" },
    { value: "very-long", label: "Very Long (1000+ words)" }
  ]

  const generateContent = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic",
        variant: "destructive"
      })
      return
    }

    setIsGenerating(true)
    
    // Simulate AI content generation
    setTimeout(() => {
      const content = generateMockContent(contentType, topic, keywords, tone, length)
      setGeneratedContent(content)
      setIsGenerating(false)
      
      toast({
        title: "Success!",
        description: "Content generated successfully",
      })
    }, 2000)
  }

  const generateMockContent = (type, topic, keywords, tone, length) => {
    const templates = {
      blog: `# ${topic}

${keywords ? `**Keywords:** ${keywords}` : ''}

## Introduction

${topic} is a fascinating subject that has gained significant attention in recent years. This comprehensive guide will explore the key aspects and provide valuable insights.

## Key Points

1. **Understanding the Basics**
   - Fundamental concepts and principles
   - Why this topic matters
   - Current trends and developments

2. **Practical Applications**
   - Real-world examples
   - Best practices and strategies
   - Common challenges and solutions

3. **Future Outlook**
   - Emerging trends
   - Potential opportunities
   - Recommendations for success

## Conclusion

${topic} represents an important area of focus that requires careful consideration and strategic planning. By understanding the key principles and staying informed about developments, you can make informed decisions and achieve your goals.

---

*This content was generated using AI technology to provide helpful insights and information.*`,

      social: `🚀 **${topic}** - Here's what you need to know!

${keywords ? `#${keywords.replace(/,/g, ' #')}` : ''}

✨ Key highlights:
• Important point 1
• Important point 2  
• Important point 3

💡 Pro tip: Always stay updated with the latest trends!

What are your thoughts on ${topic}? Share in the comments below! 👇

#Content #${topic.replace(/\s+/g, '')} #Tips #Growth`,

      marketing: `🎯 **Transform Your Business with ${topic}**

Are you ready to take your business to the next level? Our ${topic} solution is designed to help you achieve remarkable results.

**Why Choose Our ${topic} Solution?**

✅ Proven results and success stories
✅ Expert support and guidance  
✅ Customized approach for your needs
✅ Competitive pricing and value

**What You'll Get:**
- Comprehensive strategy and implementation
- Ongoing support and optimization
- Measurable results and ROI
- Peace of mind and confidence

**Ready to Get Started?**

Don't miss out on this opportunity to transform your business. Contact us today for a free consultation!

📞 Call now or visit our website to learn more.

*Limited time offer - Act fast!*`,

      seo: `# ${topic}: Complete Guide for 2024

${keywords ? `**Target Keywords:** ${keywords}` : ''}

## What is ${topic}?

${topic} is an essential concept that plays a crucial role in modern business and technology. Understanding its fundamentals is key to success.

## Benefits of ${topic}

1. **Improved Efficiency**
   - Streamlined processes
   - Reduced costs
   - Better resource utilization

2. **Enhanced Performance**
   - Faster results
   - Higher quality outcomes
   - Competitive advantage

3. **Scalability**
   - Growth potential
   - Future-proof solutions
   - Long-term success

## How to Implement ${topic}

### Step 1: Planning and Preparation
- Define your objectives
- Assess current situation
- Set realistic goals

### Step 2: Execution
- Follow best practices
- Monitor progress
- Make adjustments as needed

### Step 3: Optimization
- Analyze results
- Identify improvements
- Scale successful strategies

## Common Challenges and Solutions

**Challenge 1:** Initial implementation complexity
**Solution:** Start with basics and gradually expand

**Challenge 2:** Resource constraints
**Solution:** Prioritize high-impact activities

**Challenge 3:** Measuring success
**Solution:** Define clear metrics and KPIs

## Conclusion

${topic} offers significant opportunities for growth and improvement. By following the strategies outlined in this guide, you can achieve your goals and drive success.

**Next Steps:**
- Evaluate your current situation
- Develop an implementation plan
- Start with small, manageable steps
- Monitor and adjust as needed`,

      creative: `🌟 **The Magic of ${topic}**

Once upon a time, in a world where ${topic} held the key to endless possibilities...

**Chapter 1: The Discovery**

It all began with a simple question: "What if ${topic} could change everything?" This question sparked a journey of exploration and discovery that would transform the way we think about the world.

**Chapter 2: The Journey**

The path to understanding ${topic} was not always easy. There were challenges, obstacles, and moments of doubt. But with determination and creativity, new possibilities emerged.

**Chapter 3: The Transformation**

As the pieces fell into place, something remarkable happened. ${topic} became more than just a concept - it became a catalyst for change, innovation, and growth.

**The Lesson**

${topic} teaches us that:
- Every challenge is an opportunity
- Creativity knows no bounds
- The future is what we make it

**Epilogue**

The story of ${topic} continues to unfold, with new chapters being written every day. What will your chapter be?

---

*"The only limit to our realization of tomorrow is our doubts of today."* - Franklin D. Roosevelt`
    }

    return templates[type] || templates.blog
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    })
  }

  const clearContent = () => {
    setTopic("")
    setKeywords("")
    setGeneratedContent("")
  }

  const selectedContentType = contentTypes.find(type => type.value === contentType)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              AI Content Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Generate high-quality content for blogs, social media, and marketing with AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Generator Form */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Content Generator
                </CardTitle>
                <CardDescription>
                  Configure your content generation settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contentType">Content Type</Label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => {
                        const Icon = type.icon
                        return (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              <div>
                                <div className="font-medium">{type.label}</div>
                                <div className="text-xs text-gray-500">{type.description}</div>
                              </div>
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Topic *</Label>
                  <Input
                    id="topic"
                    type="text"
                    placeholder="Enter your topic or subject"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords (Optional)</Label>
                  <Input
                    id="keywords"
                    type="text"
                    placeholder="Enter keywords separated by commas"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tone">Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {tones.map((toneOption) => (
                          <SelectItem key={toneOption.value} value={toneOption.value}>
                            {toneOption.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="length">Length</Label>
                    <Select value={length} onValueChange={setLength}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        {lengths.map((lengthOption) => (
                          <SelectItem key={lengthOption.value} value={lengthOption.value}>
                            {lengthOption.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={generateContent} 
                    disabled={isGenerating}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Content
                      </>
                    )}
                  </Button>
                  <Button onClick={clearContent} variant="outline" className="flex-1">
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Generated Content */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {selectedContentType && <selectedContentType.icon className="w-5 h-5" />}
                  Generated Content
                </CardTitle>
                <CardDescription>
                  Your AI-generated {selectedContentType?.label.toLowerCase()} content
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedContent ? (
                  <div className="space-y-4">
                    <div className="min-h-[400px] p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {generatedContent}
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => copyToClipboard(generatedContent)}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Content
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      {isGenerating ? "Generating your content..." : "Enter topic and generate content"}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About AI Content Generator</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Our AI Content Generator uses advanced artificial intelligence to create high-quality, 
                engaging content for various purposes. Whether you need blog posts, social media content, 
                or marketing copy, our tool can help you generate professional content quickly.
              </p>
              <h3>Content Types:</h3>
              <ul>
                <li><strong>Blog Posts:</strong> Informative articles with proper structure and SEO optimization</li>
                <li><strong>Social Media:</strong> Engaging posts for various social media platforms</li>
                <li><strong>Marketing Copy:</strong> Persuasive content for sales and marketing campaigns</li>
                <li><strong>SEO Content:</strong> Search engine optimized content with proper keyword integration</li>
                <li><strong>Creative Writing:</strong> Engaging and creative content for storytelling</li>
              </ul>
              <h3>Features:</h3>
              <ul>
                <li>Multiple content types and formats</li>
                <li>Customizable tone and style</li>
                <li>Keyword integration for SEO</li>
                <li>Adjustable content length</li>
                <li>Professional quality output</li>
                <li>Easy copy and use functionality</li>
              </ul>
              <h3>Best Practices:</h3>
              <ul>
                <li>Provide clear and specific topics</li>
                <li>Include relevant keywords for better SEO</li>
                <li>Choose appropriate tone for your audience</li>
                <li>Review and edit generated content</li>
                <li>Add your personal touch and expertise</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
