import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { bestsellers } from "@/data/products";
import ProductCard from "./ProductCard";

const BestsellerSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 260;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star size={20} className="text-bakingo-gold fill-bakingo-gold" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground lowercase italic">
                india loves
              </h2>
              <Star size={20} className="text-bakingo-gold fill-bakingo-gold" />
            </div>
            <p className="text-muted-foreground text-sm">
              Bestsellers from across the country
            </p>
          </div>
          <a href="#" className="text-primary text-sm font-semibold hover:underline hidden sm:block">
            View All →
          </a>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>

        <a href="#" className="text-primary text-sm font-semibold hover:underline mt-4 block text-center sm:hidden">
          View All →
        </a>
      </div>
    </section>
  );
};

export default BestsellerSection;
