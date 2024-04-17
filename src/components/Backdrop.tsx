import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Backdrop = ({ children, onClick }: Props) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="flex justify-center items-center fixed top-0 left-0 h-full w-full backdrop-blur-3xl overflow-hidden z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;