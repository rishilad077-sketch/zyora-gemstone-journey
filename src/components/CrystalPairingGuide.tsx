import { motion } from "framer-motion";
import { crystalPairings } from "@/data/gemstones";

export default function CrystalPairingGuide() {
  return (
    <section id="crystal-pairings" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Crystal Pairing Guide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Powerful Crystal <span className="italic">Combinations</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Wearing two stones together amplifies their energy. Here are the most powerful pairings for specific intentions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {crystalPairings.map((pair, i) => (
            <motion.div
              key={pair.intention}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-amethyst font-body mb-3">
                {pair.intention}
              </p>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-heading text-lg font-semibold text-foreground">{pair.stone1}</span>
                <span className="text-muted-foreground text-xs font-body">+</span>
                <span className="font-heading text-lg font-semibold text-foreground">{pair.stone2}</span>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{pair.why}</p>
            </motion.div>
          ))}
        </div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl bg-secondary/60 border border-border/30 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-amethyst font-body mb-2">Pro Tip</p>
          <p className="text-muted-foreground text-sm font-body max-w-lg mx-auto leading-relaxed">
            When stacking multiple bracelets, wear receiving energy (love, calm, luck) on your <strong className="text-foreground">left wrist</strong> and projecting energy (confidence, wealth, courage) on your <strong className="text-foreground">right wrist</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
