import type { MenuColumn } from "@/data/menuData";

interface MegaMenuProps {
  columns: MenuColumn[];
}

const MegaMenu = ({ columns }: MegaMenuProps) => {
  return (
    <div className="absolute left-0 top-full bg-background border border-border rounded-b-lg shadow-xl animate-slide-down z-50 min-w-[280px]"
      style={{ width: columns.length > 2 ? `${columns.length * 200}px` : "320px" }}
    >
      <div className={`grid gap-6 p-6 ${columns.length > 2 ? `grid-cols-${Math.min(columns.length, 4)}` : columns.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}
        style={{ gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, minmax(0, 1fr))` }}
      >
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
