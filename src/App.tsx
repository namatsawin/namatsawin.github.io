import { motion } from "framer-motion"

import ButtonCube from './components/Button'
import GlowWrapper from './components/GlowWrapper'
import HumanImage from './assets/images/human.webp'
import FallingStar from "./components/FallingStar"
import { useState } from "react"
import About from "./About"

function App() {
  const [aboutModal, setAboutModal] = useState(false)

  return (
    <motion.div className="my-auto mx-10 rounded-xl max-w-[1366px] h-full">
      <motion.div 
        className="flex flex-col gap-10 p-0 md:p-10 relative"
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
          <h1 className="w-fit p-0 text-yellow-500 text-3xl font-bold text-center md:text-left" style={{ textShadow: '1px 1px 2px #facc15'}}>
            NAMATSAWIN BUNTARAWA
          </h1>
       </GlowWrapper>
     

        <div className="text-center md:max-w-[70%] md:text-left">
        I am a passionate individual with a fervent dedication to crafting outstanding digital experiences. My enthusiasm for innovation and continuous learning fuels my ability to quickly adapt and contribute effectively to diverse teams and projects.
        </div>

        <div className="grid md:flex gap-5 py-10">
          <ButtonCube onClick={() => setAboutModal(!aboutModal)}>
            About
          </ButtonCube>
          <ButtonCube>
            Experience
          </ButtonCube>
          <ButtonCube>
            Portfolio
          </ButtonCube>
          <ButtonCube>
            Contact
          </ButtonCube>
        </div>

        <motion.img 
          src={HumanImage} 
          className="absolute right-[30px] bottom-0 opacity-30 border-none border-yellow-600 rounded-[50%]"
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
      <FallingStar/>
    </motion.div>
  )
}

export default App
