import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

import blogPosts from "@/content/blog-posts.json"

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground">Stay updated with the latest trends and tips</p>
          </div>
          <Button variant="outline" asChild className="hidden md:inline-flex bg-transparent">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3 w-fit">
                  {post.category}
                </span>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                <Button variant="ghost" className="group-hover:text-primary p-0" asChild>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" asChild className="w-full bg-transparent">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
