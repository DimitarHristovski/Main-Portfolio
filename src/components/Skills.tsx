import React from "react";
import { Code, Palette, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

export const Skills = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {" "}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-12 text-center">
          {t("SkillsSectionTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6  rounded-xl hover:shadow-lg transition-shadow">
            <div className=" mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t("Fullstack Develpoment")}
            </h3>
            <p>{t("SkillFullstackDescription")}</p>
          </div>

          <div className="p-6  rounded-xl hover:shadow-lg transition-shadow">
            <div className=" mb-4">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("AI")}</h3>
            <p>{t("SkillAIDescription")}</p>
          </div>

          <div className="p-6  rounded-xl hover:shadow-lg transition-shadow">
            <div className=" mb-4">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("UIUX")}</h3>
            <p>{t("SkillUIDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
