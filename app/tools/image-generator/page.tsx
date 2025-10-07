"use client"

import { Metadata } from "next"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Image, Sparkles, Download, Share2, Copy, RefreshCw, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [style, setStyle] = useState("realistic")
  const [size, setSize] = useState("1024x1024")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("")
  const [error, setError] = useState("")

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a description for the image")
      return
    }

    setIsGenerating(true)
    setError("")
    setGeneratedImage("")

    try {
      // Simulate API call - replace with actual AI service
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // For demo purposes, use a placeholder image
      const placeholderImages = [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1024&h=1024&fit=crop",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1024&h=1024&fit=crop",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1024&h=1024&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1024&h=1024&fit=crop",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1024&h=1024&fit=crop"
      ]
      
      const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)]
      setGeneratedImage(randomImage)
    } catch (err) {
      setError("Failed to generate image. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = `ai-generated-image-${Date.now()}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleShare = async () => {
    if (navigator.share && generatedImage) {
      try {
        await navigator.share({
          title: 'AI Generated Image',
          text: `Check out this AI generated image: ${prompt}`,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">AI-Powered Image Generation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Image Generator
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning visuals with our advanced AI image generator. 
                Create professional-quality images from simple text descriptions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="px-4 py-2">
                  <Image className="w-4 h-4 mr-2" />
                  Text to Image
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Download className="w-4 h-4 mr-2" />
                  Free to Use
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Image Generator Tool */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    Generate Your AI Image
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Describe what you want to create and let AI bring your vision to life
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Input Form */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                        Image Description *
                      </label>
                      <Textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="A beautiful sunset over mountains with a lake in the foreground, photorealistic style..."
                        className="min-h-[120px] resize-none"
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">
                          Style
                        </label>
                        <select 
                          id="style" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="realistic">Photorealistic</option>
                          <option value="artistic">Artistic</option>
                          <option value="cartoon">Cartoon</option>
                          <option value="anime">Anime</option>
                          <option value="oil-painting">Oil Painting</option>
                          <option value="watercolor">Watercolor</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                          Image Size
                        </label>
                        <select 
                          id="size" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="1024x1024">Square (1024x1024)</option>
                          <option value="1024x1792">Portrait (1024x1792)</option>
                          <option value="1792x1024">Landscape (1792x1024)</option>
                        </select>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-medium">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Image
                    </Button>
                  </div>
                  
                  {/* Generated Image Display */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">Your generated image will appear here</p>
                    <p className="text-sm text-gray-400">
                      Generated images are typically ready in 10-30 seconds
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Copy className="w-4 h-4" />
                      Copy Link
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Generate New
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our AI Image Generator?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Experience the power of cutting-edge AI technology for creating stunning visuals
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced AI Technology</h3>
                    <p className="text-gray-600">
                      Powered by state-of-the-art AI models to generate high-quality, creative images from text descriptions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Styles</h3>
                    <p className="text-gray-600">
                      Choose from various artistic styles including photorealistic, cartoon, anime, and traditional art forms.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">High Resolution</h3>
                    <p className="text-gray-600">
                      Generate images in high resolution suitable for both web and print media applications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tips for Better Results
                </h2>
                <p className="text-lg text-gray-600">
                  Get the most out of your AI image generation with these helpful tips
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Be Specific</h3>
                    <p className="text-gray-600 mb-4">
                      Include details about lighting, colors, composition, and mood for better results.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        "A majestic lion sitting on a rock at sunset, golden hour lighting, 
                        photorealistic style, detailed fur texture"
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Use Style Keywords</h3>
                    <p className="text-gray-600 mb-4">
                      Add style descriptors to guide the AI's artistic direction.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        "Modern minimalist logo design, clean lines, professional, 
                        vector style, blue and white colors"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Amazing Images?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Start generating stunning visuals with our AI image generator today
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="#generator">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Generating
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                  <Link href="/tools">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Browse More Tools
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
