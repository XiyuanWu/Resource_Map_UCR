import { useMemo, useState } from "react";
import { placeCategoryLabels } from "../data/communityMapPlaces";

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
      className="scroll-mt-24 rounded-3xl border border-[#d3def0] bg-white p-6 shadow-sm md:p-8"
    >
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

      {/* Fixed row height: map + list share one cap; list scrolls inside when needed */}
      <div className="mt-6 flex h-[min(420px,calc(100vh-12rem))] min-h-[280px] max-h-[420px] flex-col gap-4 lg:flex-row lg:gap-6">
        {/* Left ~3/4: filters + map */}
        <div className="flex min-h-0 min-w-0 flex-[3] basis-0 flex-col gap-2 lg:h-full">
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

          <div
            className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-[#b8c6df] bg-[#e8eef8]"
            role="img"
            aria-label="Map placeholder with pins for filtered locations"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                    linear-gradient(90deg, #c5d2e8 1px, transparent 1px),
                    linear-gradient(#c5d2e8 1px, transparent 1px)
                  `,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute inset-x-0 top-3 px-2 text-center">
              <span className="inline-block max-w-[95%] rounded-full bg-white/90 px-3 py-1 font-sans text-xs font-medium text-[#314a74] shadow-sm">
                Map preview — pins use placeholder coordinates until real map data
                is wired in.
              </span>
            </div>
            {filtered.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <p className="rounded-xl bg-white/95 px-4 py-3 text-center font-sans text-sm text-[#314a74] shadow">
                  No locations match your filters. Add more rows in the data
                  file for this community.
                </p>
              </div>
            ) : (
              filtered.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  title={p.name}
                  className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#f2b617] text-[#0f2f69] shadow-md ring-2 ring-[#0f2f69]/25 transition hover:scale-110 hover:bg-[#ffc82e] focus:outline-none focus:ring-4 focus:ring-[#0f2f69]/30"
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
              ))
            )}
          </div>

          <p className="shrink-0 font-sans text-xs text-[#5a7399]">
            {filtered.length} location{filtered.length === 1 ? "" : "s"} match
            the current category on the map and in the list.
          </p>
        </div>

        {/* Right ~1/4: fills row height; list scrolls when content overflows */}
        <div
          id="resource"
          className="scroll-mt-24 flex min-h-0 min-w-0 flex-1 basis-0 flex-col overflow-hidden rounded-2xl border border-[#e2eaf5] bg-[#fafbfd]"
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
                <article className="rounded-xl border border-[#e2eaf5] bg-white p-3 transition hover:border-[#0f2f69]/25 hover:shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display text-base font-bold leading-snug text-[#0f2f69]">
                      {p.name}
                    </h4>
                    <span className="shrink-0 rounded-full bg-[#0f2f69]/10 px-2 py-0.5 text-center font-sans text-[10px] font-semibold leading-tight text-[#0f2f69] md:text-xs">
                      {placeCategoryLabels[p.category]}
                    </span>
                  </div>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#314a74] md:text-sm">
                    {p.blurb}
                  </p>
                  {(p.address || p.contact || p.resource) && (
                    <dl className="mt-2 space-y-1 border-t border-[#eef2f8] pt-2 font-sans text-[11px] text-[#314a74] md:text-xs">
                      {p.address && (
                        <div className="flex gap-1.5">
                          <dt className="shrink-0 font-semibold text-[#0f2f69]">
                            Address
                          </dt>
                          <dd className="min-w-0">{p.address}</dd>
                        </div>
                      )}
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
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CommunityMapResourceSection;
