import { motion } from "framer-motion";
import { Sun, Moon, Sparkles, Wind, Heart, AlertTriangle } from "lucide-react";

const methods = [
  {
    icon: Moon,
    title: "Moonlight Cleansing",
    desc: "Leave your crystal bracelet under the full moon overnight. Works for all gemstones. The moon's energy clears and recharges your stones naturally.",
    color: "text-moonstone",
    bg: "bg-moonstone/10",
  },
  {
    icon: Sun,
    title: "Sunlight Charging",
    desc: "Place in morning sunlight for 1–2 hours. Best for citrine, carnelian, clear quartz, tiger's eye. Avoid prolonged sun for amethyst and rose quartz — their color may fade.",
    color: "text-citrine",
    bg: "bg-citrine/10",
  },
  {
    icon: Sparkles,
    title: "Selenite Plate",
    desc: "Rest your bracelet on a selenite charging plate for 24 hours. Selenite is self-cleansing and recharges other crystals without effort.",
    color: "text-amethyst-glow",
    bg: "bg-amethyst/10",
  },
  {
    icon: Wind,
    title: "Sage Smoke",
    desc: "Pass your gemstone bracelet through sage or palo santo smoke for 30 seconds. Perfect for quick cleansing after stressful situations.",
    color: "text-aventurine-glow",
    bg: "bg-aventurine/10",
  },
  {
    icon: Heart,
    title: "Set Your Intention",
    desc: "After cleansing, hold your crystal bracelet and speak your intention aloud: \"I activate this stone to bring me [your goal].\" Wear daily for 21 days.",
    color: "text-rose-quartz-deep",
    bg: "bg-rose-quartz/10",
  },
];

const avoidSections = [
  {
    title: "Water-Sensitive Stones",
    items: [
      "Pyrite (will rust)",
      "Selenite (will dissolve)",
      "Malachite (toxic when wet)",
      "Lapis Lazuli (may crack)",
    ],
    note: "For all other stones: Remove before showering, swimming, or exercising to protect the elastic cord.",
  },
  {
    title: "Sunlight-Sensitive Stones",
    items: [
      "Amethyst (purple fades to pale lavender)",
      "Rose Quartz (pink fades to white)",
      "Aquamarine (blue fades)",
    ],
    note: "Short sunlight (1–2 hours) is fine, but don't leave them in direct sun all day.",
  },
  {
    title: "Chemical Sensitivity",
    items: [
      "Applying perfume, lotion, or hair products",
      "Cleaning with harsh chemicals",
      "Swimming in chlorinated pools",
    ],
    note: "Chemicals can dull the polish and damage the stones over time.",
  },
];

const dailyTips = [
  "Remove bracelet before showering, swimming, or exercising",
  "Store in the provided pouch when not wearing",
  "Cleanse monthly (or after particularly stressful events)",
  "Avoid wearing 24/7 — stones need time to rest and recharge",
];

export default function CareTimeline() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Crystal Care Guide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            How to Cleanse & Activate <span className="italic">Your Gemstone Bracelet</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Healing crystals absorb energy from their surroundings. Keep yours working at full power with these simple cleansing rituals.
          </p>
        </motion.div>

        {/* Cleansing Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card-hover p-7"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${method.bg}`}>
                  <method.icon className={`w-5 h-5 ${method.color}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{method.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What to Avoid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-destructive/70" />
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground">
              What to <span className="italic">Avoid</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {avoidSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border-destructive/10"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-destructive/60 font-body mb-3 flex items-center gap-1.5">
                  <span>⚠️</span> {section.title}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm font-body text-foreground flex items-start gap-2">
                      <span className="text-destructive/40 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground font-body italic leading-relaxed">{section.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Care Tips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-secondary/60 border border-border/30"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-amethyst font-body mb-4 text-center">Daily Care Tips</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {dailyTips.map((tip) => (
              <p key={tip} className="text-sm font-body text-foreground flex items-start gap-2">
                <span className="text-aventurine-glow mt-0.5">✓</span>
                {tip}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
