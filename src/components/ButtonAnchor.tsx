import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
  href?: string;
  className?: string;
}

export function ButtonAnchor({ children, href, className }: Props) {
  return (
    <motion.a
      className={`cursor-pointer ${className}`}
      whileHover={{
        scale: "1.1",
        transition: { duration: 1, ease: "easeOut" },
      }}
      href={href}
      target="_blank"
    >
      {children}
    </motion.a>
  );
}

export default ButtonAnchor;
