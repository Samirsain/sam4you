"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, CheckCircle2, TrendingUp, Zap, ShieldCheck, X, Globe, Code2, Rocket } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const projects = [
    {
        title: "Credify",
        category: "FinTech",
        description: "A modern AI-powered finance platform for effortless expense tracking, budget optimization, and wealth growth.",
        longDescription: "Credify is a cutting-edge fintech solution that combines AI-driven insights with seamless finance management. It features a sleek dark-mode interface, interactive credit card displays, and integrations with major payment providers like Stripe, PayPal, and Apple Pay.",
        results: ["10M+ Users", "Secure Payments", "AI-Driven Insights"],
        tech: ["Next.js", "React", "Tailwind CSS", "Stripe API", "AI/ML"],
        challenge: "Building a trustworthy and premium interface for a finance platform that millions of users would feel confident using with their sensitive financial data.",
        solution: "We designed a dark-themed, glassmorphic UI with subtle animations and clear data visualization, combined with enterprise-grade security integrations.",
        image: "/credify-hero.png",
        color: "from-emerald-500 to-teal-600",
        liveUrl: "https://credify-fintech.vercel.app/"
    },
    {
        title: "NuroxFit Clothing",
        category: "E-commerce",
        description: "A high-performance Shopify store for fitness apparel with custom theme optimization and high conversion rates.",
        longDescription: "NuroxFit is a modern fitness apparel brand. We developed a custom Shopify theme focused on high-speed performance and conversion-driven design. The store features a seamless mobile shopping experience and an optimized checkout flow.",
        results: ["200% Sales Increase", "0.8s Load Speed", "95% Positive Feedback"],
        tech: ["Shopify", "Liquid", "JavaScript", "SEO"],
        challenge: "The original store had high drop-off rates due to slow theme performance and a cluttered mobile interface.",
        solution: "We rebuilt the theme using Liquid best practices and implemented an advanced mobile navigation system to simplify the buying journey.",
        image: "/nuroxfit-hero-v2.png",
        color: "from-blue-500 to-indigo-600",
        liveUrl: "https://nuroxfit.myshopify.com/"
    },
    {
        title: "Samirsain Portfolio",
        category: "Personal Branding",
        description: "A flagship personal brand portal showcasing 8+ years of full-stack expertise and digital solutions.",
        longDescription: "The Samirsain Portfolio serves as a high-conversion digital hub, integrating a blog, resume tracker, and interactive project vault. Built with a focus on speed and SEO, it provides a seamless experience for visitors looking to understand Samir's full technical capabilities.",
        results: ["High SEO Visibility", "99/100 Perf Score", "Integrated Blog Hub"],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
        challenge: "Effectively showcasing a decade of diverse technical work in a single, cohesive, and easy-to-navigate interface.",
        solution: "Designed a clean, modular UI with smooth interactive elements that balance professional information with personal brand aesthetics.",
        image: "/samirsain-portfolio-v2.png",
        color: "from-indigo-600 to-violet-600",
        liveUrl: "https://samirsain.com"
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [selectedProject])

    return (
        <section id="projects" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 px-2">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 border border-indigo-100">
                        <Zap className="w-4 h-4 fill-current" />
                        Case Studies
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Our <span className="text-indigo-600">Impact</span> in Action
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Explore how we solve complex problems with modern technology and strategic design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <Card key={index} className="group relative bg-slate-50 border-none rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 flex flex-col">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-indigo-600 text-xs font-bold rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <CardHeader className="pt-8 pb-4">
                                <CardTitle className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </CardTitle>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    {project.description}
                                </p>
                            </CardHeader>

                            <CardContent className="pb-10 pt-0 flex-grow flex flex-col justify-between">
                                <div className="space-y-3 mb-8">
                                    {project.results.map((result, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-semibold bg-white/50 p-2.5 rounded-2xl border border-slate-100">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                                            {result}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center text-indigo-600 font-bold hover:gap-3 transition-all cursor-pointer group/link"
                                >
                                    View Full Details
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1" />
                                </button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* trust indicators */}
                <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 font-black text-2xl text-slate-400">
                        <ShieldCheck className="w-6 h-6" /> TRUSTED
                    </div>
                    <div className="flex items-center gap-2 font-black text-2xl text-slate-400">
                        <TrendingUp className="w-6 h-6" /> RESULTS
                    </div>
                    <div className="flex items-center gap-2 font-black text-2xl text-slate-400">
                        100% SUCCESS
                    </div>
                </div>
            </div>

            {/* Premium Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
                        onClick={() => setSelectedProject(null)}
                    />

                    <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row transform animate-in slide-in-from-bottom-8 duration-500">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-colors border border-slate-100"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
                        </button>

                        {/* Modal Visual Component */}
                        <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-auto bg-[#F9F6F1] border-b lg:border-b-0 lg:border-r border-slate-100 p-4 sm:p-8 flex items-center justify-center">
                            <div className="relative w-full h-full shadow-2xl rounded-xl overflow-hidden">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/5 to-transparent pointer-events-none" />
                        </div>

                        {/* Modal Content */}
                        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 overflow-y-auto">
                            <div className="mb-6 sm:mb-8">
                                <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-indigo-50 text-indigo-600 text-[10px] sm:text-xs font-bold rounded-full mb-3 sm:mb-4 inline-block">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                                    {selectedProject.longDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-[10px] sm:text-xs tracking-widest">
                                        <Code2 className="w-4 h-4" /> The Challenge
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.challenge}</p>
                                </div>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-[10px] sm:text-xs tracking-widest">
                                        <Rocket className="w-4 h-4" /> Our Solution
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.solution}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                                {selectedProject.tech.map((t, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-semibold rounded-lg uppercase tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                {selectedProject.liveUrl ? (
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-full w-full sm:w-auto px-8 py-6 font-bold shadow-lg shadow-indigo-100"
                                    >
                                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                            Live Preview <ExternalLink className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                ) : (
                                    <Button
                                        size="lg"
                                        className="rounded-full w-full sm:w-auto px-8 py-6 font-bold shadow-lg shadow-indigo-100"
                                    >
                                        Live Preview <ExternalLink className="ml-2 w-4 h-4" />
                                    </Button>
                                )}
                                <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto px-8 py-6 font-bold border-2" onClick={() => setSelectedProject(null)}>
                                    Back to Projects
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
