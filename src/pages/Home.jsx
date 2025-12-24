import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* PARTICLES */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      <div className="home-grid">
        {/* LEFT */}
        <motion.div
          className="home-left"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Hi, I’m{" "}
            <motion.span
              className="name"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Sunny Pandey
            </motion.span>
          </h1>

          <h2>Frontend React Developer</h2>

          <p>
            I build modern, responsive web applications using React.
            I enjoy turning ideas into clean and user-friendly interfaces.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="home-right"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="hero-card">
            <h3>React • UI • Animations</h3>
            <p>Clean code. Modern design. Smooth UX.</p>
          </div>
        </motion.div>
      </div>

      {/* 👇 ADD NEW SECTIONS HERE (STATS / EXTRA CONTENT) 👇 */}

    </motion.section>
  );
}

export default Home;
