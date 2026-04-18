import LandingHeader from "../../../components/LandingHeader";

function GroupPlaceholderPage({ title }) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LandingHeader />
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-[#0f2f69]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-[#314a74]">
          Placeholder page. Due to time constraints, this community page will be
          built later.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0f2f69] px-5 py-2.5 font-display text-base font-bold text-white transition hover:bg-[#0b2453]"
        >
          Back to Home
        </a>
      </section>
    </main>
  );
}

export default GroupPlaceholderPage;
