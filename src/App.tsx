import { motion } from 'framer-motion';

function App() {
  const hostname = window.location.hostname;

  // Animation variants for typing effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {hostname.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default App;
