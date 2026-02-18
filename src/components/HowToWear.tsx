import { useState } from "react";
import { motion } from "framer-motion";
import { gemstones } from "@/data/gemstones";

const wristGuide = [
  {
    side: "Left Wrist",
    subtitle: "Receive Energy",
    description: "Your left side is your receiving side. Wear stones here to absorb their healing energy into your body and mind.",
    stones: gemstones.filter((s) => s.wearingGuide.toLowerCase().includes("left")),
  },
  {
    side: "Right Wrist",
    subtitle: "Project Energy",
    description: "Your right side is your giving side. Wear stones here to project their energy outward — confidence, protection, and power.",
    stones: gemstones.filter((s) => s.wearingGuide.toLowerCase().includes("right")),
  },
  {
    side: "Either Wrist",
    subtitle: "Universal Energy",
    description: "Some master stones work on both sides, amplifying all energy regardless of placement.",
    stones: gemstones.filter((s) => s.wearingGuide.toLowerCase().includes("either")),
  },
];

export default function HowToWear() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            How to <span className="italic">Wear</span> Your Stones
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Placement matters. Learn which wrist unlocks each stone's full potential.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {wristGuide.map((g, i) => (
            <button
              key={g.side}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full font-body text-sm tracking-wider transition-all ${
                activeTab === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {g.side}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-1">
              {wristGuide[activeTab].side}{" "}
              <span className="text-amethyst italic">{wristGuide[activeTab].subtitle}</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm max-w-md mx-auto mt-2">
              {wristGuide[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {wristGuide[activeTab].stones.map((stone) => (
              <div
                key={stone.id}
                className="p-5 rounded-xl bg-secondary/80 flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: `${stone.color}20` }}
                >
                  {stone.emoji}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{stone.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{stone.chakra} Chakra</p>
                </div>
              </div>
            ))}
            {wristGuide[activeTab].stones.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground font-body text-sm py-8">
                No stones specifically recommended for this placement.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
