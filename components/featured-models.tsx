"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { MediaControls } from "./media-controls"

const modelsData = [
    {
        id: "01",
        name: "SUPERPOS",
        tagline: "Interactive Web-Based Quantum Simulator.",
        description: "A comprehensive platform for quantum education, simulation, and real-time visualization.",
        details: "Features real-time 2D/3D circuit visualization, modular gate construction, and state vector simulation. Built with React and Python (Flask). Published at ICCES 2024.",
        variants: [
            { type: "demo", video: "/teaching0.mp4", thumbnail: "/dev.png" },
            { type: "paper", video: "/abstract-neural-network-flow.png", thumbnail: "/abstract-neural-network-flow.png" },
        ]
    },
    {
        id: "02",
        name: "MARS",
        tagline: "Multi-Agent Review System.",
        description: "Agentic AI system for academic paper pre-review and scoring.",
        details: "Orchestrates specialized agents for novelty, methodology, and plagiarism checks using an ensemble of LLMs (Claude, Mistral). Finalist at AWS Impact X Challenge.",
        variants: [
            { type: "system", video: "/teachingaicode.mp4", thumbnail: "/planet_sys.png" },
            { type: "arch", video: "/digital-monolith-architecture.png", thumbnail: "/digital-monolith-architecture.png" },
        ]
    },
    {
        id: "03",
        name: "ML SYSTEMS",
        tagline: "Compiler-Aware Transformer Benchmarking.",
        description: "Deep dive into deployment economics and infra efficiency.",
        details: "Comparative analysis of PyTorch, JAX, and TensorFlow performance. Investigations into torch.compile, XLA, and TensorRT for optimizing Transformer inference.",
        variants: [
            { type: "benchmark", video: "/npu-chip.mp4", thumbnail: "/npu-chip.mp4" },
            { type: "code", video: "/artist_ai.png", thumbnail: "/artist_ai.png" },
        ]
    },
]

export function FeaturedModels() {
    const [activeModel, setActiveModel] = useState(modelsData[0])
    const [activeVariantIndex, setActiveVariantIndex] = useState(0)

    const activeVariant = activeModel.variants[activeVariantIndex]

    return (
        <section className="py-24 px-6 border-t border-white/5 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <h2 className="text-4xl md:text-6xl font-sans tracking-tight">Selected Works</h2>
                    <div className="flex items-center gap-8 text-[11px] font-medium tracking-widest uppercase text-muted-foreground">
                        <Link href="/projects" className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1">
                            View All Projects <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>

                {/* Tab Menu */}
                <div className="relative flex items-center gap-12 mb-12 border-b border-white/5 pb-4 overflow-x-auto overflow-y-hidden custom-scrollbar">

                    {modelsData.map((model) => (
                        <button
                            key={model.id}
                            onClick={() => {
                                setActiveModel(model)
                                setActiveVariantIndex(0)
                            }}
                            className={`relative flex items-baseline gap-2 group transition-all duration-300 
                                flex-shrink-0 
                                py-3 px-2 
                                leading-none
                                focus:outline-none
                                ${activeModel.id === model.id
                                    ? "text-white"
                                    : "text-white/30 hover:text-white/60"}
                                `}
                        >
                            <span className="text-[10px] font-bold tracking-[0.2em]">{model.id}.</span>
                            <span className="text-xl md:text-3xl font-sans font-medium tracking-tight whitespace-nowrap">{model.name}</span>

                        </button>
                    ))}
                </div>

                {/* Layout with Overlap */}
                <div className="relative">
                    {/* Main Video Area */}
                    <div className="relative aspect-[21/9] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-white/5 z-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeModel.id}-${activeVariant.type}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {activeVariant.video.endsWith('.mp4') ? (
                                    <MediaControls
                                        autoPlay={true}
                                        showControls={true}
                                        respectMotionPreference={true}
                                        className="w-full h-full"
                                    >
                                        <video
                                            src={activeVariant.video}
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    </MediaControls>
                                ) : (
                                    <img src={activeVariant.video} alt={`${activeModel.name} ${activeVariant.type} variant demonstration`} className="w-full h-full object-cover" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom row: Variants left, Card right (overlapping) */}
                    <div className="flex flex-col lg:flex-row gap-8 mt-8 items-end">
                        {/* Variants of Selected Model */}
                        <div className="flex gap-4 p-2">
                            {activeModel.variants.map((variant, idx) => (
                                <div key={variant.type} className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setActiveVariantIndex(idx)}
                                        className={`relative w-28 md:w-36 aspect-video rounded-xl overflow-hidden transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background ${activeVariantIndex === idx ? "ring-2 ring-white/60 scale-[0.98]" : "opacity-40 hover:opacity-100 focus:opacity-100"
                                            }`}
                                    >
                                        {/* Fallback to video as thumbnail if needed, or use a static image */}
                                        {variant.thumbnail.endsWith('.mp4') ? (
                                            <video src={variant.thumbnail} className="w-full h-full object-cover" muted />
                                        ) : (
                                            <img src={variant.thumbnail} alt={`${activeModel.name} ${variant.type}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        )}
                                        <div className="absolute inset-0 bg-black/20" />
                                    </button>
                                    <span className={`text-[10px] font-bold tracking-widest uppercase text-center ${activeVariantIndex === idx ? "text-white" : "text-white/40"}`}>
                                        {activeModel.name.split(' ')[0]}-{variant.type}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Overlapping Info Card */}
                        <div className="lg:flex-1 lg:-mt-64 z-10 transition-all">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeModel.id}-${activeVariant.type}`}
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="bg-zinc-900/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl h-full"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                                        <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tighter leading-none text-white">
                                            {activeModel.name}
                                        </h3>
                                        <Link href={`/projects#${activeModel.id}`} className="bg-white text-black hover:bg-white/90 px-10 py-3.5 rounded-xl text-sm font-bold tracking-tight transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:scale-[1.02]">
                                            View Project
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-sm leading-relaxed border-b border-white/10 pb-10 mb-10">
                                        <div className="space-y-4">
                                            <p className="text-lg md:text-xl font-medium text-white/90 tracking-tight leading-tight">
                                                {activeModel.tagline}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-lg md:text-xl font-medium text-white/90 tracking-tight leading-tight">
                                                {activeModel.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="max-w-xl">
                                        <p className="text-white/60 font-medium text-base leading-relaxed">
                                            {activeModel.details}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
