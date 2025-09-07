import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Achievements</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="w-full max-w-xl"
          >
            <p className="mb-4 text-lg text-neutral-400 text-justify">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;