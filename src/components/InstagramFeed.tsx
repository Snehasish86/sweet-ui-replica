import { Instagram } from "lucide-react";
import { instagramImages } from "@/data/products";

const InstagramFeed = () => {
  return (
    <section className="py-14 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Instagram size={22} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What's In Your Heart?
            </h2>
          </div>
          <p className="text-muted-foreground text-sm">
            A glimpse from our social world!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {instagramImages.map((img, i) => (
            <a
              key={i}
              href="#"
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={img}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <Instagram
                  size={28}
                  className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
