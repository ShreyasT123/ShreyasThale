"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";
import { MoveUpRight } from "lucide-react";

function Noise() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.018] z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function WordByWordFade({ text, className }: { text: string; className: string }) {
  const words = text.trim().split(/\s+/);

  return (
    <h2 className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.75, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.28em] will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

function TextRevealEffect({ text, className }: { text: string; className: string }) {
  const words = text.trim().split(/(\s+)/);

  return (
    <h2 className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, filter: "saturate(0%) brightness(0.5)" }}
          whileInView={{ opacity: 1, filter: "saturate(100%) brightness(1)" }}
          viewport={{ once: false, amount: 0.95 }}
          transition={{ duration: 1.5, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

function CharByCharReveal({ text, className }: { text: string; className: string }) {
  const chars = text.split("");

  return (
    <span className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, filter: "saturate(0%) brightness(0.5)" }}
          whileInView={{ opacity: 1, filter: "saturate(100%) brightness(1)" }}
          viewport={{ once: false, amount: 0.95 }}
          transition={{ duration: 0.1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block will-change-transform"
        >
          {char === "\n" ? <br /> : char}
        </motion.span>
      ))}
    </span>
  );
}

function InfiniteBanner({ images }: { images: string[] }) {
  const doubledImages = [...images, ...images];
  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-10 px-4 will-change-transform transform-gpu"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        style={{ width: "max-content" }}
      >
        {doubledImages.map((img, i) => (
          <div key={i} className="flex-none h-[10cm] aspect-[2/3.2] bg-zinc-900 rounded-none shadow-2xl overflow-hidden group border border-white/5 relative">
            <img
              src={`/books/${img}`}
              alt="Book cover"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.currentTarget.src = "/video.png"; }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SlotReel({
  target,
  delay,
  spinSeed,
}: {
  target: string;
  delay: number;
  spinSeed: number;
}) {
  const glyphPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const reelChars = React.useMemo(() => {
    if (target === " ") return [" "];

    const spinLength = 8 + (spinSeed % 7);
    const leadChars = Array.from({ length: spinLength }, (_, index) => {
      const deterministicIndex = (index * 17 + spinSeed * 11 + target.charCodeAt(0)) % glyphPool.length;
      return glyphPool[deterministicIndex];
    });

    return [...leadChars, target];
  }, [target, spinSeed]);

  if (target === " ") {
    return <span className="slot-reel-space" aria-hidden="true">&nbsp;</span>;
  }

  const travel = reelChars.length - 1;

  return (
    <span className="slot-reel-window">
      <motion.span
        key={spinSeed}
        initial={{ y: "0em" }}
        animate={{ y: `-${travel}em` }}
        transition={{
          duration: 0.9 + travel * 0.08,
          delay,
          ease: [0.12, 0.82, 0.22, 1],
        }}
        className="slot-reel-track"
      >
        {reelChars.map((char, index) => (
          <span key={`${char}-${index}`} className="slot-reel-char" aria-hidden="true">
            {char}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

function SlotRollingLine({
  text,
  baseDelay,
  spinSeed,
}: {
  text: string;
  baseDelay: number;
  spinSeed: number;
}) {
  const chars = text.toUpperCase().split("");

  return (
    <div className="rolling-title-line" aria-label={text}>
      {chars.map((char, index) => (
        <SlotReel
          key={`${spinSeed}-${index}-${char}`}
          target={char}
          delay={baseDelay + index * 0.045}
          spinSeed={spinSeed + index * 17}
        />
      ))}
    </div>
  );
}

function RollingRevealTitle() {
  const [spinSeed, setSpinSeed] = useState(0);

  return (
    <motion.div
      className="rolling-title-wrap"
      viewport={{ amount: 0.5, once: false }}
      onViewportEnter={() => setSpinSeed((prev) => prev + 1)}
    >
      <SlotRollingLine text="Reading" baseDelay={0} spinSeed={spinSeed * 101} />
      <SlotRollingLine text="Archives" baseDelay={0.2} spinSeed={spinSeed * 211} />
    </motion.div>
  );
}

export default function OceanOfPDFHero() {
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [isOverHero1, setIsOverHero1] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOverHero1 || isMenuOpen) {
      document.body.classList.remove("hide-default-cursor");
    } else {
      document.body.classList.add("hide-default-cursor");
    }
  }, [isOverHero1, isMenuOpen]);

  const containerRef = useRef<HTMLDivElement>(null);
  const springConfig = { stiffness: 1000, damping: 50, mass: 0.1 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use raw scroll progress to avoid spring overshoot jitter at scroll end.
  const smoothProgress = scrollYProgress;

  const STATEMENTS = [
    { line1: "attention isnt lost.", line2: "its stolen." },
    { line1: "page by page.", line2: "thought by thought." },
    { line1: "feeds werent built for learning.", line2: "they were built for addiction" },
  ];

  // --- SCROLL TIMELINE REGISTRATION ---
  // Total Scroll Space: 1100vh

  // 1. SECTION 1 (Blue)
  const hero1Scale = useTransform(smoothProgress, [0, 0.15], [1, 0.25]);
  const hero1Y = useTransform(smoothProgress, [0, 0.15], ["0%", "-100%"]);
  const hero1HeadlineY = useTransform(smoothProgress, [0, 0.15], [0, -200]);
  const hero1HeadlineOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

  // 2. SECTION 2 (Video Hero)
  const hero2Y = useTransform(smoothProgress, [0, 0.15], ["100vh", "0vh"]);
  const hero2Scale = useTransform(smoothProgress, [0.035, 0.15, 0.25, 0.45], [0.8, 1, 1, 0.5]);
  const hero2TextScale = useTransform(smoothProgress, [0.15, 0.45], [1, 1.2]);

  const hero2TextScaleInside = useMotionValue(1);
  useEffect(() => {
    const update = () => {
      const ts = hero2TextScale.get();
      const cs = hero2Scale.get();
      hero2TextScaleInside.set(cs > 0 ? ts / cs : ts);
    };
    const unsubT = hero2TextScale.on("change", update);
    const unsubC = hero2Scale.on("change", update);
    update();
    return () => { unsubT(); unsubC(); };
  }, [hero2TextScale, hero2Scale, hero2TextScaleInside]);

  // 3. STATEMENTS (4, 5, 6)
  const hero4Y = useTransform(smoothProgress, [0.35, 0.45], ["100vh", "0vh"]);
  const hero5Y = useTransform(smoothProgress, [0.45, 0.55], ["100vh", "0vh"]);
  const hero5Scale = useTransform(smoothProgress, [0.45, 0.55], [1.5, 1]);
  const hero6Y = useTransform(smoothProgress, [0.55, 0.65], ["100vh", "0vh"]);
  const hero6Scale = useTransform(smoothProgress, [0.55, 0.65], [1.2, 1]);

  // 4. MINIMALIST (8)
  const hero8Y = useTransform(smoothProgress, [0.65, 0.75], ["100vh", "0vh"]);

  // 5. UNVEILED (3)
  const hero3Y = useTransform(smoothProgress, [0.75, 0.85, 0.92, 1], ["100vh", "0vh", "-100vh", "-350vh"]);

  return (
    <main className="relative">
      <div className="fixed inset-0 bg-[#fefefe] -z-10" />

      {/* Global Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[150] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isOverHero1 || isMenuOpen ? 0 : 1 }}
      >
        <AnimatePresence mode="wait">
          {!showCustomCursor ? (
            <motion.div key="default-cursor" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="w-4 h-4 rounded-full bg-white transition-shadow shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          ) : (
            <motion.div key="visit-cursor" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center shadow-xl">
              <MoveUpRight className="w-6 h-6 text-black mb-0.5" strokeWidth={2.5} />
              <span className="text-black font-bold text-[10px] uppercase tracking-widest leading-none">Visit</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Hover Image for Archives */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            key={hoveredImage}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { delay: 1.2, duration: 0.2 } }}
            transition={{
              scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.6 }
            }}
            style={{
              x: cursorX,
              y: cursorY,
              left: "60px",
              top: "-150px",
              pointerEvents: "none"
            }}
            className="fixed z-[140] w-52 h-80 shadow-[0_30px_90px_rgba(0,0,0,0.9)] rounded-none overflow-hidden border border-white/20 bg-zinc-950"
          >
            <img
              src={`/books/${hoveredImage}`}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PERSISTENT NAVBAR ── */}
      <div className="fixed top-0 left-0 right-0 z-[100] px-8 lg:px-12 pt-8 pointer-events-none select-none">
        <div className="flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-3xl lg:text-4xl hover:opacity-70 transition-opacity text-white"
            style={{
              fontFamily: 'var(--font-carattere), cursive',
              fontWeight: 900,
              transform: 'scaleX(0.85)',
              display: 'inline-block',
              transformOrigin: 'left',
              mixBlendMode: 'difference'
            }}
          >
            OceanOfPDF
          </a>
          <div className="flex items-center gap-3" style={{ mixBlendMode: 'difference' }}>
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase hidden md:block text-white">Meet the devs</span>
            <div className="flex items-center">
              <a href="#" className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/50 relative z-10 mr-[-10px]"><img src="/dev1.png" className="w-full h-full object-cover" /></a>
              <a href="#" className="w-10 h-10 rounded-full overflow-hidden border-2 border-white relative z-20"><img src="/dev2.jpg" className="w-full h-full object-cover" /></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center pt-8 pointer-events-none select-none">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center hover:opacity-60 transition-opacity pointer-events-auto text-white"
            style={{ mixBlendMode: 'difference' }}
          >
            <span className="text-2xl font-light leading-none">+</span>
            <span className="text-xs font-bold tracking-[0.25em] uppercase ml-3">MENU</span>
          </button>
        </div>
      </div>

      {/* ── FULLSCREEN MENU OVERLAY ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] flex flex-col items-start justify-center pl-[10vw] gap-2 bg-[#fefefe]/30 backdrop-blur-3xl"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-4xl font-thin text-zinc-950">×</button>
            {["Discover", "Donate", "Latest", "Enquire"].map((label, i) => (
              <motion.a key={label} href="#" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="text-[11vw] font-black tracking-tighter text-zinc-950 uppercase hover:opacity-50 transition-opacity leading-none">{label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SCROLLABLE AREA ── */}
      <div ref={containerRef} className="relative h-[1200vh]">

        {/* BLOCK 1: SECTION 1 (Hero Space) */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10" onMouseEnter={() => setIsOverHero1(true)} onMouseLeave={() => setIsOverHero1(false)}>
          <motion.section style={{ y: hero1Y, scale: hero1Scale }} className="relative h-screen w-full bg-[#fefefe] flex flex-col items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute left-0 top-0 h-full w-[40vw]"><img src="/hero.jpg" className="w-full h-full object-cover" /></div>
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-zinc-200" />

            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center mix-blend-difference pt-[0.75cm]">
              <div className="overflow-hidden py-2"><motion.h1 style={{ y: hero1HeadlineY, opacity: hero1HeadlineOpacity }} className="text-[3.5cm] font-black tracking-tighter uppercase text-white leading-none">Your One Stop</motion.h1></div>
              <div className="overflow-hidden py-2 w-screen flex justify-start"><motion.p style={{ y: hero1HeadlineY, opacity: hero1HeadlineOpacity }} className="text-[1.5cm] font-black tracking-tighter uppercase text-white pl-[calc(50vw+0.25rem)] leading-none">for all reads</motion.p></div>

              {/* New positioned Subtitle */}
              <div className="w-screen flex justify-start mt-8">
                <motion.div
                  style={{ y: hero1HeadlineY, opacity: hero1HeadlineOpacity }}
                  className="pl-[calc(50vw+0.25rem)] text-zinc-400 font-medium text-xs md:text-sm uppercase tracking-[0.4em] leading-relaxed"
                >
                  Curated for the curious <br /> hidden in plain sight— <br /> from across the web
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* BLOCK 2: SEQUENTIAL LAYERS */}
        <div className="sticky top-0 h-screen w-full z-20 pointer-events-none">

          {/* Layer 2.1: Video Hero Text Backdrop */}
          <motion.div style={{ y: hero2Y, willChange: "transform" }} className="absolute inset-0 z-[21] flex items-center justify-center pointer-events-none transform-gpu">
            <motion.h2 style={{ scale: hero2TextScale }} className="text-[9vw] font-black tracking-tight leading-[0.85] text-center text-black">Reading that<br />shapes today<br />& sharpens<br />tomorrow.</motion.h2>
          </motion.div>

          {/* Layer 2.2: Video Hero Main Block */}
          <motion.div style={{ y: hero2Y, scale: hero2Scale, willChange: "transform" }} className="absolute inset-0 z-[22] bg-zinc-950 overflow-hidden pointer-events-auto origin-center transform-gpu">
            <img src="/video.png" className="w-full h-full object-cover opacity-80" />
            <Noise />
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <motion.h2 style={{ scale: hero2TextScaleInside }} className="text-[9vw] font-black tracking-tight leading-[0.85] text-center text-white">Reading that<br />shapes today<br />& sharpens<br />tomorrow.</motion.h2>
            </div>
          </motion.div>

          {/* <motion.div style={{ y: hero4Y, willChange: "transform" }} className="absolute inset-0 z-[23] bg-[#fefefe] flex flex-col items-center justify-center pointer-events-auto shadow-2xl transform-gpu">
            <h3 className="text-sm font-extralight tracking-widest text-zinc-500 uppercase mb-4">{STATEMENTS[0].line1}</h3>
            <WordByWordFade text={STATEMENTS[0].line2} className="text-[7vw] font-black tracking-tighter text-zinc-950" />
          </motion.div>

          <motion.div style={{ y: hero5Y, willChange: "transform" }} className="absolute inset-0 z-[24] bg-[#fefefe] flex flex-col items-center justify-center pointer-events-auto shadow-2xl transform-gpu">
            <motion.div style={{ scale: hero5Scale }} className="flex flex-col items-center">
              <h3 className="text-sm font-extralight tracking-widest text-zinc-500 uppercase mb-4">{STATEMENTS[1].line1}</h3>
              <WordByWordFade text={STATEMENTS[1].line2} className="text-[7vw] font-black tracking-tighter text-zinc-950" />
            </motion.div>
          </motion.div>

          <motion.div style={{ y: hero6Y, willChange: "transform" }} className="absolute inset-0 z-[25] bg-[#fefefe] flex flex-col items-center justify-center pointer-events-auto shadow-2xl transform-gpu">
            <motion.div style={{ scale: hero6Scale }} className="flex flex-col items-center">
              <h3 className="text-sm font-extralight tracking-widest text-zinc-500 uppercase mb-4">{STATEMENTS[2].line1}</h3>
              <WordByWordFade text={STATEMENTS[2].line2} className="text-[5vw] font-black tracking-tighter text-zinc-950 text-center max-w-5xl" />
            </motion.div>
          </motion.div> */}
         {/* 4th IMAGE HERO (Layer Z-25, slides over video, under cards) */}
          <motion.div
            style={{ y: hero4Y }}
            className="absolute h-screen w-full bg-[#fefefe] rounded-none overflow-hidden shadow-2xl z-25 flex items-center justify-center cursor-none pointer-events-auto"
          >
            <div className="relative z-20 px-8 text-center text-zinc-900">
              <h3 className="text-xs md:text-sm font-extralight tracking-[0.35em] uppercase text-zinc-900/80 font-serif">
                {STATEMENTS[0].line1}
              </h3>
              <div className="mx-auto my-4 h-px w-20 bg-zinc-900/20" />
              <WordByWordFade
                text={STATEMENTS[0].line2}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-zinc-900 font-serif"
              />
            </div>
          </motion.div>

          {/* 5th IMAGE HERO (Layer Z-26, slides over 4th Hero) */}
          <motion.div
            style={{ y: hero5Y }}
            className="absolute h-screen w-full bg-[#fefefe] rounded-none overflow-hidden shadow-2xl z-26 flex items-center justify-center cursor-none pointer-events-auto"
          >
            <motion.div style={{ scale: hero5Scale }} className="relative z-20 px-8 text-center text-zinc-900">
              <h3 className="text-xs md:text-sm font-extralight tracking-[0.35em] uppercase text-zinc-900/80 font-serif">
                {STATEMENTS[1].line1}
              </h3>
              <div className="mx-auto my-4 h-px w-20 bg-zinc-900/20" />
              <WordByWordFade
                text={STATEMENTS[1].line2}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-zinc-900 font-serif"
              />
            </motion.div>
          </motion.div>

          {/* 6th IMAGE HERO (Layer Z-27, slides over 5th Hero) */}
          <motion.div
            style={{ y: hero6Y }}
            className="absolute h-screen w-full bg-[#fefefe] rounded-none overflow-hidden shadow-2xl z-27 flex items-center justify-center cursor-none pointer-events-auto"
          >
            <motion.div style={{ scale: hero6Scale }} className="relative z-20 px-8 text-center text-zinc-900">
              <h3 className="text-xs md:text-sm font-extralight tracking-[0.35em] uppercase text-zinc-900/80 font-serif">
                {STATEMENTS[2].line1}
              </h3>
              <div className="mx-auto my-4 h-px w-20 bg-zinc-900/20" />
              <WordByWordFade
                text={STATEMENTS[2].line2}
                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] max-w-4xl text-zinc-900 font-serif"
              />
            </motion.div>
          </motion.div>
          {/* Layer 2.5: Minimalist Today */}
          <motion.div style={{ y: hero8Y, willChange: "transform" }} className="absolute inset-0 z-[26] bg-[#0C0A00] flex items-center justify-center pointer-events-auto px-8 transform-gpu">
            <Noise />
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-8 gap-y-12 text-white relative z-10">
              <div className="text-zinc-500 font-medium text-xs uppercase tracking-widest">(©25)</div>
              <h4 className="text-xl md:text-3xl font-medium leading-[1.2] tracking-tight lg:text-4xl">We bring books within reach — timeless classics, hidden gems, and modern reads — creating a space where curious minds wander, discover, and return for the next story waiting to be opened.</h4>
              <div className="md:col-span-2 relative py-4"><div className="h-px w-full bg-zinc-800" /><div className="absolute left-[-15px] top-1/2 -translate-y-1/2 text-zinc-600 text-[10px]">+</div><div className="absolute right-[-15px] top-1/2 -translate-y-1/2 text-zinc-600 text-[10px]">+</div></div>
              <div className="text-zinc-500 font-medium text-xs uppercase tracking-widest">(Today)</div>
              <h4 className="text-xl md:text-3xl font-medium leading-[1.2] tracking-tight lg:text-4xl">A quiet corner of the internet for readers — where novels, ideas, and forgotten classics find their way back into curious hands.</h4>
            </div>
          </motion.div>

          {/* Layer 2.6: THE BIG FINALE (Unveiled -> Carousel -> Archive) */}
          <motion.div style={{ y: hero3Y, willChange: "transform" }} className="absolute inset-x-0 top-0 min-h-[450vh] z-[27] bg-[#0C0A00] flex flex-col items-center justify-start py-[12vh] pointer-events-auto overflow-hidden transform-gpu">
            <Noise />
            {/* 1. UNVEILED */}
            <div className="w-full max-w-7xl flex flex-col gap-6 px-8 lg:px-24 relative z-10">
              <div className="w-full flex items-end justify-between">
                <div className="text-zinc-600 font-semibold text-xs uppercase tracking-[0.3em] pb-4">(Framed)</div>
                <h2 className="text-[12vw] md:text-[10vw] lg:text-[12vh] font-black tracking-tighter uppercase text-white leading-[0.8] text-right">Unveiled <br /> The Stories</h2>
              </div>
              <div className="w-full relative py-8"><div className="h-px w-full bg-zinc-900" /></div>
              <div className="w-full flex justify-end"><p className="max-w-xl text-lg md:text-2xl font-medium text-right leading-tight text-zinc-400">Our collection reflects the beauty of words and imagination. We embrace contrast — silence and discovery, curiosity and knowledge — where every book reveals something new.</p></div>
            </div>

            {/* 2. INFINITE CAROUSEL */}
            <div className="w-screen mt-20 overflow-hidden"><InfiniteBanner images={["TheAlchemistcover.jpg", "deathnote.jpg", "deathonthenile.jpg", "goodgirlbadblood.jpg", "greatgatsby.jpg", "harrypotteraskaban.jpg", "percyjackson.jpg", "shadonandbone.jpg", "silentpatient.jpg", "the-great-adventures-of-sherlock-holmes-1.jpg", "turtlesallthewaydown.jpg"]} /></div>

            {/* 3. READING ARCHIVE */}
            <div className="w-full max-w-7xl flex flex-col items-start gap-4 px-8 lg:px-24 mt-40">

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col gap-4"
              >
                <div className="text-zinc-600 font-bold text-[10px] tracking-[0.4em] uppercase">(Archive)</div>
                <h2 className="rolling-title-wrap text-[12vw] md:text-[10vw] lg:text-[12vh] font-black tracking-tighter uppercase text-white leading-[0.8]">
                  <CharByCharReveal text="Reading Archives" className="inline" />
                </h2>
              </motion.div>

              {/* DIVIDER LINE WITH PLUS ICONS (Same as Unveiled) */}
              <div className="w-full relative py-8">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">+</div>
                <div className="h-px w-full bg-zinc-900" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">+</div>
              </div>

              {/* DESCRIPTION - Below divider, right aligned */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex justify-end text-zinc-500 pb-2"
              >
                <p className="max-w-2xl text-lg md:text-2xl font-medium text-right leading-tight tracking-tight uppercase">
                  A carefully gathered collection of stories, ideas, and knowledge. From thought-provoking nonfiction to immersive fiction, each book adds another world waiting to be explored.
                </p>
              </motion.div>

              <div className="w-full mt-16 pb-40">
                {[
                  { label: "MODERN FICTION", num: "01", img: "goodgirlbadblood.jpg" },
                  { label: "TIMELESS CLASSICS", num: "02", img: "greatgatsby.jpg" },
                  { label: "SCIENCE & TECHNOLOGY", num: "03", img: "the-great-adventures-of-sherlock-holmes-1.jpg" },
                  { label: "PERSONAL GROWTH", num: "04", img: "TheAlchemistcover.jpg" },
                  { label: "RARE DISCOVERIES", num: "05", img: "silentpatient.jpg" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHoveredImage(item.img)}
                    onMouseLeave={() => setHoveredImage(null)}
                    className="group w-full cursor-pointer hover:bg-white/[0.01] transition-all"
                  >
                    <div className="ml-[40vw] flex justify-between items-center py-5 md:py-6 border-b border-zinc-900 pr-8">
                      <span className="text-lg md:text-2xl font-medium text-zinc-500 group-hover:text-white transition-colors uppercase tracking-tighter">
                        <CharByCharReveal text={item.label} className="inline" />
                      </span>
                      <span className="text-[10px] md:text-xs font-bold font-mono text-zinc-700 tracking-widest">{item.num}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="w-full max-w-7xl px-8 lg:px-24 pb-20 mt-auto border-t border-zinc-900 pt-10 flex justify-between items-center text-zinc-600">
              <div className="flex flex-col gap-1 text-[10px] uppercase tracking-widest font-bold"><span>©2026 Archive</span><span className="opacity-30">Sonance Studio</span></div>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.2em] flex items-center gap-4"><div className="w-8 h-px bg-zinc-800" /> Back to Top ↑</a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
