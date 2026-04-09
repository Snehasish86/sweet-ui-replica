import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SEOContent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-lg font-bold text-foreground mb-4">
          Online Cake Delivery – Order Cakes Online
        </h2>
        <div className={`text-sm text-muted-foreground leading-relaxed space-y-3 ${!expanded ? "max-h-24 overflow-hidden relative" : ""}`}>
          <p>
            Bakingo is India's most loved online cake delivery platform, delivering freshly baked cakes, desserts, and hampers across 30+ cities. 
            Whether it's a birthday, anniversary, or any special celebration, we ensure your cake arrives fresh, on time, and with a smile.
          </p>
          <p>
            Our wide range includes classic cakes, gourmet cakes, designer theme cakes, photo cakes, eggless cakes, and sugar-free options. 
            Choose from popular flavours like Chocolate Truffle, Red Velvet, Butterscotch, Black Forest, Pineapple, Strawberry, and many more.
          </p>
          {expanded && (
            <>
              <p>
                We also offer a delectable range of desserts including jar cakes, pastries, cheesecakes, cupcakes, brownies, and cookies. 
                Our gift hampers are perfect for festivals, corporate gifting, and special occasions.
              </p>
              <p>
                With midnight delivery, same-day delivery, and express delivery options available, you can surprise your loved ones anytime. 
                Our cakes are baked fresh using premium ingredients and delivered in temperature-controlled packaging.
              </p>
              <p>
                Order cakes online in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and many more cities. 
                Experience the joy of gifting with Bakingo – because every celebration deserves a perfect cake!
              </p>
            </>
          )}
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </section>
  );
};

export default SEOContent;
