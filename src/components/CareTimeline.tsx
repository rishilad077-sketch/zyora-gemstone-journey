import { motion } from "framer-motion";
import { Sun, Droplets, Moon, Leaf } from "lucide-react";

const steps = [
  {
    icon: Sun,
    period: "Daily",
    title: "Gentle Cleansing",
    tips: [
      "Wipe with a soft, dry cloth after wearing",
      "Store separately to avoid scratches",
      "Remove before exercise or bathing",
    ],
    color: "text-citrine",
    bg: "bg-citrine/10",
  },
  {
    icon: Droplets,
    period: "Weekly",
    title: "Energy Maintenance",
    tips: [
      "Rinse briefly under cool running water",
      "Set intentions while holding each stone",
      "Place on a selenite charging plate overnight",
    ],
    color: "text-aventurine-glow",
    bg: "bg-aventurine/10",
  },
  {
    icon: Moon,
    period: "Monthly",
    title: "Full Moon Cleansing",
    tips: [
      "Place stones under the full moon overnight",
      "Smudge with sage or palo santo smoke",
      "Meditate with your stones to reaffirm intentions",
    ],
    color: "text-amethyst-glow",
    bg: "bg-amethyst/10",
  },
  {
    icon: Leaf,
    period: "Seasonal",
    title: "Deep Care Ritual",
    tips: [
      "Bury in earth for 24 hours to ground energy",
      "Bathe in salt water (only safe stones)",
      "Realign with your evolving goals and needs",
    ],
    color: "text-forest-light",
    bg: "bg-aventurine/5",
  },
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
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Care for Your <span className="italic">Crystals</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Keep your gemstones energized and beautiful with these simple rituals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.bg}`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">
                    {step.period}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
              </div>
              <ul className="space-y-2.5">
                {step.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${step.bg} border ${step.color.replace("text-", "border-")}`} />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
