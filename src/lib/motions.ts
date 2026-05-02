import { Variants } from "framer-motion";

// The parent that orchestrates the children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Time between each child's animation
      delayChildren: 0.2, // Delay before the first child starts
    },
  },
};
// The individual element animation
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 1, 0.36, 1],
    },
  },
};
export const fadeInYSwipe: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};
export const fadeInY: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 1, 0.36, 1],
    },
  },
};
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 1, 0.36, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 1, 0.36, 1],
    },
  },
};

export const fadeInRightToLeft: Variants = {
  hidden: { opacity: 0, x: 10, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 1, 0.4, 1],
    },
  },
};
