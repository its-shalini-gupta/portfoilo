import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        flex justify-between items-center px-6 py-4 shadow-md
        bg-navbar dark:bg-[#1A120B] sticky top-0 z-50
        transition-colors duration-500
      "
    >
      <h1 className="text-2xl font-bold text-dark dark:text-[#FAF5E4]">
        MyPortfolio
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium text-muted-brown dark:text-[#D9C9B3]">
        <li>
          <a
            href="#about"
            className="hover:text-accent dark:hover:text-[#FFD07F]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-accent dark:hover:text-[#FFD07F]"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-accent dark:hover:text-[#FFD07F]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-accent dark:hover:text-[#FFD07F]"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-[#F5E9DA] dark:bg-[#3C2F2F] transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-[#FFD966]" />
          ) : (
            <Moon className="w-5 h-5 text-charcoal" />
          )}
        </button>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-dark dark:text-[#FAF5E4]" />
          ) : (
            <Menu className="w-6 h-6 text-dark dark:text-[#FAF5E4]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-navbar dark:bg-[#1A120B] flex flex-col items-center py-4 space-y-4 font-medium text-muted-brown dark:text-[#D9C9B3] md:hidden">
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent dark:hover:text-[#FFD07F]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent dark:hover:text-[#FFD07F]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent dark:hover:text-[#FFD07F]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent dark:hover:text-[#FFD07F]"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
