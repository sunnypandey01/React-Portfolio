import { motion } from "framer-motion";
import boy from "../assets/boy.png";

function Contact() {
  return (
    <section className="page contact-section">

      {/* Background blobs */}
      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>

      <div className="container contact-grid">

        {/* LEFT CONTENT */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact Me</h1>
          <p className="contact-sub">
            Feel free to reach out. I’m open to internships, projects,
            and collaboration opportunities.
          </p>

          <div className="contact-card">
            📧 Email:{" "}
            <a href="mailto:itssunnypandey4u@gmail.com">
              itssunnypandey4u@gmail.com
            </a>
          </div>

          <div className="contact-card">
            💻 GitHub:{" "}
            <a
              href="https://github.com/sunnypandey01"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sunnypandey01
            </a>
          </div>

          <div className="contact-card">
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sunny-kumar-pandey/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sunny-kumar-pandey
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={boy}
            alt="Developer Illustration"
            className="contact-img"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
