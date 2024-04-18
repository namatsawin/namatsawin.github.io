import { useState } from "react"
import { motion } from "framer-motion"

import Button from './components/Button'
import GlowWrapper from './components/GlowWrapper'
import FallingStar from "./components/FallingStar"
import About from "./About"
import Experience from "./Experience"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import LinkedInIcon from './assets/icons/linkedin.svg?react'
import GithubIcon from './assets/icons/github.svg?react'
import CallIcon from './assets/icons/call.svg?react'
import EmailIcon from './assets/icons/email.svg?react'

import HumanImage from './assets/images/human.webp'
import ButtonAnchor from "./components/ButtonAnchor"

function App() {
  const [aboutModal, setAboutModal] = useState(false)
  const [experienceModal, setExperienceModal] = useState(false)
  const [portfolioModal, setPortfolioModal] = useState(false)
  const [contactModal, setContactModal] = useState(false)

  return (
    <motion.div className="p-10 rounded-xl max-w-[1366px] h-full">
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
       
       <GlowWrapper className="mx-auto md:mx-0">
          <h1 className="p-0 text-yellow-500 text-3xl font-bold text-center" style={{ textShadow: '1px 1px 2px #facc15'}}>
            NAMATSAWIN BUNTARAWA
          </h1>
       </GlowWrapper>

       <div className="flex items-center justify-center gap-6 w-fit rounded-xl mx-auto md:mx-0 order-second md:order-last">
          <ButtonAnchor href="https://www.linkedin.com/in/namatsawin/">
            <LinkedInIcon width={25} height={25} className="fill-[#0077b5]"/>
          </ButtonAnchor>
          <ButtonAnchor href="https://github.com/namatsawin">
            <GithubIcon width={25} height={25} className="fill-neutral-100"/>
          </ButtonAnchor>
          <ButtonAnchor href="mailto:namatsawin.care@gmail.com">
            <EmailIcon width={30} height={30} className="stroke-red-400"/>
          </ButtonAnchor>
          <ButtonAnchor href="tel:+61421124443">
            <CallIcon width={23} height={23} className="stroke-yellow-500"/>
            <span className="ml-1">AU</span>
          </ButtonAnchor>
          <ButtonAnchor href="tel:+66954791916">
            <CallIcon width={23} height={23} className="stroke-yellow-500"/>
            <span className="ml-1">TH</span>
          </ButtonAnchor>
        </div>

        <p className="text-center md:max-w-[70%] md:text-left text-yellow-100 text-base">
          I am a passionate individual with a fervent dedication to crafting outstanding digital experiences. My enthusiasm for innovation and continuous learning fuels my ability to quickly adapt and contribute effectively to diverse teams and projects.
        </p>

        <div className="grid md:flex gap-6 py-10">
          <Button onClick={() => setAboutModal(!aboutModal)}>
            About
          </Button>
          <Button onClick={() => setExperienceModal(!experienceModal)}>
            Experience
          </Button>
          <Button onClick={() => setPortfolioModal(!portfolioModal)}>
            Portfolio
          </Button>
        </div>

      

        <motion.img 
          src={HumanImage} 
          className="absolute right-[30px] bottom-0 opacity-30 border-none rounded-[50%] blur-lg sm:blur-md md:blur-sm lg:blur-none"
          style={{ zIndex: '-1', boxShadow: '3.5rem 3rem 1rem 1rem #facc15'}}
          width={500}
          height={500} 
          animate={{
            y: [0, -10, 0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut'  }}
        />
      </motion.div>
      <About isOpen={aboutModal} onClose={() => setAboutModal(false)}/>
      <Experience isOpen={experienceModal} onClose={() => setExperienceModal(false)} />
      <Portfolio isOpen={portfolioModal} onClose={() => setPortfolioModal(false)} />
      <Contact isOpen={contactModal} onClose={() => setContactModal(false)}/>


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
