import AboutSection from "./components/AboutSection/AboutSection";
import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import ProyectsSection from "./components/ProyectsSection/ProyectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {
  return (
    <main className="overflow-x-hidden overflow-y-visible">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProyectsSection />
      <SkillsSection />
    </main>
  );
}

export default App;
