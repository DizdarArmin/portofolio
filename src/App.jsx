import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import DesktopNavigation from "./components/DesktopNavigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <MobileNavigation />
      <DesktopNavigation />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
