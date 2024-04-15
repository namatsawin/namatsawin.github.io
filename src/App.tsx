import { motion } from "framer-motion"

import Button from './components/Button'
import GlowWrapper from './components/GlowWrapper'
import HumanImage from './assets/images/human.webp'
import FallingStar from "./components/FallingStar"
import { useState } from "react"
import About from "./About"
import Experience from "./Experience"

function App() {
  const [aboutModal, setAboutModal] = useState(false)
  const [experienceModal, setExperienceModal] = useState(false)


  return (
    <motion.div className="pt-20 pb-10 px-10 rounded-xl max-w-[1366px] h-full">
      <motion.div 
        className="flex flex-col gap-10 relative mt-10"
        initial={{
          opacity: 0,
          y: -25, 
          x: -25
        }}
        animate={{
          opacity: 1,
          y: 0,  
          x: 0
        }}
        transition={{
          delay: .6,
          duration: 1,
          ease: 'easeOut',
        }}
      >
       
       <GlowWrapper>
          <h1 className="p-0 text-yellow-500 text-3xl font-bold text-center md:text-left" style={{ textShadow: '1px 1px 2px #facc15'}}>
            NAMATSAWIN BUNTARAWA
          </h1>
       </GlowWrapper>
     

        <p className="text-center md:max-w-[70%] md:text-left text-yellow-100 text-base">
          I am a passionate individual with a fervent dedication to crafting outstanding digital experiences. My enthusiasm for innovation and continuous learning fuels my ability to quickly adapt and contribute effectively to diverse teams and projects.
        </p>

        <div className="grid sm:flex gap-6 py-10">
          <Button onClick={() => setAboutModal(!aboutModal)}>
            About
          </Button>
          <Button onClick={() => setExperienceModal(!experienceModal)}>
            Experience
          </Button>
          <Button>
            Portfolio
          </Button>
          <Button>
            Contact
          </Button>
        </div>

        <motion.img 
          src={HumanImage} 
          className="absolute right-[30px] bottom-0 opacity-30 border-none border-yellow-600 rounded-[50%] blur-lg sm:blur-md md:blur-sm lg:blur-none"
          width={500}
          height={500} 
          animate={{
            y: [0, -10, 0, 10, 0],
          }}
          style={{ zIndex: '-1', boxShadow: '3.5rem 3rem 1rem 1rem #facc15'}}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut'  }}
        />
      </motion.div>
      <About isOpen={aboutModal} onClose={() => setAboutModal(false)}/>
      <Experience isOpen={experienceModal} onClose={() => setExperienceModal(false)} />
      <FallingStar/>

      { import.meta.env.VITE_BUILD_AT && 
        <div className="fixed bottom-0 right-0 px-4 py-1 text-neutral-600 hidden md:block">
        Build at {import.meta.env.VITE_BUILD_AT}
        </div>
      }
    </motion.div>
  )
}

export default App
