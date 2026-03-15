"use client";
import Container from "../ui/Container";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CldImage } from "next-cloudinary";

export interface GalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
  type?: "video" | "image";
}

export default function ProjectGallery({
  gallery,
  title,
}: {
  gallery: GalleryImage[];
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // tracks live slide

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex });

  useEffect(() => {
    if (emblaApi && isOpen) {
      emblaApi.scrollTo(startIndex, true);
      setCurrentIndex(startIndex);
    }
  }, [emblaApi, isOpen, startIndex]);

  // Listen to Embla's select event on every swipe/scroll
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openAt = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="bg-ink px-6 py-16 lg:py-28">
      <Container>
        <div className="flex items-center gap-4 mb-12 text-sm tracking-[.35em] uppercase text-gold">
          <span className="block w-8 h-px bg-gold" /> {title}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {gallery?.map((item, i) => {
            const isWide = item.span === "wide";
            return (
              <div
                key={i}
                onClick={() => openAt(i)}
                className={`overflow-hidden bg-ink3 cursor-pointer ${
                  isWide ? "col-span-12" : "col-span-4"
                }`}
                style={{ aspectRatio: "4/5" }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <CldImage
                    src={item.src}
                    width={540}
                    height={675}
                    alt="Description"
                  />
                  // <img
                  //   src={item.src}
                  //   alt={item.alt}
                  //   className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  // />
                )}
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 z-10 text-white/70 hover:text-white text-3xl leading-none transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Embla carousel */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full" ref={emblaRef}>
                <div className="flex h-full touch-pan-y">
                  {gallery?.map((item, i) => (
                    <div
                      key={i}
                      className="flex-[0_0_100%] min-w-0 flex items-center justify-center h-full"
                    >
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          className="max-h-[90vh] w-auto max-w-full object-contain"
                          controls
                          autoPlay
                          loop
                          playsInline
                        />
                      ) : (
                        <CldImage
                          src={item.src}
                          width={540}
                          height={675}
                          alt={item.alt}
                          className="max-h-[90vh] w-auto max-w-full object-contain select-none"
                          draggable={false}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl transition-colors select-none"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl transition-colors select-none"
              aria-label="Next"
            >
              ›
            </button>

            {/* Slide counter — now driven by currentIndex */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
              {currentIndex + 1} / {gallery.length}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
