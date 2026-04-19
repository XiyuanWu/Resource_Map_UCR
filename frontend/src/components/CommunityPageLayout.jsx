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
  description: _description,
  heroImage,
  heroHeading,
  heroBelongingLine,
  heroTagline,
  heroBody,
  mapPlaceholder,
  resourcePlaceholder,
}) {
  const mapPlaces = communityMapPlacesBySlug[slug] ?? [];

  return (
    <main className="min-h-screen w-full bg-white">
      <LandingHeader navItems={communityPageNavItems} activeItem="Overview" />

      <SomosHeroSection
        heroImage={heroImage}
        heroHeading={heroHeading}
        heroBelongingLine={heroBelongingLine}
        heroTagline={heroTagline}
        heroBody={heroBody}
      />

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
