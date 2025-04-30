import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      projectDescriptions: {
        igraliste:
          "A mobile-first E-store MVP built for a client selling clothes (currently in development).",
        learnhub: "An open-source project I'm currently working on.",
        furwood: "A simple E-store I created.",
        clothes: "An SEO-friendly E-store built using Next.js.",
        marinov:
          "A mobile-first E-store MVP for a client selling jewelry (currently in development).",
        portfolio: "A responsive portfolio built for an online competition.",
        educenter: "A simple educational website I created.",
        carrace: "A simple racing game I created (desktop only).",
      },
      projects: "Featured Projects",
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
      SkillsSectionTitle: "What I Do",

      SkillFullstackDescription:
        "Experienced in creating end-to-end web applications with modern stacks like React, Next.js, TypeScript, and modern CSS frameworks alongside Express.js and Node.js, incorporating both RDBMS and NoSQL databases.",
      SkillAIDescription:
        "Skilled in designing and developing intelligent AI agents capable of autonomous decision-making, task automation, conversational interactions, and adaptive responses using state-of-the-art machine learning frameworks and APIs.",
      SkillUIDescription:
        "Proficient in designing intuitive, user-centric interfaces using Figma and other prototyping tools, applying UX best practices, responsive design, and accessibility guidelines to create outstanding user experiences.",
    },
  },
  de: {
    translation: {
      projectDescriptions: {
        igraliste:
          "Ein Mobile-First E-Store MVP für einen Kunden, der Kleidung verkauft (derzeit in Entwicklung).",
        learnhub: "Ein Open-Source-Projekt, an dem ich derzeit arbeite.",
        furwood: "Ein einfacher E-Store, den ich erstellt habe.",
        clothes: "Ein SEO-freundlicher E-Store, erstellt mit Next.js.",
        marinov:
          "Ein Mobile-First E-Store MVP für einen Kunden, der Schmuck verkauft (derzeit in Entwicklung).",
        portfolio:
          "Ein responsives Portfolio, das ich für einen Online-Wettbewerb erstellt habe.",
        educenter: "Eine einfache Bildungswebsite, die ich erstellt habe.",
        carrace:
          "Ein einfaches Rennspiel, das ich erstellt habe (nur für Desktop).",
      },

      projects: "Ausgewählte Projekte",

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
      SkillsSectionTitle: "Was ich mache",

      SkillFullstackDescription:
        "Erfahren in der Entwicklung von End-to-End-Webanwendungen mit modernen Stacks wie React, Next.js, TypeScript und modernen CSS-Frameworks sowie Express.js und Node.js, unter Einbeziehung von sowohl relationalen als auch NoSQL-Datenbanken.",
      SkillAIDescription:
        "Fähig in der Gestaltung und Entwicklung intelligenter KI-Agenten, die autonome Entscheidungsfindung, Aufgabenautomatisierung, konversationelle Interaktionen und adaptive Reaktionen mit modernsten Maschinenlern-Frameworks und APIs durchführen können.",
      SkillUIDescription:
        "Kompetent in der Gestaltung intuitiver, benutzerzentrierter Schnittstellen mit Figma und anderen Prototyping-Tools, Anwendung von UX-Best Practices, Responsive Design und Zugänglichkeitsrichtlinien, um herausragende Benutzererlebnisse zu schaffen.",
    },
  },
  mk: {
    translation: {
      projectDescriptions: {
        igraliste:
          "Мобилна прво E-store апликација (MVP) за клиент кој продава облека (во развој).",
        learnhub: "Опен-сорс проект на кој моментално работам.",
        furwood: "Едноставен E-store што го имам изработено.",
        clothes: "SEO-пријателски E-store изработен со Next.js.",
        marinov:
          "Мобилна прво E-store апликација (MVP) за клиент што продава накит (во развој).",
        portfolio: "Респонзивно портфолио изработено за онлајн натпревар.",
        educenter: "Едноставна едукативна веб-страница што ја имам направено.",
        carrace:
          "Едноставна тркачка игра што ја имам направено (само за десктоп).",
      },

      projects: "Избрани проекти",
      HeroTitle: "Димитар Христовски",
      HeroParagraph: "Full-Stack-Developer",
      HeroDescription:
        "Специјализиран за создавање на модерни веб апликации со Next.js, React и TypeScript. Фокусиран на создавање на ефикасни, скалабилни и кориснички пријатни решенија.",
      AboutTitle: "За мене",
      AboutParagraph1:
        "Како Full-Stack-Developer, специјализиран сум за создавање на модерни веб апликации со Next.js, React и TypeScript. Мојот фокус е на создавање на ефикасни, скалабилни и кориснички пријатни решенија кои решаваат реални проблеми.",
      AboutParagraph2:
        "Имам искуство во развој на различни видови апликации, од платформи за е-трговија до образовни веб-сајтови. Страствен сум за чист код, оптимизација на перформансите и создавање на изключителни кориснички искуства.",
      AboutTagline: "Секогаш учам, секогаш кодирам",
      ContactTitle: "Да се поврземе",
      ContactDescription:
        "Секогаш сум заинтересиран да слушнам за нови проекти и можности. Дали имате прашање или само сакате да кажете здраво, слободно контактирајте!",
      ContactButton: "Воспостави контакт",
      SkillsSectionTitle: "Што правам",

      SkillFullstackDescription:
        "Искуство во креирање Full-Stack веб-апликации со современи технологии како React, Next.js, TypeScript и CSS рамки, заедно со Express.js и Node.js, користејќи и релациски и NoSQL бази на податоци.",
      SkillAIDescription:
        "Вешт во дизајнирање и развој на интелигентни АИ агенти способни за автономно донесување одлуки, автоматизација на задачи, конверзациски интеракции и адаптивни реакции со користење на најсовремени рамки за машинско учење и API-ја.",
      SkillUIDescription:
        "Искусen во дизајнирање интуитивни, кориснички ориентирани интерфејси со користење на Figma и други алатки за прототипирање, применувајќи најдобри UX практики, адаптивен дизајн и насоки за достапност за да се создадат извонредни кориснички искуства.",
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
