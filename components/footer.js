import Link from 'next/link';
import { BsFacebook,BsGithub,BsLinkedin } from "react-icons/bs";
import { motion} from 'framer-motion';
const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
}
function Footer() {
    return(
        <footer className="sm:mb-14 sm:flex sm:flex-col sm:justify-between sm:h-60 md:h-40  sm:items-center flex flex-row items-start justify-between px-20 h-24 w-screen pt-8 dark:bg-dark overflow-hidden">
        <div className="flex flex-col sm:items-center sm:justify-center sm:pl-2">
          <h1>Mohanad</h1>
          <p>Frontend Developer</p>
        </div>
        <div className="flex flex-col">
        <div className="flex flex-row sm:flex sm:flex-col sm:items-center sm:justify-center sm:pl-4">
        <motion.button transition={spring}  whileHover={{scale: 1.1}}>
          <Link className='mr-3 hover:text-purple' href="#services">Services</Link>
          </motion.button>   
          <motion.button transition={spring}  whileHover={{scale: 1.1}}>
          <Link className='mr-3 hover:text-purple' href="#portfolio">Portfolio</Link>
          </motion.button>   
          <motion.button transition={spring}  whileHover={{scale: 1.1}}>
          <Link className='mr-3 hover:text-purple' href="#contact">Contact</Link>
          </motion.button>   
        </div>
        <p className='text-xs text-silver dark:text-white pt-5 text-center sm:mb-4'>© All right reserved</p>
        </div>
        <div className="flex flex-row sm:mb-3">
        <motion.button transition={spring}  whileHover={{scaleX: 1.1}}>
        <Link href="https://www.facebook.com/profile.php?id=100000451353996" scroll={false}><BsFacebook className='mr-3 dark:text-purple'/></Link>
        </motion.button>
        <motion.button transition={spring}  whileHover={{scaleX: 1.1}}>
        <Link href="https://github.com/CSmohaned" scroll={false}><BsGithub className='mr-3 dark:text-purple'/></Link>
        </motion.button>
        <motion.button transition={spring}  whileHover={{scaleX: 1.1}}>
        <Link href="https://www.linkedin.com/in/mohanad-adel-191695123/" scroll={false}><BsLinkedin className='mr-3 dark:text-purple'/></Link>
        </motion.button>
        </div>
      </footer>
        )
}
export default Footer;