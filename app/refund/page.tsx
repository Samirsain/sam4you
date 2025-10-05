import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, AlertTriangle } from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Refund & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cancellation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our transparent refund and cancellation policy for all services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Refund Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Refund Policy
                </CardTitle>
                <CardDescription>
                  Our commitment to customer satisfaction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">Full Refund</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Within 7 days of purchase</li>
                      <li>• If service not started</li>
                      <li>• Technical issues on our end</li>
                      <li>• Service not as described</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Partial Refund</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• 50% refund after 7 days</li>
                      <li>• Work partially completed</li>
                      <li>• Client requested changes</li>
                      <li>• Minor issues resolved</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Cancellation Policy
                </CardTitle>
                <CardDescription>
                  How to cancel your service or project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Before Work Starts</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">100% refund within 24 hours</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">Work in Progress</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Refund for remaining work only</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">Work Completed</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">No refund applicable</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-blue-500" />
                  Refund Process
                </CardTitle>
                <CardDescription>
                  Simple steps to request a refund
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold mb-1">Contact Support</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Email us at support@sam4you.com or call +91 9352410667</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold mb-1">Provide Details</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Include order number, reason for refund, and supporting documents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold mb-1">Review & Process</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">We review your request within 2-3 business days and process accordingly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h3 className="font-semibold mb-1">Refund Issued</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Refund processed within 5-7 business days to original payment method</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Non-Refundable Items</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Completed deliverables and final work</li>
                    <li>• Third-party services and licenses</li>
                    <li>• Custom development after approval</li>
                    <li>• Rush delivery charges</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Refund Timeline</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Credit Card: 5-7 business days</li>
                    <li>• Bank Transfer: 3-5 business days</li>
                    <li>• UPI: 1-2 business days</li>
                    <li>• Wallet: 2-3 business days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
