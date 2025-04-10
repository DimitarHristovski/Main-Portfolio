import Hero from "./components/Hero";
import { Skills } from "./components/Skills";
import { Activity } from "./components/Activity";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <Skills />
      <Activity />

      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
