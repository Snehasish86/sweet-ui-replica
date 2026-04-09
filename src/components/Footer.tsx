import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  quickLinks: ["About Us", "Contact Us", "Blog", "Sitemap", "Terms & Conditions", "Privacy Policy", "Refund Policy", "FAQs"],
  categories: ["Cakes", "Theme Cakes", "Desserts", "Hampers", "Cupcakes", "Pastries", "Brownies", "Cookies"],
  cities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Noida", "Gurgaon"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">We Deliver To</h4>
            <ul className="space-y-2">
              {footerLinks.cities.map((city) => (
                <li key={city}>
                  <a href="#" className="text-primary-foreground/70 text-sm hover:text-primary transition-colors">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & App */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Phone size={14} />
                <span>+91 9876 543 210</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail size={14} />
                <span>support@bakingo.com</span>
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>New Delhi, India</span>
              </div>
            </div>

            <h4 className="font-bold text-sm mb-3 uppercase tracking-wide">Download App</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg px-3 py-2 text-xs font-medium transition-colors">
                📱 App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg px-3 py-2 text-xs font-medium transition-colors">
                📱 Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-cursive text-2xl text-primary">bakingo</span>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-primary-foreground/50 text-xs">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>💳 UPI</span>
            <span>💳 PayTM</span>
          </div>
        </div>

        <p className="text-center text-primary-foreground/40 text-xs mt-6">
          © 2026 Bakingo. All rights reserved. Made with ❤️ for cake lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
