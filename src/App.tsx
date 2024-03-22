
import { proyects } from "./assets/ProyectsData";
import AboutSection from "./components/AboutSection/AboutSection";

import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import ProyectsSection from "./components/ProyectsSection/ProyectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";


function App() {


  return (
    <main className="contents">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProyectsSection proyects={proyects} />
      <SkillsSection />
    </main>
  );
}

export default App;
