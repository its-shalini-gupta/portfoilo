import React from "react";
import { FaPython, FaPhp, FaLaravel, FaJsSquare, FaDatabase , FaReact} from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiMysql, SiTypescript, } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython />, color: "bg-yellow-200 text-yellow-700" },
  { name: "FastAPI", icon: <SiFastapi />, color: "bg-green-200 text-green-700" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-blue-200 text-blue-700" },
  { name: "PHP", icon: <FaPhp />, color: "bg-indigo-200 text-indigo-700" },
  { name: "Laravel", icon: <FaLaravel />, color: "bg-red-200 text-red-700" },
  { name: "MySQL", icon: <SiMysql />, color: "bg-orange-200 text-orange-700" },
  { name: "SQL", icon: <FaDatabase />, color: "bg-purple-200 text-purple-700" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "bg-yellow-300 text-yellow-800" },
  { name: "React", icon: <FaReact />, color: "bg-cyan-200 text-cyan-700" },
  { name: "TypeScript", icon: <SiTypescript />, color: "bg-blue-100 text-blue-700" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-8 py-16 bg-sectionBg dark:bg-darkCardBg transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center text-accentLight dark:text-accentDark mb-10">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer ${skill.color}`}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="font-semibold text-textLight dark:text-textLight">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
