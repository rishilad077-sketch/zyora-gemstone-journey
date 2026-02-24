import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Gemstone Properties",
    items: [
      {
        q: "Do healing crystal bracelets actually work?",
        a: "Crystal healing is a complementary wellness practice embraced by millions worldwide. While not a replacement for medical treatment, many people find that wearing gemstone bracelets enhances mindfulness, emotional well-being, and intention-setting. The key is choosing a stone that resonates with you and wearing it consistently with clear intention.",
      },
      {
        q: "Can I wear multiple crystal bracelets together?",
        a: "Yes! Many healing stones work beautifully together. We recommend starting with 1–2 bracelets and adding more as you feel guided. Popular combinations include: Rose quartz + amethyst (love + calm), Citrine + tiger's eye (abundance + focus), Pyrite + citrine (action + manifestation). Check the \"Pairs Well With\" section on each gemstone card for complementary stones.",
      },
      {
        q: "Which wrist should I wear my crystal bracelet on?",
        a: "Left wrist for receiving energy (love, calm, healing, intuition). Right wrist for projecting energy (confidence, protection, power, action). Our gemstone guide specifies the best placement for each stone based on the energy you want to work with.",
      },
      {
        q: "How long does it take to feel the benefits of healing stones?",
        a: "Most people notice subtle shifts within 1–3 weeks of daily wear. Crystal energy is gentle and cumulative — you might feel calmer, sleep better, or notice more opportunities appearing. For best results, cleanse your bracelet monthly, set a clear intention, and wear consistently for at least 21 days.",
      },
      {
        q: "Which stone should I start with as a beginner?",
        a: "We recommend starting with Rose Quartz or Amethyst — both are gentle, versatile, and work beautifully for most people. Rose Quartz supports self-love and emotional healing, while Amethyst promotes calm and reduces stress. Once you experience how crystals feel, you can explore stones for more specific intentions.",
      },
    ],
  },
  {
    category: "Authenticity & Quality",
    items: [
      {
        q: "Are your gemstone bracelets real or synthetic?",
        a: "Every Zyora gemstone is natural and ethically sourced. We provide lab-testing certificates upon request and never use synthetic, dyed, or treated stones. Real healing crystals have natural variations and inclusions — that's how you know they're authentic.",
      },
      {
        q: "How can I tell if my gemstone bracelet is authentic?",
        a: "Authentic healing stones have slight variations in color, pattern, and clarity — no two are exactly alike. They feel cool to touch and warm slowly in your hand. Plastic or glass fakes are too uniform and lightweight. Every Zyora piece includes an authenticity card, and we're happy to provide additional certification if needed.",
      },
      {
        q: "Are your crystal bracelets hypoallergenic and safe for sensitive skin?",
        a: "Our gemstone bracelets are designed for comfortable everyday wear. We use skin-safe materials and mention specifics on each product page. If you have metal sensitivities, check the bracelet clasp details or choose styles with adjustable cord closures that suit your skin best.",
      },
    ],
  },
  {
    category: "Wearing & Usage",
    items: [
      {
        q: "Can I sleep with my crystal bracelet on?",
        a: "It depends on the stone. Calming stones like Amethyst and Rose Quartz are great for sleep — they can reduce anxiety and promote restful dreams. However, energizing stones like Citrine and Tiger Eye may keep you awake. We recommend removing your bracelet at night to give both you and the stone time to rest, and to protect the elastic cord from wear.",
      },
      {
        q: "What does it mean if my crystal bracelet breaks?",
        a: "Many people believe a broken bracelet signals the stone has completed its work — it absorbed negative energy or served its purpose in your healing journey. Release it with gratitude. You can bury the stones in earth, keep them on your altar, or return them to nature. If you feel your journey with that stone isn't complete, we offer re-stringing services — just contact us.",
      },
      {
        q: "Can men wear crystal bracelets?",
        a: "Absolutely! Healing crystals work for everyone, regardless of gender. Many men wear Tiger Eye for focus and courage, Pyrite for business success, or Black Tourmaline for protection. We offer styles in various bead sizes and neutral colors that suit any aesthetic.",
      },
      {
        q: "Can I wear my bracelet while showering or swimming?",
        a: "We recommend removing your bracelet before any water exposure. Water can weaken the elastic cord over time, and some stones (pyrite, selenite, malachite, lapis lazuli) are water-sensitive and will rust or dissolve. Chlorine and salt water are especially harsh on gemstones. To maximize the lifespan of your bracelet, remove it before showering, swimming, or exercising.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    items: [
      {
        q: "Do you ship crystal bracelets internationally?",
        a: "Yes! We ship healing crystal jewelry worldwide with tracked delivery. Indian orders typically arrive in 5–7 business days. International orders take 10–14 days depending on customs. We offer free shipping within India on orders above ₹599.",
      },
      {
        q: "Do you make customized or personalized gemstone bracelets?",
        a: "Yes, we create custom crystal bracelets for select items. Share your requirements on the product page or contact hello@zyorastore.com with your vision. We can personalize stone combinations, sizing, and special intentions for milestone gifts or personal healing journeys.",
      },
      {
        q: "How do I check bracelet size before buying online?",
        a: "Most of our crystal bracelets come in three sizes (Small: 15–16 cm, Medium: 17–18 cm, Large: 19–20 cm) or are adjustable (15–20 cm). Measure your wrist with a measuring tape or string, then add 1–2 cm for comfortable fit. Visit our Size Guide page for detailed instructions, or email us — we're happy to help you find the perfect fit.",
      },
      {
        q: "How should I cleanse my new gemstone bracelet when it arrives?",
        a: "All Zyora healing stones arrive pre-cleansed and charged under the full moon, ready to wear immediately. For ongoing care, rinse briefly under cool water weekly (avoid water-sensitive stones like pyrite and selenite), and recharge under moonlight monthly. See our care guide above for detailed methods.",
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
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Common Questions
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Healing Crystal & Gemstone Bracelet <span className="italic">FAQs</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Everything you need to know about buying, wearing, and caring for authentic crystal jewelry.
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
