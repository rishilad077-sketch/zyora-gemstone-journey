import { useState } from "react";
import { motion } from "framer-motion";

const wristGuide = [
  {
    side: "Left Wrist",
    subtitle: "Receive Energy",
    description:
      "Your left side is your receiving side. Wear healing crystal bracelets on your left wrist to absorb their energy into your body, mind, and spirit. Perfect for inner work.",
    stones: [
      { name: "Rose Quartz", chakra: "Heart Chakra", purpose: "Receive love and compassion", emoji: "💗" },
      { name: "Amethyst", chakra: "Crown & Third Eye Chakra", purpose: "Receive calm and peace", emoji: "🔮" },
      { name: "Green Aventurine", chakra: "Heart Chakra", purpose: "Attract prosperity and luck", emoji: "🍀" },
    ],
  },
  {
    side: "Right Wrist",
    subtitle: "Project Energy",
    description:
      "Your right side is your giving side. Wear crystal bracelets on your right wrist to send energy outward — confidence, protection, and power. Perfect for taking action in the world.",
    stones: [
      { name: "Citrine", chakra: "Solar Plexus Chakra", purpose: "Project abundance and confidence", emoji: "☀️" },
      { name: "Tiger Eye", chakra: "Solar Plexus Chakra", purpose: "Project courage and focus", emoji: "🐯" },
      { name: "Pyrite", chakra: "Solar Plexus Chakra", purpose: "Project willpower and wealth", emoji: "✨" },
    ],
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
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Wearing Guide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            How to Wear Crystal Bracelets <span className="italic">for Maximum Benefits</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            The wrist you choose affects how you receive or project the stone's energy. Left wrist receives energy inward. Right wrist projects energy outward.
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
              <span className="text-amethyst italic">— {wristGuide[activeTab].subtitle}</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm max-w-md mx-auto mt-2">
              {wristGuide[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {wristGuide[activeTab].stones.map((stone) => (
              <div
                key={stone.name}
                className="p-5 rounded-xl bg-secondary/80 text-center"
              >
                <span className="text-3xl block mb-3">{stone.emoji}</span>
                <p className="font-heading font-semibold text-foreground text-lg">{stone.name}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{stone.chakra}</p>
                <p className="text-xs text-foreground/70 font-body mt-2 italic">{stone.purpose}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
