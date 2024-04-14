import { motion } from "framer-motion"

interface Props extends React.PropsWithChildren {
    scale?: number[]
    x?: number[]
    y?: number[]
}

export function FallingStar({ scale, x, y }: Props) {
    const middle = window.innerWidth / 2
    
    scale = scale ? scale : [1, 0, 1, 0, 1, 0, 1, 0, 1]
    x = x ? x : [middle, middle + 50, middle + 25, middle + 50, middle + 40 ]
    y = y ? y : [0, window.outerHeight]

    return (
        <motion.div
            className='rounded-[50%] absolute top-0'
            animate={{ scale, x, y }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
            style={{ boxShadow: '5px 5px 5px 5px #facc15'}}
        />
    )
}

export default FallingStar
