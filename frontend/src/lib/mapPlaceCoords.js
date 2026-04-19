/** UCR Highlander Union area — used when a place has no explicit lat/lng. */
export const UCR_DEFAULT_CENTER = { lat: 33.9737, lng: -117.3281 };

const DERIVE_SCALE = 0.00014;

/**
 * @param {{ lat?: number; lng?: number; mapX: number; mapY: number }} p
 * @returns {{ lat: number; lng: number }}
 */
export function getPlaceLatLng(p) {
  if (
    typeof p.lat === "number" &&
    typeof p.lng === "number" &&
    Number.isFinite(p.lat) &&
    Number.isFinite(p.lng)
  ) {
    return { lat: p.lat, lng: p.lng };
  }
  return {
    lat: UCR_DEFAULT_CENTER.lat + (p.mapY - 50) * DERIVE_SCALE,
    lng: UCR_DEFAULT_CENTER.lng + (p.mapX - 50) * DERIVE_SCALE,
  };
}
