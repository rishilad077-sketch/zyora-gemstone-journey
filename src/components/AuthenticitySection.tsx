import { motion } from "framer-motion";
import { Check, Quote } from "lucide-react";

const guarantees = [
  "Natural gemstones — Lab-tested, never synthetic or treated",
  "Ethically sourced from trusted, responsible suppliers",
  "Pre-cleansed and energetically charged under the full moon before shipping",
  "Certificate of authenticity available on request for all healing stones",
];

const reviews = [
  {
    text: "I was skeptical at first, but wearing my Amethyst bracelet for 2 weeks completely changed my sleep. I fall asleep faster and wake up feeling rested. This is real.",
    name: "Priya M.",
    location: "Mumbai",
  },
  {
    text: "The Rose Quartz bracelet helped me through a really difficult breakup. I feel like my heart is healing. Plus, Zyora's packaging and handwritten note made me feel so cared for.",
    name: "Ananya S.",
    location: "Bangalore",
  },
  {
    text: "I wear my Citrine and Tiger Eye together every day for work. I've closed 3 major deals since I started wearing them. Coincidence? Maybe. But I'm not taking them off!",
    name: "Aditya K.",
    location: "Delhi",
  },
];

export default function AuthenticitySection() {
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
            The Zyora Promise
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Authenticity <span className="italic">Guarantee</span>
          </h2>
        </motion.div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
          {guarantees.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-background/50"
            >
              <Check className="w-4 h-4 text-aventurine-glow mt-0.5 flex-shrink-0" />
              <p className="text-sm font-body text-foreground leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-amethyst font-body mb-6 text-center">
            What Our Customers Say
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <Quote className="w-4 h-4 text-amethyst/40 mb-3" />
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <p className="text-xs font-body text-foreground font-medium">
                  — {review.name}, <span className="text-muted-foreground">{review.location}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
