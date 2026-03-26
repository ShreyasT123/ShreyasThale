"use client";

import { useEffect, useRef, useState } from "react";

//  Data
const ROW_1 = [
  "/books/deathnote.jpg",
  "/books/deathonthenile.jpg",
  "/books/goodgirlbadblood.jpg",
  "/books/greatgatsby.jpg",
  "/books/harrypotteraskaban.jpg",
  "/books/percyjackson.jpg",
];

const ROW_2 = [
  "/books/powerless.jpg",
  "/books/perskofbeingwallflower.jpg",
  "/books/shadonandbone.jpg",
  "/books/silentpatient.jpg",
  "/books/the-great-adventures-of-sherlock-holmes-1.jpg",
  "/books/TheAlchemistcover.jpg",
];

const STACK = [
  {
    src: "/books/powerless.jpg",
    glow: "#FF6B35",
    tag: "I",
  },
  {
    src: "/books/perskofbeingwallflower.jpg",
    glow: "#7B2FBE",
    tag: "II",
  },
  {
    src: "/books/shadonandbone.jpg",
    glow: "#F72585",
    tag: "III",
  },
  {
    src: "/books/silentpatient.jpg",
    glow: "#4CC9F0",
    tag: "IV",
  },
  {
    src: "/books/the-great-adventures-of-sherlock-holmes-1.jpg",
    glow: "#FF9F1C",
    tag: "V",
  },
  {
    src: "/books/TheAlchemistcover.jpg",
    glow: "#2EC4B6",
    tag: "VI",
  },
];

//  Helpers
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut3 = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

//  Card
function Card({ src }: { src: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 360,
        height: 375,
        background: "#101010",
        border: "1px solid #1c1c1c",
        borderRadius: 10,
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <img src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

//  Main Component
export default function ScrollCarouselParallax() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      const total = el.offsetHeight - window.innerHeight;
      setProgress(clamp(-top / total, 0, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ROW_PHASE = 0.7;
  const STACK_PHASE = 1 - ROW_PHASE;

  //  Phase 1: Row movement (progress 0 -> ROW_PHASE)
  const rowP = easeInOut3(clamp(progress / ROW_PHASE, 0, 1));
  const row1X = lerp(0, -720, rowP);
  const row2X = lerp(0, 720, rowP);

  // Dim rows when images start appearing
  const rowOpacity = clamp(1 - (progress - ROW_PHASE) / 0.15, 0.12, 1);

  //  Phase 2: Image stack (progress ROW_PHASE -> 1.0)
  const stackP = clamp((progress - ROW_PHASE) / STACK_PHASE, 0, 1);

  // Max image dimensions
  const MAX_W = 480;
  const MAX_H = 540;
  const MIN_SIZE = 5;

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Space+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Scroll container — 600vh gives ample sticky time */}
      <section
        ref={containerRef}
        style={{ position: "relative", width: "100%", height: "600vh" }}
      >
        {/* Sticky viewport */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            background: "#080808",
            overflow: "hidden",
          }}
        >
          {/*  Subtle grain overlay  */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.035,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <filter id="grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>

          {/*  Radial vignette  */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #080808 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/*  Carousel rows  */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 18,
              zIndex: 1,
              opacity: rowOpacity,
              transition: "opacity 0.05s linear",
            }}
          >
            {/* Row 1 — moves LEFT */}
            <div style={{ overflow: "hidden", width: "100vw" }}>
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  width: "max-content",
                  transform: `translateX(calc(-50% + 50vw + ${row1X}px))`,
                  willChange: "transform",
                }}
              >
                {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((src, i) => (
                  <Card key={i} src={src} />
                ))}
              </div>
            </div>

            {/* Row 2 — moves RIGHT */}
            <div style={{ overflow: "hidden", width: "100vw" }}>
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  width: "max-content",
                  transform: `translateX(calc(-50% + 50vw + ${row2X}px))`,
                  willChange: "transform",
                }}
              >
                {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((src, i) => (
                  <Card key={i} src={src} />
                ))}
              </div>
            </div>
          </div>

          {/*  Image stack  */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            {STACK.map((img, i) => {
              // Each image occupies 0.25 of stackP
              const local = easeInOut3(clamp((stackP - i * 0.25) / 0.25, 0, 1));
              if (local === 0) return null;

              const w = lerp(MIN_SIZE, MAX_W, local);
              const h = lerp(MIN_SIZE, MAX_H, local);
              // Border-radius: square when tiny, slightly rounded at full size
              const br = lerp(2, 8, local);

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: w,
                    height: h,
                    background: "#0b0b0b",
                    borderRadius: br,
                    zIndex: 10 + i,
                    boxShadow:
                      local > 0.2
                        ? `0 0 ${local * 120}px ${img.glow}55, 0 0 ${local * 40}px ${img.glow}33`
                        : "none",
                    overflow: "hidden",
                    willChange: "width, height",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.tag}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  {/* Shine overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "45%",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/*  Progress HUD  */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              zIndex: 30,
            }}
          >
            {/* Segmented progress bar */}
            <div style={{ display: "flex", gap: 4 }}>
              {STACK.map((img, i) => {
                const segLen = STACK_PHASE / STACK.length;
                const segStart = ROW_PHASE + i * segLen;
                const segFill = clamp((progress - segStart) / segLen, 0, 1);
                return (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 2,
                      background: "#1a1a1a",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${segFill * 100}%`,
                        background: img.glow,
                        borderRadius: 1,
                        transition: "width 0.05s linear",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                color: "#2a2a2a",
                letterSpacing: "0.25em",
              }}
            >
              {Math.round(progress * 100).toString().padStart(3, "0")}
            </span>
          </div>

          {/*  Phase label  */}
          <div
            style={{
              position: "absolute",
              top: 32,
              right: 36,
              zIndex: 30,
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                color: "#252525",
                letterSpacing: "0.3em",
              }}
            >
              {progress < 0.5 ? "PHASE  01" : "PHASE  02"}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
