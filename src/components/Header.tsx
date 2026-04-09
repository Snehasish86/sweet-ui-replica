import { useState } from "react";
import { menuItems, cities } from "@/data/menuData";
import { Search, MapPin, ShoppingCart, User, Package, ChevronDown, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="/" className="font-cursive text-3xl text-primary shrink-0">
            bakingo
          </a>

          {/* Location */}
          <div className="hidden md:flex items-center relative">
            <button
              onClick={() => setShowCityDropdown(!showCityDropdown)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin size={16} className="text-primary" />
              <span className="text-xs text-muted-foreground">Delivering To</span>
              <span className="font-semibold text-foreground">{selectedCity}</span>
              <ChevronDown size={14} />
            </button>
            {showCityDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-3 w-56 animate-slide-down z-50">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Select City</p>
                <div className="grid grid-cols-2 gap-1">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => { setSelectedCity(city); setShowCityDropdown(false); }}
                      className={`text-sm px-2 py-1.5 rounded text-left hover:bg-secondary transition-colors ${city === selectedCity ? "text-primary font-semibold" : "text-foreground"}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className={`hidden md:flex flex-1 max-w-md items-center border rounded-full px-4 py-2 transition-all ${searchFocused ? "border-primary shadow-sm" : "border-border"}`}>
            <Search size={16} className="text-muted-foreground mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search For Cakes, Occasion, Flavour And More..."
              className="w-full text-sm bg-transparent outline-none placeholder:text-muted-foreground"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Package size={18} />
              <span className="hidden lg:inline">Track Order</span>
            </button>
            <button className="relative text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              <User size={18} />
              <span className="hidden lg:inline">Login</span>
            </button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-0">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 px-3 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors relative">
                  {item.label}
                  {item.badge && (
                    <span className="bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                      {item.badge}
                    </span>
                  )}
                </button>
                {activeMenu === index && (
                  <MegaMenu columns={item.columns} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-down max-h-[70vh] overflow-y-auto">
          {/* Mobile Search */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center border border-border rounded-full px-4 py-2">
              <Search size={16} className="text-muted-foreground mr-2" />
              <input type="text" placeholder="Search..." className="w-full text-sm bg-transparent outline-none" />
            </div>
          </div>
          {/* Mobile Location */}
          <div className="px-4 py-3 border-b border-border flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-primary" />
            <span className="text-muted-foreground">Delivering To:</span>
            <span className="font-semibold">{selectedCity}</span>
          </div>
          {/* Mobile Nav */}
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors flex items-center gap-2">
                  {item.label}
                  {item.badge && (
                    <span className="bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
