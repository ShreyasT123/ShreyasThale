"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

type ShowcaseCard = {
  src: string;
  title: string;
  className: string;
};

interface ShowcaseCarouselProps {
  onHoverChange?: (isHovering: boolean) => void;
}

const SLIDES: ShowcaseCard[][] = [
  [
    { src: "/books/deathnote.jpg", title: "Death Note", className: "md:col-span-5 md:row-span-3" },
    { src: "/books/TheAlchemistcover.jpg", title: "The Alchemist", className: "md:col-span-3 md:row-span-2" },
    { src: "/books/percyjackson.jpg", title: "Percy Jackson", className: "md:col-span-4 md:row-span-2" },
    { src: "/books/greatgatsby.jpg", title: "The Great Gatsby", className: "md:col-span-3 md:row-span-2" },
    { src: "/books/goodgirlbadblood.jpg", title: "Good Girl, Bad Blood", className: "md:col-span-4 md:row-span-2" },
    { src: "/books/silentpatient.jpg", title: "The Silent Patient", className: "md:col-span-5 md:row-span-2" },
  ],
  [
    { src: "/books/harrypotteraskaban.jpg", title: "Harry Potter", className: "md:col-span-4 md:row-span-3" },
    { src: "/books/shadonandbone.jpg", title: "Shadow and Bone", className: "md:col-span-5 md:row-span-2" },
    { src: "/books/powerless.jpg", title: "Powerless", className: "md:col-span-3 md:row-span-2" },
    { src: "/books/deathonthenile.jpg", title: "Death on the Nile", className: "md:col-span-3 md:row-span-2" },
    { src: "/books/perskofbeingwallflower.jpg", title: "Perks of Being a Wallflower", className: "md:col-span-5 md:row-span-2" },
    {
      src: "/books/the-great-adventures-of-sherlock-holmes-1.jpg",
      title: "Sherlock Holmes",
      className: "md:col-span-4 md:row-span-3",
    },
  ],
  [
    { src: "/books/marble.png", title: "Marble", className: "md:col-span-6 md:row-span-2" },
    { src: "/books/turtlesallthewaydown.jpg", title: "Turtles All The Way Down", className: "md:col-span-3 md:row-span-3" },
    { src: "/books/powerless.jpg", title: "Powerless", className: "md:col-span-3 md:row-span-2" },
    { src: "/books/percyjackson.jpg", title: "Percy Jackson", className: "md:col-span-4 md:row-span-2" },
    { src: "/books/deathnote.jpg", title: "Death Note", className: "md:col-span-4 md:row-span-2" },
    { src: "/books/TheAlchemistcover.jpg", title: "The Alchemist", className: "md:col-span-4 md:row-span-2" },
  ],
];

export default function ShowcaseCarousel({ onHoverChange }: ShowcaseCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const timer = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
        return;
      }
      api.scrollTo(0);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section className="relative w-full bg-black py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(42,97,173,0.28),transparent_35%),radial-gradient(circle_at_88%_84%,rgba(202,86,48,0.22),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 md:mb-10">
          <p className="text-xs tracking-[0.35em] uppercase text-[#fefefe]/50">Showcase</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#fefefe] md:text-5xl">
            A carousel of book worlds
          </h2>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-0">
            {SLIDES.map((slide, slideIndex) => (
              <CarouselItem key={slideIndex} className="pl-0">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4 [grid-auto-rows:110px] md:[grid-auto-rows:124px]">
                  {slide.map((card) => (
                    <article
                      key={`${slideIndex}-${card.title}-${card.src}`}
                      onMouseEnter={() => onHoverChange?.(true)}
                      onMouseLeave={() => onHoverChange?.(false)}
                      className={`group relative col-span-1 row-span-1 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 ${card.className}`}
                    >
                      <Image
                        src={card.src}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={slideIndex === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                      <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-[#fefefe]/92 md:text-base">
                        {card.title}
                      </p>
                    </article>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-auto bottom-[-3.2rem] border-white/25 bg-black/60 text-[#fefefe] hover:bg-white hover:text-black md:left-0" />
          <CarouselNext className="right-2 top-auto bottom-[-3.2rem] border-white/25 bg-black/60 text-[#fefefe] hover:bg-white hover:text-black md:right-0" />
        </Carousel>
      </div>
    </section>
  );
}
