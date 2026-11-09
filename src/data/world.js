import {
  Boxes, // Matter & Materials
  Zap, // Energy & Motion
  Cog, // Tools & Machines
  Building2, // Structures & Cities
  Radio, // Communication
  Cpu, // Computing & Logic
  HeartPulse, // Life & Health
  Wheat, // Food & Agriculture
  Compass, // Transport & Navigation
  Palette, // Art & Design
  Clock, // Time & Measurement
  Globe, // Earth & Cosmos
} from "lucide-react";

const worlds = [
  {
    number: "01",
    slug: "matter-materials",
    title: "Matter & Materials",
    category: "THE MATERIAL WORLD",
    icon: Boxes,
    description:
      "Explore the substances that shape our world, from ancient materials to engineered matter.",
  },
  {
    number: "02",
    slug: "energy-motion",
    title: "Energy & Motion",
    category: "FORCES & ENERGY",
    icon: Zap,
    description:
      "Discover the forces, energy sources, and principles that make things move and change.",
  },
  {
    number: "03",
    slug: "tools-machines",
    title: "Tools & Machines",
    category: "HUMAN INGENUITY",
    icon: Cog,
    description:
      "Explore the tools and machines that extend human ability and transform everyday work.",
  },
  {
    number: "04",
    slug: "structures-cities",
    title: "Structures & Cities",
    category: "BUILT ENVIRONMENTS",
    icon: Building2,
    description:
      "Discover how buildings, infrastructure, and cities are designed and constructed.",
  },
  {
    number: "05",
    slug: "communication",
    title: "Communication",
    category: "SHARING INFORMATION",
    icon: Radio,
    description:
      "Trace the systems and inventions that help people share information across distance.",
  },
  {
    number: "06",
    slug: "computing-logic",
    title: "Computing & Logic",
    category: "INFORMATION SYSTEMS",
    icon: Cpu,
    description:
      "Explore computation, algorithms, and the ideas behind the digital world.",
  },
  {
    number: "07",
    slug: "life-health",
    title: "Life & Health",
    category: "LIVING SYSTEMS",
    icon: HeartPulse,
    description:
      "Discover the science, discoveries, and inventions that help us understand living things.",
  },
  {
    number: "08",
    slug: "food-agriculture",
    title: "Food & Agriculture",
    category: "FROM LAND TO TABLE",
    icon: Wheat,
    description:
      "Explore how people grow, preserve, prepare, and distribute the food that sustains us.",
  },
  {
    number: "09",
    slug: "transport-navigation",
    title: "Transport & Navigation",
    category: "MOVEMENT & WAYFINDING",
    icon: Compass,
    description:
      "Follow the technologies and ideas that help people travel, navigate, and connect places.",
  },
  {
    number: "10",
    slug: "art-design",
    title: "Art & Design",
    category: "CREATIVITY & FORM",
    icon: Palette,
    description:
      "Explore the materials, techniques, and ideas behind the things people create.",
  },
  {
    number: "11",
    slug: "time-measurement",
    title: "Time & Measurement",
    category: "MAKING SENSE OF THE WORLD",
    icon: Clock,
    description:
      "Discover the instruments and systems used to measure, compare, and understand the world.",
  },
  {
    number: "12",
    slug: "earth-cosmos",
    title: "Earth & Cosmos",
    category: "OUR PLACE IN THE UNIVERSE",
    icon: Globe,
    description:
      "Explore the discoveries that reveal how our planet and the wider universe work.",
  },
];

export default worlds;
