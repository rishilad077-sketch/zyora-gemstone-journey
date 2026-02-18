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
}

export const gemstones: Gemstone[] = [
  {
    id: "amethyst",
    name: "Amethyst",
    subtitle: "The Stone of Spiritual Wisdom",
    color: "#9B59B6",
    glowColor: "var(--shadow-glow-amethyst)",
    chakra: "Crown & Third Eye",
    chakraColor: "#9B59B6",
    intentions: ["Healing", "Protection", "Creativity"],
    benefits: [
      "Calms the mind and enhances meditation",
      "Promotes restful sleep and vivid dreams",
      "Strengthens intuition and spiritual awareness",
      "Relieves stress and anxiety naturally",
    ],
    wearingGuide: "Left wrist for receiving calming energy",
    complementary: ["Clear Quartz", "Rose Quartz", "Moonstone"],
    description:
      "Known as nature's tranquilizer, Amethyst has been prized for millennia for its stunning violet hue and powerful calming properties.",
    emoji: "🔮",
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    subtitle: "The Stone of Unconditional Love",
    color: "#F8BBD0",
    glowColor: "var(--shadow-glow-rose)",
    chakra: "Heart",
    chakraColor: "#E91E63",
    intentions: ["Love", "Healing"],
    benefits: [
      "Opens the heart to all forms of love",
      "Promotes self-love and emotional healing",
      "Attracts romantic partnerships",
      "Soothes heartbreak and grief",
    ],
    wearingGuide: "Left wrist to open the heart to receive love",
    complementary: ["Amethyst", "Moonstone", "Clear Quartz"],
    description:
      "The gentle pink essence of Rose Quartz embodies compassion and peace. It speaks directly to the Heart Chakra, dissolving emotional wounds.",
    emoji: "💗",
  },
  {
    id: "green-aventurine",
    name: "Green Aventurine",
    subtitle: "The Stone of Opportunity",
    color: "#4A8B3B",
    glowColor: "var(--shadow-glow-aventurine)",
    chakra: "Heart",
    chakraColor: "#4CAF50",
    intentions: ["Success", "Protection"],
    benefits: [
      "Attracts luck, abundance, and success",
      "Boosts confidence in new ventures",
      "Harmonizes emotional and physical energy",
      "Encourages perseverance and determination",
    ],
    wearingGuide: "Left wrist for attracting prosperity",
    complementary: ["Citrine", "Clear Quartz", "Rose Quartz"],
    description:
      "Known as the luckiest of all crystals, Green Aventurine releases old patterns and opens doors to new opportunities and growth.",
    emoji: "🍀",
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
      "Manifests wealth and abundance",
      "Boosts creativity and personal power",
      "Energizes and revitalizes the spirit",
      "Promotes joy and positive outlook",
    ],
    wearingGuide: "Right wrist for projecting confidence",
    complementary: ["Green Aventurine", "Clear Quartz", "Amethyst"],
    description:
      "Citrine carries the power of the sun, bringing warmth, energy, and life. It never needs cleansing as it transmutes negative energy.",
    emoji: "☀️",
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
