import { motion } from 'framer-motion';

interface Props extends React.PropsWithChildren {
    slides: React.ReactNode[]
}

export function Slider({ slides }: Props) {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full text-6xl">
                            {slide}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;