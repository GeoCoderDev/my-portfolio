
import ContactSection from "./components/ContactSection/ContactSection";
import { proyects } from "./assets/ProyectsData";
import StudiesSection from "./components/StudiesSection/StudiesSection";
import AboutSection from "./components/AboutSection/AboutSection";

import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import ProyectsSection from "./components/ProyectsSection/ProyectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import FooterSection from "./components/FooterSection/FooterSection";
import { studies } from './assets/studiesData';


function App() {


  return (
    <main className="contents">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProyectsSection proyects={proyects} />
      <SkillsSection />
      <StudiesSection studies={studies}/>
      <ContactSection />
      <FooterSection />
    </main>
  );
}

export default App;
