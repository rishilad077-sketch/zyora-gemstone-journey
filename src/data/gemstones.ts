export interface Gemstone {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  glowColor: string;
  chakra: string;
  chakraColor: string;
  intentions: string[];
  benefits: string[];
  wearingGuide: string;
  complementary: string[];
  description: string;
  emoji: string;
  whenToReach: string;
  resonatesWith: string;
  pairings: { combo: string; effect: string }[];
  bestFor: string[];
  waterWarning?: string;
}

export const gemstones: Gemstone[] = [
  {
    id: "amethyst",
    name: "Amethyst",
    subtitle: "The Stone of Calm",
    color: "#9B59B6",
    glowColor: "var(--shadow-glow-amethyst)",
    chakra: "Third Eye & Crown",
    chakraColor: "#9B59B6",
    intentions: ["Healing", "Protection", "Creativity"],
    benefits: [
      "Calms anxiety and quiets racing thoughts naturally",
      "Supports restful sleep and reduces insomnia",
      "Strengthens intuition and spiritual awareness",
      "Protects your energy from negativity",
    ],
    wearingGuide: "Left wrist (to receive calming energy)",
    complementary: ["Rose Quartz", "Clear Quartz", "Moonstone"],
    description:
      "Known as nature's tranquilizer, amethyst is one of the most popular healing stones for stress relief. This purple crystal has been used for centuries to promote calm, enhance meditation, and improve sleep quality. Wear your amethyst bracelet when you need peace of mind.",
    emoji: "🔮",
    whenToReach: "Keep it on during meditation, wear before sleep, or any time your mind won't stop racing.",
    resonatesWith: "Particularly powerful for Pisces, Virgo, Aquarius, and Capricorn",
    pairings: [
      { combo: "Amethyst + Rose Quartz", effect: "Calm + Love — inner peace with self-compassion" },
      { combo: "Amethyst + Tiger Eye", effect: "Peace + Focus — relaxed concentration" },
    ],
    bestFor: ["Anxiety", "Sleep", "Stress relief", "Meditation"],
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    subtitle: "The Stone of Love",
    color: "#F8BBD0",
    glowColor: "var(--shadow-glow-rose)",
    chakra: "Heart",
    chakraColor: "#E91E63",
    intentions: ["Love", "Healing"],
    benefits: [
      "Opens your heart to give and receive love",
      "Promotes deep self-love and emotional healing",
      "Attracts healthy romantic relationships",
      "Soothes heartbreak and emotional wounds",
    ],
    wearingGuide: "Left wrist (to receive love and compassion)",
    complementary: ["Amethyst", "Moonstone", "Clear Quartz"],
    description:
      "Rose quartz is the ultimate love stone — gentle, nurturing, and deeply healing. This pink crystal works directly with your heart chakra to dissolve emotional pain and restore trust. Whether you're healing from heartbreak or calling in new love, a rose quartz bracelet supports your journey.",
    emoji: "💗",
    whenToReach: "Wear during difficult conversations, after heartbreak, or whenever you need to remember you're worthy of love.",
    resonatesWith: "Especially nurturing for Taurus, Libra, and Scorpio",
    pairings: [
      { combo: "Rose Quartz + Amethyst", effect: "Love + Calm — emotional healing with peace" },
      { combo: "Rose Quartz + Green Aventurine", effect: "Love + Luck — attract healthy relationships" },
    ],
    bestFor: ["Self-love", "Relationships", "Emotional healing"],
  },
  {
    id: "citrine",
    name: "Citrine",
    subtitle: "The Merchant's Stone",
    color: "#F4B400",
    glowColor: "var(--shadow-glow-citrine)",
    chakra: "Solar Plexus",
    chakraColor: "#FFC107",
    intentions: ["Success", "Creativity"],
    benefits: [
      "Manifests wealth, abundance, and success",
      "Boosts confidence and personal power",
      "Brings joy, optimism, and positive energy",
      "Never needs cleansing — transmutes negativity",
    ],
    wearingGuide: "Right wrist (to project confidence outward)",
    complementary: ["Green Aventurine", "Clear Quartz", "Tiger Eye"],
    description:
      "Citrine carries the power of the sun — warm, energizing, and abundant. This golden stone is beloved by entrepreneurs and creatives for attracting wealth and opportunity. Wearing a citrine bracelet helps you step into your power and take bold action toward your goals.",
    emoji: "☀️",
    whenToReach: "Keep it on your desk during work, wear before important meetings, or any time you're chasing big financial goals.",
    resonatesWith: "Amplifies the natural magnetism of Leo, Gemini, Aries, and Libra",
    pairings: [
      { combo: "Citrine + Pyrite", effect: "Wealth + Action — manifest abundance with motivated follow-through" },
      { combo: "Citrine + Tiger Eye", effect: "Confidence + Focus — bold decisions with clarity" },
    ],
    bestFor: ["Manifesting money", "Career success", "Confidence"],
  },
  {
    id: "tiger-eye",
    name: "Tiger Eye",
    subtitle: "The Stone of Courage",
    color: "#B8860B",
    glowColor: "0 0 40px rgba(184,134,11,0.3)",
    chakra: "Solar Plexus & Root",
    chakraColor: "#DAA520",
    intentions: ["Protection", "Success"],
    benefits: [
      "Builds courage and confidence in challenging situations",
      "Sharpens focus and mental clarity for decision-making",
      "Protects from negative energy and ill intentions",
      "Grounds you while keeping motivation high",
    ],
    wearingGuide: "Right wrist (to project courage and confidence)",
    complementary: ["Amethyst", "Citrine", "Pyrite"],
    description:
      "Tiger eye holds something rare — the balance of groundedness and drive. This warrior's stone is fierce, focused, and fearless. The golden-brown crystal combines earth energy with solar power to give you both stability and strength. Wear a tiger eye bracelet when you need to stand your ground.",
    emoji: "🐯",
    whenToReach: "Wear before job interviews, difficult confrontations, or any moment you need to show up as your strongest self.",
    resonatesWith: "Natural fit for Capricorn and Gemini energy",
    pairings: [
      { combo: "Tiger Eye + Amethyst", effect: "Courage + Calm — bold action without anxiety" },
      { combo: "Tiger Eye + Citrine", effect: "Focus + Abundance — disciplined manifestation" },
    ],
    bestFor: ["Courage", "Focus", "Protection", "Grounding"],
  },
  {
    id: "pyrite",
    name: "Pyrite",
    subtitle: "The Stone of Action",
    color: "#CFB53B",
    glowColor: "0 0 40px rgba(207,181,59,0.3)",
    chakra: "Solar Plexus",
    chakraColor: "#CFB53B",
    intentions: ["Success", "Protection"],
    benefits: [
      "Attracts wealth, abundance, and prosperity",
      "Boosts willpower and motivation to take action",
      "Protects your energy field from negativity",
      "Enhances memory, logic, and problem-solving",
    ],
    wearingGuide: "Right wrist (to project power and attract wealth)",
    complementary: ["Citrine", "Tiger Eye", "Clear Quartz"],
    description:
      "Pyrite, also known as \"Fool's Gold,\" is anything but foolish — this metallic stone is a powerhouse for manifesting abundance and taking bold action. Wear a pyrite bracelet when you're building a business, chasing big goals, or need an extra push to turn dreams into reality.",
    emoji: "✨",
    whenToReach: "Keep it on during entrepreneurial work, goal-setting sessions, or when procrastination keeps winning.",
    resonatesWith: "Supports the ambitious drive of Leo and Aries",
    pairings: [
      { combo: "Pyrite + Citrine", effect: "Action + Abundance — work hard, attract wealth" },
      { combo: "Pyrite + Tiger Eye", effect: "Willpower + Courage — unstoppable momentum" },
    ],
    bestFor: ["Wealth manifestation", "Motivation", "Protection"],
    waterWarning: "Never wear pyrite in water — it will rust and deteriorate. Remove before showering or swimming.",
  },
  {
    id: "green-aventurine",
    name: "Green Aventurine",
    subtitle: "The Stone of Luck",
    color: "#4A8B3B",
    glowColor: "var(--shadow-glow-aventurine)",
    chakra: "Heart",
    chakraColor: "#4CAF50",
    intentions: ["Success", "Protection"],
    benefits: [
      "Attracts good luck, prosperity, and new opportunities",
      "Boosts confidence before important events",
      "Harmonizes emotions and relieves stress",
      "Encourages perseverance and optimism",
    ],
    wearingGuide: "Left wrist (to attract prosperity)",
    complementary: ["Citrine", "Clear Quartz", "Rose Quartz"],
    description:
      "Green aventurine is known as the luckiest of all crystals — the perfect companion when you need fate on your side. This healing stone opens doors, attracts opportunities, and helps you say \"yes\" to life's adventures. Wear your green aventurine bracelet when taking risks or starting something new.",
    emoji: "🍀",
    whenToReach: "Wear on first dates, job applications, auditions, or anytime you need luck to tip in your favor.",
    resonatesWith: "Perfect for Aries and Leo's adventurous spirit",
    pairings: [
      { combo: "Green Aventurine + Citrine", effect: "Luck + Manifestation — opportunity meets action" },
      { combo: "Green Aventurine + Rose Quartz", effect: "Luck + Love — attract positive relationships" },
    ],
    bestFor: ["Luck", "New beginnings", "Prosperity", "Growth"],
  },
  {
    id: "clear-quartz",
    name: "Clear Quartz",
    subtitle: "The Master Healer",
    color: "#E8E8E8",
    glowColor: "0 0 40px rgba(255,255,255,0.5)",
    chakra: "Crown",
    chakraColor: "#FFFFFF",
    intentions: ["Healing", "Protection", "Creativity"],
    benefits: [
      "Amplifies energy and intention of other stones",
      "Enhances clarity of thought and purpose",
      "Strengthens the immune system energetically",
      "Harmonizes all chakras simultaneously",
    ],
    wearingGuide: "Either wrist — amplifies all energy",
    complementary: ["Amethyst", "Rose Quartz", "Citrine"],
    description:
      "The most versatile healing stone, Clear Quartz amplifies whatever energy or intent is programmed into it, making it a must-have crystal.",
    emoji: "💎",
    whenToReach: "Pair it with any other stone to amplify its power, or wear alone for clarity and focus.",
    resonatesWith: "Universal — works beautifully for all zodiac signs",
    pairings: [
      { combo: "Clear Quartz + Amethyst", effect: "Amplification + Calm — deeper meditation" },
      { combo: "Clear Quartz + Black Tourmaline", effect: "Amplification + Protection — stronger shields" },
    ],
    bestFor: ["Amplification", "Clarity", "Healing", "Balance"],
  },
  {
    id: "moonstone",
    name: "Moonstone",
    subtitle: "The Stone of New Beginnings",
    color: "#B0C4DE",
    glowColor: "0 0 40px rgba(176,196,222,0.4)",
    chakra: "Third Eye & Sacral",
    chakraColor: "#7986CB",
    intentions: ["Love", "Healing", "Creativity"],
    benefits: [
      "Enhances intuition and feminine energy",
      "Supports hormonal balance and fertility",
      "Promotes emotional stability during change",
      "Connects you to lunar cycles and rhythms",
    ],
    wearingGuide: "Left wrist during new moon for new beginnings",
    complementary: ["Amethyst", "Rose Quartz", "Clear Quartz"],
    description:
      "Moonstone captures the magic of the moon, offering a dance of light that calms and encourages. It is a talisman of inner journeys.",
    emoji: "🌙",
    whenToReach: "Wear during times of change, new beginnings, or when you need to trust your intuition.",
    resonatesWith: "Deeply connected to Cancer, Libra, and Scorpio energy",
    pairings: [
      { combo: "Moonstone + Rose Quartz", effect: "Intuition + Love — heart-centered clarity" },
      { combo: "Moonstone + Amethyst", effect: "New Beginnings + Calm — peaceful transitions" },
    ],
    bestFor: ["Intuition", "New beginnings", "Feminine energy"],
  },
];

export const intentions = ["Love", "Success", "Healing", "Protection", "Creativity"] as const;

export const chakras = [
  { name: "Root", color: "#E53935" },
  { name: "Sacral", color: "#FF7043" },
  { name: "Solar Plexus", color: "#FFC107" },
  { name: "Heart", color: "#4CAF50" },
  { name: "Throat", color: "#29B6F6" },
  { name: "Third Eye", color: "#5C6BC0" },
  { name: "Crown", color: "#AB47BC" },
] as const;

export const crystalPairings = [
  {
    intention: "Love + Inner Peace",
    stone1: "Rose Quartz",
    stone2: "Amethyst",
    why: "Opens your heart while calming anxiety — emotional healing with clarity",
  },
  {
    intention: "Wealth + Motivated Action",
    stone1: "Citrine",
    stone2: "Pyrite",
    why: "Manifests abundance while giving you the willpower to take bold steps",
  },
  {
    intention: "Courage + Mental Clarity",
    stone1: "Tiger Eye",
    stone2: "Amethyst",
    why: "Face challenges bravely without overthinking — grounded confidence",
  },
  {
    intention: "Protection + Amplification",
    stone1: "Black Tourmaline",
    stone2: "Clear Quartz",
    why: "Shields your energy field and strengthens the boundary",
  },
  {
    intention: "Luck + Self-Love",
    stone1: "Green Aventurine",
    stone2: "Rose Quartz",
    why: "Attracts opportunities while ensuring you feel worthy of receiving them",
  },
  {
    intention: "Focus + Abundance",
    stone1: "Tiger Eye",
    stone2: "Citrine",
    why: "Disciplined work ethic meets wealth manifestation",
  },
];
