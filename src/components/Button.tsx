import React from "react";
import { motion } from 'framer-motion'

interface Props extends React.PropsWithChildren {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({ children, onClick }: Props) {
    return (
        <motion.button 
            className="py-3 px-8 font-bold text-yellow-100 border border-yellow-100 rounded"
            onClick={onClick}
            whileHover={{
                scale: 1.1,
                borderColor: '#eab308',
                color: '#eab308'
            }}
        >
            {children}
        </motion.button>
        
    )
}

export default Button;