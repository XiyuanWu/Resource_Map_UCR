export type Community = {
  title: string;
  description: string;
  href: string;
};

export const communities: Community[] = [
  {
    title: "Hispanic or Latino",
    description:
      "Connect with culturally responsive advising, bilingual support, and campus programs that uplift students with Spanish-speaking or Latin American heritage.",
    href: "/groups/hispanic-or-latino",
  },
  {
    title: "American Indian or Alaskan Native",
    description:
      "Explore resources centered on Indigenous identity, tribal community ties, and student success pathways for Native peoples of North and South America.",
    href: "/groups/american-indian-or-alaskan-native",
  },
  {
    title: "Asian",
    description:
      "Discover support networks, student organizations, and academic opportunities that reflect the diversity of East, South, and Southeast Asian communities.",
    href: "/groups/asian",
  },
  {
    title: "Black or African-American",
    description:
      "Find mentoring, leadership programs, and community spaces that celebrate Black identity and support belonging across campus life.",
    href: "/groups/black-or-african-american",
  },
  {
    title: "Native Hawaiian or Other Pacific Islander",
    description:
      "Access community-driven support, cultural programming, and resources that honor Pacific Islander heritage, family, and collective wellbeing.",
    href: "/groups/native-hawaiian-or-other-pacific-islander",
  },
  {
    title: "White",
    description:
      "Navigate opportunities for involvement, academic growth, and cross-cultural engagement while building inclusive community with peers from all backgrounds.",
    href: "/groups/white",
  },
];
