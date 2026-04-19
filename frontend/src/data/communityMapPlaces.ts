export type PlaceCategory =
  | "community_clubs"
  | "faith"
  | "food"
  | "markets"
  | "support_services"
  | "events"
  | "career_support";

export type MapPlace = {
  id: string;
  name: string;
  category: PlaceCategory;
  blurb: string;
  mapX: number;
  mapY: number;
  /** WGS84 — when set, the Google Map marker uses this instead of mapX/mapY. */
  lat?: number;
  lng?: number;
  address?: string;
  contact?: string;
  resource?: string;
  /** Optional card header images (URLs or public paths). */
  images?: string[];
  /** Optional “Open in Google Maps” target. */
  googleMapsUrl?: string;
};

const RESOURCE_PLACEHOLDER =
  "Placeholder resource — add link, contact, or hours when ready.";

const hispanicLatinoPlaces: MapPlace[] = [
  {
    id: "latino-food-halal-shack",
    name: "The Halal Shack",
    category: "food",
    blurb:
      "Campus dining option often highlighted for inclusive halal-friendly meals—good fit for many Latino students on campus.",
    mapX: 42,
    mapY: 38,
    lat: 33.97419,
    lng: -117.32864,
    address: "UCR campus (see map)",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=240&fit=crop",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Halal+Shack+UC+Riverside",
  },
  {
    id: "latino-markets-mercado",
    name: "Riverside Mercado (placeholder)",
    category: "markets",
    blurb:
      "Placeholder: off-campus mercado / food hall vibe—add real vetting notes for Latino-friendly markets.",
    mapX: 68,
    mapY: 52,
    address: "Downtown Riverside (placeholder)",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-food-cafe",
    name: "Café Estrella (placeholder)",
    category: "food",
    blurb:
      "Placeholder: coffee and pan dulce—replace with a real spot your team recommends.",
    mapX: 28,
    mapY: 62,
    address: "Near campus (placeholder)",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-faith-interfaith",
    name: "Riverside Interfaith Gathering (placeholder)",
    category: "faith",
    blurb:
      "Placeholder: faith-based community space or student circle—add accurate description.",
    mapX: 33,
    mapY: 45,
    address: "Placeholder address",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-clubs-latino-union",
    name: "Latino Union de Estudiantes (placeholder org)",
    category: "community_clubs",
    blurb:
      "Placeholder student organization—replace with real RSO name, meeting times, and link.",
    mapX: 62,
    mapY: 36,
    address: "Placeholder address",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-events-cultural",
    name: "Cultural Programs Space (placeholder)",
    category: "events",
    blurb:
      "Placeholder for cultural programming, heritage nights, or campus celebrations.",
    mapX: 36,
    mapY: 40,
    address: "Placeholder address",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-support-chass",
    name: "CHASS Student Success (placeholder)",
    category: "support_services",
    blurb:
      "Placeholder: advising, belonging programs, or wraparound support for students.",
    mapX: 55,
    mapY: 30,
    address: "Placeholder address",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-support-caps",
    name: "Counseling & Psychological Services (placeholder)",
    category: "support_services",
    blurb: "Placeholder mental health support entry point.",
    mapX: 50,
    mapY: 58,
    address: "Placeholder address",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-career-financial",
    name: "Financial Aid & Career Readiness (placeholder)",
    category: "career_support",
    blurb:
      "Placeholder: career advising, internships, aid navigation—split into separate entries later if needed.",
    mapX: 48,
    mapY: 44,
    address: "Placeholder address",
    contact: "Placeholder contact",
    resource: RESOURCE_PLACEHOLDER,
  },
];

const CATEGORIES: PlaceCategory[] = [
  "community_clubs",
  "faith",
  "food",
  "markets",
  "support_services",
  "events",
  "career_support",
];

function fakePlaces(seed: string): MapPlace[] {
  const base = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const names = [
    "Campus Community Hub (placeholder)",
    "Faith & Reflection Space (placeholder)",
    "Student Food Court (placeholder)",
    "Neighborhood Market (placeholder)",
    "Student Support Desk (placeholder)",
    "Campus Event Lawn (placeholder)",
    "Career Studio (placeholder)",
    "Club Meetup Room (placeholder)",
  ];
  return names.map((name, i) => {
    const cat = CATEGORIES[(base + i) % CATEGORIES.length];
    return {
      id: `${seed}-${i}`,
      name,
      category: cat,
      blurb:
        "Placeholder copy: why this spot is a good fit for students in this community, hours, and how to visit.",
      mapX: 18 + ((base + i * 11) % 64),
      mapY: 22 + ((base + i * 17) % 56),
      address: "Placeholder address",
      contact: "Placeholder contact",
      resource: RESOURCE_PLACEHOLDER,
    };
  });
}

export const communityMapPlacesBySlug: Record<string, MapPlace[]> = {
  "hispanic-or-latino": hispanicLatinoPlaces,
  "american-indian-or-alaskan-native": fakePlaces("american-indian"),
  asian: fakePlaces("asian"),
  "black-or-african-american": fakePlaces("black-or-african"),
  "native-hawaiian-or-other-pacific-islander": fakePlaces("nhopi"),
  white: fakePlaces("white"),
};

export const placeCategoryLabels: Record<PlaceCategory, string> = {
  community_clubs: "Community & Clubs",
  faith: "Faith",
  food: "Food",
  markets: "Markets",
  support_services: "Support Services",
  events: "Events",
  career_support: "Career Support",
};
