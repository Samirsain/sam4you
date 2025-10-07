"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ArrowRight, ChevronDown, BarChart3, Smartphone, Link as LinkIcon, FileText, Globe, Code } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/ai-tools", label: "AI Tools" },
    { href: "/tools", label: "Free Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const servicesDropdown = [
    {
      icon: Search,
      title: "SEO & Content Strategy",
      description: "Content, keywords, structure",
      href: "/services"
    },
    {
      icon: Smartphone,
      title: "Mobile SEO",
      description: "Mobile-first indexing, UX",
      href: "/services"
    },
    {
      icon: LinkIcon,
      title: "Link Building",
      description: "Earn quality backlinks",
      href: "/services"
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Create content that ranks",
      href: "/services"
    },
    {
      icon: BarChart3,
      title: "On-Page SEO",
      description: "Titles, schema, links, speed",
      href: "/services"
    },
    {
      icon: Search,
      title: "Local SEO",
      description: "Win nearby customers",
      href: "/services"
    },
    {
      icon: Globe,
      title: "International SEO",
      description: "Reach global markets",
      href: "/services"
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Fast, responsive websites",
      href: "/services"
    }
  ]

  // Search data
  const searchData = [
    { title: "ChatGPT", url: "/ai-tools/chatgpt", category: "AI Tools", description: "OpenAI's conversational AI" },
    { title: "Claude AI", url: "/ai-tools/claude", category: "AI Tools", description: "Anthropic's AI assistant" },
    { title: "Web Development", url: "/services", category: "Services", description: "Custom website development" },
    { title: "AI Consultation", url: "/services", category: "Services", description: "AI implementation guidance" },
    { title: "Blog", url: "/blog", category: "Content", description: "Latest articles and guides" },
    { title: "Free AI Tools Guide", url: "/blog/free-ai-tools-guide", category: "Content", description: "Comprehensive AI tools review" },
    { title: "Contact Us", url: "/contact", category: "Support", description: "Get in touch with our team" },
    { title: "Privacy Policy", url: "/privacy", category: "Legal", description: "Privacy and data protection" },
    { title: "Terms of Service", url: "/terms", category: "Legal", description: "Terms and conditions" },
  ]

  // Search functionality
  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(results)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [searchQuery])

  // Close search results and services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || isMobileMenuOpen ? "bg-background/90 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Sam4You.svg"
              alt="Sam4You Logo"
              width={150}
              height={50}
              className="object-contain h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative" ref={link.hasDropdown ? servicesRef : null}>
                {link.hasDropdown ? (
                  <div
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
                
                {/* Services Dropdown */}
                {link.hasDropdown && isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {servicesDropdown.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="group flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                              <service.icon size={12} className="text-gray-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-xs text-gray-900 group-hover:text-blue-600 transition-colors">
                                {service.title}
                              </h3>
                              <p className="text-xs text-gray-500 truncate">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div ref={searchRef} className={`relative transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-10'}`}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              {isSearchOpen && (
                <>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services, tools..."
                    className="w-full h-10 pl-10 pr-4 rounded-full border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    autoFocus
                  />
                  
                  {/* Search Results Dropdown */}
                  {showResults && searchResults.length > 0 && (
                    <div className="absolute top-12 left-0 right-0 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.url}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-border last:border-b-0"
                          onClick={() => {
                            setSearchQuery("")
                            setShowResults(false)
                            setIsSearchOpen(false)
                          }}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{result.title}</span>
                              <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.description}</p>
                          </div>
                          <ArrowRight size={14} className="text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* No Results */}
                  {showResults && searchResults.length === 0 && searchQuery.length > 0 && (
                    <div className="absolute top-12 left-0 right-0 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-lg p-4 z-50">
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        No results found for "{searchQuery}"
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-border">
            <nav className="flex flex-col gap-3">
              {/* Mobile Search */}
              <div className="relative px-2">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, tools..."
                  className="w-full h-9 pl-9 pr-4 rounded-full border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
                
                {/* Mobile Search Results */}
                {showResults && searchResults.length > 0 && (
                  <div className="absolute top-10 left-2 right-2 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        href={result.url}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-border last:border-b-0"
                        onClick={() => {
                          setSearchQuery("")
                          setShowResults(false)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{result.title}</span>
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                              {result.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.description}</p>
                        </div>
                        <ArrowRight size={14} className="text-gray-400" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme toggle removed - using light mode only */}
              
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div className="px-2">
                      <button
                        className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Services Dropdown */}
                      {isServicesDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {servicesDropdown.map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsServicesDropdownOpen(false)
                              }}
                            >
                              <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                                <service.icon size={10} className="text-gray-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-xs text-gray-900">
                                  {service.title}
                                </h3>
                                <p className="text-xs text-gray-500 truncate">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-2 pt-2">
                <Button asChild className="w-full text-sm">
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
