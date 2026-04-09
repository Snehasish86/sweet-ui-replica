import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1400&h=500&fit=crop",
    tagline: "NEVER STOP WISHING",
    heading: "CLASSIC CAKES",
    subtitle: "Baked fresh, delivered with love",
    cta: "ORDER NOW",
  },
  {
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1400&h=500&fit=crop",
    tagline: "MAKE IT SPECIAL",
    heading: "DESIGNER CAKES",
    subtitle: "Custom creations for every celebration",
    cta: "EXPLORE",
  },
  {
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1400&h=500&fit=crop",
    tagline: "SWEET SURPRISES",
    heading: "GOURMET COLLECTION",
    subtitle: "Premium flavours, unforgettable taste",
    cta: "SHOP NOW",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-foreground">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full shrink-0" style={{ minWidth: "100%" }}>
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <p className="text-primary-foreground/80 text-xs sm:text-sm tracking-[0.3em] mb-2 uppercase">
                  {slide.tagline}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                  {slide.heading}
                </h1>
                <p className="text-primary-foreground/70 text-sm sm:text-base mb-6 max-w-md">
                  {slide.subtitle}
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow transition-colors">
        <ChevronLeft size={20} className="text-foreground" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow transition-colors">
        <ChevronRight size={20} className="text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary-foreground/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
