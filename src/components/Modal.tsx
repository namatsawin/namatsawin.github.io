import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "./Backdrop";
import CloseIcon from "../assets/icons/close.svg?react";

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    hideClose?: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}
  

const Modal = ({ isOpen, hideClose, children, onClose }: Props) => {
    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => null}
        >
            {
                isOpen &&
                <Backdrop onClick={onClose}>
                    <motion.div
                        onClick={(e) => e.stopPropagation()}  
                        className="px-8 py-10 rounded-md min-w-[300px] min-h-[150px] max-w-[90%] max-h-[90%] md:max-w-[80%] md:max-h-[80%] overflow-y-auto"
                        variants={{
                            hidden: {
                                x: -50,
                                opacity: 0,
                            },
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.1,
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 500,
                                },
                            },
                            exit: {
                                x: 50,
                                opacity: 0,
                            }, 
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                       
                        {children}
                    </motion.div>
                    { !hideClose && 
                        <button className="absolute top-2 right-3">
                            <CloseIcon className="stroke-white"/>
                        </button>
                    }
                </Backdrop>
            }
        </AnimatePresence>
    );
  };

  
  export default Modal;