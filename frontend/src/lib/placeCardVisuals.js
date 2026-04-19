import { getPlaceLatLng } from "./mapPlaceCoords";

const API_KEY = String(import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "").trim();

/** Unsplash — category-related (not venue-specific). */
const unsplash = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=640&h=384&q=80`;

/**
 * [left thematic, right fallback when no map snapshot]
 * @type {Record<string, [string, string]>}
 */
const CATEGORY_THEMES = {
  food: [
    unsplash("photo-1556679343-c7306c1976bc"),
    unsplash("photo-1563245372-f21724e3856d"),
  ],
  markets: [
    unsplash("photo-1542838132-92c53300491e"),
    unsplash("photo-1588964899467-c3d0ae5a8fd8"),
  ],
  faith: [
    unsplash("photo-1548013146-72479768bada"),
    unsplash("photo-1565008576549-57569a49371d"),
  ],
  community_clubs: [
    unsplash("photo-1523580494863-6f3031224c94"),
    unsplash("photo-1523240795612-9a054b0db644"),
  ],
  events: [
    unsplash("photo-1533174072545-7a4b6ad7a6c3"),
    unsplash("photo-1514525253161-7a46d19cd819"),
  ],
  support_services: [
    unsplash("photo-1522202176988-66273c2fd55f"),
    unsplash("photo-1517245386807-bb43f82c33c4"),
  ],
  career_support: [
    unsplash("photo-1552664730-d307ca884978"),
    unsplash("photo-1542744173-8e7e53415bb0"),
  ],
};

const DEFAULT_THEMES = [
  unsplash("photo-1523580494863-6f3031224c94"),
  unsplash("photo-1556679343-c7306c1976bc"),
];

function themePair(category) {
  return CATEGORY_THEMES[category] ?? DEFAULT_THEMES;
}

/** Road map at coordinates (enable “Maps Static API” for this key in Google Cloud). */
function googleStaticMapUrl(lat, lng) {
  if (!API_KEY) return null;
  const center = `${lat},${lng}`;
  const marker = `color:0x0f2f69|${lat},${lng}`;
  const params = new URLSearchParams({
    center,
    zoom: "16",
    size: "400x240",
    maptype: "roadmap",
    scale: "2",
    markers: marker,
    key: API_KEY,
  });
  return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
}

/**
 * Two image URLs: [category-related, map snapshot or second thematic].
 * If `place.images` has 2+ entries, those are used as-is (e.g. curated photos).
 * If `place.images` is explicitly empty array `[]` or `false`/null, returns empty array.
 * @param {{ images?: string[] | false | null; category: string; mapX: number; mapY: number; lat?: number; lng?: number }} place
 * @returns {string[]}
 */
export function getPlaceCardImageUrls(place) {
  if (!place.images || place.images.length === 0) {
    return [];
  }

  const custom = place.images.filter(Boolean);
  if (custom.length >= 2) {
    return [custom[0], custom[1]];
  }

  const [themeA, themeB] = themePair(place.category);
  const { lat, lng } = getPlaceLatLng(place);
  const mapUrl = googleStaticMapUrl(lat, lng);

  if (custom.length === 1) {
    return [custom[0], mapUrl ?? themeB];
  }

  return [];
}
