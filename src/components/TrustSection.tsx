import { motion } from "framer-motion";
import { Sparkles, Moon, RefreshCw, Heart } from "lucide-react";

const trustItems = [
  {
    icon: Sparkles,
    title: "100% Natural Gemstones",
    desc: "Lab-tested, never synthetic",
    color: "text-citrine",
  },
  {
    icon: Moon,
    title: "Pre-Cleansed & Charged",
    desc: "Under full moon before shipping",
    color: "text-moonstone",
  },
  {
    icon: RefreshCw,
    title: "7-Day Easy Returns",
    desc: "Not feeling the energy? Full refund",
    color: "text-aventurine-glow",
  },
  {
    icon: Heart,
    title: "2,000+ Happy Customers",
    desc: "Join the Zyora family",
    color: "text-rose-quartz-deep",
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm tracking-[0.2em] uppercase mb-12 font-body"
        >
          Why thousands trust Zyora
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass-card-hover p-8 text-center"
            >
              <item.icon className={`w-8 h-8 mx-auto mb-4 ${item.color}`} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
