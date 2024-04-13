import { motion } from "framer-motion"

import ButtonCube from './components/ButtonCube'
import TextTypingAnimation from './components/TextTypingAnimation'
import HumanImage from './assets/images/human.webp'

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function App() {
  
  const getRndPosition = () => {
    const clientRect=  document.body.getBoundingClientRect()
    return { x:  getRndInteger(0, clientRect.width), y: getRndInteger(0, clientRect.height)}
  }

  return (
    <motion.div className="my-auto mx-10 rounded-xl max-w-[1366px]">
      <div className="flex flex-col gap-6 p-10 relative">
        <h1 className="text-yellow-500 text-3xl font-bold">
          NAMATSAWIN BUNTARAWA
        </h1>
        <div className="max-w-[70%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </div>
        <div className="flex gap-5 py-10">
          <ButtonCube>
            ABOUT
          </ButtonCube>
          <ButtonCube>
            PORTFOLIO
          </ButtonCube>
          <ButtonCube>
            CONTACT
          </ButtonCube>
        </div>

        <motion.img 
          src={HumanImage} 
          className="opacity-30 absolute right-0 bottom-0 border-b-[50px] border-r-[50px] border-yellow-600 rounded-[100%]" 
          width={500} 
          height={500}
          animate={{
            y: [0, -10, 0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut'  }}
        />

<motion.div
    className='w-3 h-3 rounded-3xl bg-yellow-500 shadow-2xl shadow-yellow-500 fixed top-0'
    animate={{
      scale: [1, 0, 1, 0, 1, 0, 1, 0, 1],
      x: [0, 50, 25, 50, 40 ],
      y: [0, window.outerHeight],
    }}
    transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
  />
      </div>
    </motion.div>
  )
}

export default App
