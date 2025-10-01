import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileSearch, Sparkles, MessageSquare, Video, Instagram, Zap, BarChart3, Share2, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    icon: FileSearch,
    title: "SEO Checker",
    description: "Analyze your website SEO performance and get actionable insights.",
    href: "/tools/seo-checker",
  },
  {
    icon: Sparkles,
    title: "AI Content Generator",
    description: "Generate high-quality content for blogs, social media, and marketing.",
    href: "/tools/content-generator",
  },
  {
    icon: MessageSquare,
    title: "Meta Caption Generator",
    description: "Create engaging social media captions for all platforms instantly.",
    href: "/tools/meta-caption",
  },
  {
    icon: Video,
    title: "Pinterest Video Downloader",
    description: "Download videos from Pinterest pins easily and quickly.",
    href: "/tools/pinterest-downloader",
  },
  {
    icon: Instagram,
    title: "Instagram Tools Suite",
    description: "Generate Instagram bios, name suggestions, and username ideas.",
    href: "/tools/instagram-tools",
  },
  {
    icon: BarChart3,
    title: "Free SEO Tools",
    description: "Essential free tools to analyze and improve your website's SEO performance.",
    href: "/tools/seo-tools",
  },
  {
    icon: Zap,
    title: "Speed Testing Tools",
    description: "Top tools to test and optimize your website loading speed.",
    href: "/tools/speed-tools",
  },
  {
    icon: Share2,
    title: "Social Media Tools",
    description: "Best tools for managing and scheduling social media posts across platforms.",
    href: "/tools/social-tools",
  },
  {
    icon: Mail,
    title: "Email Marketing Tools",
    description: "Compare the best email marketing platforms for your business needs.",
    href: "/tools/email-tools",
  },
]

export default function AITools() {
  return (
    <section id="ai-tools" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            AI-Powered <span className="text-primary">Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free tools to supercharge your digital marketing efforts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-8xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{tool.description}</CardDescription>
                  <Button variant="ghost" asChild className="group-hover:text-primary">
                    <Link href={tool.href}>
                      Try Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
