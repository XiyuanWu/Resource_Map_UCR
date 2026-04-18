import placeholderImage from "../assets/landing/ucr background.jpg";

function ManyCommunitiesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
      <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-[#fffaf0] via-[#fffdf8] to-[#f5f8ff] md:grid md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 flex flex-col justify-center px-7 py-10 md:px-12 md:py-14">
          <p className="font-display text-sm font-extrabold tracking-[0.18em] text-[#2a4b84]">
            ONE UCR. MANY COMMUNITIES.
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-[#0f2f69]">
            Stronger Together.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-[#314a74]">
            Belonging Maps connect you to campus and community resources that
            celebrate identity, support success, and foster belonging.
          </p>
        </div>

        <div className="relative min-h-56 overflow-hidden">
          <img
            src={placeholderImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-right opacity-85"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#fffdf8] via-[#fffdf8]/35 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#fffdf8]/65 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default ManyCommunitiesSection;
