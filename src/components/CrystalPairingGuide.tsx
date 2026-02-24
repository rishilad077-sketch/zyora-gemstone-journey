import { motion } from "framer-motion";
import { crystalPairings, gemstones } from "@/data/gemstones";
import { Sparkles } from "lucide-react";

// Build per-stone pairing data from gemstones
const stonePairingCards = gemstones
  .filter((s) => s.pairings.length > 0)
  .map((stone) => ({
    name: stone.name,
    emoji: stone.emoji,
    color: stone.color,
    pairings: stone.pairings,
    tip: stone.whenToReach,
  }));

const topPairings = crystalPairings.slice(0, 5);

const principles = [
  "Stones with complementary energies amplify each other — pair calming with energizing for balance.",
  "Wear receiving stones (love, calm) on your left wrist and projecting stones (confidence, power) on your right.",
  "Start with one pairing and add more as your practice deepens.",
];

export default function CrystalPairingGuide() {
  return (
    <section id="crystal-pairings" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Crystal Pairing Guide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Powerful Crystal <span className="italic">Combinations</span>
          </h2>
        </motion.div>

        {/* Two-column: Intro + Stone Pairing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left: Intro + Principles */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Wearing two stones together amplifies their energy. The right combination can unlock deeper healing, stronger protection, and more focused intention.
            </p>

            <div className="space-y-4">
              {principles.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-body text-amethyst font-semibold">{i + 1}</span>
                  </span>
                  <p className="text-sm font-body text-foreground/80 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            {/* Pro Tip card */}
            <div className="mt-8 p-5 rounded-2xl bg-secondary/60 border border-border/30">
              <p className="text-xs uppercase tracking-[0.2em] text-amethyst font-body mb-2">Pro Tip</p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                When stacking multiple bracelets, wear receiving energy on your{" "}
                <strong className="text-foreground">left wrist</strong> and projecting energy on your{" "}
                <strong className="text-foreground">right wrist</strong>.
              </p>
            </div>
          </motion.div>

          {/* Right: Per-stone pairing cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stonePairingCards.map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="glass-card-hover p-6 group"
              >
                {/* Stone identity */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${card.color}18` }}
                  >
                    {card.emoji}
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">{card.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">
                      Best matches
                    </p>
                  </div>
                </div>

                {/* Pairing chips */}
                <div className="space-y-2.5 mb-4">
                  {card.pairings.map((p) => (
                    <div
                      key={p.combo}
                      className="px-3.5 py-2.5 rounded-xl bg-secondary/70 border border-border/30"
                    >
                      <p className="font-heading text-sm font-semibold text-foreground leading-snug">
                        {p.combo}
                      </p>
                      <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">
                        {p.effect}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quick tip */}
                <p className="text-[11px] text-muted-foreground/70 font-body italic leading-snug">
                  💡 {card.tip}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top 5 Pairings Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <Sparkles className="w-4 h-4 text-amethyst" />
            <p className="text-xs uppercase tracking-[0.2em] text-amethyst font-body font-medium">
              Top 5 Pairings by Intention
            </p>
            <Sparkles className="w-4 h-4 text-amethyst" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topPairings.map((pair, i) => (
              <motion.div
                key={pair.intention}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: "0 20px 50px hsl(276 39% 53% / 0.12)" }}
                className="glass-card p-5 text-center transition-all duration-300 cursor-default"
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-amethyst font-body mb-3 font-medium">
                  {pair.intention}
                </p>
                <div className="mb-3">
                  <p className="font-heading text-base font-semibold text-foreground">{pair.stone1}</p>
                  <span className="text-muted-foreground/50 text-xs font-body">+</span>
                  <p className="font-heading text-base font-semibold text-foreground">{pair.stone2}</p>
                </div>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{pair.why}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
