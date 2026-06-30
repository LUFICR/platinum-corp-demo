export interface HighlightItem {
  id: string;
  title: string;
  description: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
}

export interface FloorPlanItem {
  id: string;
  title: string;
  carpetArea: string;
  description: string;
  priceStart: string;
  balconyText: string;
  isPopular?: boolean;
}

export interface LocationAdvantage {
  category: string;
  items: { name: string; distance: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  imageUrl: string;
}

export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Location", href: "#location" },
  { label: "Developer", href: "#developer" },
  { label: "FAQ", href: "#faq" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
  overview: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  luxuryInterior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  lobby: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  contactBg: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
};

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "h1",
    title: "G + 16-Storey Landmark",
    description: "An imposing, modern tower rise designed with structural excellence and grand aesthetics in Upper Juhu."
  },
  {
    id: "h2",
    title: "1 & 2 Bed & Jodi Residences",
    description: "Intelligently planned residences designed for maximum carpet efficiency, with easy options to combine into spacious Jodi units."
  },
  {
    id: "h3",
    title: "Air-Conditioned Grand Entrance Lobby",
    description: "A double-height, air-conditioned designer entrance lobby that announces your arrival with prestige."
  },
  {
    id: "h4",
    title: "Automated Tower Parking",
    description: "State-of-the-art automated car parking system ensuring quick, hassle-free parking and safety for your luxury vehicles."
  },
  {
    id: "h5",
    title: "Advanced Home Automation",
    description: "High-tech smart lock entry, integrated video door phone, and mobile-enabled lighting controls for elevated luxury."
  },
  {
    id: "h6",
    title: "High-Tech 24/7 Surveillance",
    description: "Comprehensive CCTV coverage, professionally manned security gates, and intercom setups for absolute peace of mind."
  },
  {
    id: "h7",
    title: "Ground & Rooftop Experiences",
    description: "A dual-tier collection of active ground amenities and premium rooftop leisure lounges to refresh your senses."
  }
];

export const AMENITIES: AmenityItem[] = [
  {
    id: "am1",
    title: "Rooftop Sky Lounge",
    description: "An elegant, sky-high open deck with bespoke seating, ambient lighting, and panoramic views of the western skyline.",
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    iconName: "Compass"
  },
  {
    id: "am2",
    title: "State-of-the-Art Fitness Center",
    description: "Fully equipped gym setup on the higher level with cardio, strength-training gear, and professional-grade rubberized flooring.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    iconName: "Dumbbell"
  },
  {
    id: "am3",
    title: "Yoga & Meditation Zone",
    description: "A serene, dedicated deck framed by tropical planters, created to help you reconnect and rejuvenate.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    iconName: "Sparkles"
  },
  {
    id: "am4",
    title: "Sky Garden & Stargazing",
    description: "Manicured green pathways, lush vertical gardens, and an open astronomical telescope corner for starry Juhu nights.",
    imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    iconName: "TreePine"
  },
  {
    id: "am5",
    title: "Rooftop Net Cricket Pitch",
    description: "An enclosed sky-net pitch for recreational batting and casual sports sessions without leaving the residential premises.",
    imageUrl: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
    iconName: "Target"
  },
  {
    id: "am6",
    title: "Multi-Tiered Safety Systems",
    description: "Rounds-of-the-clock digital surveillance with smart card access control, automated fire safety, and trained estate managers.",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    iconName: "ShieldCheck"
  }
];

export const FLOOR_PLANS: FloorPlanItem[] = [
  {
    id: "fp1",
    title: "1 BHK Premium Suite",
    carpetArea: "415 sq.ft.",
    description: "Intelligently mapped configuration with a grand living room, master bedroom, dedicated dining area, and multi-functional washrooms.",
    priceStart: "₹ 1.25 Cr*",
    balconyText: "Attached Standing Balconies",
  },
  {
    id: "fp2",
    title: "2 BHK Luxury Grand",
    carpetArea: "560 sq.ft.",
    description: "Generous layout focusing on ventilation and space optimization, featuring two washrooms, parallel granite kitchen, and cross-ventilation.",
    priceStart: "₹ 1.85 Cr*",
    balconyText: "Expansive Living Balcony",
    isPopular: true
  },
  {
    id: "fp3",
    title: "3 BHK Premium Jodi Option",
    carpetArea: "975 sq.ft. (approx)",
    description: "An elegant solution combining adjacent suites into an expansive luxury sanctuary with dual master suites, double living hall, and study options.",
    priceStart: "On Request",
    balconyText: "Panoramic Dual Balconies"
  }
];

export const LOCATION_ADVANTAGES: LocationAdvantage[] = [
  {
    category: "Proximity & Transit",
    items: [
      { name: "S.V. Road & Andheri Station", distance: "6-8 mins" },
      { name: "Versova Metro Station", distance: "8-10 mins" },
      { name: "Western Express Highway (WEH)", distance: "12 mins" },
      { name: "Juhu Circle & Juhu Beach", distance: "8-10 mins" },
      { name: "Mumbai Domestic Airport T1", distance: "15-20 mins" }
    ]
  },
  {
    category: "Elite Healthcare",
    items: [
      { name: "Kokilaben Dhirubhai Ambani Hospital", distance: "7 mins" },
      { name: "Belle Vue Multi-Specialty Hospital", distance: "5 mins" },
      { name: "Nanavati Max Super Speciality", distance: "12 mins" }
    ]
  },
  {
    category: "Reputed Educational Hubs",
    items: [
      { name: "Mithibai & NM College Complex", distance: "8 mins" },
      { name: "Bhavans College & Campus", distance: "6 mins" },
      { name: "SPJIMR Business School", distance: "7 mins" },
      { name: "Jamnabai Narsee School", distance: "10 mins" }
    ]
  },
  {
    category: "Lifestyle & Café Hubs",
    items: [
      { name: "Link Road Dining Strip & Cafés", distance: "4 mins" },
      { name: "Infinity Mall & PVR Icon", distance: "10 mins" },
      { name: "Juhu Star Hotels (JW Marriott / Soho House)", distance: "12 mins" },
      { name: "Lokhandwala High Street", distance: "10 mins" }
    ]
  }
];

export const BUYER_TRUSTS = [
  {
    title: "MahaRERA Registered Project",
    subtitle: "RERA ID: P51800079919",
    description: "Complete regulatory peace of mind. Every technical plan, approval, and layout verified in compliance with the MahaRERA framework."
  },
  {
    title: "Clear Title Land Parcel",
    subtitle: "100% Secure Transaction",
    description: "Zero litigation risk. Direct premium freehold land being developed with top financial institution endorsements."
  },
  {
    title: "Premium West Mumbai Suburb",
    subtitle: "High Property Appreciation",
    description: "Upper Juhu enjoys solid structural demand, stellar rental yields, and unmatched status within Andheri West."
  },
  {
    title: "Hassle-Free Home Loans",
    subtitle: "Pre-Approved Partnerships",
    description: "Quick, hassle-free processing with preferential interest rates from ICICI, HDFC, SBI, and Axis Bank."
  }
];

export const DEVELOPERS: TeamMember[] = [
  {
    name: "Vishal Ratanghayra",
    role: "Founder & CEO, Platinum Corp",
    experience: "Over 20 Years of Architecture & Real Estate Excellence",
    bio: "An architect and visionary with more than two decades of real estate experience. Under his leadership, Platinum Corp has pioneered smart design solutions that maximize space efficacy, bringing boutique luxury residences within premium central suburbs.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Gurminder Singh",
    role: "Co-founder & COO, Platinum Corp",
    experience: "Over 20 Years of Civil Engineering & Urban Planning",
    bio: "A highly accomplished civil engineer and urban development veteran. Gurminder heads execution, engineering precision, and quality control, ensuring that structural design compliance, quality audits, and delivery timelines exceed expectations.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Where exactly is Platinum Crest located?",
    answer: "Platinum Crest is situated at a highly strategic location in Upper Juhu, Andheri West, Mumbai. It offers immediate, convenient access to the premium Juhu Circle, Juhu Beach, Versova Metro Station, Andheri railway station, S.V. Road, and the Western Express Highway, placing it within minutes of the best cafes, schools, and malls of Andheri West."
  },
  {
    question: "What apartment layouts are being offered in this residential development?",
    answer: "Platinum Crest features premium 1 BHK (approx. 415 sq.ft. carpet area) and luxury 2 BHK (approx. 560 sq.ft. carpet area) apartments. There are also customized 'Jodi options' (approx. 975+ sq.ft.) that allow you to merge adjacent units to form highly spacious 3 BHK or 4 BHK layouts, available upon request."
  },
  {
    question: "Is Platinum Crest MahaRERA registered?",
    answer: "Yes, the project is registered with the Maharashtra Real Estate Regulatory Authority. The official MahaRERA Registration Number is P51800079919. All statutory details can be verified online on the official MahaRERA database."
  },
  {
    question: "Can I download the project brochure and view the floor plan on WhatsApp?",
    answer: "Absolutely! You can instantly download the complete PDF brochure or receive highly detailed, high-resolution floor plans directly on your WhatsApp. Simply click on any of the 'WhatsApp' or 'Get Floor Plan' CTA buttons across the landing page, and our automated assistant will share them instantly."
  },
  {
    question: "How can I schedule a personal site visit or get current unit availability?",
    answer: "You can book a priority site visit by filling out any of the lead forms on this page or clicking the 'Book Site Visit' button. Our premium sales advisor will get in touch with you within 15 minutes to confirm a convenient slot and share details of available inventory and flexible payment plans."
  },
  {
    question: "What amenities are provided in the project?",
    answer: "The project boasts double-tier lifestyles including an automated tower parking system, a double-height air-conditioned grand entrance lobby, advanced home automation with smart security locks, and rooftop-exclusive experiences like a Sky Lounge with sitouts, a fully fitted Fitness Center, Yoga & Meditation Deck, Sky Garden pathways, and an enclosed Sky Net Cricket pitch."
  }
];
