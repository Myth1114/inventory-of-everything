const categories = [
  // 01 — Matter & Materials
  {
    id: "natural-materials",
    worldSlug: "matter-materials",
    title: "Natural Materials",
  },
  {
    id: "metals-alloys",
    worldSlug: "matter-materials",
    title: "Metals & Alloys",
  },
  {
    id: "glass-ceramics",
    worldSlug: "matter-materials",
    title: "Glass & Ceramics",
  },
  {
    id: "polymers-rubber",
    worldSlug: "matter-materials",
    title: "Polymers & Rubber",
  },
  {
    id: "fibers-textiles",
    worldSlug: "matter-materials",
    title: "Fibers & Textiles",
  },
  { id: "composites", worldSlug: "matter-materials", title: "Composites" },
  {
    id: "chemicals-advanced-materials",
    worldSlug: "matter-materials",
    title: "Chemicals & Advanced Materials",
  },

  // 02 — Energy & Motion
  { id: "energy-sources", worldSlug: "energy-motion", title: "Energy Sources" },
  {
    id: "heat-thermodynamics",
    worldSlug: "energy-motion",
    title: "Heat & Thermodynamics",
  },
  {
    id: "electricity-magnetism",
    worldSlug: "energy-motion",
    title: "Electricity & Magnetism",
  },
  {
    id: "engines-turbines",
    worldSlug: "energy-motion",
    title: "Engines & Turbines",
  },
  {
    id: "power-generation",
    worldSlug: "energy-motion",
    title: "Power Generation",
  },
  { id: "energy-storage", worldSlug: "energy-motion", title: "Energy Storage" },
  {
    id: "mechanics-motion",
    worldSlug: "energy-motion",
    title: "Mechanics & Motion",
  },

  // 03 — Tools & Machines
  { id: "hand-tools", worldSlug: "tools-machines", title: "Hand Tools" },
  {
    id: "mechanisms-linkages",
    worldSlug: "tools-machines",
    title: "Mechanisms & Linkages",
  },
  { id: "machine-tools", worldSlug: "tools-machines", title: "Machine Tools" },
  {
    id: "manufacturing-systems",
    worldSlug: "tools-machines",
    title: "Manufacturing Systems",
  },
  {
    id: "household-machines",
    worldSlug: "tools-machines",
    title: "Household Machines",
  },
  {
    id: "automation-control",
    worldSlug: "tools-machines",
    title: "Automation & Control",
  },
  {
    id: "precision-devices",
    worldSlug: "tools-machines",
    title: "Precision Devices",
  },

  // 04 — Structures & Cities
  {
    id: "structural-systems",
    worldSlug: "structures-cities",
    title: "Structural Systems",
  },
  {
    id: "building-types",
    worldSlug: "structures-cities",
    title: "Building Types",
  },
  {
    id: "construction-methods",
    worldSlug: "structures-cities",
    title: "Construction Methods",
  },
  {
    id: "urban-planning",
    worldSlug: "structures-cities",
    title: "Urban Planning",
  },
  {
    id: "water-sanitation",
    worldSlug: "structures-cities",
    title: "Water & Sanitation",
  },
  {
    id: "infrastructure-networks",
    worldSlug: "structures-cities",
    title: "Infrastructure Networks",
  },
  {
    id: "housing-public-space",
    worldSlug: "structures-cities",
    title: "Housing & Public Space",
  },

  // 05 — Communication
  {
    id: "writing-scripts",
    worldSlug: "communication",
    title: "Writing & Scripts",
  },
  {
    id: "books-publishing",
    worldSlug: "communication",
    title: "Books & Publishing",
  },
  { id: "postal-systems", worldSlug: "communication", title: "Postal Systems" },
  {
    id: "telegraphy-telephony",
    worldSlug: "communication",
    title: "Telegraphy & Telephony",
  },
  { id: "broadcasting", worldSlug: "communication", title: "Broadcasting" },
  {
    id: "digital-media-networks",
    worldSlug: "communication",
    title: "Digital Media & Networks",
  },
  {
    id: "signals-information-codes",
    worldSlug: "communication",
    title: "Signals & Information Codes",
  },

  // 06 — Computing & Logic
  {
    id: "logic-number-systems",
    worldSlug: "computing-logic",
    title: "Logic & Number Systems",
  },
  {
    id: "calculating-devices",
    worldSlug: "computing-logic",
    title: "Calculating Devices",
  },
  {
    id: "computers-hardware",
    worldSlug: "computing-logic",
    title: "Computers & Hardware",
  },
  {
    id: "programming-software",
    worldSlug: "computing-logic",
    title: "Programming & Software",
  },
  {
    id: "algorithms-data-structures",
    worldSlug: "computing-logic",
    title: "Algorithms & Data Structures",
  },
  {
    id: "networks-protocols",
    worldSlug: "computing-logic",
    title: "Networks & Protocols",
  },
  {
    id: "ai-security",
    worldSlug: "computing-logic",
    title: "Artificial Intelligence & Security",
  },

  // 07 — Life & Health
  {
    id: "biological-foundations",
    worldSlug: "life-health",
    title: "Biological Foundations",
  },
  {
    id: "anatomy-physiology",
    worldSlug: "life-health",
    title: "Anatomy & Physiology",
  },
  {
    id: "medical-instruments-diagnostics",
    worldSlug: "life-health",
    title: "Medical Instruments & Diagnostics",
  },
  {
    id: "medicines-treatments",
    worldSlug: "life-health",
    title: "Medicines & Treatments",
  },
  {
    id: "public-health-prevention",
    worldSlug: "life-health",
    title: "Public Health & Prevention",
  },
  { id: "biotechnology", worldSlug: "life-health", title: "Biotechnology" },
  {
    id: "assistive-life-support",
    worldSlug: "life-health",
    title: "Assistive & Life-Support Technologies",
  },

  // 08 — Food & Agriculture
  {
    id: "domestication-cultivation",
    worldSlug: "food-agriculture",
    title: "Domestication & Crop Cultivation",
  },
  {
    id: "soil-water-management",
    worldSlug: "food-agriculture",
    title: "Soil & Water Management",
  },
  {
    id: "farming-tools-machinery",
    worldSlug: "food-agriculture",
    title: "Farming Tools & Machinery",
  },
  {
    id: "animal-husbandry",
    worldSlug: "food-agriculture",
    title: "Animal Husbandry",
  },
  {
    id: "food-processing",
    worldSlug: "food-agriculture",
    title: "Food Processing",
  },
  {
    id: "preservation-fermentation",
    worldSlug: "food-agriculture",
    title: "Preservation & Fermentation",
  },
  {
    id: "nutrition-food-systems",
    worldSlug: "food-agriculture",
    title: "Nutrition & Food Systems",
  },

  // 09 — Transport & Navigation
  {
    id: "land-transport",
    worldSlug: "transport-navigation",
    title: "Land Transport",
  },
  {
    id: "rail-systems",
    worldSlug: "transport-navigation",
    title: "Rail Systems",
  },
  {
    id: "maritime-transport",
    worldSlug: "transport-navigation",
    title: "Maritime Transport",
  },
  {
    id: "aviation-flight",
    worldSlug: "transport-navigation",
    title: "Aviation & Flight",
  },
  {
    id: "navigation-mapping",
    worldSlug: "transport-navigation",
    title: "Navigation & Mapping",
  },
  {
    id: "propulsion-vehicle-systems",
    worldSlug: "transport-navigation",
    title: "Propulsion & Vehicle Systems",
  },
  {
    id: "logistics-freight",
    worldSlug: "transport-navigation",
    title: "Logistics & Freight",
  },

  // 10 — Art & Design
  {
    id: "visual-arts-image-making",
    worldSlug: "art-design",
    title: "Visual Arts & Image-Making",
  },
  {
    id: "crafts-decorative-arts",
    worldSlug: "art-design",
    title: "Crafts & Decorative Arts",
  },
  {
    id: "graphic-typographic-design",
    worldSlug: "art-design",
    title: "Graphic & Typographic Design",
  },
  {
    id: "photography-moving-image",
    worldSlug: "art-design",
    title: "Photography & Moving Image",
  },
  { id: "music-sound", worldSlug: "art-design", title: "Music & Sound" },
  {
    id: "product-industrial-design",
    worldSlug: "art-design",
    title: "Product & Industrial Design",
  },
  {
    id: "fashion-wearable-design",
    worldSlug: "art-design",
    title: "Fashion & Wearable Design",
  },

  // 11 — Time & Measurement
  {
    id: "timekeeping-devices",
    worldSlug: "time-measurement",
    title: "Timekeeping Devices",
  },
  {
    id: "calendars-chronology",
    worldSlug: "time-measurement",
    title: "Calendars & Chronology",
  },
  {
    id: "units-standards",
    worldSlug: "time-measurement",
    title: "Units & Standards",
  },
  {
    id: "length-area-surveying",
    worldSlug: "time-measurement",
    title: "Length, Area & Surveying",
  },
  {
    id: "mass-force-pressure",
    worldSlug: "time-measurement",
    title: "Mass, Force & Pressure",
  },
  {
    id: "temperature-light-electricity",
    worldSlug: "time-measurement",
    title: "Temperature, Light & Electricity",
  },
  {
    id: "scientific-measurement-systems",
    worldSlug: "time-measurement",
    title: "Scientific Measurement Systems",
  },

  // 12 — Earth & Cosmos
  {
    id: "geology-earth-interior",
    worldSlug: "earth-cosmos",
    title: "Geology & Earth's Interior",
  },
  {
    id: "weather-climate",
    worldSlug: "earth-cosmos",
    title: "Weather & Climate",
  },
  {
    id: "oceans-hydrology",
    worldSlug: "earth-cosmos",
    title: "Oceans & Hydrology",
  },
  {
    id: "ecosystems-environment",
    worldSlug: "earth-cosmos",
    title: "Ecosystems & Environment",
  },
  {
    id: "astronomy-celestial-observation",
    worldSlug: "earth-cosmos",
    title: "Astronomy & Celestial Observation",
  },
  {
    id: "planetary-science-space",
    worldSlug: "earth-cosmos",
    title: "Planetary Science & Space",
  },
  {
    id: "earth-observation-exploration",
    worldSlug: "earth-cosmos",
    title: "Earth Observation & Exploration",
  },
];

export default categories;
