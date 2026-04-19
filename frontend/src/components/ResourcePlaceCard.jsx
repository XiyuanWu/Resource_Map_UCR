import { useCallback, useMemo, useState } from "react";
import { placeCategoryLabels } from "../data/communityMapPlaces";
import { getPlaceCardImageUrls } from "../lib/placeCardVisuals";

function fallbackImageSrc(placeId, slotIndex) {
  return `https://picsum.photos/seed/belonging-${encodeURIComponent(placeId)}-${slotIndex}/400/240`;
}

function ResourcePlaceCard({ place: p }) {
  const cardImages = useMemo(
    () => getPlaceCardImageUrls(p),
    [p.id, p.category, p.lat, p.lng, p.mapX, p.mapY, p.images],
  );
  const [useFallback, setUseFallback] = useState(() => ({}));

  const handleImgError = useCallback((slotIndex, event) => {
    if (event?.currentTarget?.dataset?.fallbackApplied === "1") {
      event.currentTarget.onerror = null;
      return;
    }
    if (event?.currentTarget) {
      event.currentTarget.dataset.fallbackApplied = "1";
    }
    setUseFallback((prev) =>
      prev[slotIndex] ? prev : { ...prev, [slotIndex]: true },
    );
  }, []);

  return (
    <article className="overflow-hidden rounded-xl border border-[#e2eaf5] bg-white transition hover:border-[#0f2f69]/25 hover:shadow-sm">
      {cardImages.length > 0 && (
        <div className="grid grid-cols-2 gap-px bg-[#e2eaf5]">
          {cardImages.map((src, idx) => (
            <div
              key={`${p.id}-img-${idx}`}
              className="relative aspect-5/3 bg-[#eef2f8]"
            >
              <img
                src={useFallback[idx] ? fallbackImageSrc(p.id, idx) : src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImgError(idx, e)}
              />
            </div>
          ))}
        </div>
      )}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-display text-base font-bold leading-snug text-[#0f2f69]">
            {p.name}
          </h4>
          <span className="shrink-0 rounded-full bg-[#0f2f69]/10 px-2 py-0.5 text-center font-sans text-[10px] font-semibold leading-tight text-[#0f2f69] md:text-xs">
            {placeCategoryLabels[p.category]}
          </span>
        </div>
        {p.address && (
          <p className="mt-1 font-sans text-xs text-[#5a7399] md:text-sm">
            {p.address}
          </p>
        )}
        <p className="mt-2 font-sans text-xs leading-relaxed text-[#314a74] md:text-sm">
          {p.blurb}
        </p>
        {p.googleMapsUrl && (
          <a
            href={p.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[#0f2f69] px-4 py-2 font-display text-xs font-bold text-white transition hover:bg-[#0b2453] md:text-sm"
          >
            Open in Google Maps
          </a>
        )}
      </div>
    </article>
  );
}

export default ResourcePlaceCard;
