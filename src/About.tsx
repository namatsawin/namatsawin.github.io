import Modal from "./components/Modal";
import Profile from "./assets/images/profile.webp"
import { motion } from 'framer-motion'
import Timeline from "./components/Timeline";
import Slider from "./components/Slider";
import StackIcon from 'tech-stack-icons'

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

export function About({ isOpen, onClose }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-6">
                <section className="flex flex-col gap-6 items-center p-4 justify-center">
                    <motion.img
                        src={Profile} 
                        className="rounded-[50%] border-2 border-neutral-400"
                        width={120}
                        height={120} 
                        animate={{
                            y: [0, -5, 0, 5, 0],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut'  }}
                    />
                    <div>
                        <h1 className="text-center text-yellow-500 font-bold">Namatsawin Buntarwa (Care)</h1>
                    </div>
                </section>
                <section className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold text-yellow-500"> History </h1>
                    <div className="text-sm">
                        Hi, I'm Care. I was born in Thailand, and my nationality is one hundred percent Thai. When I was young, I liked playing computer games like Yuri, Counter-Strike, and others, just like other young boys. I intended to enter a major related to computers. Unfortunately, there were no majors directly related to computers, so I chose to enter the electronics major instead. There were a few classes related to programming, like Arduino, but I was not that interested because I felt it was difficult for me and had no idea how important it was. It wasn't until I was an intern during the last year of my bachelor's degree that I got a chance to help the R&D department develop a WinForm Application to be used in Industrial Automatic Machines. I was taught by seniors, and they changed my perspective about programming. It's useful, fun, and used for several reasons, like making things easier, standardizing production to have higher quality, speed, and efficiency. After my graduation, I took a gap for a couple of months to explore the various types of programmers and made the decision to learn about web development and start my career with a full-stack position
                    </div>
                </section>

                <section className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold text-yellow-500"> Skills </h1>
                        <div className="flex flex-col gap-4 mt-4">
                            <Slider
                                slides={[
                                    <StackIcon name="js" className="px-4" />,
                                    <StackIcon name="typescript" className="px-4" />,
                                    <StackIcon name="csharp" className="px-4" />,
                                    <StackIcon name="vuejs" className="px-4"/>,
                                    <StackIcon name="reactjs" className="px-4"/>,
                                    <StackIcon name="redux" className="px-4" />,
                                    <StackIcon name="nextjs" className="px-4" />,
                                    <StackIcon name="vitejs" className="px-4" />,
                                    <StackIcon name="tailwindcss"  className="px-4" />,
                                    <StackIcon name="html5" className="px-4" />,
                                    <StackIcon name="css3"  className="px-4" />,
                                    <StackIcon name="sass" className="px-4" />,
                                    <StackIcon name="storybook" className="px-4" />,
                                    <StackIcon name="webpack" className="px-4" />,
                                    <StackIcon name="babel" className="px-4" />,
                                ]}
                            />

                            <Slider slides={[
                                    <StackIcon name="nodejs" className="px-4" />,
                                    <StackIcon name="npm" className="px-4" />,
                                    <StackIcon name="nestjs" className="px-4" />,
                                    <StackIcon name="laravel" className="px-4" />,
                                    <StackIcon name="pugjs" className="px-4" />,
                                    <StackIcon name="prisma" className="px-4" />,
                                    <StackIcon name="postgresql" className="px-4" />,
                                    <StackIcon name="mysql" className="px-4" />,
                                    <StackIcon name="mongodb" className="px-4" />,
                                    <StackIcon name="firebase" className="px-4" />,
                                    <StackIcon name="postman" className="px-4" />,
                                    <StackIcon name="jest" className="px-4" />,
                                    <StackIcon name="docker" className="px-4" />,
                                    <StackIcon name="aws" className="px-4" />,
                                    <StackIcon name="elastic" className="px-4" />,
                                    <StackIcon name="ec2" className="px-4" />
                            ]} />

                        </div>
                </section>

                <section className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold text-yellow-500"> Education </h1>
                    <Timeline stories={[
                        { 
                            date: '2018-2020',
                            title: 'Bachelor of Technology at Nongkhai Technical College',
                            description: 'Focused on electronics, microcontrollers, Arduino, PLC, developing strong problem-solving skills',
                            additional: 'Grade: 3.47'
                        },
                        { 
                            date: '2016-2018',
                            title: 'Diploma in Electronics at Nongkhai Technical College',
                            description: 'Emphasized electronics fundamentals, including microcontrollers, Arduino, developing problem-solving skills',
                            additional: 'Grade: 3.22'
                        }
                    ]} />
                </section>
            </div>
        </Modal>
    )
}

export default About;