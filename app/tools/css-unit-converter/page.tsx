"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Calculator, Code, Ruler } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CSSUnitConverter() {
  const [inputValue, setInputValue] = useState("")
  const [inputUnit, setInputUnit] = useState("px")
  const [outputUnit, setOutputUnit] = useState("rem")
  const [result, setResult] = useState("")
  const { toast } = useToast()

  const convertUnits = () => {
    const value = parseFloat(inputValue)
    if (isNaN(value)) {
      toast({
        title: "Error",
        description: "Please enter a valid number",
        variant: "destructive"
      })
      return
    }

    let result = 0

    // Convert to pixels first
    let pixels = 0
    switch (inputUnit) {
      case "px":
        pixels = value
        break
      case "em":
        pixels = value * 16 // Assuming 16px base font size
        break
      case "rem":
        pixels = value * 16 // Assuming 16px root font size
        break
      case "%":
        pixels = value * 16 / 100 // Assuming 16px base
        break
      case "vw":
        pixels = value * window.innerWidth / 100
        break
      case "vh":
        pixels = value * window.innerHeight / 100
        break
      case "vmin":
        pixels = value * Math.min(window.innerWidth, window.innerHeight) / 100
        break
      case "vmax":
        pixels = value * Math.max(window.innerWidth, window.innerHeight) / 100
        break
      case "pt":
        pixels = value * 1.333 // 1pt = 1.333px
        break
      case "pc":
        pixels = value * 16 // 1pc = 16px
        break
      case "in":
        pixels = value * 96 // 1in = 96px
        break
      case "cm":
        pixels = value * 37.8 // 1cm = 37.8px
        break
      case "mm":
        pixels = value * 3.78 // 1mm = 3.78px
        break
      default:
        pixels = value
    }

    // Convert from pixels to target unit
    switch (outputUnit) {
      case "px":
        result = pixels
        break
      case "em":
        result = pixels / 16
        break
      case "rem":
        result = pixels / 16
        break
      case "%":
        result = (pixels / 16) * 100
        break
      case "vw":
        result = (pixels / window.innerWidth) * 100
        break
      case "vh":
        result = (pixels / window.innerHeight) * 100
        break
      case "vmin":
        result = (pixels / Math.min(window.innerWidth, window.innerHeight)) * 100
        break
      case "vmax":
        result = (pixels / Math.max(window.innerWidth, window.innerHeight)) * 100
        break
      case "pt":
        result = pixels / 1.333
        break
      case "pc":
        result = pixels / 16
        break
      case "in":
        result = pixels / 96
        break
      case "cm":
        result = pixels / 37.8
        break
      case "mm":
        result = pixels / 3.78
        break
      default:
        result = pixels
    }

    setResult(result.toFixed(4))
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Value copied to clipboard",
    })
  }

  const resetConverter = () => {
    setInputValue("")
    setInputUnit("px")
    setOutputUnit("rem")
    setResult("")
  }

  const units = [
    { value: "px", label: "Pixels (px)", description: "Absolute unit, 1px = 1/96th of an inch" },
    { value: "em", label: "Em (em)", description: "Relative to parent element's font size" },
    { value: "rem", label: "Root Em (rem)", description: "Relative to root element's font size" },
    { value: "%", label: "Percentage (%)", description: "Relative to parent element" },
    { value: "vw", label: "Viewport Width (vw)", description: "1% of viewport width" },
    { value: "vh", label: "Viewport Height (vh)", description: "1% of viewport height" },
    { value: "vmin", label: "Viewport Min (vmin)", description: "1% of viewport's smaller dimension" },
    { value: "vmax", label: "Viewport Max (vmax)", description: "1% of viewport's larger dimension" },
    { value: "pt", label: "Points (pt)", description: "Print unit, 1pt = 1/72nd of an inch" },
    { value: "pc", label: "Picas (pc)", description: "Print unit, 1pc = 12pt" },
    { value: "in", label: "Inches (in)", description: "Absolute unit, 1in = 96px" },
    { value: "cm", label: "Centimeters (cm)", description: "Absolute unit, 1cm = 37.8px" },
    { value: "mm", label: "Millimeters (mm)", description: "Absolute unit, 1mm = 3.78px" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Free Converter
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              CSS Unit Converter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Convert between different CSS units - px, em, rem, %, vw, vh, and more
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Converter Form */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Unit Converter
                </CardTitle>
                <CardDescription>
                  Enter value and select units to convert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="inputValue">Value</Label>
                  <Input
                    id="inputValue"
                    type="number"
                    placeholder="Enter value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inputUnit">From Unit</Label>
                  <Select value={inputUnit} onValueChange={setInputUnit}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select input unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit.value} value={unit.value}>
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="outputUnit">To Unit</Label>
                  <Select value={outputUnit} onValueChange={setOutputUnit}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select output unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit.value} value={unit.value}>
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Button onClick={convertUnits} className="flex-1 bg-cyan-600 hover:bg-cyan-700">
                    Convert
                  </Button>
                  <Button onClick={resetConverter} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="w-5 h-5" />
                  Conversion Result
                </CardTitle>
                <CardDescription>
                  Your converted value
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                          {result} {outputUnit}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          {inputValue} {inputUnit} = {result} {outputUnit}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="font-mono text-lg font-bold text-gray-900 dark:text-white">
                          {result}{outputUnit}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          CSS Value
                        </div>
                      </div>

                      <Button
                        onClick={() => copyToClipboard(`${result}${outputUnit}`)}
                        className="w-full bg-cyan-600 hover:bg-cyan-700"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy CSS Value
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Enter value and units to see conversion
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Unit Information */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                CSS Units Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {units.map((unit) => (
                  <div key={unit.value} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="font-mono font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {unit.value}
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white mb-2">
                      {unit.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {unit.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About CSS Unit Converter</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                CSS units are used to specify measurements in CSS properties. Understanding and converting 
                between different units is essential for responsive web design and consistent styling.
              </p>
              <h3>Unit Categories:</h3>
              <ul>
                <li><strong>Absolute Units:</strong> px, pt, pc, in, cm, mm - Fixed size regardless of context</li>
                <li><strong>Relative Units:</strong> em, rem, % - Size relative to another element</li>
                <li><strong>Viewport Units:</strong> vw, vh, vmin, vmax - Size relative to viewport dimensions</li>
              </ul>
              <h3>Common Use Cases:</h3>
              <ul>
                <li>Responsive web design</li>
                <li>Typography scaling</li>
                <li>Layout spacing</li>
                <li>Media queries</li>
                <li>Print stylesheets</li>
              </ul>
              <h3>Best Practices:</h3>
              <ul>
                <li>Use rem for font sizes</li>
                <li>Use px for borders and small measurements</li>
                <li>Use % for widths and heights</li>
                <li>Use vw/vh for full-viewport elements</li>
                <li>Consider accessibility and user preferences</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
