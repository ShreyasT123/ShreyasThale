"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Book, FileText, Code, PenTool, Download } from "lucide-react"
import { Footer } from "@/components/footer"

export default function WritingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-clip">
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-background pointer-events-none opacity-50" />

            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-[#fefefe]/70 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="text-xl font-bold tracking-tighter uppercase italic">SHREYAS</div>
                <div className="w-24" />
            </nav>

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Writing & Research</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                        Architecture notes, engineering essays, and research papers exploring the intersection of systems and intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Essays", icon: PenTool, desc: "Thoughts on software design, AI ethics, and the future of work.", href: "#essays" },
                        { title: "Architecture Notes", icon: Code, desc: "Deep dives into distributed systems, patterns, and tradeoffs.", href: "#architecture" },
                        { title: "Research Papers", icon: Book, desc: "Academic publications, preprints, and technical reports.", href: "#papers" },
                        { title: "Resume", icon: Download, desc: "Professional experience, skills, and education history.", href: "/resume" }
                    ].map((card, i) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="block group"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="h-full p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6 hover:bg-white/[0.07] transition-all cursor-pointer hover:border-white/20"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-[#fefefe]/80 group-hover:text-[#fefefe]">
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium group-hover:text-[#fefefe] transition-colors">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-[#fefefe]/70 transition-colors">{card.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Section Placeholder: Recent Publications */}
                <div className="space-y-12">
                    <h2 className="text-3xl md:text-5xl font-sans tracking-tight">Recent Publications</h2>
                    <div className="grid gap-6">
                        {[
                            {
                                title: "Enhanced Latent Space Reasoning in Large Language Models",
                                venue: "NeurIPS 2024 (Workshop)",
                                date: "Dec 2024",
                                abstract: "Proposing a novel method for structuring latent space activations to improve multi-hop reasoning capabilities in transformer models."
                            },
                            {
                                title: "Scalable Quantum Circuit Simulation on Distributed Architectures",
                                venue: "J. Comp. Phys.",
                                date: "Aug 2024",
                                abstract: "A framework for distributing quantum state vector computations across heterogeneous clusters using MPI and CUDA-aware communication."
                            }
                        ].map((paper, i) => (
                            <div key={i} className="group p-8 border border-white/10 rounded-2xl hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row gap-6 md:items-start">
                                <div className="flex-1 space-y-3">
                                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                        <span>{paper.venue}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span>{paper.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-medium leading-tight group-hover:text-emerald-400 transition-colors">{paper.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{paper.abstract}</p>
                                </div>
                                <div className="shrink-0 pt-2">
                                    <button className="text-sm font-medium border border-white/10 rounded-full px-4 py-2 hover:bg-white text-[#fefefe] hover:text-black transition-all">
                                        Read PDF
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
