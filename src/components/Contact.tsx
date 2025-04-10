import React from "react";
import { Mail } from "lucide-react";
export const Contact = () => {
  return (
    <div>
      {" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let's Connect
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
          <a
            href="mailto:dimihbt@yahoo.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};
