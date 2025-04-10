import React from "react";
import { Coffee } from "lucide-react";
const About = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="src/assets/start.jpeg"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-gray-600 mb-6">
                As a Full Stack Developer, I specialize in creating modern web
                applications using Next.js, React, and TypeScript. My focus is
                on building efficient, scalable, and user-friendly solutions
                that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-6">
                I have experience in developing various types of applications,
                from e-commerce platforms to educational websites. I'm
                passionate about clean code, performance optimization, and
                creating exceptional user experiences.
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <Coffee size={20} />
                <span>Always learning, always coding</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
