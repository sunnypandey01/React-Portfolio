import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="page about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container about-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="about-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>About Me</h1>

          <p>
            I am a <strong>frontend-focused React developer</strong> with strong
            fundamentals in <strong>JavaScript, HTML, and CSS</strong>.
          </p>

          <p>
            This portfolio itself is a <strong>live demonstration of my React skills</strong>.
            I have built it using modern React practices, clean component structure,
            and smooth UI animations.
          </p>

          <p>
            I actively use <strong>React Hooks</strong> such as
            <strong> useState</strong>, <strong>useEffect</strong>,
            <strong> useRef</strong>, and <strong>useContext</strong>
            to manage state, side effects, and UI behavior.
          </p>

          <p>
            Animations in this project are implemented using
            <strong> Framer Motion</strong>, showcasing page transitions,
            hover effects, and motion-based UI interactions.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          className="about-right"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            className="about-card"
            whileHover={{ y: -8 }}
          >
            ⚛️ React Components & Hooks
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ y: -8 }}
          >
            🎬 Framer Motion Animations
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ y: -8 }}
          >
            🎯 Clean UI & Responsive Design
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;
