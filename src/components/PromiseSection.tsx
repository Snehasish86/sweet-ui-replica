import { Clock, Palette, Users, CakeSlice } from "lucide-react";

const promises = [
  { icon: Clock, title: "ON-TIME DELIVERY", desc: "Because no one likes late surprises." },
  { icon: Palette, title: "500+ DESIGNS", desc: "Wishes come in all shapes and sizes." },
  { icon: Users, title: "2 CR+ ORDERS", desc: "You can close your eyes and trust us." },
  { icon: CakeSlice, title: "BAKED FRESH", desc: "Spreading smiles, one slice at a time." },
];

const PromiseSection = () => {
  return (
    <section className="py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground lowercase italic mb-1">
          our promise
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10">
          There's no secret spell—only honest, hard work!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {promises.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <p.icon size={28} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground max-w-[180px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
