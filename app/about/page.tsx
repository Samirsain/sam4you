import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Star, Users, Award, Target, Heart } from "lucide-react"
import { Instagram, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Our Story
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              About <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Sam4You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sam4You is a digital platform that brings AI-powered tools, SEO resources, and web solutions. Our mission is to empower creators, businesses, and students with smart technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4 flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/919352410667?text=Hi!%20I%27d%20like%20to%20get%20in%20touch%20with%20you%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                We focus on website development, digital marketing, and AI tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Including content generation, SEO checker, speed analysis, and many more features.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our vision is to create a digital hub that makes every user's online journey easy and productive.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">8+ Years Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">Transforming businesses since 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Sam4You?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our key features that empower your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Star,
                title: "Free and easy-to-use tools",
                description: "All tools are completely free and extremely easy to use.",
                color: "text-blue-500"
              },
              {
                icon: Target,
                title: "Latest digital marketing insights",
                description: "We keep you updated with industry's latest trends and insights.",
                color: "text-green-500"
              },
              {
                icon: Users,
                title: "Reliable resources for professionals & learners",
                description: "We provide trusted resources for both professionals and students.",
                color: "text-purple-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <div className={`w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "8+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The vision behind Sam4You
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <Image
                  src="/founder.svg"
                  alt="SamirSain - Founder of Sam4You"
                  width={160}
                  height={160}
                  className="w-full h-full rounded-full object-contain border-4 border-orange-200 dark:border-orange-800 bg-gray-50 dark:bg-gray-800 p-2"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Samir Sain</h3>
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-4">Founder & Lead Developer</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                With over 4 years of experience in digital transformation, Samir Sain founded Sam4You with the vision to make technology simple, accessible, and impactful for everyone. His expertise spans web development, AI integration, and growth marketing, helping businesses and creators grow in the digital era.
              </p>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic border-l-4 border-orange-500 pl-4 my-6">
                "I believe technology should empower people, not complicate their journey." – Samir Sain
              </blockquote>
              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact</Link>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                <a href="https://instagram.com/codexmir" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com/samirsain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help transform your business with our expertise and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
              <a href="https://wa.me/919352410667?text=Hi!%20I%27d%20like%20to%20get%20started%20with%20a%20free%20consultation." target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
            <div className="flex gap-6 text-sm text-orange-100">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                24-48h Response
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
