import placeholderImage from "../assets/landing/ucr background.jpg";
import CommunityCard from "./CommunityCard";
import { communities } from "../data/communities";

function CommunitySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
      <div className="mb-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-[#0f2f69]">
          Explore By Community
        </h2>
        <p className="mt-2 font-sans text-lg text-[#314a74]">
          Select a community to view its belonging map and related resources.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 md:gap-6">
        {communities.map((community) => (
          <CommunityCard
            key={community.title}
            image={placeholderImage}
            title={community.title}
            description={community.description}
            href={community.href}
          />
        ))}
      </div>
    </section>
  );
}

export default CommunitySection;
