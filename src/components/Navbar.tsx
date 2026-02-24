import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Gemstones", href: "#gemstones" },
  { label: "How to Wear", href: "#how-to-wear" },
  { label: "Crystal Pairings", href: "#crystal-pairings" },
  { label: "Care Guide", href: "#care" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-semibold tracking-wide">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>Zyora</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm tracking-wider transition-colors hover:text-amethyst ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://zyora.in"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-body text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-forest-light"
              : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
          }`}
        >
          Shop Now
        </a>
      </div>
    </motion.nav>
  );
}
