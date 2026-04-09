import { Play } from "lucide-react";

const VideoBanner = () => {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1486427944544-d2c246c4d3b5?w=1400&h=400&fit=crop"
            alt="Bakingo promotional video"
            className="w-full h-[200px] sm:h-[280px] md:h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={30} className="text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-primary-foreground">
            <p className="text-sm font-semibold tracking-wider uppercase opacity-80">Watch Our Story</p>
            <h3 className="text-xl md:text-2xl font-bold">Baking Happiness Since 2016</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
