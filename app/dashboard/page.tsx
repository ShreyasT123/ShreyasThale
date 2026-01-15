"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, LayoutDashboard, Key, Activity, CreditCard } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
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
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Developer Console</h1>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Manage your API keys, monitor usage, and scale your integration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Sidebar / Stats */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest">Global Status</h3>
                                    <p className="text-emerald-500 font-medium">All systems operational</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/40">Inference Rate</span>
                                    <span>24,502 / min</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div className="w-2/3 h-full bg-white/20" />
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-[#B9B9D8]/10 border border-[#B9B9D8]/20 rounded-2xl group cursor-pointer hover:bg-[#B9B9D8]/20 transition-all">
                            <h3 className="text-[#B9B9D8] font-medium mb-2 uppercase tracking-widest text-xs">Upgrade Plan</h3>
                            <p className="text-white/70 text-sm mb-6">Access Helius.2 [MAX] and increased rate limits.</p>
                            <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                                View Enterprise <CreditCard className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Main Actions */}
                    <div className="md:col-span-8 p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4">
                            <Key className="w-8 h-8 opacity-40" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-medium">Authentication Required</h3>
                            <p className="text-muted-foreground text-sm max-w-sm">
                                Please sign in to generate API keys and access the full monitoring suite.
                            </p>
                        </div>
                        <button className="bg-foreground text-background px-10 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                            Sign In to Console
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
