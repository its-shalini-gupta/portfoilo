import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Todo list",
    description: "A Todo list built with React, FastAPI, and PostgreSQL.",
    link: "https://github.com/its-shalini-gupta/todo-list-react-fastapi",
    image:
      "https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using WebSockets, FastAPI, and React.",
    link: "https://github.com/its-shalini-gupta/chat-app-react-fastapi",
    image:
      "https://img.freepik.com/free-vector/online-discussion-concept-illustration_114360-1643.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Food Delivery",
    description: "Food delivery expenses with this React web application.",
    link: "https://github.com/its-shalini-gupta/react-food-delivery",
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
