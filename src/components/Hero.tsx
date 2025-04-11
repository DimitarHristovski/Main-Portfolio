import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  GitFork,
  Star,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./contexts/ThemeContext";
const Hero = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div>
      {" "}
      <section
        className={`min-h-screen flex flex-col justify-center items-center relative px-4 bg-gradient-to-b ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {t("HeroTitle")}{" "}
          </h1>
          <p className="text-xl md:text-2xl  mb-8">{t("HeroParagraph")} </p>
          <p className="text-lg  mb-8 max-w-2xl mx-auto">
            {t("HeroDescription")}{" "}
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/DimitarHristovski"
              className=" hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="linkedin.com/in/dimitar-hristovski-1711a9163
              "
              className=" hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dimihbt@yahoo.com"
              className=" hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
          {/* GitHub Stats */}
          <div className=" p-6 rounded-xl shadow-lg mb-12">
            <div className="flex justify-center gap-8 mb-6">
              <iframe
                src="https://github-readme-stats.vercel.app/api?username=DimitarHristovski&show_icons=true&theme=transparent"
                height="200"
                width="400"
                frameBorder="0"
                scrolling="no"
                title="GitHub Stats"
                className="hidden md:block"
              />
              <iframe
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=DimitarHristovski&layout=compact&theme=transparent"
                height="200"
                width="300"
                frameBorder="0"
                scrolling="no"
                title="Top Languages"
                className="hidden md:block"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/DimitarHristovski?tab=repositories"
                className="flex items-center justify-center gap-2 p-3  rounded-lg hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork size={20} className="text-blue-600" />
                <span className="font-semibold">Repositories</span>
              </a>
              <a
                href="https://github.com/DimitarHristovski?tab=stars"
                className="flex items-center justify-center gap-2 p-3  rounded-lg hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star size={20} className="text-yellow-500" />
                <span className="font-semibold">Stars</span>
              </a>
              <a
                href="https://github.com/DimitarHristovski?tab=followers"
                className="flex items-center justify-center gap-2 p-3  rounded-lg hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users size={20} className="text-green-600" />
                <span className="font-semibold">Followers</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce cursor-pointer">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
