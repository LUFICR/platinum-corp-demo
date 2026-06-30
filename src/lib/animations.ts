import { Variants } from "motion/react";

// Centralized Viewport configuration to ensure consistent scroll-triggering
export const viewportConfig = {
  once: false,
  amount: 0.2,
};

// High-end elegant cubic bezier transition
export const transitionConfig = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
};

// Centralized animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 45 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...transitionConfig,
      delay,
    },
  }),
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -45 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...transitionConfig,
      delay,
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 45 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...transitionConfig,
      delay,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...transitionConfig,
      delay,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const fadeInUpChild: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionConfig,
  },
};

