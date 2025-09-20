import React from "react";
import MyCV from "../assets/test-pdf.pdf";

const Hero = () => {
  return (
    <section className="bg-sectionBg dark:bg-darkCardBg transition-colors duration-500 px-8 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-accentLight dark:text-accentDark">
            Hi, I’m Shalini 👋
          </h1>
          <p className="mt-4 text-lg text-mutedLight dark:text-mutedDark">
            A passionate Full Stack Developer skilled in building modern, responsive, and scalable web applications.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:justify-start justify-center">
            <a
              href="#contact"
              className="
                px-6 py-3 bg-btnBgLight text-white rounded-lg
                hover:bg-[#e67617]
                dark:bg-btnBgDark dark:text-textDark dark:hover:bg-[#e0a240]
                transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40
              "
            >
              Hire Me
            </a>


            <a
              href={MyCV}
              target="_blank"
              rel="noopener noreferrer"
              className="
    px-6 py-3 border-2 border-btnBgLight text-btnBgLight 
    dark:border-btnBgDark dark:text-btnBgDark 
    rounded-lg transition-all duration-300 
    hover:bg-btnBgLight hover:text-white 
    dark:hover:bg-btnBgDark dark:hover:text-white 
    hover:scale-105 hover:shadow-lg hover:-translate-y-1
  "
            >
              View CV
            </a>

          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://img.freepik.com/free-vector/young-female-programmer-working-computer-it-professional-programming-coding_335657-3009.jpg"
            alt="Girl with Laptop"
            className="w-full max-w-sm mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
