import { Bell } from "lucide-react";

const OccasionBanner = () => {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-2xl overflow-hidden p-8 md:p-12 text-primary-foreground">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-full flex items-center justify-center shrink-0">
                <Bell size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  Never Miss an Occasion!
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Set reminders for birthdays & anniversaries. We'll make sure you never forget!
                </p>
              </div>
            </div>
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-primary-foreground/90 transition-colors shrink-0 uppercase tracking-wide">
              UNLOCK NOW
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-20 w-24 h-24 bg-primary-foreground/5 rounded-full translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default OccasionBanner;
