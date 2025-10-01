"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Video, Download, RefreshCw, Eye, Heart, Share2, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

interface VideoDownloadRequest {
  url: string
  platform: string
}

export default function PinterestDownloaderPage() {
  const [downloadRequest, setDownloadRequest] = useState<VideoDownloadRequest>({
    url: '',
    platform: 'pinterest'
  })
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadError, setDownloadError] = useState("")
  const [downloadSuccess, setDownloadSuccess] = useState("")
  const [videoInfo, setVideoInfo] = useState<{
    title: string
    thumbnail: string
    duration: string
    size: string
  } | null>(null)

  const downloadVideo = async (url?: string) => {
    const urlToProcess = url || downloadRequest.url
    
    if (!urlToProcess.trim()) {
      setDownloadError("Please enter a valid Pinterest URL")
      return
    }

    // Check for both full Pinterest URLs and shortened pin.it URLs
    const isValidPinterestUrl = urlToProcess.includes('pinterest.com') || 
                               urlToProcess.includes('pin.it/')
    
    if (!isValidPinterestUrl) {
      setDownloadError("Please enter a valid Pinterest URL (pinterest.com or pin.it)")
      return
    }

    setIsDownloading(true)
    setDownloadError("")
    setDownloadSuccess("")
    setVideoInfo(null)

    try {
      // Simulate video info extraction
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock video info
      setVideoInfo({
        title: "Beautiful Nature Video",
        thumbnail: "/placeholder-video.jpg",
        duration: "2:30",
        size: "15.2 MB"
      })

      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setDownloadSuccess("Video downloaded successfully! Check your downloads folder.")
    } catch (err) {
      setDownloadError("Failed to download video. Please check the URL and try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  // Auto-download when URL is entered
  const handleUrlChange = (url: string) => {
    setDownloadRequest(prev => ({ ...prev, url }))
    
    // Auto-download if URL is valid and complete
    if (url.trim() && (url.includes('pinterest.com') || url.includes('pin.it/'))) {
      // Small delay to ensure URL is fully entered
      setTimeout(() => {
        downloadVideo(url)
      }, 1000)
    }
  }

  const clearAll = () => {
    setDownloadRequest(prev => ({ ...prev, url: '' }))
    setDownloadSuccess("")
    setDownloadError("")
    setVideoInfo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
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
              Pinterest Video Downloader
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Download videos from Pinterest pins easily and quickly
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Video Downloader
                </CardTitle>
                <CardDescription>
                  Download videos from Pinterest pins
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Pinterest Video URL *</label>
                  <Input
                    placeholder="https://www.pinterest.com/pin/... or https://pin.it/..."
                    value={downloadRequest.url}
                    onChange={(e) => handleUrlChange(e.target.value)}
                  />
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-muted-foreground">
                      Paste the Pinterest pin URL (full URL or shortened pin.it link) containing the video you want to download
                    </p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Auto-download
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    How to use:
                  </h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Go to Pinterest and find the video you want to download</li>
                    <li>Click on the pin to open it</li>
                    <li>Copy the URL from your browser's address bar</li>
                    <li>Paste the URL in the field above (supports both full URLs and pin.it shortened links)</li>
                    <li><strong>Download starts automatically!</strong> No need to click any button</li>
                  </ol>
                </div>

                <Button 
                  onClick={() => downloadVideo()} 
                  disabled={isDownloading || !downloadRequest.url.trim()}
                  className="w-full"
                >
                  {isDownloading ? (
                    <>
                      <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                      Downloading Video...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 w-4 h-4" />
                      Download Video (Auto-download enabled)
                    </>
                  )}
                </Button>

                {downloadError && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <p className="text-red-600 dark:text-red-400 text-sm">{downloadError}</p>
                    </div>
                  </div>
                )}

                {downloadSuccess && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-green-600 dark:text-green-400 text-sm">{downloadSuccess}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 list-disc list-inside">
                  <li>Only download videos that you have permission to use</li>
                  <li>Respect copyright and intellectual property rights</li>
                  <li>This tool is for personal use only</li>
                  <li>Downloaded videos will be saved to your default downloads folder</li>
                  <li>Some videos may be protected and cannot be downloaded</li>
                  <li>Always give credit to the original creator when sharing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Video Info & Status */}
          <div>
            {videoInfo ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Video Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center mb-3">
                        <Video className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium">{videoInfo.title}</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Duration:</span>
                        <span className="text-sm font-medium">{videoInfo.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">File Size:</span>
                        <span className="text-sm font-medium">{videoInfo.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Platform:</span>
                        <span className="text-sm font-medium">Pinterest</span>
                      </div>
                    </div>

                    {downloadSuccess && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <p className="text-green-600 dark:text-green-400 text-sm">Download completed successfully!</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center text-muted-foreground">
                    <Video className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Video information will appear here</p>
                    <p className="text-sm">Enter a Pinterest URL and click "Download Video"</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Pinterest Downloader?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Fast Download</h3>
                <p className="text-sm text-muted-foreground">Download Pinterest videos quickly and efficiently</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">Simple interface - just paste the URL and download</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Safe & Secure</h3>
                <p className="text-sm text-muted-foreground">Your privacy is protected - no data is stored</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="#contact">
              Get Professional Video Help
            </Link>
          </Button>
          <Button variant="outline" onClick={clearAll}>
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}
