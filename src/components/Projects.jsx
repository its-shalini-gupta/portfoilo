import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Store",
    description: "A jewelry e-commerce store built with React, FastAPI, and PostgreSQL.",
    image:
      "https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using WebSockets, FastAPI, and React.",
    image:
      "https://img.freepik.com/free-vector/online-discussion-concept-illustration_114360-1643.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Expense Tracker",
    description: "Track and manage expenses with a full-stack web app.",
    image:
      "https://img.freepik.com/free-vector/finance-concept-illustration_114360-2235.jpg",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-8 py-16 bg-sectionBg dark:bg-darkCardBg transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center text-accentLight dark:text-accentDark mb-10">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
