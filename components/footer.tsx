"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin, ArrowRight, Heart, Mail, Phone, MapPin, Zap, Star, Globe, Shield, Award, Users, TrendingUp, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full opacity-30 blur-2xl"></div>
      
      {/* Top Section with Company Info */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo and Brand */}
            <div className="space-y-4">
              <Image
                src="/Sam4You.svg"
                alt="Sam4You Logo"
                width={140}
                height={50}
                className="h-14 w-auto"
              />
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">India's Leading AI & Web Solutions</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                We design systems that grow while you sleep. Transforming businesses through innovative digital solutions, 
                AI-powered tools, and strategic growth marketing.
              </p>
              
              {/* Premium Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-bold text-gray-900">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-600">Client Rating</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-gray-900">500+</span>
                  </div>
                  <p className="text-xs text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-gray-900">99%</span>
                  </div>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Premium Newsletter */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Stay Ahead</h4>
                  <p className="text-sm text-gray-600">Get exclusive insights & early access</p>
                </div>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                No spam, unsubscribe anytime
              </p>
            </div>
          </div>

          {/* Premium Quick Links */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-xl">Quick Access</h4>
            </div>
            <div className="space-y-3">
              <Link href="/services" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                  <Zap className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">Premium Services</span>
              </Link>
              <Link href="/about" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors">
                  <Award className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">Our Story</span>
              </Link>
              <Link href="/ai-tools" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-pink-100 group-hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                  <Sparkles className="w-4 h-4 text-pink-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">AI Tools</span>
              </Link>
              <Link href="/blog" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-green-100 group-hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                  <Globe className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">Blog & Guides</span>
              </Link>
            </div>
          </div>

          {/* Premium Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-xl">Connect</h4>
            </div>
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-sm text-gray-600">+91 9352410667</p>
                  <p className="text-xs text-blue-600 font-medium">Available 24/7</p>
                </div>
              </div>
              <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-sm text-gray-600">hello@sam4you.com</p>
                  <p className="text-xs text-green-600 font-medium">Quick Response</p>
                </div>
              </div>
              <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">India</p>
                  <p className="text-xs text-purple-600 font-medium">Global Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Section */}
      <div className="relative border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Premium Copyright */}
            <div className="text-center lg:text-left space-y-2">
              <p className="text-gray-700 font-medium">
                © {currentYear} Sam4You. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                Crafted with passion using Next.js, TypeScript & Tailwind CSS
              </p>
            </div>

            {/* Premium Social Links */}
            <div className="flex items-center gap-8">
              <span className="text-sm text-gray-700 font-semibold">Follow Our Journey:</span>
              <div className="flex gap-4">
                <a href="https://twitter.com/sam4you" target="_blank" rel="noopener noreferrer" 
                   className="group w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Twitter className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/Samirsain" target="_blank" rel="noopener noreferrer" 
                   className="group w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer" 
                   className="group w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Premium Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Refund Policy
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}