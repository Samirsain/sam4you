"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Receipt, Percent } from "lucide-react"

export default function GSTCalculator() {
  const [amount, setAmount] = useState("")
  const [gstRate, setGstRate] = useState("")
  const [calculationType, setCalculationType] = useState("exclusive")
  const [result, setResult] = useState(null)

  const calculateGST = () => {
    const baseAmount = parseFloat(amount)
    const rate = parseFloat(gstRate)

    if (baseAmount && rate) {
      let gstAmount, totalAmount, originalAmount

      if (calculationType === "exclusive") {
        // GST is added to the amount
        gstAmount = (baseAmount * rate) / 100
        totalAmount = baseAmount + gstAmount
        originalAmount = baseAmount
      } else {
        // GST is included in the amount
        totalAmount = baseAmount
        gstAmount = (baseAmount * rate) / (100 + rate)
        originalAmount = baseAmount - gstAmount
      }

      setResult({
        originalAmount: originalAmount.toFixed(2),
        gstAmount: gstAmount.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        gstRate: rate
      })
    }
  }

  const resetCalculator = () => {
    setAmount("")
    setGstRate("")
    setCalculationType("exclusive")
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Free Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              GST Calculator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Calculate GST amount, tax rates, and total price with our comprehensive GST calculator
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  GST Calculation
                </CardTitle>
                <CardDescription>
                  Enter amount and GST rate to calculate tax
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
                      <SelectItem value="exclusive">GST Exclusive (Add GST)</SelectItem>
                      <SelectItem value="inclusive">GST Inclusive (Remove GST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">
                    {calculationType === "exclusive" ? "Base Amount (₹)" : "Total Amount (₹)"}
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gstRate">GST Rate (%)</Label>
                  <Select value={gstRate} onValueChange={setGstRate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select GST rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0% (Exempt)</SelectItem>
                      <SelectItem value="5">5% (Reduced Rate)</SelectItem>
                      <SelectItem value="12">12% (Standard Rate)</SelectItem>
                      <SelectItem value="18">18% (Standard Rate)</SelectItem>
                      <SelectItem value="28">28% (Higher Rate)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Button onClick={calculateGST} className="flex-1 bg-green-600 hover:bg-green-700">
                    Calculate GST
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
                  <Receipt className="w-5 h-5" />
                  GST Calculation Results
                </CardTitle>
                <CardDescription>
                  Your GST breakdown and total amount
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                          ₹{result.totalAmount}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">Total Amount</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Calculator className="w-4 h-4 text-blue-600" />
                          <span className="font-medium">Base Amount</span>
                        </div>
                        <span className="font-bold text-lg">₹{result.originalAmount}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Percent className="w-4 h-4 text-green-600" />
                          <span className="font-medium">GST Amount ({result.gstRate}%)</span>
                        </div>
                        <span className="font-bold text-lg">₹{result.gstAmount}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Receipt className="w-4 h-4 text-purple-600" />
                          <span className="font-medium">Total Amount</span>
                        </div>
                        <span className="font-bold text-lg">₹{result.totalAmount}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Enter amount and GST rate to see calculation
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About GST Calculator</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                GST (Goods and Services Tax) is a comprehensive indirect tax levied on the supply of goods and services. 
                Our GST calculator helps you determine the tax amount and total price for your transactions.
              </p>
              <h3>GST Rates in India:</h3>
              <ul>
                <li><strong>0%</strong> - Exempt items (essential goods)</li>
                <li><strong>5%</strong> - Reduced rate (basic necessities)</li>
                <li><strong>12%</strong> - Standard rate (processed foods, etc.)</li>
                <li><strong>18%</strong> - Standard rate (most goods and services)</li>
                <li><strong>28%</strong> - Higher rate (luxury items, sin goods)</li>
              </ul>
              <h3>Calculation Types:</h3>
              <ul>
                <li><strong>GST Exclusive:</strong> Add GST to the base amount</li>
                <li><strong>GST Inclusive:</strong> Remove GST from the total amount</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
