"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Github, Send, Phone, MessageCircle, ArrowUp } from "lucide-react"
import NetworkBackground from "./network-background"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Wavy transition from main content */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-blue-900">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" className="text-blue-900"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" className="text-blue-800 opacity-50"></path>
        </svg>
      </div>

      {/* Interactive Network Background */}
      <NetworkBackground />
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">S</span>
                </div>
                <span className="text-white text-xl font-bold">Sam4You</span>
              </div>
                  </Link>
            <p className="text-white mb-6 text-sm leading-relaxed">
              Sam4You India's No 1 AI Tools & Web Development Company. We provide unique and Best quality websites, 
              AI Tools & Digital Solutions to customers at a very affordable price.
            </p>
            <p className="text-white text-sm">
              Sam4You © {currentYear} All Right Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                <Link href="/" className="text-white hover:text-blue-200 transition-colors text-sm">
                  Home
                      </Link>
                    </li>
                    <li>
                <Link href="/services" className="text-white hover:text-blue-200 transition-colors text-sm">
                  Services
                      </Link>
                    </li>
                    <li>
                <Link href="/contact" className="text-white hover:text-blue-200 transition-colors text-sm">
                  Contact Us
                      </Link>
                    </li>
                  </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Useful Links</h3>
                  <ul className="space-y-3">
                    <li>
                <Link href="/refund" className="text-white hover:text-blue-200 transition-colors text-sm">
                  Refund & Cancellation
                      </Link>
                    </li>
                    <li>
                <Link href="/privacy" className="text-white hover:text-blue-200 transition-colors text-sm">
                  Privacy Policy
                      </Link>
                    </li>
                  </ul>
        </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-bold text-white mb-4">Subscribe</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/70 focus:outline-none focus:border-blue-300 text-sm"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm font-medium">
                SEND
              </button>
            </div>
            </div>
          </div>
        </div>

      {/* Bottom floating elements */}
      <div className="absolute bottom-6 left-6">
        <a href="https://wa.me/919352410667" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
            </div>

      <div className="absolute bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </footer>
  )
}

