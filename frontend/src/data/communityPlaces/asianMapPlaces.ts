import type { MapPlace } from "../communityMapPlaces";

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * Curated Asian / AAPI–relevant spots near UCR & Inland Empire (verify hours before visiting).
 * Card images come from `getPlaceCardImageUrls` (category stock + optional Google Static Map).
 */
export const asianMapPlaces: MapPlace[] = [
  {
    id: "asian-food-panda-hibachi-hub",
    name: "Panda Express / Hibachi-San",
    category: "food",
    blurb:
      "Convenient on-campus options for Chinese-inspired dishes and Japanese-style teriyaki or sushi bowls. A primary hub for student dining.",
    mapX: 48,
    mapY: 42,
    lat: 33.97435,
    lng: -117.32915,
    address: "HUB Plaza, 900 University Ave, Riverside, CA 92521",
    googleMapsUrl: mapsSearchUrl(
      "HUB Plaza 900 University Ave Riverside CA 92521",
    ),
  },
  {
    id: "asian-food-tim-boba",
    name: "Tim Boba",
    category: "food",
    blurb:
      "A popular student hangout near campus specializing in boba tea, snacks, and a welcoming environment for studying.",
    mapX: 38,
    mapY: 48,
    lat: 33.97585,
    lng: -117.3362,
    address: "1450 University Ave Ste K, Riverside, CA 92507",
    googleMapsUrl: mapsSearchUrl(
      "Tim Boba 1450 University Ave Ste K Riverside CA 92507",
    ),
  },
  {
    id: "asian-markets-super-seafood",
    name: "Super Seafood Asian Market",
    category: "markets",
    blurb:
      "A comprehensive grocery store offering fresh seafood, Asian produce, and specialty pantry staples from various East and Southeast Asian cuisines.",
    mapX: 22,
    mapY: 58,
    lat: 33.9482,
    lng: -117.4614,
    address: "4513 La Sierra Ave, Riverside, CA 92505",
    googleMapsUrl: mapsSearchUrl(
      "Super Seafood Asian Market 4513 La Sierra Ave Riverside CA",
    ),
  },
  {
    id: "asian-markets-99-ranch-corona",
    name: "99 Ranch Market (Corona)",
    category: "markets",
    blurb:
      "A large-scale Asian grocery store offering a wide selection of fresh produce, seafood, and authentic specialty ingredients from across Asia.",
    mapX: 25, // Updated position placeholder
    mapY: 80, // Updated position placeholder
    lat: 33.8863,
    lng: -117.5215,
    address: "430 N McKinley St, Corona, CA 92879",
    googleMapsUrl: mapsSearchUrl(
      "99 Ranch Market 430 N McKinley St Corona CA 92879",
    ),
  },
  {
    id: "asian-markets-99-ranch-eastvale",
    name: "99 Ranch Market (Eastvale)",
    category: "markets",
    blurb:
      "A modern, full-service Asian supermarket located in the Station shopping center, providing high-quality groceries and a variety of prepared Asian foods.",
    mapX: 18, // Updated position placeholder
    mapY: 75, // Updated position placeholder
    lat: 33.9785,
    lng: -117.5532,
    address: "4956 Hamner Ave, Eastvale, CA 91752",
    googleMapsUrl: mapsSearchUrl(
      "99 Ranch Market 4956 Hamner Ave Eastvale CA 91752",
    ),
  },
  {
    id: "asian-faith-mosque-riverside",
    name: "Mosque of Riverside",
    category: "faith",
    blurb:
      "Located near campus; serves a diverse Muslim community including many students of Indonesian, Malaysian, and Pakistani heritage.",
    mapX: 44,
    mapY: 36,
    lat: 33.97895,
    lng: -117.33355,
    address: "1038 W Linden St, Riverside, CA 92507",
    googleMapsUrl: mapsSearchUrl(
      "Mosque of Riverside 1038 W Linden St Riverside CA",
    ),
  },
  {
    id: "asian-faith-shri-lakshmi-narayan",
    name: "Shri Lakshmi Narayan Mandir",
    category: "faith",
    blurb:
      "A spiritual and cultural center for the Hindu community in the Inland Empire, offering traditional worship and community gatherings.",
    mapX: 30,
    mapY: 64,
    lat: 33.91685,
    lng: -117.4496,
    address: "9292 Magnolia Ave, Riverside, CA 92503",
    googleMapsUrl: mapsSearchUrl("9292 Magnolia Ave Riverside CA 92503 mandir"),
  },
  {
    id: "asian-clubs-apsp",
    name: "Asian Pacific Student Programs (APSP)",
    category: "community_clubs",
    blurb:
      "Primary campus department supporting AAPI students through cultural, educational, and social programming.",
    mapX: 52,
    mapY: 40,
    lat: 33.97565,
    lng: -117.32735,
    address: "244 Costo Hall, Riverside, CA 92521",
    googleMapsUrl: mapsSearchUrl("Costo Hall UC Riverside"),
  },
  {
    id: "asian-clubs-jacl-riverside",
    name: "Japanese American Citizens League (JACL) — Riverside Chapter",
    category: "community_clubs",
    blurb:
      "Civil rights organization preserving the heritage and legacy of the Japanese American community in Riverside.",
    mapX: 40,
    mapY: 34,
    lat: 33.97485,
    lng: -117.3451,
    address: "4280 Mount Vernon Ave, Riverside, CA 92507",
    googleMapsUrl: mapsSearchUrl("4280 Mount Vernon Ave Riverside CA 92507"),
  },
  {
    id: "asian-events-api-heritage-month",
    name: "Asian Pacific Islander Heritage Month (May)",
    category: "events",
    blurb:
      "Annual series of workshops, performances, and festivals celebrating AAPI culture and history on campus (locations vary; check APSP calendar).",
    mapX: 50,
    mapY: 44,
    lat: 33.97425,
    lng: -117.3289,
    address:
      "UCR HUB / Costo Hall area, 900 University Ave, Riverside, CA 92521",
    googleMapsUrl: mapsSearchUrl("UCR Highlander Union Riverside"),
  },
  {
    id: "asian-support-apsp-peer-mentoring",
    name: "APSP Peer Mentoring Program",
    category: "support_services",
    blurb:
      "Connects incoming students with upperclassmen mentors for academic and social navigation with attention to Asian American experiences.",
    mapX: 54,
    mapY: 38,
    lat: 33.97565,
    lng: -117.32735,
    address: "244 Costo Hall, Riverside, CA 92521",
    googleMapsUrl: mapsSearchUrl("Costo Hall UC Riverside"),
  },
  {
    id: "asian-career-api-student-advisory",
    name: "Asian and Pacific Islander Student Advisory Council",
    category: "career_support",
    blurb:
      "Leadership development, professional workshops, and a student voice to administration on career-related needs (often coordinated through APSP).",
    mapX: 56,
    mapY: 36,
    lat: 33.97565,
    lng: -117.32735,
    address: "244 Costo Hall, Riverside, CA 92521",
    googleMapsUrl: mapsSearchUrl("Costo Hall UC Riverside"),
  },
];
