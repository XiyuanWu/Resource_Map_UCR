import heroBackground from '../assets/landing/ucr background.jpg'

function HeroSection() {
  return (
    <section
      className="relative flex min-h-[min(76vh,36rem)] items-center overflow-visible bg-blue-900 py-14 md:py-18"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <div className="mx-auto w-full max-w-4/5">
        <div className="max-w-2xl text-left">
          <p className="mb-4 font-display text-6xl font-bold text-blue-50 whitespace-nowrap">
            UCR Belonging Maps
          </p>

          <h1 className="mb-3 font-display text-3xl font-semibold leading-tight tracking-tight text-yellow-400 whitespace-nowrap">
            Find Community. Find Connection. Find Belonging.
          </h1>

          <p className="max-w-2xl font-sans text-lg font-medium leading-relaxed text-blue-100">
            Explore resources, places, and organizations that support students,
            faculty, staff, and across communities.
          </p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-52 w-full">
        <svg viewBox="0 0 1400 200" className="h-full w-full" preserveAspectRatio="none">
          {/* White section below — draw first (under the gold) */}
          <path
            d="M0,158 Q700,42 1400,158 L1400,200 L0,200 Z"
            fill="white"
          />
          <path
            d="M0,146 Q700,34 1400,146 L1400,158 Q700,42 0,158 L0,158 L0,146 Z"
            fill="#f0b319"
          />
        </svg>
      </div>

    </section>
  )
}

export default HeroSection