"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "We offer comprehensive web development, SEO optimization, AI tools development, digital marketing, and automation services. Our team specializes in creating modern, responsive websites and digital solutions tailored to your business needs."
  },
  {
    id: "2",
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and requirements. Simple websites typically take 1-2 weeks, while complex applications may take 4-8 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the development process."
  },
  {
    id: "3",
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in building long-term relationships with our clients."
  },
  {
    id: "4",
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on the scope, complexity, and requirements. We offer competitive rates and provide detailed quotes after understanding your specific needs. Contact us for a personalized quote."
  },
  {
    id: "5",
    question: "Do you work with clients globally?",
    answer: "Absolutely! We work with clients worldwide. Our team is experienced in remote collaboration and can accommodate different time zones. We use modern communication tools to ensure smooth project management."
  },
  {
    id: "6",
    question: "What technologies do you use?",
    answer: "We use modern technologies including React, Next.js, Node.js, Python, and various AI/ML frameworks. We stay updated with the latest trends and choose the best technology stack for each project's specific requirements."
  },
  {
    id: "7",
    question: "Can you help with SEO and digital marketing?",
    answer: "Yes! We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, and content strategy. We also provide digital marketing services to help grow your online presence and reach your target audience."
  },
  {
    id: "8",
    question: "Do you offer custom AI solutions?",
    answer: "Absolutely! We develop custom AI tools and automation solutions tailored to your business needs. From chatbots to data analysis tools, we can create AI-powered solutions that streamline your operations and improve efficiency."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => (
            <Card key={item.id} className="border-border/50">
              <CardHeader className="pb-3">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-0 h-auto text-left"
                  onClick={() => toggleItem(item.id)}
                >
                  <CardTitle className="text-lg font-medium pr-4">
                    {item.question}
                  </CardTitle>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </Button>
              </CardHeader>
              {openItems.includes(item.id) && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
