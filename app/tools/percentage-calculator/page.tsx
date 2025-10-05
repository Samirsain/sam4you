"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Percent, TrendingUp, TrendingDown } from "lucide-react"

export default function PercentageCalculator() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [percentage, setPercentage] = useState("")
  const [calculationType, setCalculationType] = useState("percentage")
  const [result, setResult] = useState(null)

  const calculatePercentage = () => {
    const v1 = parseFloat(value1)
    const v2 = parseFloat(value2)
    const p = parseFloat(percentage)

    if (calculationType === "percentage") {
      // Calculate percentage of a number
      if (v1 && p) {
        const result = (v1 * p) / 100
        setResult({
          type: "percentage",
          original: v1,
          percentage: p,
          result: result.toFixed(2),
          total: (v1 + result).toFixed(2)
        })
      }
    } else if (calculationType === "change") {
      // Calculate percentage change
      if (v1 && v2) {
        const change = ((v2 - v1) / v1) * 100
        const isIncrease = change > 0
        setResult({
          type: "change",
          original: v1,
          new: v2,
          change: Math.abs(change).toFixed(2),
          isIncrease: isIncrease
        })
      }
    } else if (calculationType === "find") {
      // Find what percentage one number is of another
      if (v1 && v2) {
        const result = (v1 / v2) * 100
        setResult({
          type: "find",
          part: v1,
          whole: v2,
          percentage: result.toFixed(2)
        })
      }
    }
  }

  const resetCalculator = () => {
    setValue1("")
    setValue2("")
    setPercentage("")
    setCalculationType("percentage")
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Free Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Percentage Calculator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Calculate percentages, percentage change, and percentage of a number with ease
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Percentage Calculation
                </CardTitle>
                <CardDescription>
                  Choose calculation type and enter values
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="calculationType">Calculation Type</Label>
                  <Select value={calculationType} onValueChange={setCalculationType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select calculation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage of a Number</SelectItem>
                      <SelectItem value="change">Percentage Change</SelectItem>
                      <SelectItem value="find">Find Percentage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {calculationType === "percentage" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="value1">Number</Label>
                      <Input
                        id="value1"
                        type="number"
                        placeholder="Enter number"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="percentage">Percentage (%)</Label>
                      <Input
                        id="percentage"
                        type="number"
                        placeholder="Enter percentage"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                  </>
                )}

                {calculationType === "change" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="value1">Original Value</Label>
                      <Input
                        id="value1"
                        type="number"
                        placeholder="Enter original value"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="value2">New Value</Label>
                      <Input
                        id="value2"
                        type="number"
                        placeholder="Enter new value"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                  </>
                )}

                {calculationType === "find" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="value1">Part Value</Label>
                      <Input
                        id="value1"
                        type="number"
                        placeholder="Enter part value"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="value2">Whole Value</Label>
                      <Input
                        id="value2"
                        type="number"
                        placeholder="Enter whole value"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                  </>
                )}

                <div className="flex gap-3">
                  <Button onClick={calculatePercentage} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Calculate
                  </Button>
                  <Button onClick={resetCalculator} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="w-5 h-5" />
                  Calculation Results
                </CardTitle>
                <CardDescription>
                  Your percentage calculation results
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    {result.type === "percentage" && (
                      <>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                              {result.percentage}%
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">of {result.original}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <span className="font-medium">Percentage Amount</span>
                            <span className="font-bold text-lg">{result.result}</span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <span className="font-medium">Total Amount</span>
                            <span className="font-bold text-lg">{result.total}</span>
                          </div>
                        </div>
                      </>
                    )}

                    {result.type === "change" && (
                      <>
                        <div className={`p-6 rounded-lg ${result.isIncrease ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                          <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${result.isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              {result.isIncrease ? '+' : '-'}{result.change}%
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                              {result.isIncrease ? 'Increase' : 'Decrease'}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <span className="font-medium">Original Value</span>
                            <span className="font-bold text-lg">{result.original}</span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <span className="font-medium">New Value</span>
                            <span className="font-bold text-lg">{result.new}</span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="flex items-center gap-2">
                              {result.isIncrease ? (
                                <TrendingUp className="w-4 h-4 text-green-600" />
                              ) : (
                                <TrendingDown className="w-4 h-4 text-red-600" />
                              )}
                              <span className="font-medium">Change</span>
                            </div>
                            <span className="font-bold text-lg">{result.new - result.original}</span>
                          </div>
                        </div>
                      </>
                    )}

                    {result.type === "find" && (
                      <>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                              {result.percentage}%
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                              {result.part} is {result.percentage}% of {result.whole}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <span className="font-medium">Part Value</span>
                            <span className="font-bold text-lg">{result.part}</span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <span className="font-medium">Whole Value</span>
                            <span className="font-bold text-lg">{result.whole}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Enter values to see percentage calculation
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About Percentage Calculator</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A percentage calculator helps you perform various percentage-related calculations quickly and accurately.
              </p>
              <h3>Calculation Types:</h3>
              <ul>
                <li><strong>Percentage of a Number:</strong> Calculate what percentage of a number is another number</li>
                <li><strong>Percentage Change:</strong> Calculate the percentage increase or decrease between two values</li>
                <li><strong>Find Percentage:</strong> Find what percentage one number is of another</li>
              </ul>
              <h3>Common Use Cases:</h3>
              <ul>
                <li>Calculate discounts and markups</li>
                <li>Determine percentage change in prices</li>
                <li>Calculate tax percentages</li>
                <li>Analyze growth rates</li>
                <li>Calculate tip percentages</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
