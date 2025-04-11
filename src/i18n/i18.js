// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      HeroTitle: "Dimitar Hristovski",
      HeroParagraph: "Full Stack Developer",
      HeroDescription:
        "Specializing in building modern web applications with Next.js, React, and TypeScript. Focused on creating efficient, scalable, and user-friendly solutions.",
      AboutTitle: "About Me",
      AboutParagraph1:
        "As a Full Stack Developer, I specialize in creating modern web applications using Next.js, React, and TypeScript. My focus is on building efficient, scalable, and user-friendly solutions that solve real-world problems.",
      AboutParagraph2:
        "I have experience in developing various types of applications, from e-commerce platforms to educational websites. I'm passionate about clean code, performance optimization, and creating exceptional user experiences.",
      AboutTagline: "Always learning, always coding",
      ContactTitle: "Let's Connect",
      ContactDescription:
        "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      ContactButton: "Get in Touch",
      SkillFullstack: "Fullstack Development",
      SkillAIDescription:
        "Skilled in designing and developing intelligent AI agents capable of autonomous decision-making, task automation, conversational interactions, and adaptive responses using state-of-the-art machine learning frameworks and APIs.",
      SkillUIDescription:
        "Proficient in designing intuitive, user-centric interfaces using Figma and other prototyping tools, applying UX best practices, responsive design, and accessibility guidelines to create outstanding user experiences.",
    },
  },
  de: {
    translation: {
      HeroTitle: "Dimitar Hristovski",
      HeroParagraph: "Full-Stack-Entwickler",
      HeroDescription:
        "Spezialisiert auf die Entwicklung moderner Webanwendungen mit Next.js, React und TypeScript. Fokussiert auf effiziente, skalierbare und benutzerfreundliche Lösungen.",
      AboutTitle: "Über mich",
      AboutParagraph1:
        "Als Full-Stack-Entwickler bin ich spezialisiert auf die Erstellung moderner Webanwendungen mit Next.js, React und TypeScript. Mein Ziel ist es, effiziente, skalierbare und benutzerfreundliche Lösungen zu entwickeln, die echte Probleme lösen.",
      AboutParagraph2:
        "Ich habe Erfahrung in der Entwicklung verschiedener Arten von Anwendungen, von E-Commerce-Plattformen bis hin zu Bildungswebsites. Ich lege großen Wert auf sauberen Code, Leistungsoptimierung und die Schaffung außergewöhnlicher Benutzererfahrungen.",
      AboutTagline: "Immer am Lernen, immer am Programmieren",
      ContactTitle: "Lass uns verbinden",
      ContactDescription:
        "Ich bin immer daran interessiert, von neuen Projekten und Möglichkeiten zu hören. Wenn Sie eine Frage haben oder einfach nur Hallo sagen möchten, zögern Sie nicht, Kontakt aufzunehmen!",
      ContactButton: "Kontakt aufnehmen",
      SkillFullstack: "Fullstack-Entwicklung",
      SkillAIDescription:
        "Fähig in der Gestaltung und Entwicklung intelligenter KI-Agenten, die autonome Entscheidungsfindung, Aufgabenautomatisierung, konversationelle Interaktionen und adaptive Reaktionen mit modernsten Maschinenlern-Frameworks und APIs durchführen können.",
      SkillUIDescription:
        "Kompetent in der Gestaltung intuitiver, benutzerzentrierter Schnittstellen mit Figma und anderen Prototyping-Tools, Anwendung von UX-Best Practices, Responsive Design und Zugänglichkeitsrichtlinien, um herausragende Benutzererlebnisse zu schaffen.",
    },
  },
  mk: {
    translation: {
      HeroTitle: "Димитар Христовски",
      HeroParagraph: "Развивач на целосни решенија",
      HeroDescription:
        "Специјализиран за создавање на модерни веб апликации со Next.js, React и TypeScript. Фокусиран на создавање на ефикасни, скалабилни и кориснички пријатни решенија.",
      AboutTitle: "За мене",
      AboutParagraph1:
        "Како развивач на целосни решенија, специјализиран сум за создавање на модерни веб апликации со Next.js, React и TypeScript. Мојот фокус е на создавање на ефикасни, скалабилни и кориснички пријатни решенија кои решаваат реални проблеми.",
      AboutParagraph2:
        "Имам искуство во развој на различни видови апликации, од платформи за е-трговија до образовни веб-сајтови. Страствен сум за чист код, оптимизација на перформансите и создавање на изключителни кориснички искуства.",
      AboutTagline: "Секогаш учам, секогаш кодирам",
      ContactTitle: "Да се поврземе",
      ContactDescription:
        "Секогаш сум заинтересиран да слушнам за нови проекти и можности. Дали имате прашање или само сакате да кажете здраво, слободно контактирајте!",
      ContactButton: "Воспостави контакт",
      SkillFullstack: "Развој на целосни решенија",
      SkillAIDescription:
        "Вешт во дизајнирање и развој на интелигентни АИ агенти способни за автономно донесување одлуки, автоматизација на задачи, конверзациски интеракции и адаптивни реакции со користење на најсовремени рамки за машинско учење и API-ја.",
      SkillUIDescription:
        "Способен за дизајнирање на интуитивни, кориснички ориентирани интерфејси со користење на Figma и други алатки за прототипирање, применувајќи најдобри UX практики, одговорен дизајн и сме...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
console.log(i18n.language);

export default i18n;
