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
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <div
      className={`w-full py-12 px-4 sm:px-8 md:px-16 flex justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="flex flex-wrap gap-6 justify-center max-w-7xl">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            animate={{
              y: clickedIndex === index ? 500 : [40, -40, 40],
              scale: clickedIndex === index ? [1, 1.5, 0.5, 1] : 1,
            }}
            transition={{
              duration: clickedIndex === index ? 0.6 : 2 + index * 0.1,
              repeat: clickedIndex === index ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur shadow-md hover:scale-110 transition-transform cursor-pointer"
            title={tech.name}
            onClick={() => {
              setClickedIndex(index);
              setTimeout(() => setClickedIndex(null), 1000);
            }}
          >
            <div className="text-2xl sm:text-3xl">{tech.icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
