import placeholderImage from "../assets/landing/ucr background.jpg";
import latinoSomosHeroImage from "../assets/landing/Background_Latino_Page.jpg";

export type HeroVariant = "split" | "somos";

export type CommunityPageData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  /** Default `split` (cream + photo). `somos` = full-bleed SOMOS UCR hero (Latino). */
  heroVariant?: HeroVariant;
  mapPlaceholder: string;
  resourcePlaceholder: string;
  contactPlaceholder: string;
};

const defaultPlaceholders = {
  subtitle: "COMMUNITY PAGE",
  heroImage: placeholderImage,
  mapPlaceholder:
    "Explore campus and nearby spots that support this community. Use category filters and search—map pins are placeholders until real coordinates are wired in.",
  resourcePlaceholder:
    "Each card matches the map filters. Add offices, cultural centers, dining, clubs, and services in your data file.",
  contactPlaceholder:
    "Contact placeholder: add coordinator email, social links, and office hours.",
};

export const communityPageBySlug: Record<string, CommunityPageData> = {
  "hispanic-or-latino": {
    slug: "hispanic-or-latino",
    title: "Hispanic or Latino",
    description:
      "Resources, spaces, and organizations that support students with Spanish-speaking or Latin American heritage.",
    ...defaultPlaceholders,
    heroVariant: "somos",
    heroImage: latinoSomosHeroImage,
  },
  "american-indian-or-alaskan-native": {
    slug: "american-indian-or-alaskan-native",
    title: "American Indian or Alaskan Native",
    description:
      "Placeholder overview for this community. Add identity-centered context and what students can find on this page.",
    ...defaultPlaceholders,
  },
  asian: {
    slug: "asian",
    title: "Asian",
    description:
      "Placeholder overview for this community. Add identity-centered context and what students can find on this page.",
    ...defaultPlaceholders,
  },
  "black-or-african-american": {
    slug: "black-or-african-american",
    title: "Black or African-American",
    description:
      "Placeholder overview for this community. Add identity-centered context and what students can find on this page.",
    ...defaultPlaceholders,
  },
  "native-hawaiian-or-other-pacific-islander": {
    slug: "native-hawaiian-or-other-pacific-islander",
    title: "Native Hawaiian or Other Pacific Islander",
    description:
      "Placeholder overview for this community. Add identity-centered context and what students can find on this page.",
    ...defaultPlaceholders,
  },
  white: {
    slug: "white",
    title: "White",
    description:
      "Placeholder overview for this community. Add identity-centered context and what students can find on this page.",
    ...defaultPlaceholders,
  },
};
