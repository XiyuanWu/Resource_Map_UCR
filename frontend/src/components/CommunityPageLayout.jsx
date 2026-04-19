import LandingHeader from "./LandingHeader";
import CommunityMapResourceSection from "./CommunityMapResourceSection";
import SomosHeroSection from "./SomosHeroSection";
import { communityMapPlacesBySlug } from "../data/communityMapPlaces";

const communityPageNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Map", href: "#map" },
  { label: "Resource", href: "#resource" },
];

function CommunityPageLayout({
  slug,
  title,
  subtitle = "COMMUNITY PAGE",
  description,
  heroImage,
  heroVariant = "split",
  mapPlaceholder,
  resourcePlaceholder,
}) {
  const mapPlaces = communityMapPlacesBySlug[slug] ?? [];

  return (
    <main className="min-h-screen w-full bg-white">
      <LandingHeader navItems={communityPageNavItems} activeItem="Overview" />

      {heroVariant === "somos" ? (
        <SomosHeroSection heroImage={heroImage} />
      ) : (
        <section
          id="overview"
          className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10"
        >
          <div className="overflow-hidden rounded-4xl bg-linear-to-r from-[#fffaf0] via-[#fffdf8] to-[#f5f8ff] md:grid md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center px-7 py-10 md:px-12 md:py-14">
              <p className="font-display text-sm font-extrabold tracking-[0.18em] text-[#2a4b84]">
                {subtitle}
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-[#0f2f69]">
                {title}
              </h1>
              <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-[#314a74]">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-[#0f2f69] px-5 py-2.5 font-display text-base font-bold text-white transition hover:bg-[#0b2453]"
                >
                  Back to Home
                </a>
              </div>
            </div>

            <div className="relative min-h-64 overflow-hidden">
              <img
                src={heroImage}
                alt={`${title} hero`}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#fffdf8] via-[#fffdf8]/35 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-[#fffdf8]/65 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      )}

      <CommunityMapResourceSection
        communityTitle={title}
        places={mapPlaces}
        mapIntro={mapPlaceholder}
        resourceIntro={resourcePlaceholder}
      />
    </main>
  );
}

export default CommunityPageLayout;
