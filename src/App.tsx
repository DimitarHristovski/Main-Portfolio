import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Hero from "./components/Hero";
import { Skills } from "./components/Skills";
import { Activity } from "./components/Activity";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Switch } from "./components/Switch";
import { Moon, Sun } from "lucide-react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n/i18";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <LanguageSwitcher />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Activity />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
