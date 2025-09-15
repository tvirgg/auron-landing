"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number; // Vertical slide distance
  x?: number; // Horizontal slide distance
  staggerChildren?: number; // Stagger delay for children
};

export const FadeIn = ({
  children,
  className,
  delay = 0.15,
  duration = 0.5,
  y = 20,
  x = 0,
  staggerChildren,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const variants = {
    hidden: {
      opacity: 0,
      y,
      x,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1], // A nice ease-out curve
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
