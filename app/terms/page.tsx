import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Terms of <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Last updated: March 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Acceptance of Terms</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  By accessing and using Sam4You's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">2. Description of Service</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Sam4You provides digital services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Web development and design services</li>
                  <li>SEO and digital marketing solutions</li>
                  <li>AI tools and automation services</li>
                  <li>Content creation and management</li>
                  <li>Technical consultation and support</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">3. User Responsibilities</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use the services in compliance with applicable laws</li>
                  <li>Not use the services for any unlawful or prohibited purpose</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">4. Payment Terms</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Payment terms for our services include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due according to the agreed schedule</li>
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">5. Intellectual Property</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  All content, trademarks, and intellectual property on our website and services are owned 
                  by Sam4You or our licensors. You may not reproduce, distribute, or create derivative works 
                  without our written permission.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">6. Limitation of Liability</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  To the maximum extent permitted by law, Sam4You shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">7. Service Availability</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We strive to provide continuous service availability but do not guarantee uninterrupted 
                  access. We may suspend or terminate services for maintenance, updates, or other reasons 
                  with reasonable notice when possible.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">8. Termination</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Either party may terminate services with written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to services will be discontinued</li>
                  <li>Outstanding payments remain due</li>
                  <li>Data retention policies will apply</li>
                  <li>Confidentiality obligations continue</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">9. Governing Law</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  These terms shall be governed by and construed in accordance with applicable laws. 
                  Any disputes shall be resolved through binding arbitration.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">10. Changes to Terms</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services 
                  after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">11. Contact Information</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  For questions regarding these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p><strong>Email:</strong> devxmir@gmail.com</p>
                  <p><strong>WhatsApp:</strong> +91 9352410667</p>
                  <p><strong>Website:</strong> <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">same4you.com</Link></p>
                </div>
              </div>

            </div>
        </div>
      </div>
      </section>

      <Footer />
    </div>
  )
}