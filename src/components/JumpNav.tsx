import { motion } from "framer-motion";

const links = [
  { label: "Gemstones", href: "#gemstones" },
  { label: "How to Wear", href: "#how-to-wear" },
  { label: "Crystal Pairings", href: "#crystal-pairings" },
  { label: "Care Guide", href: "#care" },
  { label: "FAQ", href: "#faq" },
];

export default function JumpNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-6 px-6 bg-background border-b border-border/40"
    >
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="text-muted-foreground font-body text-xs tracking-widest uppercase">
          Jump to
        </span>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-foreground/70 hover:text-amethyst font-body text-sm tracking-wider transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
