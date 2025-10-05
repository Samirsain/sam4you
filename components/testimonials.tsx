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
    <section className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">Trusted by Growing Businesses</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            See what real clients have to say about their experience working with us.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">200+</div>
            <div className="text-sm sm:text-base text-gray-600">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">30K+</div>
            <div className="text-sm sm:text-base text-gray-600">GitaGPT Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">250%+</div>
            <div className="text-sm sm:text-base text-gray-600">Avg. Conversion Increase</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-blue-200 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex gap-1 mb-2 sm:mb-3 justify-center sm:justify-start">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                  <div className="font-bold text-base sm:text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-sm sm:text-base text-muted-foreground">{testimonials[activeIndex].role}</div>
                </div>
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground text-center sm:text-left">
                "{testimonials[activeIndex].content}"
              </blockquote>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-blue-600 w-6 sm:w-8" : "bg-gray-300"
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
