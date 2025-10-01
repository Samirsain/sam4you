"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import testimonialsData from "@/content/testimonials.json"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonials = testimonialsData

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            ⭐ Powered by Real Businesses
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Trusted by Growing Businesses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what real clients have to say about their experience working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-purple-200 shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[activeIndex].role}</div>
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground">
                "{testimonials[activeIndex].content}"
              </blockquote>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-purple-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
