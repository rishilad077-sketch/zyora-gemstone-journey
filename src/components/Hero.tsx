import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { ChevronDown } from "lucide-react";

const GemstoneScene = lazy(() => import("./GemstoneScene"));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <GemstoneScene />
      </Suspense>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-amethyst-glow font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Zyora — Carry Earth's Good Energy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[0.95] mb-6"
        >
          Your Complete Guide
          <br />
          <span className="italic font-normal">to Healing Gemstones</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Where Ancient Wisdom Meets Modern Science.
          <br className="hidden md:block" />
          Discover the power of natural stones — handpicked for your journey.
        </motion.p>

        <motion.a
          href="#gemstones"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(155, 89, 182, 0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 bg-amethyst text-accent-foreground font-body text-sm tracking-widest uppercase rounded-full transition-colors hover:bg-amethyst-glow cursor-pointer"
        >
          Begin Your Crystal Journey
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-primary-foreground/40 text-xs tracking-widest uppercase font-body">
          Scroll to explore
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-5 h-5 text-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
