export type PlaceCategory =
  | "resource_center"
  | "culture_center"
  | "dining"
  | "student_club"
  | "support";

export type MapPlace = {
  id: string;
  name: string;
  category: PlaceCategory;
  blurb: string;
  mapX: number;
  mapY: number;
  address?: string;
  contact?: string;
  resource?: string;
  /** Optional card header images (URLs or public paths). */
  images?: string[];
  /** Optional “Open in Google Maps” target. */
  googleMapsUrl?: string;
};

const hispanicLatinoPlaces: MapPlace[] = [
  {
    id: "latino-dining-halal-shack",
    name: "The Halal Shack",
    category: "dining",
    blurb:
      "Campus dining option often highlighted for inclusive halal-friendly meals—good fit for many Latino students on campus.",
    mapX: 42,
    mapY: 38,
    address: "UCR campus (see map)",
    contact: "Hours on UCR Dining site (placeholder)",
    resource: "https://dining.ucr.edu/ (placeholder link)",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=240&fit=crop",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Halal+Shack+UC+Riverside",
  },
  {
    id: "latino-dining-mercado",
    name: "Riverside Mercado (placeholder)",
    category: "dining",
    blurb:
      "Placeholder: off-campus mercado / food hall vibe—add real vetting notes for Latino-friendly dining.",
    mapX: 68,
    mapY: 52,
    address: "Downtown Riverside (placeholder)",
    contact: "Add phone or Instagram",
    resource: "Add menu or article link",
  },
  {
    id: "latino-dining-cafe",
    name: "Café Estrella (placeholder)",
    category: "dining",
    blurb:
      "Placeholder: coffee and pan dulce—replace with a real spot your team recommends.",
    mapX: 28,
    mapY: 62,
    address: "Near campus (placeholder)",
    contact: "Add contact",
    resource: "Add links or notes for this spot when you have real data.",
  },
  {
    id: "latino-resource-chass",
    name: "CHASS Student Success (placeholder)",
    category: "resource_center",
    blurb: "Placeholder copy for a resource center relevant to this community.",
    mapX: 55,
    mapY: 30,
  },
  {
    id: "latino-resource-financial",
    name: "Financial Aid Office (placeholder)",
    category: "resource_center",
    blurb: "Placeholder: financial wellness and aid navigation.",
    mapX: 48,
    mapY: 44,
  },
  {
    id: "latino-culture",
    name: "Cultural Programs Space (placeholder)",
    category: "culture_center",
    blurb: "Placeholder for cultural programming and heritage events.",
    mapX: 36,
    mapY: 40,
  },
  {
    id: "latino-club",
    name: "Latino Union de Estudiantes (placeholder org)",
    category: "student_club",
    blurb: "Placeholder student organization—replace with real RSO name and link.",
    mapX: 62,
    mapY: 36,
  },
  {
    id: "latino-support",
    name: "Counseling & Psychological Services (placeholder)",
    category: "support",
    blurb: "Placeholder mental health support entry point.",
    mapX: 50,
    mapY: 58,
  },
];

const CATEGORIES: PlaceCategory[] = [
  "resource_center",
  "culture_center",
  "dining",
  "student_club",
  "support",
];

function fakePlaces(seed: string): MapPlace[] {
  const base = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const names = [
    "Campus Support Hub",
    "Cultural Programs Office",
    "Student Union Dining Court",
    "Identity-Based Mentoring",
    "Community Garden Café",
    "Scholarship & Success Center",
    "Heritage Week HQ",
    "Peer Advocate Lounge",
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
  resource_center: "Resource center",
  culture_center: "Culture center",
  dining: "Dining",
  student_club: "Student club",
  support: "Support",
};
