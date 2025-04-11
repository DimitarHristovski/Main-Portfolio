import React from "react";
import { Mail } from "lucide-react";
import { ContactInfo } from "./../Data/DB";
export const Contact = () => {
  return (
    <div>
      {" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {ContactInfo.title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {ContactInfo.description}
          </p>
          <a
            href="mailto:dimihbt@yahoo.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {ContactInfo.buttonText} <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};
