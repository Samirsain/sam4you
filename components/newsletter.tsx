"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle, Send } from "lucide-react"

// Newsletter endpoint (you can use Formspree, Mailchimp, ConvertKit, etc.)
const NEWSLETTER_ENDPOINT = 'https://formspree.io/f/myznwrqa'

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter_subscription',
          message: 'Newsletter subscription request'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail("")
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Newsletter
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss out on the latest insights, tips, and strategies for digital success.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="flex-1 w-full">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 bg-white/90 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-6 flex items-center justify-center gap-2 p-3 bg-green-500/20 border border-green-400/30 rounded-lg text-green-100 max-w-md mx-auto">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Successfully subscribed! Welcome to our newsletter.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 flex items-center justify-center gap-2 p-3 bg-red-500/20 border border-red-400/30 rounded-lg text-red-100 max-w-md mx-auto">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Failed to subscribe. Please try again.</span>
            </div>
          )}

          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
