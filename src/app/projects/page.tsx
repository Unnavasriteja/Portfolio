"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated cloud infrastructure provisioning using Terraform.",
    techStack: ["Terraform", "AWS", "Jenkins"],
    github: "https://github.com/NotHarshhaa/DevOps-Projects/tree/master/DevOps-Project-20",
    demo: "https://example.com/demo",
  },
  {
    title: "Kubernetes Deployment",
    description:
      "Designed scalable Kubernetes clusters for microservices deployment.",
    techStack: ["Kubernetes", "Docker", "Helm"],
    github: "https://github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform",
    demo: "https://example.com/demo",
  },
  {
    title: "CI/CD Pipeline Setup",
    description: "Implemented CI/CD pipelines for efficient software delivery.",
    techStack: ["Jenkins", "GitLab CI", "AWS CodePipeline"],
    github: "https://github.com/NotHarshhaa/DevOps-Projects/tree/master/DevOps-Project-07",
    demo: "",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    description: "More projects will be added soon. Stay tuned!",
    techStack: [],
    github: "",
    demo: "",
    comingSoon: true,
  },
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-20 max-w-6xl pt-32"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h1
        className="text-5xl font-bold mb-10 text-center text-white"
        variants={cardVariants}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative bg-[rgba(0,0,0,0.5)] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              rotateZ: 2,
            }}
          >
            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 z-0 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                ) : project.comingSoon ? (
                  <span className="text-gray-500 cursor-not-allowed">
                    <FaGithub className="text-2xl" />
                  </span>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700"
                    aria-label={`View ${project.title} demo`}
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                ) : project.comingSoon ? (
                  <span className="text-gray-500 cursor-not-allowed">
                    <FaExternalLinkAlt className="text-2xl" />
                  </span>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
