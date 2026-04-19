import { useCallback, useMemo, useState } from "react";
import { placeCategoryLabels } from "../data/communityMapPlaces";
import GoogleMapsMapPanel from "./GoogleMapsMapPanel";
import ResourcePlaceCard from "./ResourcePlaceCard";

function CommunityMapResourceSection({
  communityTitle,
  places = [],
  mapIntro,
  resourceIntro,
}) {
  const [category, setCategory] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(places.map((p) => p.category));
    return Array.from(set);
  }, [places]);

  const filtered = useMemo(() => {
    return places.filter((p) => {
      if (category && p.category !== category) return false;
      return true;
    });
  }, [places, category]);

  const placesKey = useMemo(
    () =>
      JSON.stringify(
        filtered.map((p) => ({
          id: p.id,
          lat: p.lat,
          lng: p.lng,
          mapX: p.mapX,
          mapY: p.mapY,
        })),
      ),
    [filtered],
  );

  const handlePlaceSelect = useCallback((placeId) => {
    document.getElementById(`place-card-${placeId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, []);

  return (
    <section
      id="map"
      aria-labelledby="map-resources-heading"
      className="w-full border-y border-[#d3def0] bg-white py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="map-resources-heading"
              className="font-display text-2xl font-bold text-[#0f2f69]"
            >
              Map &amp; resources
            </h2>
            <p className="mt-1 max-w-2xl font-sans text-sm leading-relaxed text-[#314a74] md:text-base">
              {mapIntro}
            </p>
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-wide text-[#5a7399]">
            Showing places for{" "}
            <span className="text-[#0f2f69]">{communityTitle}</span>
          </p>
        </div>

        <div className="mt-6 flex h-[min(840px,calc(100vh-8rem))] min-h-[560px] max-h-[840px] flex-col gap-4 lg:flex-row lg:gap-6">
          {/* Left ~3/4: categories + map placeholder (Google API later) */}
          <div className="flex min-h-0 min-w-0 flex-3 basis-0 flex-col gap-2 lg:h-full">
            <div className="shrink-0">
              <p className="font-sans text-sm font-semibold text-[#0f2f69]">
                Category
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setCategory(null)}
                  className={`rounded-full border px-3.5 py-1.5 font-sans text-xs font-semibold transition md:text-sm ${
                    category === null
                      ? "border-[#0f2f69] bg-[#0f2f69] text-white"
                      : "border-[#c8d6ec] bg-white text-[#314a74] hover:border-[#0f2f69]/40"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`rounded-full border px-3.5 py-1.5 font-sans text-xs font-semibold transition md:text-sm ${
                      category === cat
                        ? "border-[#0f2f69] bg-[#0f2f69] text-white"
                        : "border-[#c8d6ec] bg-white text-[#314a74] hover:border-[#0f2f69]/40"
                    }`}
                  >
                    {placeCategoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>

            <GoogleMapsMapPanel
              places={filtered}
              placesKey={placesKey}
              onPlaceSelect={handlePlaceSelect}
            />

            <p className="shrink-0 font-sans text-xs text-[#5a7399]">
              {filtered.length} location{filtered.length === 1 ? "" : "s"} match
              the current category on the map and in the list.
            </p>
          </div>

          <div
            id="resource"
            className="scroll-mt-24 flex min-h-0 min-w-0 flex-1 basis-0 flex-col overflow-hidden rounded-xl border border-[#e2eaf5] bg-[#fafbfd]"
          >
            <div className="shrink-0 border-b border-[#e2eaf5] px-4 py-3">
              <h3 className="font-display text-lg font-bold text-[#0f2f69]">
                Resources
              </h3>
              <p className="mt-1 font-sans text-xs leading-relaxed text-[#5a7399] md:text-sm">
                {resourceIntro}
              </p>
            </div>
            <ul className="min-h-0 flex-1 list-none space-y-3 overflow-y-auto overscroll-contain p-3">
              {filtered.map((p) => (
                <li key={p.id} id={`place-card-${p.id}`}>
                  <ResourcePlaceCard place={p} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityMapResourceSection;
