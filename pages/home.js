import Link from "next/link";
import Image from "next/image";
import { PaperAirplaneIcon,ArrowSmallDownIcon} from "@heroicons/react/24/solid";
import { motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';

const show = {
  hidden: {
    opacity: 0,
    y: "100vh"
},
hiddenPhoto: {
  opacity: 0,
    x: "100vw"
},
visiblePhoto: {
  opacity: 1,
  x: "0px",
  transition: {delay: 1.5,duration: 1.5}
},
visible: {
    opacity: 1,
    y: "0px",
    transition: {delay: .5}
}
}
const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
}
function App () {
    return(
        <section className="sm:flex sm:flex-col flex flex-row justify-center items-center bg-[#f5f8fc] dark:bg-dark w-screen h-screen" id="home">
        <motion.div variants={show} initial="hidden" animate="visible" className="flex flex-col justify-center items-center w-3/5 sm:pt-2 pt-28 sm:order-2">
          <div className="flex flex-col justify-end items-start pl-4">
          <h2 className="typewriter animate-loop max-w-fit mb-2 font-bold text-4xl sm:text-2xl text-[#666666] dark:text-[#FFFFFF]">Hi, I`m Mohanad</h2>
          <h3 className="mb-2 font-normal text-lg sm:text-base text-[#1A1A1A] dark:text-[#FFFF]">Frontend developer</h3>
          <p className="mb-4 font-normal text-sm sm:text-xs sm:mb-2 text-[#7E7E7E] dark:text-[#A9AFC3]">I make reactive web application, producing high level quality work.</p>
          <motion.button transition={spring}  whileHover={{scale: 1.1}}>
            <Link className="bg-purple flex flex-row justify-center items-center p-2 rounded-lg text-[#1A1A1A] dark:text-[#FFFF]" href="#contact" scroll={false}>Contact Me < PaperAirplaneIcon className='w-5 h-5 hover:translate-x-1 text-[#1A1A1A] dark:text-[#FFFF]'/></Link>
          </motion.button>
          <div className="flex flex-row justify-center items-center p-2 hover:translate-y-1 mt-24 sm:mt-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" className="ScrollBtn_icon__DSLJ+ text-purple" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M8.5 0c-3.033 0-5.5 2.467-5.5 5.5v6c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-6c0-3.033-2.467-5.5-5.5-5.5zM13 11.5c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5v-6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v6zM8.5 3.5c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM9 7c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2z"></path></svg>
          <Link className="text-[#1A1A1A] dark:text-[#FFFF]" href="#about" scroll={false}>Scroll down</Link>
          <ArrowSmallDownIcon className='h-4 w-4 text-purple'/>
          </div>
          </div>
          </motion.div>
        <motion.div variants={show} initial="hiddenPhoto" animate="visiblePhoto" className="flex flex-col justify-start items-center text-center  w-2/5 overflow-hidden bg-no-repeat bg-cover sm:justify-center">
        <Image className='text-center bg-purple rounded-full sm:w-48 sm:h-52 hover:scale-95 transition duration-300 ease-in-out' src="/mo11.png" alt="Vercel Logo" width={233} height={200} priority />
         </motion.div>
      </section>
    )
}
export default App;