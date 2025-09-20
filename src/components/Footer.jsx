import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-4 text-center bg-navbar dark:bg-darkBg text-mutedLight dark:text-mutedDark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Shalini Gupta. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
