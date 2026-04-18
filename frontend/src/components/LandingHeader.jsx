import ucrLogo from '../assets/UC_Riverside_logo.svg.png'

const navItems = ['Home', 'About', 'How It Works', 'Acknowledgements']

function LandingHeader() {
  return (
    <header className="border-b border-[#b7c7e1] bg-white">
      <div className="mx-auto flex w-full items-center justify-between gap-8 px-6 py-3 md:px-10 md:py-4">
        <img
          src={ucrLogo}
          alt="University of California, Riverside"
          className="h-[50px] w-auto object-contain md:h-[64px]"
        />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-12">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  href="#"
                  className={`font-display text-[20px] font-bold tracking-tight text-[#0d2e6a] transition hover:text-[#f2b617] ${
                    index === 0
                      ? 'border-b-4 border-[#f2b617] pb-1'
                      : 'border-b-4 border-transparent pb-1'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default LandingHeader