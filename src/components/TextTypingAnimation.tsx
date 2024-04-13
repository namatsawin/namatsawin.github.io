import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useCycle } from 'framer-motion';

const TextTypingAnimation = ({ text, delay }: React.PropsWithChildren<{ text: string; delay: number }>) => {
  const controls = useAnimation();
  const [isBlinking, cycleBlink] = useCycle(true, false);

  const startTypingAnimation = async () => {
    await controls.start({ width: "100%", transition: { duration: 3.5, type: "tween" } });
    cycleBlink(); // Start blinking cursor after typing animation completes
  };

  return (
    <motion.div
      className="typewriter"
      style={{
        overflow: "hidden",
        borderRight: ".15em solid orange",
        whiteSpace: "nowrap",
        margin: "0 auto",
        letterSpacing: ".15em"
      }}
      onAnimationStart={startTypingAnimation}
    >
      <motion.h1
        style={{ borderRight: ".15em solid orange", overflow: "hidden" }}
        animate={{ borderRight: isBlinking ? ".15em solid transparent" : ".15em solid orange" }}
        transition={{ duration: 0.75, repeat: Infinity, repeatType: "reverse" }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default TextTypingAnimation;
