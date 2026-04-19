import { asianMapPlaces } from "./communityPlaces/asianMapPlaces";

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
  images?: string[] | false | null;
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
    resource: "http://thehalalshack.com/",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=240&fit=crop",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Halal+Shack+UC+Riverside",
  },
  {
    id: "latino-markets-mercado",
    name: "La Tapatia Market",
    category: "markets",
    blurb:
      "food hall vibe—add real vetting notes for Latino-friendly markets.",
    mapX: 68,
    mapY: 52,
    lat: 33.97639,
    lng: -117.35336,
    address: "2009 University Ave, Riverside, CA 92507",
    contact: "951-684-6233",
    resource: RESOURCE_PLACEHOLDER,
  },
  {
    id: "latino-food-cafe",
    name: "Zacatecas Cafe",
    category: "food",
    blurb:
      "Holds traditional Spanish foods, and some desserts as well.",
    mapX: 28,
    mapY: 62,
    lat: 33.97683,
    lng: -117.34046,
    address: "3767 Iowa Ave #4549, Riverside, CA 92507",
    contact: "951-683-3939",
    resource:"http://zacatecascafe.com/",
  },
  {
    id: "latino-faith-interfaith",
    name: "St. Andrew Newman Center",
    category: "faith",
    blurb:
      "Catholic church, but not limited to only hispanic/latino. Open to all.",
    mapX: 33,
    mapY: 45,
    lat: 33.97693,
    lng: -117.31446,
    address: "105 W Big Springs Rd, Riverside, CA 92507",
    contact: "951-682-8751",
    resource: "https://www.sanccatholic.org/",
  },
  {
    id: "latino-clubs-latino-union",
    name: "MUNDO",
    category: "community_clubs",
    blurb:
      "Meeting times: Tusdays at 6:30pm - 7:30pm",
    mapX: 62,
    mapY: 36,
    lat: 33.97391,
    lng: -117.32799,
    address: "900 University Ave, Riverside, CA 92521",
    contact: "mechadeucr2019@gmail.com",
    resource: "https://www.instagram.com/mechadeucr/",
  },
  {
    id: "latino-clubs-baile-folklorico",
    name: "Baile Folklorico de UCR",
    category: "community_clubs",
    blurb:
      "Meeting times: Weekly 3 times a week.",
    mapX: 62,
    mapY: 36,
    lat: 33.97391,
    lng: -117.32799,
    address: "900 University Ave, Riverside, CA 92521",
    contact: "bfdeucr31@gmail.com",
    resource: "https://highlanderlink.ucr.edu/organization/bfdeucr",
  },
  {
    id: "latino-events-cultural",
    name: "Dia de Los Muertos (Day of the Dead)",
    category: "events",
    blurb:
      "Held in Decemeber, and usually is in collaboration with CSP at UCR",
    mapX: 36,
    mapY: 40,
    lat: 33.97391,
    lng: -117.32799,
    address: "900 University Ave, Riverside, CA 92521",
    contact: "https://csp.ucr.edu/contact-us",
    resource: "https://csp.ucr.edu/events",
  },
  {
    id: "latino-support-chass",
    name: "Academic Advising for CHASS",
    category: "support_services",
    blurb:
      "For students looking for advising, walk-ins are available Monday-Thursday 10am-12pm/1pm - 2pm, and appointments can be made online.",
    mapX: 55,
    mapY: 30,
    lat: 33.97525,
    lng: -117.32888,
    address: "Kim Wilcox Drive N, Riverside, CA 92507",
    contact: "951-827-3683",
    resource:"https://chassstudentaffairs.ucr.edu/advising",
  },
  {
    id: "latino-support-caps",
    name: "UCR Counseling & Psychological Services",
    category: "support_services",
    blurb: "Mental health support entry point.",
    mapX: 50,
    mapY: 58,
    lat: 33.97919,
    lng: -117.32344,
    address: "388 W Linden St, Riverside, CA 92521",
    contact: "951-827-3031",
    resource: "https://counseling.ucr.edu/",
  },
  {
    id: "latino-career-financial",
    name: "Career Center",
    category: "career_support",
    blurb:
      "For those looking for help in their future careers or already needing help with internships, resumes and building connections, the Career Center is a great resource.",
    mapX: 48,
    mapY: 44,
    lat: 33.97558,
    lng: -117.32815,
    address: "900 University Ave Career Center Plaza, Riverside, CA 92521",
    contact: "951-827-3631",
    resource:"https://careers.ucr.edu/",
  },
  {
    id: "latino-food-Blue-Burro",
    name: "Blue Burro",
    category: "food",
    blurb:
      "Serve various tyoes of burritos as well as others with traditional drinks such as horchata and jamaica.",
    mapX: 68,
    mapY: 52,
    lat: 33.97660,
    lng: -117.33755,
    address: "1201 University Ave STE 109B, Riverside, CA 92507",
    contact: "951-742-5353",
    resource:"https://www.eatblueburro.com/location/blue-burro-riverside-coming-soon/",
  },
  {
    id: "latino-food-miches-de-la-baja",
    name: "Miches De La Baja",
    category: "food",
    blurb:
      "Serve various tyoes of burritos as well as others with traditional drinks such as horchata and jamaica.",
    mapX: 68,
    mapY: 52,
    lat: 33.97521,
    lng: -117.33812,
    address: "1242 University Ave STE 5, Riverside, CA 92507",
    contact: "951-742-5633",
    resource:"https://www.michesdelabaja1.com/",
  },
];

//ends here

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
  "ummah-muslim": fakePlaces("ummah-muslim"),
  asian: asianMapPlaces,
  "black-or-african-american": fakePlaces("black-or-african"),
  "american-indian": fakePlaces("american-indian"),
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
