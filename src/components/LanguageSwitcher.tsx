import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "mk", label: "МК" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Language changed to:", lng);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white shadow-md rounded-full px-3 py-1 flex gap-2 items-center border border-gray-200">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleChange(lang.code)}
            className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors duration-200
              ${
                i18n.language === lang.code
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {lang.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
