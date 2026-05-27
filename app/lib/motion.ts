import {
  Variants,
} from "framer-motion";

/* =========================================================
   FADE UP
========================================================= */

export const fadeUp: Variants = {

  hidden: {

    opacity: 0,
    y: 40,

  },

  visible: {

    opacity: 1,
    y: 0,

    transition: {

      duration: 0.7,
      ease: "linear" as const,

    },

  },

};

/* =========================================================
   STAGGER CONTAINER
========================================================= */

export const staggerContainer: Variants = {

  hidden: {},

  visible: {

    transition: {

      staggerChildren: 0.08,
      delayChildren: 0.05,

    },

  },

};

/* =========================================================
   SCALE IN
========================================================= */

export const scaleIn: Variants = {

  hidden: {

    opacity: 0,
    scale: 0.94,

  },

  visible: {

    opacity: 1,
    scale: 1,

    transition: {

      duration: 0.65,
      ease: "linear" as const,

    },

  },

};

/* =========================================================
   SLIDE LEFT
========================================================= */

export const slideLeft: Variants = {

  hidden: {

    opacity: 0,
    x: 40,

  },

  visible: {

    opacity: 1,
    x: 0,

    transition: {

      duration: 0.75,
      ease: "linear" as const,

    },

  },

};

/* =========================================================
   SLIDE RIGHT
========================================================= */

export const slideRight: Variants = {

  hidden: {

    opacity: 0,
    x: -40,

  },

  visible: {

    opacity: 1,
    x: 0,

    transition: {

      duration: 0.75,
      ease: "linear" as const,

    },

  },

};

/* =========================================================
   SOFT REVEAL
========================================================= */

export const softReveal: Variants = {

  hidden: {

    opacity: 0,
    filter: "blur(14px)",

  },

  visible: {

    opacity: 1,
    filter: "blur(0px)",

    transition: {

      duration: 1.1,
      ease: "linear" as const

    },

  },

};

/* =========================================================
   GLOW PULSE
========================================================= */

export const glowPulse = {

  animate: {

    opacity: [0.3, 0.6, 0.3],

    scale: [1, 1.03, 1],

    transition: {

      duration: 4,
      repeat: Infinity,
      ease: "linear" as const

    },

  },

};

/* =========================================================
   FLOAT
========================================================= */

export const floatAnimation = {

  animate: {

    y: [0, -10, 0],

    transition: {

      duration: 6,
      repeat: Infinity,
      ease: "linear" as const

    },

  },

};

/* =========================================================
   ORBITAL FLOAT
========================================================= */

export const orbitalFloat = {

  animate: {

    rotate: [0, 360],

    transition: {

      duration: 60,
      repeat: Infinity,
      ease: "linear" as const
    },

  },

};

/* =========================================================
   INTELLIGENCE SCAN
========================================================= */

export const intelligenceScan = {

  animate: {

    backgroundPosition: [

      "0% 50%",
      "100% 50%",
      "0% 50%",

    ],

    transition: {

      duration: 8,
      repeat: Infinity,
      ease: "linear" as const

    },

  },

};

/* =========================================================
   SOVEREIGN REVEAL
========================================================= */

export const sovereignReveal: Variants = {

  hidden: {

    opacity: 0,
    scale: 0.98,
    filter: "blur(20px)",

  },

  visible: {

    opacity: 1,
    scale: 1,
    filter: "blur(0px)",

    transition: {

      duration: 1.2,
      ease: "linear" as const

    },

  },

};

/* =========================================================
   PANEL HOVER
========================================================= */

export const panelHover = {

  whileHover: {

    y: -6,
    scale: 1.01,

    transition: {

      duration: 0.3,
      ease: "linear" as const

    },

  },

};

/* =========================================================
   MAGNETIC
========================================================= */

export const magneticHover = {

  whileHover: {

    scale: 1.04,

    transition: {

      duration: 0.25,

    },

  },

};

/* =========================================================
   ROTATIONAL DRIFT
========================================================= */

export const rotationalDrift = {

  animate: {

    rotate: [-1, 1, -1],

    transition: {

      duration: 12,
      repeat: Infinity,
      ease: "linear" as const

    },

  },

};