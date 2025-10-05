"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export default function EMICalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [result, setResult] = useState(null)

  const calculateEMI = () => {
    const P = parseFloat(principal)
    const R = parseFloat(rate) / 12 / 100 // Monthly rate
    const N = parseFloat(time) * 12 // Total months

    if (P && R && N) {
      const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
      const totalAmount = emi * N
      const totalInterest = totalAmount - P

      setResult({
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      })
    }
  }

  const resetCalculator = () => {
    setPrincipal("")
    setRate("")
    setTime("")
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Free Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              EMI Calculator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Calculate your loan EMI, interest, and total amount with our free EMI calculator
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Loan Details
                </CardTitle>
                <CardDescription>
                  Enter your loan information to calculate EMI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="principal">Loan Amount (₹)</Label>
                  <Input
                    id="principal"
                    type="number"
                    placeholder="Enter loan amount"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                  <Input
                    id="rate"
                    type="number"
                    placeholder="Enter interest rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Loan Tenure (Years)</Label>
                  <Input
                    id="time"
                    type="number"
                    placeholder="Enter loan tenure"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="flex gap-3">
                  <Button onClick={calculateEMI} className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Calculate EMI
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
                  <TrendingUp className="w-5 h-5" />
                  EMI Calculation Results
                </CardTitle>
                <CardDescription>
                  Your loan breakdown and payment details
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          ₹{result.emi}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">Monthly EMI</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="font-medium">Total Amount</span>
                        </div>
                        <span className="font-bold text-lg">₹{result.totalAmount}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-orange-600" />
                          <span className="font-medium">Total Interest</span>
                        </div>
                        <span className="font-bold text-lg">₹{result.totalInterest}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Calculator className="w-4 h-4 text-blue-600" />
                          <span className="font-medium">Principal Amount</span>
                        </div>
                        <span className="font-bold text-lg">₹{principal}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Enter loan details to see EMI calculation
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About EMI Calculator</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                An EMI (Equated Monthly Installment) calculator helps you determine the monthly payment amount for a loan. 
                It calculates the fixed payment amount that includes both principal and interest components.
              </p>
              <h3>How EMI is Calculated:</h3>
              <p>
                EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]
              </p>
              <ul>
                <li><strong>P</strong> = Principal loan amount</li>
                <li><strong>R</strong> = Monthly interest rate (Annual rate / 12 / 100)</li>
                <li><strong>N</strong> = Loan tenure in months</li>
              </ul>
              <h3>Benefits of Using EMI Calculator:</h3>
              <ul>
                <li>Plan your monthly budget effectively</li>
                <li>Compare different loan options</li>
                <li>Understand total interest payable</li>
                <li>Make informed financial decisions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
