import { motion } from 'framer-motion'

export function BrushWrapper({ children }: React.PropsWithChildren) {
    return (
        <div 
            className="w-fit h-fit pt-6 pb-2 pr-10 relative"
        >
            {children}
            <motion.span className="w-6 h-6 absolute right-3 bottom-7 rounded-[50%]"
                style={{ boxShadow: '6px 6px 2px 2px #facc15'}}
                animate={{
                    y: [0, -3, 0, 3, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut'  }}>
            </motion.span>
        </div>
    )
}

export default BrushWrapper;