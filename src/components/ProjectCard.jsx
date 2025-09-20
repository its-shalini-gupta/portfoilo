// ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{title}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;
