"use client"

import Link from "next/link"
import Image from "next/image"

export function Announcements() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 group/container">
          {/* Main Announcement (Left) */}
          <Link
            href="#"
            className="lg:col-span-7 relative group overflow-hidden bg-white border border-gray-200 rounded-2xl aspect-[16/10] lg:aspect-auto min-h-[500px] flex flex-col justify-end p-8 md:p-12 transition-all duration-700 hover:scale-[1.005] hover:z-10 group-hover/container:opacity-100"
          >
            {/* Background Content */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/dev.png"
                alt="HELIUS.2 frontier visual intelligence model announcement featuring advanced AI architecture"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Masking Overlay */}
            <div className="absolute inset-0 z-10 bg-[#D1EEF5]/80 opacity-0 group-hover/container:opacity-100 group-hover:!opacity-0 transition-opacity duration-500 pointer-events-none" />

            {/* Text Content */}
            <div className="relative z-20 space-y-4">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">November 11, 2025</div>
              <h3 className="text-4xl md:text-6xl font-sans font-medium leading-[0.9] tracking-tighter text-white">
                HELIUS.2: Frontier Visual Intelligence
              </h3>
              <p className="text-sm md:text-lg text-white/60 font-medium max-w-xl">
                Today, we release HELIUS.2, our most capable model to date.
              </p>
            </div>
          </Link>

          {/* Vertical Stack (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Right Announcement */}
            <Link
              href="#"
              className="flex-1 relative group overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col justify-end transition-all duration-700 hover:scale-[1.005] hover:z-10"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/planet_sys.png"

                  alt="Helius $300M Series B funding announcement showcasing company growth and investment milestone"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                {/* Subtle Blur Area at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[2px]" />
              </div>

              {/* Background Large Text */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-10 transition-opacity duration-500 group-hover:opacity-5">
                <span className="text-4xl font-bold tracking-tighter text-gray-300 whitespace-nowrap">Our $300M Series B</span>
              </div>

              {/* Masking Overlay (Active by default unless hovered) */}
              <div className="absolute inset-0 z-20 bg-[#D1EEF5]/80 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-30 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">December 1, 2025</div>
                <h3 className="text-xl md:text-2xl font-sans font-medium leading-tight text-gray-900 tracking-tight text-balance">
                  Laying the Foundations for Visual Intelligence—Our $300M Series B
                </h3>
              </div>
            </Link>

            {/* Bottom Right Announcement */}
            <Link
              href="#"
              className="flex-1 relative group overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col justify-end transition-all duration-700 hover:scale-[1.005] hover:z-10"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/cinematic-ai-landscape.png"

                  alt="HELIUS.2 technical report cover showing detailed analysis and enhancement of latent space architecture"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                {/* Subtle Blur Area at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[2px]" />
              </div>

              {/* Background Large Text */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-10 transition-opacity duration-500 group-hover:opacity-5">
                <span className="text-4xl font-bold tracking-tighter text-gray-300 whitespace-nowrap">HELIUS.2</span>
              </div>

              {/* Masking Overlay (Active by default unless hovered) */}
              <div className="absolute inset-0 z-20 bg-[#D1EEF5]/80 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-30 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">November 25, 2025</div>
                <h3 className="text-xl md:text-2xl font-sans font-medium leading-tight text-gray-900 tracking-tight text-balance">
                  Technical Report - HELIUS.2: Analyzing and Enhancing the Latent Space of HELIUS
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
