import { motion } from "framer-motion";

const projects = [
  {
    title: "React Portfolio",
    desc: "Personal portfolio built using React, Router and animations.",
    tech: "React • Router • Framer Motion",
  },
  {
    title: "Todo App",
    desc: "Task manager with add, delete and state management features.",
    tech: "React • useState • Hooks",
  },
  {
    title: "Weather App",
    desc: "Weather application using public API and async calls.",
    tech: "React • API • Fetch",
  },
];

function Projects() {
  return (
    <section className="page projects-section">

      {/* BACKGROUND EFFECT */}
      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -14, scale: 1.04 }}
          >
            <h3>{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <span className="project-tech">{project.tech}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
