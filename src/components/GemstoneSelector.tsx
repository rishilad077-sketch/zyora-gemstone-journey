import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gemstones, intentions, type Gemstone } from "@/data/gemstones";
import { X } from "lucide-react";

function GemstoneCard({
  stone,
  isSelected,
  onClick,
}: {
  stone: Gemstone;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      layout
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="glass-card-hover p-6 text-left w-full cursor-pointer"
      style={{
        borderColor: isSelected ? stone.color : undefined,
        boxShadow: isSelected ? `0 0 30px ${stone.color}33` : undefined,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-2xl"
        style={{ backgroundColor: `${stone.color}20` }}
      >
        {stone.emoji}
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground">{stone.name}</h3>
      <p className="text-muted-foreground text-sm font-body mt-1">{stone.subtitle}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {stone.intentions.map((intent) => (
          <span
            key={intent}
            className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-body"
          >
            {intent}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

function StoneDetail({ stone, onClose }: { stone: Gemstone; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass-card p-8 md:p-12 relative"
      style={{ boxShadow: `0 0 60px ${stone.color}22` }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div
            className="w-24 h-24 rounded-3xl mb-6 flex items-center justify-center text-5xl gemstone-glow"
            style={{ backgroundColor: `${stone.color}20`, color: stone.color }}
          >
            {stone.emoji}
          </div>
          <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">
            {stone.name}
          </h3>
          <p className="text-amethyst font-heading text-lg italic mb-4">{stone.subtitle}</p>
          <p className="text-muted-foreground font-body leading-relaxed">{stone.description}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-3">Benefits</h4>
            <ul className="space-y-2">
              {stone.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: stone.color }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">Chakra</p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: stone.chakraColor }} />
                <span className="font-heading text-sm font-semibold text-foreground">{stone.chakra}</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-secondary">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">How to Wear</p>
              <span className="font-body text-sm text-foreground">{stone.wearingGuide}</span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">
              Pairs Well With
            </p>
            <div className="flex flex-wrap gap-2">
              {stone.complementary.map((c) => (
                <span key={c} className="text-xs px-3 py-1 rounded-full border border-border text-foreground font-body">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GemstoneSelector() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedStone, setSelectedStone] = useState<Gemstone | null>(null);

  const filtered = activeFilter
    ? gemstones.filter((s) => s.intentions.includes(activeFilter))
    : gemstones;

  return (
    <section id="gemstones" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Discover Your <span className="italic">Perfect Stone</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Each gemstone carries unique energy. Find the one that resonates with your intention.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-5 py-2 rounded-full text-sm font-body tracking-wider transition-all ${
              !activeFilter
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-secondary"
            }`}
          >
            All Stones
          </button>
          {intentions.map((intent) => (
            <button
              key={intent}
              onClick={() => setActiveFilter(activeFilter === intent ? null : intent)}
              className={`px-5 py-2 rounded-full text-sm font-body tracking-wider transition-all ${
                activeFilter === intent
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              {intent}
            </button>
          ))}
        </div>

        {/* Selected Stone Detail */}
        <AnimatePresence mode="wait">
          {selectedStone && (
            <div className="mb-10">
              <StoneDetail stone={selectedStone} onClose={() => setSelectedStone(null)} />
            </div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((stone, i) => (
              <motion.div
                key={stone.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
              >
                <GemstoneCard
                  stone={stone}
                  isSelected={selectedStone?.id === stone.id}
                  onClick={() => setSelectedStone(selectedStone?.id === stone.id ? null : stone)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
