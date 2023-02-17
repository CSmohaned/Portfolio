import Link from "next/link";
import Image from "next/image";
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import { motion} from 'framer-motion';
const show = {
    hidden: {
      opacity: 0,
      y: "100vh"
  },
  hiddenText: {
    opacity: 0,
  },
  visibleText: {
    opacity: 1,
    transition: {delay: 1.5}
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
function About() {
    return(
        <section id="about" className="flex flex-col justify-start items-center w-screen h-full pb-5 bg-light dark:bg-dark pt-5">
    <h2 className="text-center font-bold text-4xl text-[#666666] dark:text-[#FFFFFF]">About Me</h2>
    <span className="text-center font-normal text-sm pt-2 sm:pb-6 text-[#1A1A1A] dark:text-[#FFFF]">Introduction</span>
    <motion.div variants={show} initial="hidden" animate="visible" className='sm:flex sm:flex-col md:items-start flex flex-row justify-start items-center px-4'>
    <div className="sm:w-full sm:justify-center flex flex-col justify-start items-center text-center  w-2/5  overflow-hidden">
    <Image className='text-center bg-purple rounded-full md:w-55 md:h-55 sm:w-48 sm:h-52 hover:scale-95 transition duration-300 ease-in-out ' src="/mo11.png" alt="Vercel Logo" width={233} height={200} priority />
        </div>
        <div className="flex flex-col w-3/5 p-16 sm:w-full">
        <p className="font-normal text-lg text-[#7E7E7E] dark:text-[#A9AFC3] sm:text-center">A passionate competitive-programmer. Specialized in front-end web development using ReactJS can develop new user-facing features, build reusable codes and optimize page loading times.</p>
        <dl className="flex flex-row justify-between items-start max-w-screen-xl md:w-full  p-4 mx-auto text-gray-900 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center mr-6">
                <motion.dt variants={show} initial="hiddenText" animate="visibleText" className="mb-2 text-3xl font-extrabold text-[#7E7E7E] dark:text-[#A9AFC3]">10+</motion.dt>
                    <dd className="font-light text-[#1A1A1A] dark:text-[#FFFF]">Completed Projects</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                <motion.dt variants={show} initial="hiddenText" animate="visibleText" className="mb-2 text-3xl font-extrabold text-[#7E7E7E] dark:text-[#A9AFC3]">100+</motion.dt>
                    <dd className="font-light text-[#1A1A1A] dark:text-[#FFFF]">Solved Problems</dd>
                </div>
            </dl>
        <div className="flex flex-row justify-center items-center pt-10">
        <motion.button transition={spring}  whileHover={{scale: 1.1}}>
        <Link className='bg-purple flex flex-row justify-center items-center p-3 rounded-lg text-[#1A1A1A] dark:text-[#FFFF]' href="/MohanadCV.pdf">Download CV <ArrowDownTrayIcon className='h-4 w-4 hover:translate-y-1'/></Link>
        </motion.button>
        </div>
        </div>
    </motion.div>
    </section>
        )
}
export default About;