"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Hash, Clock, Eye } from "lucide-react"

export default function WordCounter() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  })

  useEffect(() => {
    calculateStats()
  }, [text])

  const calculateStats = () => {
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0
    const readingTime = Math.ceil(words / 200) // Average reading speed: 200 words per minute

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime
    })
  }

  const clearText = () => {
    setText("")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Free Text Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Word Counter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Count words, characters, sentences, and paragraphs in your text with our free word counter
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Text Input */}
            <Card className="lg:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Text Input
                </CardTitle>
                <CardDescription>
                  Enter or paste your text to analyze
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter your text here to count words, characters, sentences, and paragraphs..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[400px] text-lg resize-none"
                />
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stats.words} words, {stats.characters} characters
                  </div>
                  <button
                    onClick={clearText}
                    className="text-sm text-red-600 dark:text-red-400 hover:underline"
                  >
                    Clear Text
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="w-5 h-5" />
                  Text Statistics
                </CardTitle>
                <CardDescription>
                  Detailed analysis of your text
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Word Count */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">Words</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stats.words.toLocaleString()}
                  </div>
                </div>

                {/* Character Count */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Hash className="w-4 h-4 text-gray-600" />
                      <span className="font-medium text-gray-900 dark:text-gray-100">Characters</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {stats.characters.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Hash className="w-4 h-4 text-gray-600" />
                      <span className="font-medium text-gray-900 dark:text-gray-100">Characters (no spaces)</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {stats.charactersNoSpaces.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium">Sentences</span>
                    <span className="font-bold text-lg">{stats.sentences}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium">Paragraphs</span>
                    <span className="font-bold text-lg">{stats.paragraphs}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">Reading Time</span>
                    </div>
                    <span className="font-bold text-lg">{stats.readingTime} min</span>
                  </div>
                </div>

                {/* Reading Level Indicator */}
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-900 dark:text-green-100">Reading Level</span>
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    {stats.words > 0 ? (
                      stats.words < 100 ? "Short" :
                      stats.words < 500 ? "Medium" :
                      stats.words < 1000 ? "Long" : "Very Long"
                    ) : "No text"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About Word Counter</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A word counter is an essential tool for writers, students, and content creators. 
                It helps you track the length and structure of your text for various purposes.
              </p>
              <h3>What We Count:</h3>
              <ul>
                <li><strong>Words:</strong> Total number of words in your text</li>
                <li><strong>Characters:</strong> Total characters including spaces</li>
                <li><strong>Characters (no spaces):</strong> Characters excluding spaces</li>
                <li><strong>Sentences:</strong> Number of sentences (ending with . ! ?)</li>
                <li><strong>Paragraphs:</strong> Number of paragraphs (separated by line breaks)</li>
                <li><strong>Reading Time:</strong> Estimated time to read (200 words/minute)</li>
              </ul>
              <h3>Common Use Cases:</h3>
              <ul>
                <li>Academic writing and essays</li>
                <li>Blog posts and articles</li>
                <li>Social media content</li>
                <li>Email and letter writing</li>
                <li>SEO content optimization</li>
                <li>Translation projects</li>
              </ul>
              <h3>Reading Time Calculation:</h3>
              <p>
                Reading time is calculated based on the average reading speed of 200 words per minute. 
                This is a standard metric used by most content platforms and tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
