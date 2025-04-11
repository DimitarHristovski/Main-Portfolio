import React from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n/i18";
import Hero from "./components/Hero";
import { Skills } from "./components/Skills";
import { Activity } from "./components/Activity";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      {" "}
      <ThemeProvider>
        <LanguageSwitcher />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Activity />
        <Contact />
        <Footer />{" "}
      </ThemeProvider>
    </div>
  );
}

export default App;
