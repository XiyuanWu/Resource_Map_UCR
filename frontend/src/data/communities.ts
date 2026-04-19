import latinoSomosHeroImage from "../assets/landing/Background_Latino_Page.jpg";

export type Community = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export const communities: Community[] = [
  {
    title: "Hispanic or Latino",
    description:
      "Connect with culturally responsive advising, bilingual support, and campus programs that uplift students with Spanish-speaking or Latin American heritage.",
    href: "/groups/hispanic-or-latino",
    image: latinoSomosHeroImage,
  },
  {
    title: "Ummah-Muslim",
    description:
      "Find prayer spaces, student associations, halal dining nearby, and mentors who understand navigating campus life as part of the Muslim ummah.",
    href: "/groups/ummah-muslim",
    image:
      "https://plus.unsplash.com/premium_photo-1663013656159-a853ffa09693?auto=format&fit=crop&w=600&h=300&q=80",
  },
  {
    title: "Asian",
    description:
      "Discover support networks, student organizations, and academic opportunities that reflect the diversity of East, South, and Southeast Asian communities.",
    href: "/groups/asian",
    image:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=600&h=300&q=80",
  },
  {
    title: "Black or African-American",
    description:
      "Find mentoring, leadership programs, and community spaces that celebrate Black identity and support belonging across campus life.",
    href: "/groups/black-or-african-american",
    image:
      "https://images.unsplash.com/photo-1552710307-537199cd41c0?auto=format&fit=crop&w=600&h=300&q=80",
  },
  {
    title: "American Indian",
    description:
      "Explore resources centered on Indigenous identity, tribal community ties, and student success pathways for Native peoples connected to UCR.",
    href: "/groups/american-indian",
    image:
      "https://images.unsplash.com/photo-1691412353606-a61b79863611?auto=format&fit=crop&w=600&h=300&q=80",
  },
  {
    title: "White",
    description:
      "Navigate opportunities for involvement, academic growth, and cross-cultural engagement while building inclusive community with peers from all backgrounds.",
    href: "/groups/white",
    image:
      "https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?auto=format&fit=crop&w=600&h=300&q=80",
  },
];
