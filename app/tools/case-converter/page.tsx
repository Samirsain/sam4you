"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy, RotateCcw, Type, FileText } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CaseConverter() {
  const [inputText, setInputText] = useState("")
  const [convertedText, setConvertedText] = useState("")
  const [conversionType, setConversionType] = useState("uppercase")
  const { toast } = useToast()

  const convertText = (type) => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to convert",
        variant: "destructive"
      })
      return
    }

    let result = ""
    
    switch (type) {
      case "uppercase":
        result = inputText.toUpperCase()
        break
      case "lowercase":
        result = inputText.toLowerCase()
        break
      case "titlecase":
        result = inputText.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
        break
      case "camelcase":
        result = inputText.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
        break
      case "pascalcase":
        result = inputText.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '')
        break
      case "snakecase":
        result = inputText.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_')
        break
      case "kebabcase":
        result = inputText.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-')
        break
      case "sentencecase":
        result = inputText.toLowerCase().replace(/(^\w|\.\s+\w)/g, l => l.toUpperCase())
        break
      case "alternating":
        result = inputText.split('').map((char, index) => 
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('')
        break
      case "inverse":
        result = inputText.split('').map(char => 
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join('')
        break
      default:
        result = inputText
    }

    setConvertedText(result)
    setConversionType(type)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    })
  }

  const clearText = () => {
    setInputText("")
    setConvertedText("")
  }

  const swapText = () => {
    setInputText(convertedText)
    setConvertedText("")
  }

  const conversionTypes = [
    { id: "uppercase", label: "UPPERCASE", description: "Convert to all uppercase letters" },
    { id: "lowercase", label: "lowercase", description: "Convert to all lowercase letters" },
    { id: "titlecase", label: "Title Case", description: "Convert to title case (first letter of each word)" },
    { id: "camelcase", label: "camelCase", description: "Convert to camelCase (first word lowercase)" },
    { id: "pascalcase", label: "PascalCase", description: "Convert to PascalCase (first letter of each word)" },
    { id: "snakecase", label: "snake_case", description: "Convert to snake_case (words separated by underscores)" },
    { id: "kebabcase", label: "kebab-case", description: "Convert to kebab-case (words separated by hyphens)" },
    { id: "sentencecase", label: "Sentence case", description: "Convert to sentence case (first letter of sentence)" },
    { id: "alternating", label: "AlTeRnAtInG", description: "Convert to alternating case" },
    { id: "inverse", label: "iNVERSE", description: "Invert the case of each letter" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Type className="w-4 h-4" />
              Free Text Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Case Converter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Convert text between different cases - uppercase, lowercase, title case, and more
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Text */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Input Text
                </CardTitle>
                <CardDescription>
                  Enter the text you want to convert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter your text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[200px] text-lg"
                />
                <div className="flex gap-2">
                  <Button onClick={clearText} variant="outline" size="sm" className="flex-1">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                  <Button onClick={swapText} variant="outline" size="sm" className="flex-1">
                    Swap
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Options */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  Conversion Options
                </CardTitle>
                <CardDescription>
                  Choose the case conversion type
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {conversionTypes.map((type) => (
                  <Button
                    key={type.id}
                    onClick={() => convertText(type.id)}
                    variant={conversionType === type.id ? "default" : "outline"}
                    className="w-full justify-start h-auto p-3"
                  >
                    <div className="text-left">
                      <div className="font-medium">{type.label}</div>
                      <div className="text-xs opacity-70">{type.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Output Text */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Converted Text
                </CardTitle>
                <CardDescription>
                  Your text after conversion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="min-h-[200px] p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                  <div className="text-lg whitespace-pre-wrap break-words">
                    {convertedText || "Converted text will appear here..."}
                  </div>
                </div>
                {convertedText && (
                  <Button
                    onClick={() => copyToClipboard(convertedText)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy to Clipboard
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About Case Converter</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A case converter is a tool that transforms text between different letter cases. 
                This is useful for formatting text, programming, and content creation.
              </p>
              <h3>Case Types:</h3>
              <ul>
                <li><strong>UPPERCASE:</strong> All letters in capital form</li>
                <li><strong>lowercase:</strong> All letters in small form</li>
                <li><strong>Title Case:</strong> First letter of each word capitalized</li>
                <li><strong>camelCase:</strong> First word lowercase, subsequent words capitalized</li>
                <li><strong>PascalCase:</strong> First letter of each word capitalized</li>
                <li><strong>snake_case:</strong> Words separated by underscores</li>
                <li><strong>kebab-case:</strong> Words separated by hyphens</li>
                <li><strong>Sentence case:</strong> First letter of sentence capitalized</li>
                <li><strong>AlTeRnAtInG:</strong> Alternating between uppercase and lowercase</li>
                <li><strong>iNVERSE:</strong> Invert the case of each letter</li>
              </ul>
              <h3>Common Use Cases:</h3>
              <ul>
                <li>Programming variable naming</li>
                <li>Content formatting</li>
                <li>Data processing</li>
                <li>Text normalization</li>
                <li>API development</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
