/**
 * SOMOS UCR hero (Latino community page) — ported from Latino_Page branch.
 */
function SomosHeroSection({ heroImage }) {
  return (
    <section
      id="overview"
      className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10"
    >
      <div className="relative flex min-h-[500px] items-center overflow-hidden rounded-4xl bg-gray-900 shadow-2xl">
        <img
          src={heroImage}
          alt="Campus scene with cultural banners"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-20 flex flex-col justify-center px-8 py-12 md:px-16 md:py-20">
          <h1 className="font-display text-6xl font-bold tracking-tight text-white md:text-7xl">
            SOMOS UCR
          </h1>

          <p className="mt-2 font-display text-lg font-extrabold tracking-[0.18em] text-[#ECC24D] uppercase md:text-xl">
            Latino Community Belonging Map
          </p>

          <div className="mt-6 space-y-4">
            <p className="font-display text-[15px] font-bold tracking-widest text-[#ECC24D]">
              Celebrating Culture. Building Community. Supporting Success.
            </p>

            <p className="max-w-xl font-sans text-sm leading-relaxed text-gray-200 md:text-base">
              This map highlights spaces, programs, businesses, and
              organizations that support and celebrate Latinx students, faculty,
              staff, and the greater Riverside community.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#0f2f69] px-7 py-3 font-display text-base font-bold text-white transition-all hover:scale-105 hover:bg-[#1a4185]"
            >
              Back to Home
            </a>
            <a
              href="#resource"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 font-display text-base font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
            >
              Jump to Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SomosHeroSection;
