import React from "react";
import { Code, Palette, Bot } from "lucide-react";
export const Skills = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Fullstack Development",
      description:
        "Experienced in creating end-to-end web applications with modern stacks React, Next.js, TypeScript, and modern CSS frameworks with Express.js and Node.js in other words MERN-STACK with knowlede of the RDBMS and NoSQL databases",
    },
    {
      icon: <Bot size={24} />,
      title: "AI Engineering",
      description:
        "Skilled in designing and developing intelligent AI agents capable of autonomous decision-making, task automation, conversational interactions, and adaptive responses using state-of-the-art machine learning frameworks and APIs.",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description:
        "Skilled in designing intuitive, user-centric interfaces with Figma and prototyping tools, applying UX best practices, responsive design, and accessibility guidelines to create exceptional user experiences.",
    },
  ];
  return (
    <div>
      {" "}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
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
