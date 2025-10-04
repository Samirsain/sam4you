import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import AIAssistant from "@/components/ai-assistant"
import { Toaster } from "@/components/toaster"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://sam4you.vercel.app"),
  title: "Sam4You - Build Smarter Digital Solutions",
  description:
    "Professional web development, SEO, AI tools, and automation services. Transform your digital presence with Sam4You.",
  keywords: ["web development", "SEO", "AI tools", "automation", "digital agency", "WordPress", "e-commerce"],
  authors: [{ name: "Sam4You" }],
  creator: "Sam4You",
  publisher: "Sam4You",
  icons: {
    icon: [
      { url: "/favicon s.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/favicon s.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    other: [
      { rel: "icon", url: "/favicon s.png", type: "image/png" },
    ],
  },
  verification: {
    google: "ziDZd_lijC0FXqCM7zawWTZ5IXuosqWYbzNhYhSXNfI",
  },
  openGraph: {
    title: "Sam4You - Build Smarter Digital Solutions",
    description: "Professional web development, SEO, AI tools, and automation services. Transform your digital presence with Sam4You.",
    type: "website",
    siteName: "Sam4You",
    url: "https://sam4you.vercel.app",
    images: [
      {
        url: "/professional-corporate-business-website--hero-sect.jpg",
        width: 1200,
        height: 630,
        alt: "Sam4You - Professional Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam4You - Build Smarter Digital Solutions",
    description: "Professional web development, SEO, AI tools, and automation services. Transform your digital presence with Sam4You.",
    creator: "@codexmir",
    images: ["/professional-corporate-business-website--hero-sect.jpg"],
  },
  generator: "Sam4You",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Suspense fallback={null}>{children}</Suspense>
          <AIAssistant />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
