import React from "react";
import { Code, Palette, Bot } from "lucide-react";
import { skillsData } from "../Data/DB";
export const Skills = () => {
  return (
    <div>
      {" "}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
