"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search, CheckCircle, XCircle, AlertCircle, ExternalLink, Globe, Eye, Zap, Target } from "lucide-react"
import Link from "next/link"

interface SEOAnalysis {
  url: string
  title: string
  description: string
  keywords: string[]
  score: number
  issues: SEOIssue[]
  recommendations: SEORecommendation[]
  metrics: SEOMetrics
}

interface SEOIssue {
  type: 'error' | 'warning' | 'info'
  category: string
  message: string
  impact: 'high' | 'medium' | 'low'
}

interface SEORecommendation {
  category: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
}

interface SEOMetrics {
  pageSpeed: number
  mobileFriendly: boolean
  sslEnabled: boolean
  socialMedia: {
    ogTitle: string
    ogDescription: string
    ogImage: string
    twitterCard: string
  }
  technical: {
    hasRobotsTxt: boolean
    hasSitemap: boolean
    hasCanonical: boolean
    hasH1: boolean
    hasH2: boolean
    hasH3: boolean
    imageAltTags: number
    internalLinks: number
    externalLinks: number
  }
}

export default function SEOCheckerPage() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null)
  const [error, setError] = useState("")

  const analyzeSEO = async () => {
    if (!url) {
      setError("Please enter a valid URL")
      return
    }

    setIsAnalyzing(true)
    setError("")
    setAnalysis(null)

    try {
      // Simulate API call - in real implementation, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock analysis data
      const mockAnalysis: SEOAnalysis = {
        url: url,
        title: "Sample Website Title",
        description: "This is a sample website description that should be optimized for SEO.",
        keywords: ["seo", "website", "optimization", "digital marketing"],
        score: 78,
        issues: [
          {
            type: 'error',
            category: 'Meta Tags',
            message: 'Missing meta description',
            impact: 'high'
          },
          {
            type: 'warning',
            category: 'Content',
            message: 'No H1 tag found',
            impact: 'medium'
          },
          {
            type: 'info',
            category: 'Images',
            message: 'Some images missing alt tags',
            impact: 'low'
          }
        ],
        recommendations: [
          {
            category: 'Content',
            title: 'Add Meta Description',
            description: 'Create a compelling meta description between 150-160 characters to improve click-through rates.',
            priority: 'high'
          },
          {
            category: 'Technical',
            title: 'Optimize Page Speed',
            description: 'Compress images and minify CSS/JS to improve loading times.',
            priority: 'medium'
          }
        ],
        metrics: {
          pageSpeed: 85,
          mobileFriendly: true,
          sslEnabled: true,
          socialMedia: {
            ogTitle: "Sample Website",
            ogDescription: "Sample description for social media",
            ogImage: "/og-image.jpg",
            twitterCard: "summary_large_image"
          },
          technical: {
            hasRobotsTxt: true,
            hasSitemap: false,
            hasCanonical: true,
            hasH1: false,
            hasH2: true,
            hasH3: true,
            imageAltTags: 3,
            internalLinks: 12,
            externalLinks: 5
          }
        }
      }

      setAnalysis(mockAnalysis)
    } catch (err) {
      setError("Failed to analyze the website. Please try again.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-100"
    if (score >= 60) return "bg-yellow-100"
    return "bg-red-100"
  }

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <XCircle className="w-5 h-5 text-red-500" />
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-500" />
      default: return <CheckCircle className="w-5 h-5 text-blue-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return "border-l-red-500 bg-red-50"
      case 'medium': return "border-l-yellow-500 bg-yellow-50"
      default: return "border-l-blue-500 bg-blue-50"
    }
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
              SEO Checker Tool
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Analyze your website's SEO performance and get actionable recommendations to improve your search rankings
            </p>
          </div>
        </div>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Website Analysis
            </CardTitle>
            <CardDescription>
              Enter your website URL to get a comprehensive SEO analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && analyzeSEO()}
              />
              <Button 
                onClick={analyzeSEO} 
                disabled={isAnalyzing}
                className="px-8"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze SEO"}
              </Button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        {analysis && (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  SEO Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full ${getScoreBgColor(analysis.score)} flex items-center justify-center`}>
                    <span className={`text-4xl font-bold ${getScoreColor(analysis.score)}`}>
                      {analysis.score}
                    </span>
                  </div>
                </div>
                <p className="text-center text-muted-foreground mt-4">
                  {analysis.score >= 80 ? "Excellent SEO!" : 
                   analysis.score >= 60 ? "Good SEO, room for improvement" : 
                   "Needs significant SEO improvements"}
                </p>
              </CardContent>
            </Card>

            {/* Issues */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Issues Found
                </CardTitle>
                <CardDescription>
                  {analysis.issues.length} issues that need attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysis.issues.map((issue, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                      {getIssueIcon(issue.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{issue.category}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            issue.impact === 'high' ? 'bg-red-100 text-red-700' :
                            issue.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {issue.impact} impact
                          </span>
                        </div>
                        <p className="text-muted-foreground">{issue.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Recommendations
                </CardTitle>
                <CardDescription>
                  Actionable steps to improve your SEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysis.recommendations.map((rec, index) => (
                    <div key={index} className={`border-l-4 p-4 rounded-r-lg ${getPriorityColor(rec.priority)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{rec.title}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                          rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {rec.priority} priority
                        </span>
                      </div>
                      <p className="text-muted-foreground">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Technical SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Page Speed</span>
                      <span className="font-medium">{analysis.metrics.pageSpeed}/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile Friendly</span>
                      <span className="font-medium">{analysis.metrics.mobileFriendly ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SSL Enabled</span>
                      <span className="font-medium">{analysis.metrics.sslEnabled ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Robots.txt</span>
                      <span className="font-medium">{analysis.metrics.technical.hasRobotsTxt ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sitemap</span>
                      <span className="font-medium">{analysis.metrics.technical.hasSitemap ? "Yes" : "No"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Content Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>H1 Tag</span>
                      <span className="font-medium">{analysis.metrics.technical.hasH1 ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>H2 Tags</span>
                      <span className="font-medium">{analysis.metrics.technical.hasH2 ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Image Alt Tags</span>
                      <span className="font-medium">{analysis.metrics.technical.imageAltTags}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Internal Links</span>
                      <span className="font-medium">{analysis.metrics.technical.internalLinks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>External Links</span>
                      <span className="font-medium">{analysis.metrics.technical.externalLinks}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="#contact">
                  Get Professional SEO Help
                </Link>
              </Button>
              <Button variant="outline" onClick={() => {
                setAnalysis(null)
                setUrl("")
              }}>
                Analyze Another Website
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
