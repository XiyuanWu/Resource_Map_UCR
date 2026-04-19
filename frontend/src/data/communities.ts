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
    title: "Ummah-Muslim",
    description:
      "Find prayer spaces, student associations, halal dining nearby, and mentors who understand navigating campus life as part of the Muslim ummah.",
    href: "/groups/ummah-muslim",
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
    title: "American Indian",
    description:
      "Explore resources centered on Indigenous identity, tribal community ties, and student success pathways for Native peoples connected to UCR.",
    href: "/groups/american-indian",
  },
  {
    title: "White",
    description:
      "Navigate opportunities for involvement, academic growth, and cross-cultural engagement while building inclusive community with peers from all backgrounds.",
    href: "/groups/white",
  },
];
