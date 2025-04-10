import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Dimitar Hristovski. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
