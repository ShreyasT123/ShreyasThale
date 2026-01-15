"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Check, ArrowRight, Github, ExternalLink, FileText, Cpu, Layers } from "lucide-react"
import { Footer } from "@/components/footer"

const projects = [
    {
        id: "superpos",
        title: "Superpos — Quantum Simulation Platform",
        description: "A comprehensive web-based platform for quantum circuit simulation and education. Features real-time state vector calculation, interactive gate manipulation, and educational modules.",
        stack: ["React", "FastAPI", "Django", "NumPy", "Plotly"],
        highlights: [
            "Real-time quantum state visualization (Bloch Sphere)",
            "Modular circuit construction engine",
            "Scalable backend architecture for simulation tasks",
            "Published at ICCES 2024"
        ],
        links: [
            { label: "Live Demo", icon: <ExternalLink className="w-3 h-3" />, href: "#" },
            { label: "GitHub", icon: <Github className="w-3 h-3" />, href: "#" },
            { label: "Paper", icon: <FileText className="w-3 h-3" />, href: "#" },
        ],
        image: "/dev.png"
    },
    {
        id: "mars",
        title: "MARS — Multi-Agent Review System",
        description: "Agentic AI system designed to streamline academic paper pre-reviews. Orchestrates specialized agents for novelty assessment, methodology checking, and plagiarism detection.",
        stack: ["LangChain", "Mistral", "Claude", "FastAPI", "Redis"],
        highlights: [
            "Orchestrates multiple LLM agents for specific tasks",
            "Human-in-the-loop scoring and feedback",
            "Finalist at AWS Impact X Challenge (IIT Bombay)",
            "Scalable microservices architecture"
        ],
        links: [
            { label: "GitHub", icon: <Github className="w-3 h-3" />, href: "#" },
            { label: "Demo", icon: <ExternalLink className="w-3 h-3" />, href: "#" },
        ],
        image: "/planet_sys.png"
    },
    {
        id: "research",
        title: "ML Systems & Compiler Benchmarking",
        description: "Deep dive investigations into ML compiler infrastructure (torch.compile, XLA, TensorRT) and transformer inference optimization.",
        stack: ["PyTorch", "JAX", "TensorFlow", "Triton", "CUDA"],
        highlights: [
            "Benchmarking transformer performance across frameworks",
            "Analyzing memory access patterns and kernel fusion",
            "Optimizing deployment latency for edge devices",
            "Comparative analysis of graph compilation strategies"
        ],
        links: [
            { label: "Research Notes", icon: <FileText className="w-3 h-3" />, href: "/writing" },
            { label: "GitHub", icon: <Github className="w-3 h-3" />, href: "#" },
        ],
        image: "/npu-chip.mp4"
    }
]

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-clip">
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-background pointer-events-none opacity-50" />

            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-white/70 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="text-xl font-bold tracking-tighter uppercase italic">SHREYAS</div>
                <div className="w-24" /> {/* Spacer */}
            </nav>

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-32">
                {/* Header */}
                <div className="space-y-6 text-center">
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Selected Works</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                        Systems, infrastructure, and research. <br />
                        A collection of projects exploring the frontier of autonomous engineering.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-32">
                    {projects.map((project, i) => (
                        <div key={project.id} id={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`col-span-1 lg:col-span-6 space-y-8 ${i % 2 === 0 ? '' : 'lg:order-2'}`}
                            >
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="text-[10px] font-mono tracking-widest uppercase border border-white/10 px-2 py-1 rounded-sm text-white/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-sans font-medium leading-tight">{project.title}</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                                </div>

                                <ul className="space-y-3 border-l-2 border-white/10 pl-6">
                                    {project.highlights.map(highlight => (
                                        <li key={highlight} className="text-sm md:text-base text-white/80 font-light">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {project.links.map(link => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            {link.icon} {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`col-span-1 lg:col-span-6 aspect-[4/3] relative rounded-[2rem] border border-white/10 overflow-hidden group ${i % 2 === 0 ? '' : 'lg:order-1'}`}
                            >
                                <div className="absolute inset-0 bg-zinc-900" />
                                {project.image.endsWith('.mp4') ? (
                                    <video
                                        src={project.image}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
