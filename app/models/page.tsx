"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

const models = [
    {
        id: "helius-2-max",
        name: "Helius.2 [MAX]",
        tagline: "Our most powerful vision model.",
        price: "$0.02 / image",
        features: ["Highest prompt adherence", "Complex spatial reasoning", "Professional-grade output", "Commercial usage"]
    },
    {
        id: "helius-2",
        name: "Helius.2",
        tagline: "The gold standard for speed and quality.",
        price: "$0.01 / image",
        features: ["Optimized for real-time", "Low-latency inference", "Balanced performance", "API access"]
    },
    {
        id: "helius-1-kontext",
        name: "Helius.1 Kontext",
        tagline: "Deep context understanding.",
        price: "$1.50 / 1k tokens",
        features: ["Massive world knowledge", "Cultural nuance", "Multi-modal reasoning", "Research-ready"]
    }
]

export default function ModelsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-clip">
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-background pointer-events-none opacity-50" />

            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-white/70 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="text-xl font-bold tracking-tighter uppercase italic">HELIUS</div>
                <div className="w-24" /> {/* Spacer */}
            </nav>

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-32">
                {/* Header */}
                <div className="space-y-6 text-center">
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Model Suite</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                        A frontier cognitive architecture for every use case. From enterprise-grade visual intelligence to lightning-fast inference.
                    </p>
                </div>

                {/* Models List */}
                <div className="space-y-24">
                    {models.map((model, i) => (
                        <div key={model.id} id={model.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`space-y-8 ${i % 2 === 0 ? '' : 'lg:order-2'}`}
                            >
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-6xl font-serif">{model.name}</h2>
                                    <p className="text-xl text-muted-foreground">{model.tagline}</p>
                                </div>
                                <ul className="space-y-4">
                                    {model.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3 text-white/70">
                                            <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-emerald-500" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <Link href="/dashboard" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 font-medium hover:opacity-90 transition-opacity">
                                        Deploy Now <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                            <div className={`aspect-square bg-white/5 rounded-[2.5rem] border border-white/5 overflow-hidden group ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
                                <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                                {/* Placeholder for Model Visual */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-9xl select-none italic">
                                    {model.name.split('.')[0]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Section */}
                <div id="pricing" className="pt-24 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-serif">Transparent Pricing</h2>
                        <p className="text-muted-foreground">Standardized across all our frontier models.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {models.map(model => (
                            <div key={model.id} className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6 hover:border-white/20 transition-colors">
                                <h3 className="text-xl font-medium">{model.name}</h3>
                                <div className="text-3xl font-bold tracking-tight">{model.price}</div>
                                <Link href="/dashboard" className="block w-full text-center border border-white/10 py-3 rounded-lg hover:bg-white/5 transition-colors">
                                    Get API Key
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
