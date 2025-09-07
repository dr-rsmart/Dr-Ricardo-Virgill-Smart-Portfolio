import { CONTACT } from "../constants";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-4"
        >
          {CONTACT.phone}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {CONTACT.email}
        </motion.a>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex justify-center my-4"
        >
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-4xl text-neutral-400 hover:text-white">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;