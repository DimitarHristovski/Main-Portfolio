import React from "react";
import { useTheme } from "./contexts/ThemeContext";

export const Activity = () => {
  const { theme } = useTheme();

  return (
    <div>
      <section
        className={`py-20 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold  mb-12 text-center">GitHub</h2>
          <div className=" rounded-xl shadow-lg p-6">
            <img
              src="https://ghchart.rshah.org/DimitarHristovski"
              alt="GitHub Contributions"
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
