import placeholderImage from "../assets/landing/ucr background.jpg";
import latinoSomosHeroImage from "../assets/landing/Background_Latino_Page.jpg";

export type CommunityPageData = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  /** Main brand line (default SOMOS UCR in hero). */
  heroHeading?: string;
  /** Gold uppercase line, e.g. "Latino Community Belonging Map". */
  heroBelongingLine: string;
  /** Gold tagline under the belonging line. */
  heroTagline: string;
  /** White intro paragraph in the hero. */
  heroBody: string;
  mapPlaceholder: string;
  resourcePlaceholder: string;
};

const sharedHeroTagline =
  "Celebrating Culture. Building Community. Supporting Success.";

const defaultPlaceholders = {
  mapPlaceholder:
    "Explore campus and nearby spots that support this community. Use category filters—map pins are placeholders until real coordinates are wired in.",
  resourcePlaceholder:
    "Each card matches the map filters. Add offices, cultural centers, dining, clubs, and services in your data file.",
};

function heroBodyForCommunity(label: string) {
  return `This map highlights spaces, programs, businesses, and organizations that support and celebrate ${label} students, faculty, staff, and the greater Riverside community.`;
}

export const communityPageBySlug: Record<string, CommunityPageData> = {
  "hispanic-or-latino": {
    slug: "hispanic-or-latino",
    title: "Hispanic or Latino",
    description:
      "Resources, spaces, and organizations that support students with Spanish-speaking or Latin American heritage.",
    ...defaultPlaceholders,
    heroImage: latinoSomosHeroImage,
    heroHeading: "Hispanic or Latino",
    heroBelongingLine: "Community Belonging Map",
    heroTagline: sharedHeroTagline,
    heroBody:
      "This map highlights spaces, programs, businesses, and organizations that support and celebrate Latinx students, faculty, staff, and the greater Riverside community.",
  },
  "ummah-muslim": {
    slug: "ummah-muslim",
    title: "Ummah-Muslim",
    description:
      "Prayer spaces, student groups, dining options, and support that reflect Muslim life and community on campus and in Riverside.",
    ...defaultPlaceholders,
    heroImage:
      "https://plus.unsplash.com/premium_photo-1663013656159-a853ffa09693?auto=format&fit=crop&w=1600&h=800&q=80",
    heroHeading: "Ummah-Muslim",
    heroBelongingLine: "Community Belonging Map",
    heroTagline: sharedHeroTagline,
    heroBody: heroBodyForCommunity("Muslim students, staff, and the ummah"),
  },
  asian: {
    slug: "asian",
    title: "Asian",
    description:
      "Resources that reflect the diversity of Asian and Asian American students, staff, and community partners.",
    ...defaultPlaceholders,
    heroImage:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=1600&h=800&q=80",
    heroHeading: "Asian",
    heroBelongingLine: "Community Belonging Map",
    heroTagline: sharedHeroTagline,
    heroBody: heroBodyForCommunity("Asian and Asian American"),
  },
  "black-or-african-american": {
    slug: "black-or-african-american",
    title: "Black or African-American",
    description:
      "Spaces and programs that affirm Black students, faculty, staff, and the broader Black community at UCR.",
    ...defaultPlaceholders,
    heroImage:
      "https://images.unsplash.com/photo-1552710307-537199cd41c0?auto=format&fit=crop&w=1600&h=800&q=80",
    heroHeading: "Black or African-American",
    heroBelongingLine: "Community Belonging Map",
    heroTagline: sharedHeroTagline,
    heroBody: heroBodyForCommunity("Black and African American"),
  },
  "american-indian": {
    slug: "american-indian",
    title: "American Indian",
    description:
      "Resources and spaces that honor Indigenous students, tribal nations, and Native communities connected to UCR.",
    ...defaultPlaceholders,
    heroImage:
      "https://images.unsplash.com/photo-1691412353606-a61b79863611?auto=format&fit=crop&w=1600&h=800&q=80",
    heroHeading: "American Indian",
    heroBelongingLine: "Community Belonging Map",
    heroTagline: sharedHeroTagline,
    heroBody: heroBodyForCommunity(
      "American Indian, Alaska Native, and Indigenous",
    ),
  },
  white: {
    slug: "white",
    title: "White",
    description:
      "Resources for students and staff interested in allyship, equity learning, and inclusive community engagement.",
    ...defaultPlaceholders,
    heroImage:
      "https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?auto=format&fit=crop&w=1600&h=800&q=80",
    heroHeading: "White",
    heroBelongingLine: "Community Belonging Map",
    heroTagline: sharedHeroTagline,
    heroBody: heroBodyForCommunity("White-identifying and allied"),
  },
};
