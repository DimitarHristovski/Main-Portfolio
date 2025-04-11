import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../public/assets/Data/Data";
import { useTranslation } from "react-i18next";
import { useTheme } from "./contexts/ThemeContext";

export const Projects = () => {
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
        {" "}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold  mb-12 text-center">
            {t("projects")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="mb-4">{t(project.descriptionKey)}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                    {project.hostedUrl !== "#" && (
                      <a
                        href={project.hostedUrl}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
