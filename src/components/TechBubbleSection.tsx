import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiN8N,
  SiVercel,
  SiShadcnui,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

import { useTheme } from "./contexts/ThemeContext";

// List of technologies
const techIcons = [
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiNextdotjs size={40} />, name: "Next.js" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
  { icon: <SiNodedotjs size={40} />, name: "Node.js" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind" },
  { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiFigma size={40} />, name: "Figma" },
  { icon: <SiN8N size={40} />, name: "N8N" },
  { icon: <SiVercel size={40} />, name: "Vercel" },
  { icon: <SiShadcnui size={40} />, name: "Shadcnui" },
  { icon: <BiLogoVisualStudio size={40} />, name: "VisualStudio" },
];

export default function TechBubbleSection() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full py-12 bg-gradient-to-r  flex justify-center overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-500"
      }`}
    >
      <div className="flex gap-10">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            animate={{
              y: [0, -40, 0], // subtle up and down float
            }}
            transition={{
              duration: 2 + index * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-4 rounded-full bg-white/10 backdrop-blur shadow-lg hover:scale-110 transition-transform"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
