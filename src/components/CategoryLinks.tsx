import { categories } from "@/data/products";

const CategoryLinks = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          What will you wish for?
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Choose from our wide range of delicious cakes
        </p>

        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLinks;
