"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Activity, GitCommit, FileText, Clock, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function SystemStatusPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-clip">
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-background pointer-events-none opacity-50" />

            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-white/70 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="text-xl font-bold tracking-tighter uppercase italic">SHREYAS</div>
                <div className="w-24" />
            </nav>

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-12">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">System Status</h1>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Operational metrics, engineering throughput, and research availability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Status Overview */}
                    <div className="md:col-span-4 space-y-6">
                        {/* Main Status */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest">Current Status</h3>
                                    <p className="text-emerald-500 font-medium">Open for Work</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/40">Response Time</span>
                                    <span>&lt; 24 hrs</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-emerald-500/50" />
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                                <GitCommit className="w-5 h-5 text-white/40" />
                                <div className="text-2xl font-bold">1,420+</div>
                                <div className="text-xs text-white/40 uppercase tracking-widest">Yearly Commits</div>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                                <FileText className="w-5 h-5 text-white/40" />
                                <div className="text-2xl font-bold">12</div>
                                <div className="text-xs text-white/40 uppercase tracking-widest">Research Papers</div>
                            </div>
                        </div>
                    </div>

                    {/* Activity Log */}
                    <div className="md:col-span-8 p-8 bg-white/5 border border-white/10 rounded-2xl space-y-8 min-h-[400px]">
                        <h3 className="text-xl font-serif">Recent Activity</h3>
                        <div className="space-y-8">
                            {[
                                { action: "Deployed Multi-Agent Simulation", project: "Superpos", time: "2 days ago", icon: CheckCircle, color: "text-blue-400" },
                                { action: "Published 'Latent Space Reasoning'", project: "NeurIPS Workshop", time: "1 week ago", icon: FileText, color: "text-purple-400" },
                                { action: "Refactored Core Grid System", project: "Infrastructure", time: "2 weeks ago", icon: GitCommit, color: "text-emerald-400" },
                                { action: "Completed Internship", project: "Infinitypool", time: "1 month ago", icon: Clock, color: "text-orange-400" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className={`mt-1 w-2 h-2 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`} />
                                    <div className="flex-1 space-y-1 pb-8 border-b border-white/5 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-start">
                                            <p className="font-medium text-white/90 group-hover:text-white transition-colors">{item.action}</p>
                                            <span className="text-xs text-white/30 font-mono">{item.time}</span>
                                        </div>
                                        <p className="text-sm text-white/40">{item.project}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
