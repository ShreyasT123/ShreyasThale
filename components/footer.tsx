import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative min-h-[280px] w-full bg-black text-[#fefefe] overflow-hidden border-t border-white/10">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
                style={{ backgroundImage: `url('/dark-forest.png')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Grid Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Top Section */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 border-b border-white/10">

                    {/* Brand / Navigation Column */}
                    <div className="p-6 md:p-8 border-r border-white/10 space-y-6">
                        <h3 className="text-2xl font-serif">Navigation</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Projects", href: "/projects" },
                                { label: "Writing", href: "/writing" }, // Keeping existing routes
                                { label: "Resume", href: "/resume" },   // Keeping existing routes
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-[10px] font-mono tracking-widest uppercase text-[#fefefe]/50 hover:text-[#fefefe] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects Column */}
                    <div className="p-6 md:p-8 border-r border-white/10 space-y-6">
                        <h3 className="text-2xl font-serif">Selected Works</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Superpos", href: "/projects#superpos" },
                                { label: "MARS", href: "/projects#mars" },
                                { label: "ML Systems Exp.", href: "/projects#research" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-[10px] font-mono tracking-widest uppercase text-[#fefefe]/50 hover:text-[#fefefe] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="p-6 md:p-8 border-r border-white/10 space-y-6">
                        <h3 className="text-2xl font-serif">Connect</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Email", href: "mailto:shreyasthale54@gmail.com", icon: <Mail className="w-3 h-3" /> },
                                { label: "GitHub", href: "https://github.com/ShreyasT123", icon: <Github className="w-3 h-3" /> },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/shreyas-thale/", icon: <Linkedin className="w-3 h-3" /> },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#fefefe]/50 hover:text-[#fefefe] transition-colors"
                                    >
                                        {item.icon}
                                        {item.label}
                                        <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empty/Brand Column (Optional, or use for 'About' snippet) */}
                    <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                                <span className="font-serif italic">ST</span>
                            </div>
                            <p className="text-[10px] font-mono tracking-widest uppercase text-[#fefefe]/40 leading-relaxed">
                                Designing autonomous machine learning systems.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-10 lg:p-16 flex flex-col justify-between border-r border-white/10 min-h-[200px]">
                        <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#fefefe]/20">
                            Mumbai, India
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic opacity-90 leading-none">
                                SHREYAS
                            </h2>
                        </div>
                    </div>

                    <div className="p-6 md:p-10 space-y-8 flex flex-col justify-end">
                        <div className="pt-8 text-[10px] font-mono tracking-widest uppercase text-[#fefefe]/20 flex justify-between items-end">
                            <div>
                                © {new Date().getFullYear()} Shreyas Thale. <br />
                                All rights reserved.
                            </div>
                            <div className="text-[#fefefe]/10">
                                B.Tech CSE @ FCRIT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}