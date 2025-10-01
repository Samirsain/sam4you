"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Hash, Copy, Download, RefreshCw, MessageSquare, Instagram, Facebook, Twitter, Youtube, Sparkles, Zap, Share2 } from "lucide-react"
import Link from "next/link"

interface CaptionRequest {
  topic: string
  platform: string
  tone: string
  includeHashtags: boolean
  includeEmojis: boolean
  callToAction: string
  additionalInfo: string
}

interface GeneratedCaption {
  caption: string
  hashtags: string[]
  emojis: string[]
  characterCount: number
  platform: string
}

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, maxChars: 2200, description: 'Visual storytelling platform' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, maxChars: 63206, description: 'Social networking platform' },
  { id: 'twitter', name: 'Twitter/X', icon: Twitter, maxChars: 280, description: 'Micro-blogging platform' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, maxChars: 5000, description: 'Video sharing platform' },
  { id: 'pinterest', name: 'Pinterest', icon: Share2, maxChars: 500, description: 'Visual discovery platform' }
]

const tones = [
  'Professional', 'Casual', 'Friendly', 'Motivational', 'Educational', 
  'Humorous', 'Inspirational', 'Trendy', 'Conversational', 'Authoritative'
]

const callToActions = [
  'Follow for more tips!',
  'Double tap if you agree!',
  'Share your thoughts below!',
  'Save this for later!',
  'Tag a friend who needs this!',
  'What do you think?',
  'Let me know in the comments!',
  'Share this post!',
  'Subscribe for more!',
  'Custom CTA'
]

export default function MetaCaptionPage() {
  const [captionRequest, setCaptionRequest] = useState<CaptionRequest>({
    topic: '',
    platform: 'instagram',
    tone: 'Professional',
    includeHashtags: true,
    includeEmojis: true,
    callToAction: 'Follow for more tips!',
    additionalInfo: ''
  })
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false)
  const [generatedCaption, setGeneratedCaption] = useState<GeneratedCaption | null>(null)
  const [captionError, setCaptionError] = useState("")

  const generateCaption = async () => {
    if (!captionRequest.topic.trim()) {
      setCaptionError("Please enter a topic for your caption")
      return
    }

    setIsGeneratingCaption(true)
    setCaptionError("")
    setGeneratedCaption(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockCaption = generateMockCaption(captionRequest)
      setGeneratedCaption(mockCaption)
    } catch (err) {
      setCaptionError("Failed to generate caption. Please try again.")
    } finally {
      setIsGeneratingCaption(false)
    }
  }

  const generateMockCaption = (req: CaptionRequest): GeneratedCaption => {
    const platform = platforms.find(p => p.id === req.platform)
    const baseCaption = `🌟 Exciting news about ${req.topic}! 

${req.tone === 'Motivational' ? '💪 Ready to level up?' : 
  req.tone === 'Educational' ? '📚 Let\'s dive into this topic:' :
  req.tone === 'Humorous' ? '😄 Here\'s something that will make you smile:' :
  'Here\'s what you need to know about'} ${req.topic}!

✨ Key points to remember:
• Stay focused on your goals
• Consistency is key
• Don't be afraid to try new things
• Learn from every experience

${req.additionalInfo ? `\n💡 Pro tip: ${req.additionalInfo}\n` : ''}

${req.callToAction === 'Custom CTA' ? 'Ready to take action?' : req.callToAction}`

    const hashtags = [
      `#${req.topic.replace(/\s+/g, '')}`,
      '#SocialMedia',
      '#Content',
      '#Marketing',
      '#Tips',
      '#Growth',
      '#Digital',
      '#Business',
      '#Success',
      '#Motivation'
    ].slice(0, req.includeHashtags ? 10 : 0)

    const emojis = ['🌟', '✨', '💪', '📚', '😄', '💡', '🚀', '🎯', '❤️', '🔥']

    return {
      caption: baseCaption,
      hashtags,
      emojis: req.includeEmojis ? emojis : [],
      characterCount: baseCaption.length + (req.includeHashtags ? hashtags.join(' ').length : 0),
      platform: req.platform
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const downloadCaption = () => {
    if (!generatedCaption) return
    
    const content = `Caption: ${generatedCaption.caption}\n\nHashtags: ${generatedCaption.hashtags.join(' ')}\n\nCharacter Count: ${generatedCaption.characterCount}\nPlatform: ${generatedCaption.platform}`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${captionRequest.topic.replace(/\s+/g, '_')}_caption.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getPlatformIcon = (platformId: string) => {
    const platform = platforms.find(p => p.id === platformId)
    return platform ? platform.icon : MessageSquare
  }

  const getCharacterColor = (count: number, max: number) => {
    const percentage = (count / max) * 100
    if (percentage > 90) return "text-red-500"
    if (percentage > 75) return "text-yellow-500"
    return "text-green-500"
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
              Meta Caption Generator
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Generate engaging social media captions for all platforms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Caption Generator
                </CardTitle>
                <CardDescription>
                  Create engaging captions for your social media posts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Topic/Content *</label>
                  <Input
                    placeholder="e.g., Morning workout routine, Product launch, Travel tips"
                    value={captionRequest.topic}
                    onChange={(e) => setCaptionRequest(prev => ({ ...prev, topic: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Platform</label>
                  <div className="grid grid-cols-2 gap-2">
                    {platforms.map((platform) => {
                      const Icon = platform.icon
                      return (
                        <button
                          key={platform.id}
                          onClick={() => setCaptionRequest(prev => ({ ...prev, platform: platform.id }))}
                          className={`p-3 rounded-lg border-2 transition-all text-left ${
                            captionRequest.platform === platform.id
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Icon className="w-5 h-5 mb-1" />
                          <div className="font-medium text-sm">{platform.name}</div>
                          <div className="text-xs text-muted-foreground">{platform.description}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tone</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={captionRequest.tone}
                    onChange={(e) => setCaptionRequest(prev => ({ ...prev, tone: e.target.value }))}
                  >
                    {tones.map(tone => (
                      <option key={tone} value={tone}>{tone}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Call to Action</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={captionRequest.callToAction}
                    onChange={(e) => setCaptionRequest(prev => ({ ...prev, callToAction: e.target.value }))}
                  >
                    {callToActions.map(cta => (
                      <option key={cta} value={cta}>{cta}</option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={captionRequest.includeHashtags}
                      onChange={(e) => setCaptionRequest(prev => ({ ...prev, includeHashtags: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm">Include Hashtags</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={captionRequest.includeEmojis}
                      onChange={(e) => setCaptionRequest(prev => ({ ...prev, includeEmojis: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm">Include Emojis</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <Textarea
                    placeholder="Any specific details, tips, or context to include..."
                    value={captionRequest.additionalInfo}
                    onChange={(e) => setCaptionRequest(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    rows={3}
                  />
                </div>

                <Button 
                  onClick={generateCaption} 
                  disabled={isGeneratingCaption || !captionRequest.topic.trim()}
                  className="w-full"
                >
                  {isGeneratingCaption ? (
                    <>
                      <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                      Generating Caption...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 w-4 h-4" />
                      Generate Caption
                    </>
                  )}
                </Button>

                {captionError && (
                  <p className="text-red-500 text-sm">{captionError}</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Generated Caption */}
          <div>
            {generatedCaption ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {(() => {
                        const Icon = getPlatformIcon(generatedCaption.platform)
                        return <Icon className="w-5 h-5" />
                      })()}
                      Generated Caption
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(generatedCaption.caption)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={downloadCaption}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Caption</h3>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm">{generatedCaption.caption}</pre>
                      </div>
                    </div>

                    {generatedCaption.hashtags.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2">Hashtags</h3>
                        <div className="flex flex-wrap gap-2">
                          {generatedCaption.hashtags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-sm">
                      <span>Character Count:</span>
                      <span className={getCharacterColor(generatedCaption.characterCount, platforms.find(p => p.id === generatedCaption.platform)?.maxChars || 2200)}>
                        {generatedCaption.characterCount} / {platforms.find(p => p.id === generatedCaption.platform)?.maxChars || 2200}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center text-muted-foreground">
                    <Hash className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Your generated caption will appear here</p>
                    <p className="text-sm">Fill in the details and click "Generate Caption"</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="#contact">
              Get Professional Social Media Help
            </Link>
          </Button>
          <Button variant="outline" onClick={() => {
            setGeneratedCaption(null)
            setCaptionRequest(prev => ({ ...prev, topic: '', additionalInfo: '' }))
          }}>
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}
