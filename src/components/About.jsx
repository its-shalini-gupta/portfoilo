import React from "react";
import ProfileImg from "../assets/girl-img.webp";

const About = () => {
  return (
    <section
      id="about"
      className="px-8 py-16 bg-sectionBg dark:bg-darkCardBg transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center text-accentLight dark:text-accentDark mb-12">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
        {/* Image on the Left with hover animation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={ProfileImg}
            alt="Professional woman"
            className="
            w-60 h-60 rounded-full shadow-lg object-cover
            transform transition-transform duration-500 ease-in-out
            hover:scale-105 hover:rotate-1 hover:shadow-xl
          "
          />
        </div>


        {/* Text on the Right, top-aligned */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-mutedLight dark:text-mutedDark">
            I am a Full Stack Developer with experience in{" "}
            <strong>
              Python, FastAPI, PostgreSQL, PHP, Laravel, MySQL, SQL, and JavaScript
            </strong>
            . I love creating user-friendly applications, solving real-world problems, and building scalable systems. My passion lies in crafting beautiful UIs and strong backend architectures.
            <br /><br />
            I am a lifelong learner, always eager to explore new technologies and best practices. Collaboration and effective communication are at the core of my work ethic, allowing me to thrive in team environments and deliver high-quality solutions.
            {/* <br /><br /> */}
            {/* When I'm not coding, I enjoy contributing to open-source projects, reading tech blogs, and experimenting with new frameworks to stay ahead in this fast-evolving industry. */}
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
