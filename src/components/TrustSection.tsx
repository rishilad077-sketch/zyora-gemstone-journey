import { motion } from "framer-motion";
import { Sparkles, Moon, Heart, Truck, Package } from "lucide-react";

const trustItems = [
  {
    icon: Heart,
    title: "2,000+ Happy Customers",
    desc: "Join thousands wearing authentic crystal bracelets for healing, protection, and spiritual growth.",
    color: "text-rose-quartz-deep",
  },
  {
    icon: Sparkles,
    title: "Natural Gemstone Jewellery",
    desc: "Ethically sourced gemstones. Every crystal bracelet is genuine and authentic.",
    color: "text-citrine",
  },
  {
    icon: Moon,
    title: "Moon-Cleansed Before Dispatch",
    desc: "Every piece leaves us pre-cleansed under the full moon and charged with intention — ready to wear from the moment it arrives.",
    color: "text-moonstone",
  },
  {
    icon: Truck,
    title: "Delivered in 5–7 Days",
    desc: "Quick dispatch across India. Your bracelet reaches you fresh and energized.",
    color: "text-aventurine-glow",
  },
  {
    icon: Package,
    title: "Free Shipping",
    desc: "Free delivery across India for orders above ₹599.",
    color: "text-amethyst",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card-hover p-6 text-center"
            >
              <item.icon className={`w-7 h-7 mx-auto mb-3 ${item.color}`} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
