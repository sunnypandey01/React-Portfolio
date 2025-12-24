import { motion } from "framer-motion";

function SkillCard({ name, level }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.08 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{name}</h3>
      <p>{level}</p>
    </motion.div>
  );
}

export default SkillCard;
