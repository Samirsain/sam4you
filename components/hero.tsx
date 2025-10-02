import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16 bg-white dark:bg-gray-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient with Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 animate-pulse animate-shimmer"></div>
        
        {/* Moving Gradient Orbs with Custom Animations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-float animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-drift animate-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full blur-3xl animate-float animate-glow" style={{animationDelay: '4s'}}></div>
        
        {/* Additional Floating Orbs */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-drift" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Floating Particles with Enhanced Effects */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-ping animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/60 rounded-full animate-ping animate-drift" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-400/60 rounded-full animate-ping animate-float" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-400/60 rounded-full animate-ping animate-drift" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-400/60 rounded-full animate-ping animate-drift" style={{animationDelay: '6s'}}></div>
        
        {/* Gradient Mesh Overlay with Animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-50/20 to-transparent dark:via-blue-900/10 animate-pulse"></div>
        
        {/* Shimmer Effect Overlay */}
        <div className="absolute inset-0 animate-shimmer opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
            We design systems that{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              grow while you sleep
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through innovative digital solutions, AI-powered tools, and strategic growth marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button size="lg" asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <Link href="/services" className="flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 py-4 transform hover:scale-105 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
              <a href="https://wa.me/919352410667?text=Hi!%20I%27m%20interested%20in%20a%20free%20consultation%20for%20my%20project." target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "8+", label: "Years Experience" },
              { value: "50+", label: "Happy Clients" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              24-48h Response
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              5-Star Rated
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
