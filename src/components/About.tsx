import React from "react";
import { Coffee } from "lucide-react";
import { AboutInfo } from "./../Data/DB";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const aboutParagraphKeys = ["AboutParagraph1", "AboutParagraph2"];

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/start.jpeg"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("AboutTitle")}
              </h2>
              {aboutParagraphKeys.map((key, index) => (
                <p key={index} className="text-gray-600 mb-6">
                  {t(key)}
                </p>
              ))}
              <div className="flex items-center gap-2 text-gray-600">
                <Coffee size={20} />
                <span>{t("AboutTagline")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
