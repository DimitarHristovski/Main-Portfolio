import React from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./contexts/ThemeContext";

export const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div>
      {" "}
      <section
        className={`py-20 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-500"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold  mb-8">{t("ContactTitle")}</h2>
          <p className=" mb-8 max-w-2xl mx-auto">{t("ContactDescription")}</p>
          <a
            href="mailto:dimihbt@yahoo.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("ContactButton")} <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};
