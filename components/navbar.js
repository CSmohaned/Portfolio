import Link from "next/link";
import Image from 'next/image'
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import {MoonIcon,SunIcon,HomeIcon,UserIcon,PaperAirplaneIcon,DocumentChartBarIcon,FilmIcon,ServerStackIcon} from "@heroicons/react/24/outline";
import {Squares2X2Icon,XMarkIcon} from "@heroicons/react/24/solid";
import { motion} from 'framer-motion';
const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
function Navbar() {
    
    const {systemTheme , theme, setTheme} = useTheme ();
    const currentTheme = theme === "system" ? systemTheme : theme ;
    const [mounted, setMounted] = useState(false);
    const [Icon, setIcon] = useState('menu');
    
    useEffect(() =>{
        setMounted(true);
      },[Icon,mounted,currentTheme])
      const Menu = (e)=> {
        e.preventDefault();
        let nav = document.querySelector('nav');
        let divLeft = document.querySelector('#demo-left');
        if(Icon === 'menu' && currentTheme ==='light') {
            setIcon('close');
            divLeft.classList.replace('md:flex', 'md:hidden');
            nav.classList.replace('md:h-14','md:h-44');
        }else if (Icon === 'close' && currentTheme === 'light') {
            setIcon('menu');
            nav.classList.replace('md:h-44', 'md:h-14');
            divLeft.classList.replace('md:hidden','md:flex');
        }
        if(Icon === 'menu' && currentTheme ==='dark') {
            setIcon('close');
            divLeft.classList.replace('md:flex', 'md:hidden');
            nav.classList.replace('md:h-14','md:h-44');
        }else if (Icon === 'close' && currentTheme === 'dark') {
            setIcon('menu');
            nav.classList.replace('md:h-44', 'md:h-14');
            divLeft.classList.replace('md:hidden','md:flex');
        }
    }
      const renderThemeChanger = () => {
        if(!mounted) return null;
       };
    return(
        <>
        <nav className="md:fixed  md:bottom-0 md:top-auto md:z-10 md:h-14 md:w-screen  sticky top-0 flex dark:bg-[#121212] bg-white flex-row h-14 justify-start items-center border-b-black border-b-2 w-screen z-30">
            {Icon=== 'close' && 
            <div className="hidden md:flex md:flex-col w-screen">
            <div className="flex flex-row justify-evenly mb-2">
                <Link className="hover:text-purple" href="#home"scroll={false}><HomeIcon className="h-6 w-6"/>Home</Link>
                <Link className="hover:text-purple" href="#about"scroll={false}><UserIcon className="h-6 w-6"/>About</Link>
                <Link className="hover:text-purple" href="#skills"scroll={false}><DocumentChartBarIcon className="h-6 w-6"/>Skills</Link>
               </div>
               <div className="flex flex-row justify-evenly pl-4">
               <Link className="hover:text-purple" href="#services"scroll={false}><ServerStackIcon className="h-6 w-6"/>Services</Link>
                <Link className="hover:text-purple" href="#portfolio"scroll={false}><FilmIcon className="h-6 w-6"/>Portfolio</Link>
                <Link className="hover:text-purple" href="#contact"scroll={false}><PaperAirplaneIcon className="h-6 w-6"/>Contact</Link>
               </div>   
            </div>
            }
            <div id="demo-left" className="md:flex w-2/5 pl-3">
            {currentTheme !=="dark" && <Image alt="Gallery image 1" src="/Mo-logos_black.png" width={180} height={14} />}
            {currentTheme ==="dark" && <Image alt="LogoLight" src="/Mo-logos_white.png" width={180} height={14} />}
            
            </div>
            <div id="demo-right" className="md:flex flex flex-row justify-end items-center">
            <motion.button transition={spring}  whileHover={{scale: 1.1}}>
                <Link className="text-[#1A1A1A] dark:text-[#FFFF] md:hidden hover:text-purple hover:dark:text-purple mr-6 flex flex-row" href="#home" scroll={false}><HomeIcon className="h-5 w-5 mr-2 text-[#1A1A1A] dark:text-[#FFFF]"/>Home</Link>
            </motion.button>   
            <motion.button transition={spring}  whileHover={{scale: 1.1}}> 
                <Link className="text-[#1A1A1A] dark:text-[#FFFF] md:hidden hover:text-purple hover:dark:text-purple mr-6 flex flex-row"  href="#about" scroll={false}><UserIcon className="h-5 w-5 mr-2 text-[#1A1A1A] dark:text-[#FFFF]"/>About</Link>
            </motion.button>
                <motion.button transition={spring}  whileHover={{scale: 1.1}}>
                <Link className="text-[#1A1A1A] dark:text-[#FFFF] md:hidden hover:text-purple hover:dark:text-purple mr-6 flex flex-row"  href="#skills" scroll={false}><DocumentChartBarIcon className="h-5 w-5 mr-2 text-[#1A1A1A] dark:text-[#FFFF]"/>Skills</Link>
                </motion.button>
                <motion.button transition={spring}  whileHover={{scale: 1.1}}>
                <Link className="text-[#1A1A1A] dark:text-[#FFFF] md:hidden hover:text-purple hover:dark:text-purple mr-6 flex flex-row"  href="#services" scroll={false}><ServerStackIcon className="h-5 w-5 mr-2 text-[#1A1A1A] dark:text-[#FFFF]"/>Services</Link>
                </motion.button>
                <motion.button transition={spring}  whileHover={{scale: 1.1}}>
                <Link className="text-[#1A1A1A] dark:text-[#FFFF] md:hidden hover:text-purple hover:dark:text-purple mr-6 flex flex-row"  href="#portfolio" scroll={false}><FilmIcon className="h-5 w-5 mr-2 text-[#1A1A1A] dark:text-[#FFFF]"/>Portfolio</Link>
                </motion.button>
                <motion.button transition={spring}  whileHover={{scale: 1.1}}>
                <Link className="text-[#1A1A1A] dark:text-[#FFFF] md:hidden hover:text-purple hover:dark:text-purple mr-6 flex flex-row"  href="#contact" scroll={false}><PaperAirplaneIcon className="h-5 w-5 mr-2 text-[#1A1A1A] dark:text-[#FFFF]"/>Contact</Link>
                </motion.button>
                <Link href="" className="md:inline flex justify-center items-center">
                  {Icon === 'menu'&& <Squares2X2Icon  name="menu-outline" onClick={(e)=>Menu(e)} className="md:bottom-3 md:inline hidden h-5 w-5 md:absolute md:right-4"/>}
                  {Icon === 'close'&& <XMarkIcon id="xicon" name="close-outline" onClick={(e)=>Menu(e)} className="md:inline hidden h-5 w-5 md:absolute md:right-4 md:bottom-3 text-purple"/>} 
                </Link>
            </div>
        </nav>
        {currentTheme ==="dark" ? (<SunIcon id='sun' className="z-20 bg-[#FFFFFF33] px-3 py-3 text-center  rounded-tl-full rounded-bl-full  fixed right-1 top-1/2 h-12 w-12 text-white" role="button" onClick={(e) => {e.preventDefault();setTheme('light')}}/>) : 
    (<MoonIcon id="moon" className="z-20 bg-[#0000001A] px-3 py-3 text-center  rounded-tl-full rounded-bl-full fixed right-1 top-1/2 h-12 w-12" role="button" onClick={(e) => {e.preventDefault(); setTheme('dark')}}/>)}
        </>
        )
}
export default Navbar;