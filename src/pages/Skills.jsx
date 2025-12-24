import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Intermediate", color: "#61dafb" },
  { name: "JavaScript", level: "Intermediate", color: "#facc15" },
  { name: "HTML", level: "Advanced", color: "#f97316" },
  { name: "CSS", level: "Advanced", color: "#38bdf8" },
  { name: "Git & GitHub", level: "Intermediate", color: "#0f172a" },
];

function Skills() {
  return (
    <section className="page skills-section">
      
      {/* BACKGROUND EFFECT */}
      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ y: -12, scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="skill-logo"
              style={{ background: skill.color }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {skill.name[0]}
            </motion.div>

            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
