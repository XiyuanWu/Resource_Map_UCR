import LandingHeader from "./components/LandingHeader";
import HeroSection from "./components/HeroSection";
import CommunitySection from "./components/CommunitySection";
import ManyCommunitiesSection from "./components/ManyCommunitiesSection";

function App() {
  return (
    <main className="min-h-screen w-full bg-white">
      <LandingHeader />
      <HeroSection />
      <CommunitySection />
      <ManyCommunitiesSection />
    </main>
  );
}

export default App;
