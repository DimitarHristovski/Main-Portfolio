import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Language changed to:", lng);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => handleChange("en")}>English</button>
      <button onClick={() => handleChange("de")}>Deutsch</button>
      <button onClick={() => handleChange("mk")}>Македонски</button>
    </div>
  );
};

export default LanguageSwitcher;
