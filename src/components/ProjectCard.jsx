import { motion } from "framer-motion";

function ProjectCard({ title, description, tech, github, live }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech"><b>Tech:</b> {tech}</p>

      <div className="project-links">
        <a href={github} target="_blank">GitHub</a>
        <a href={live} target="_blank">Live</a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
