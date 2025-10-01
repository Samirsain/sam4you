import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sam4You - Build Smarter Digital Solutions",
  description:
    "Professional web development, SEO, AI tools, and automation services. Transform your digital presence with Sam4You.",
  keywords: ["web development", "SEO", "AI tools", "automation", "digital agency", "WordPress", "e-commerce"],
  authors: [{ name: "Sam4You" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
  },
  verification: {
    google: "ziDZd_lijC0FXqCM7zawWTZ5IXuosqWYbzNhYhSXNfI",
  },
  openGraph: {
    title: "Sam4You - Build Smarter Digital Solutions",
    description: "Professional web development, SEO, AI tools, and automation services.",
    type: "website",
    images: [{ url: "/favicon.png" }],
  },
  generator: "v0.app",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
