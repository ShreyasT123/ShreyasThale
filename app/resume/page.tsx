"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Download, Mail, Github, Linkedin, Calendar, MapPin, Building } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ResumePage() {
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

            <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Resume</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                            AI / ML Research Engineer & Systems Engineer. <br />
                            Building efficient, reliable, and accessible AI systems.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 shrink-0">
                        <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <Download className="w-4 h-4" /> Download PDF
                        </button>
                        <div className="flex gap-2">
                            <a href="mailto:shreyasthale54@gmail.com" className="p-3 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                <Mail className="w-4 h-4" />
                            </a>
                            <a href="https://github.com/ShreyasT123" className="p-3 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://www.linkedin.com/in/shreyas-thale/" className="p-3 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-sans tracking-tight border-b border-white/5 pb-4">Experience</h2>
                    <div className="space-y-12">

                        {/* IIT Bombay */}
                        <div className="group grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest pt-1">
                                Present
                            </div>
                            <div className="md:col-span-3 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                    <h3 className="text-2xl font-medium text-[#fefefe] group-hover:text-emerald-400 transition-colors">Machine Learning Intern</h3>
                                    <span className="text-[#fefefe]/60">IIT Bombay (WaVE Lab)</span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Developing statistical ML pipelines for bearing fault detection using vibration signal processing (EMD/MEMD). Improved early-fault detection accuracy and validated models across varying RPM and load conditions.
                                </p>
                            </div>
                        </div>

                        {/* InfinityPool */}
                        <div className="group grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest pt-1">
                                Previous
                            </div>
                            <div className="md:col-span-3 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                    <h3 className="text-2xl font-medium text-[#fefefe] group-hover:text-emerald-400 transition-colors">Software Engineer Intern</h3>
                                    <span className="text-[#fefefe]/60">InfinityPool Finnotech</span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Worked on backend and ML systems development. Built high-frequency options strategy engines using FastAPI and distributed tooling. Gained production-focused engineering exposure.
                                </p>
                            </div>
                        </div>

                        {/* AIDL */}
                        <div className="group grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest pt-1">
                                Previous
                            </div>
                            <div className="md:col-span-3 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                    <h3 className="text-2xl font-medium text-[#fefefe] group-hover:text-emerald-400 transition-colors">Technical Head</h3>
                                    <span className="text-[#fefefe]/60">AIDL Club, FCRIT</span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Led AI/ML initiatives and workshops. Mentored students in deep learning and systems. Organized hackathons and technical events.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-sans tracking-tight border-b border-white/5 pb-4">Education</h2>
                    <div className="group grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest pt-1">
                            2027
                        </div>
                        <div className="md:col-span-3 space-y-2">
                            <h3 className="text-2xl font-medium text-[#fefefe] group-hover:text-emerald-400 transition-colors">B.Tech Computer Science</h3>
                            <div className="text-[#fefefe]/60">Fr. Conceicao Rodrigues Institute of Technology (FCRIT)</div>
                            <p className="text-sm text-muted-foreground pt-2">Mumbai, India</p>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-sans tracking-tight border-b border-white/5 pb-4">Technical Capabilities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Languages", items: ["Python", "Rust", "TypeScript", "C++", "SQL"] },
                            { title: "Machine Learning", items: ["PyTorch", "TensorFlow", "JAX", "Triton", "HuggingFace"] },
                            { title: "Systems", items: ["Docker", "Kubernetes", "Redis", "FastAPI", "Ray"] },
                            { title: "Web", items: ["Next.js", "React", "Tailwind", "Three.js", "Framer Motion"] },
                        ].map((category) => (
                            <div key={category.title} className="space-y-4">
                                <h3 className="text-sm font-mono uppercase tracking-widest text-[#fefefe]/50">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map(item => (
                                        <li key={item} className="text-[#fefefe]/90">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}
