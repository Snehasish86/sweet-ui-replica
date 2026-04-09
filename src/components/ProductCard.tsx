import { Heart, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border min-w-[220px] w-[220px] sm:w-[240px] shrink-0">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 bg-background/80 rounded-full p-1.5 hover:bg-background transition-colors"
        >
          <Heart
            size={18}
            className={wishlisted ? "fill-primary text-primary" : "text-muted-foreground"}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-card-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base font-bold text-foreground">₹{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5 bg-green-600 text-primary-foreground px-1.5 py-0.5 rounded text-xs font-semibold">
            <span>{product.rating}</span>
            <Star size={10} className="fill-current" />
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
