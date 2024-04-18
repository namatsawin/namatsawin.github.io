import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
    colors?: string[]
    className?: string
}

const GlowWrapper = ({ colors, children, className }: Props) => {
    colors = colors ? colors : ['#005f73', "#0a9396", "#94d2bd"," #e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"];

    return (
        <motion.div
            className={`relative rounded-lg shadow-none w-fit ${className}`}
        >
            <motion.div
                className="absolute rounded-lg shadow-lg top-[15px] left-0 right-0 h-[80%] w-full md:h-[50%] blur-lg mx-auto"
                style={{ 
                    zIndex: '-1',
                    transform: 'scale(1) translateZ(0)',
                    background: `linear-gradient(to left, ${colors.join(',')})`, 
                    backgroundSize: '200% 200%' 
                }}
                animate={{
                    backgroundPosition: ["0% 50%", "200% 50%"],
                }}
                transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <span>
                {children}
            </span>
        </motion.div>
    );
};

export default GlowWrapper;
