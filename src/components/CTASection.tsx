import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-primary">
      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor:
              i % 3 === 0
                ? "rgba(155,89,182,0.4)"
                : i % 3 === 1
                ? "rgba(248,187,208,0.4)"
                : "rgba(74,139,59,0.3)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl font-light text-primary-foreground mb-6"
        >
          Find the Stone
          <br />
          <span className="italic">That's Meant for You</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-primary-foreground/60 font-body text-lg mb-10"
        >
          Explore authentic gemstone jewelry designed to support your wellness, spiritual growth, and daily intentions.
        </motion.p>

        <motion.a
          href="https://zyora.in"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(155, 89, 182, 0.5)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-12 py-5 bg-amethyst text-accent-foreground font-body text-sm tracking-widest uppercase rounded-full transition-colors hover:bg-amethyst-glow cursor-pointer"
        >
          Find Yours →
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-primary-foreground/40 text-xs font-body tracking-wider"
        >
          Moon-Cleansed Before Dispatch • Free Shipping ₹599+ • 5–7 Day Delivery • 2,000+ Happy Customers
        </motion.p>
      </div>
    </section>
  );
}
