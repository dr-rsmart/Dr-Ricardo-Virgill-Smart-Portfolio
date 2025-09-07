import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
};