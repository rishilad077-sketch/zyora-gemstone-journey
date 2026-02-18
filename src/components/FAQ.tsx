import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Authenticity",
    items: [
      {
        q: "Are Zyora gemstones real and natural?",
        a: "Absolutely. Every Zyora gemstone is 100% natural and ethically sourced. We provide lab-testing certificates upon request and never use synthetic or dyed stones.",
      },
      {
        q: "How do I know my stone is authentic?",
        a: "Each gemstone has natural inclusions and variations — that's how you know it's real. We also include an authenticity card with every purchase.",
      },
    ],
  },
  {
    category: "Gemstone Properties",
    items: [
      {
        q: "Do healing crystals actually work?",
        a: "Crystal healing is a complementary practice embraced by millions worldwide. While not a substitute for medical treatment, many find that gemstones enhance mindfulness, intention-setting, and emotional well-being.",
      },
      {
        q: "Can I wear multiple gemstones together?",
        a: "Yes! Many stones complement each other beautifully. We recommend checking our complementary stone pairings for each gemstone to create harmonious combinations.",
      },
      {
        q: "Which hand should I wear my bracelet on?",
        a: "Left wrist to receive energy (calming, healing, love). Right wrist to project energy (confidence, protection, power). Our guides specify the best placement for each stone.",
      },
    ],
  },
  {
    category: "Orders & Care",
    items: [
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship worldwide with tracked delivery. Indian orders typically arrive in 3-5 business days, international orders in 7-14 days.",
      },
      {
        q: "How should I cleanse my new gemstone?",
        a: "All Zyora stones arrive pre-cleansed and charged under the full moon. For ongoing care, rinse under cool water weekly and place under moonlight monthly.",
      },
      {
        q: "What's your return policy?",
        a: "We offer a 7-day easy return policy. If the stone doesn't resonate with you, simply return it in its original packaging for a full refund.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Frequently <span className="italic">Asked</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Everything you need to know about gemstones and Zyora.
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amethyst font-body mb-4">
                {category.category}
              </p>
              <Accordion type="single" collapsible className="space-y-2">
                {category.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${category.category}-${i}`}
                    className="glass-card px-6 border-none"
                  >
                    <AccordionTrigger className="font-heading text-lg text-foreground hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body text-sm pb-5 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
