import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
    return (
        // <footer className="relative min-h-[400px] w-full bg-black text-white overflow-hidden border-t border-white/10">
        <footer className="relative min-h-[280px] w-full bg-black text-white overflow-hidden border-t border-white/10">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
                style={{ backgroundImage: `url('/dark-forest.png')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Grid Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Top Section */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
                    {/* Models Column */}
                    <div className="p-6 md:p-8 border-r border-white/10 space-y-6">
                        <h3 className="text-2xl font-serif">Models</h3>
                        <ul className="space-y-3">
                            {["Helius.2 Max", "Helius.2", "Helius.1 Kontext", "Helius 1.1 Pro Ultra", "Helius 1.1 Pro"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/models#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* API & Open Weights Column */}
                    <div className="p-6 md:p-8 border-r border-white/10 flex flex-col gap-10">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif">API</h3>
                            <ul className="space-y-3">
                                {[
                                    { label: "Documentation", href: "/docs" },
                                    { label: "Pricing", href: "/models#pricing" },
                                    { label: "Dashboard", href: "/dashboard" },
                                    { label: "Status", href: "#" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif">Open Weights</h3>
                            <ul className="space-y-3">
                                {[
                                    { label: "Licensing", href: "/docs#licensing" },
                                    { label: "Hugging Face", href: "https://huggingface.co" },
                                    { label: "GitHub", href: "https://github.com/ShreyasT123/ai_" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="p-6 md:p-8 border-r border-white/10 space-y-6">
                        <h3 className="text-2xl font-serif">Resources</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Documentation", href: "/docs" },
                                { label: "Help Desk", href: "/contact" },
                                { label: "Blog", href: "#" },
                                { label: "Brand", href: "#" },
                                { label: "GitHub", href: "https://github.com/ShreyasT123/ai_" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.label}{" "}
                                        <ArrowUpRight className="w-2.5 h-2.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white/30" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-8 space-y-4">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-white/30">Connect</h3>
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="https://github.com/ShreyasT123/ShreyasT123"
                                    className="text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors flex items-center justify-between group"
                                >
                                    Meet the Developer
                                    <ArrowUpRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-all opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/shreyas-thale/"
                                    className="text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors flex items-center justify-between group"
                                >
                                    LinkedIn
                                    <ArrowUpRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-all opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className="p-6 md:p-8 space-y-6">
                        <h3 className="text-2xl font-serif">Company</h3>
                        <ul className="space-y-3">
                            {["About Us", "Careers", "Trust and Security", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 flex flex-col gap-6">
                            <div className="flex items-center gap-2 text-[10px] font-mono tracking-tighter text-white/40 italic">
                                <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[8px] not-italic">
                                    ISO
                                </div>
                                ISO 27001 ↗
                            </div>
                            <Link
                                href="/models#pricing"
                                className="inline-flex items-center justify-between w-full text-[11px] font-mono tracking-widest uppercase text-white hover:text-white/80 transition-colors py-4 border-t border-white/10"
                            >
                                View Pricing
                                <ArrowUpRight className="w-4 h-4 text-white/20" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-10 lg:p-16 flex flex-col justify-between border-r border-white/10 min-h-[300px]">
                        <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20">
                            Empowering Visual Intelligence
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase italic opacity-90 leading-none">
                                HELIUS
                            </h2>
                        </div>
                    </div>

                    <div className="p-6 md:p-10 space-y-8 flex flex-col justify-end">
                        <h3 className="text-4xl font-serif">Legal</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                            {[
                                "Imprint",
                                "Terms of Service",
                                "Usage Policy",
                                "Privacy Policy",
                                "Intellectual Property Policy",
                                "Developer Terms of Service",
                                "Helius API Service Terms",
                                "Self-Hosted Terms of Service",
                                "Non-Commercial License Terms",
                                "Responsible AI Development Policy",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="/docs#legal"
                                    className="text-[9px] font-mono tracking-widest uppercase text-white/40 hover:text-white transition-colors leading-tight"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-8 text-[10px] font-mono tracking-widest uppercase text-white/20">
                            © {new Date().getFullYear()} Helius. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
