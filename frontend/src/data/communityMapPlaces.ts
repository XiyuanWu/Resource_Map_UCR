import { asianMapPlaces } from "./communityPlaces/asianMapPlaces";
import { hispanicOrLatinoMapPlaces } from "./communityPlaces/latinoMapPlaces";

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
  "hispanic-or-latino": hispanicOrLatinoMapPlaces,
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
