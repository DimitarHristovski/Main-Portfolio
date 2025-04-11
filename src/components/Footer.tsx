import React from "react";
import { useTheme } from "./contexts/ThemeContext";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-8 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-500"
      }  `}
    >
      <div className="max-w-4xl mx-auto px-4 text-center ">
        <p>
          © {new Date().getFullYear()} Dimitar Hristovski. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
