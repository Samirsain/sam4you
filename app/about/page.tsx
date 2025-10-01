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
              We design systems that grow while you sleep. Transforming businesses through innovative digital solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 py-4">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
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
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Sam4You, we believe in empowering businesses through technology. Our mission is to create digital solutions that not only meet your current needs but scale with your growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with strategic thinking to deliver results that matter. From web development to AI automation, we're your partners in digital transformation.
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Results-Driven",
                description: "We focus on delivering measurable outcomes that drive your business forward.",
                color: "text-blue-500"
              },
              {
                icon: Users,
                title: "Client-First",
                description: "Your success is our success. We prioritize your needs and goals in everything we do.",
                color: "text-green-500"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards of quality and innovation in all our solutions.",
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
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <Image
                  src="/founder.png"
                  alt="SamirSain - Founder of Sam4You"
                  width={128}
                  height={128}
                  className="w-full h-full rounded-full object-cover border-4 border-orange-200 dark:border-orange-800"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">SamirSain</h3>
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-4">Founder & Lead Developer</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 8 years of experience in digital transformation, SamirSain founded Sam4You with a vision to democratize technology for businesses of all sizes. His expertise spans web development, AI integration, and strategic growth marketing.
              </p>
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
                <a href="https://instagram.com/samirsain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
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
              <Link href="/services">
                Get Started
              </Link>
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
