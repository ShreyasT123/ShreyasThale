"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Book, FileText, Code, Shield } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-clip">
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-background pointer-events-none opacity-50" />

            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-white/70 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="text-xl font-bold tracking-tighter uppercase italic">HELIUS</div>
                <div className="w-24" />
            </nav>

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Documentation</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                        Learn how to integrate Helius into your workflow, from first inference to enterprise-scale deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Quickstart", icon: Book, desc: "Get up and running in under 5 minutes." },
                        { title: "API Reference", icon: Code, desc: "Explore our comprehensive REST and Streaming APIs." },
                        { title: "Legal", icon: Shield, desc: "Privacy, security, and usage policies." },
                        { title: "Technical Reports", icon: FileText, desc: "Deep dives into model architectures." }
                    ].map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6 hover:bg-white/[0.07] transition-all cursor-pointer group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium">{card.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Section Placeholder */}
                <div className="aspect-[21/9] w-full bg-white/5 rounded-[2.5rem] border border-white/5 flex items-center justify-center italic text-white/5 font-serif text-4xl">
                    Detailed guides coming soon
                </div>
            </main>

            <Footer />
        </div>
    )
}
