import { useMemo, useState } from "react";
import { placeCategoryLabels } from "../data/communityMapPlaces";
import GoogleMapsMapPanel from "./GoogleMapsMapPanel";

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

            <GoogleMapsMapPanel>
              {filtered.length === 0 ? (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#d8e4f4]/90 p-6 backdrop-blur-[1px]">
                  <p className="max-w-sm rounded-xl border border-[#c8d6ec] bg-white px-4 py-3 text-center font-sans text-sm text-[#314a74] shadow-sm">
                    No locations match your filters. Add more rows in the data
                    file for this community.
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 z-20">
                  {filtered.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      title={p.name}
                      className="pointer-events-auto absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#f2b617] text-[#0f2f69] shadow-md ring-2 ring-[#0f2f69]/25 transition hover:scale-110 hover:bg-[#ffc82e] focus:outline-none focus:ring-4 focus:ring-[#0f2f69]/30"
                      style={{ left: `${p.mapX}%`, top: `${p.mapY}%` }}
                      onClick={() => {
                        document
                          .getElementById(`place-card-${p.id}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                      }}
                    >
                      <span className="sr-only">{p.name}</span>
                      <span
                        aria-hidden
                        className="text-lg leading-none font-bold"
                      >
                        ·
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </GoogleMapsMapPanel>

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
                  <article className="overflow-hidden rounded-xl border border-[#e2eaf5] bg-white transition hover:border-[#0f2f69]/25 hover:shadow-sm">
                    {p.images && p.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-px bg-[#e2eaf5]">
                        {p.images.slice(0, 2).map((src, idx) => (
                          <div
                            key={`${p.id}-img-${idx}`}
                            className="relative aspect-5/3 bg-[#eef2f8]"
                          >
                            <img
                              src={src}
                              alt=""
                              className="h-full w-full object-cover"
                              loading="lazy"
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
                      {(p.contact || p.resource) && (
                        <dl className="mt-2 space-y-1 border-t border-[#eef2f8] pt-2 font-sans text-[11px] text-[#314a74] md:text-xs">
                          {p.contact && (
                            <div className="flex gap-1.5">
                              <dt className="shrink-0 font-semibold text-[#0f2f69]">
                                Contact
                              </dt>
                              <dd className="min-w-0">{p.contact}</dd>
                            </div>
                          )}
                          {p.resource && (
                            <div className="flex flex-col gap-0.5">
                              <dt className="font-semibold text-[#0f2f69]">
                                Resource
                              </dt>
                              <dd className="min-w-0 wrap-break-word">
                                {p.resource.startsWith("http") ? (
                                  <a
                                    href={p.resource}
                                    className="text-[#0f2f69] underline decoration-[#0f2f69]/30 underline-offset-2 hover:decoration-[#0f2f69]"
                                  >
                                    {p.resource}
                                  </a>
                                ) : (
                                  p.resource
                                )}
                              </dd>
                            </div>
                          )}
                        </dl>
                      )}
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
