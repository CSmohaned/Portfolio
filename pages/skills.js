import { ArrowSmallDownIcon,CalendarIcon} from "@heroicons/react/24/solid";
import {CodeBracketSquareIcon,ServerStackIcon,AcademicCapIcon,BriefcaseIcon,EnvelopeIcon as Icon} from "@heroicons/react/24/outline";
import { BiCodeCurly } from "react-icons/bi";
import {useState} from "react";
import { motion} from 'framer-motion';

const show = {
  hidden: {
    opacity: 0,
    x: "100vw"
},
hiddenPhoto: {
  opacity: 0,
    x: "-100vw"
},
visiblePhoto: {
  opacity: 1,
  x: "0px",
  transition: {delay: 1.5,duration: 1}
},
visible: {
    opacity: 1,
    x: "0px",
    transition: {delay: .5,duration: 1.5}
}
}
const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
}
function Skills() {
  const [Icon, setIcon] = useState('false');
  const Menu = (e)=> {
    e.preventDefault();
    let arrow = document.querySelector('#arrowIcon1');
    let arrow2 = document.querySelector('#arrowIcon2');
    let arrow3 = document.querySelector('#arrowIcon3');
    let arrow4 = document.querySelector('#arrowIcon4');
    let layout = document.querySelector('#accordion-flush-body-1');
    let layout2 = document.querySelector('#accordion-flush-body-2');
    let layout3 = document.querySelector('#accordion-flush-body-3');
    let layout4 = document.querySelector('#accordion-flush-body-4');
    console.log(e.target.id)
    if(Icon === 'false') {
        switch (e.target.id) {
          case 'arrowIcon1':
            setIcon('true');
            arrow.classList.replace('rotate-0','rotate-180');
            layout.classList.replace('hidden','flex');
            layout.classList.add('flex-col');
            break;
          case 'arrowIcon2':
            setIcon('true');
            arrow2.classList.replace('rotate-0','rotate-180');
            layout2.classList.replace('hidden','flex');
            layout2.classList.add('flex-col');
            break;            
          case 'arrowIcon3':
            setIcon('true');
            arrow3.classList.replace('rotate-0','rotate-180');
            layout3.classList.replace('hidden','flex');
            layout3.classList.add('flex-col');
            break;  
          case 'arrowIcon4':
            setIcon('true');
            arrow4.classList.replace('rotate-0','rotate-180');
            layout4.classList.replace('hidden','flex');
            layout4.classList.add('flex-col');
            break;          
          default:
            break;
        }
    }else if(Icon === 'true'){
      switch (e.target.id) {
        case 'arrowIcon1':
          setIcon('false');
          arrow.classList.replace('rotate-180','rotate-0');
          layout.classList.replace('flex','hidden');
          break;
        case 'arrowIcon2':
          setIcon('false');
          arrow2.classList.replace('rotate-180','rotate-0');
          layout2.classList.replace('flex','hidden');
          break;            
        case 'arrowIcon3':
          setIcon('false');
          arrow3.classList.replace('rotate-180','rotate-0');
          layout3.classList.replace('flex','hidden');
          break;  
        case 'arrowIcon4':
          setIcon('false');
          arrow4.classList.replace('rotate-180','rotate-0');
          layout4.classList.replace('flex','hidden');
          break;          
        default:
          break;
      }         
    }
}
    return(
        <section id="skills"className="flex flex-col justify-center w-screen h-full bg-[#f5f8fc] dark:bg-dark pt-20">
        <h2 className="text-center font-bold text-4xl text-[#666666] dark:text-[#FFFFFF]">Skills</h2>
        <span className="text-center font-normal text-sm pt-2">Technical Level</span>
        <motion.div variants={show} initial="hidden" animate="visible" className="py-10 px-40 sm:px-10 md:px-20 lg:px-20 md:flex md:flex-col sm:flex sm:flex-col grid grid-cols-2 gap-14 sm:items-center md:items-center md:justify-center sm:justify-start">
         <motion.div transition={spring}  whileHover={{scale: 1.1}} className="lg:text-center lg:w-full mb-20">
         <h2 id="accordion-flush-heading-1">
                        <button type="button" className="w-full relative flex items-center py-1 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                        <CodeBracketSquareIcon className='w-7 h-7 text-purple mr-2'/>
                        <div className='flex flex-col'>
                        <h3 className="text-[#1A1A1A] dark:text-[#FFFF]">Web Development</h3>
                        <span className='text-xs text-[#7E7E7E] dark:text-[#A9AFC3]'>One Year</span>
                        </div>
                        <ArrowSmallDownIcon name='arrow1'id='arrowIcon1' className='absolute right-0 w-7 h-7 text-purple ms:ml-10 md:ml-20 lg:ml-30 rotate-0' onClick={(e)=> Menu(e)}/>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                      <ul className="text-sm font-medium text-gray-900">
                        <li className="py-2 px-4 w-full rounded-t-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          HTML
                        <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '90%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          CSS 
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '90%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          JS
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '75%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full rounded-b-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          ReactJS
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '75%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full rounded-b-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          NextJS
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '75%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full rounded-b-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          Tailwind
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '75%'}}></div>
                        </div>
                        </div>
                        </li>
                        </ul>
                    </div>
          </motion.div>
          <motion.div transition={spring}  whileHover={{scale: 1.1}} className="lg:text-center lg:w-full mb-20">
         <h2 id="accordion-flush-heading-2">
                        <button type="button" className="w-full relative flex items-center py-1 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="true" aria-controls="accordion-flush-body-2">
                        <CodeBracketSquareIcon className='w-7 h-7 text-purple mr-2'/>
                        <div className='flex flex-col'>
                        <h3 className="text-[#1A1A1A] dark:text-[#FFFF]">Management Tools</h3>
                        <span className='text-xs text-[#7E7E7E] dark:text-[#A9AFC3]'>More Than One Year</span>
                        </div>
                        <ArrowSmallDownIcon name='arrow2'id='arrowIcon2' className='absolute right-0 w-7 h-7 text-purple ms:ml-10 md:ml-20 lg:ml-30 rotate-0' onClick={(e)=> Menu(e)}/>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                      <ul className="text-sm font-medium text-gray-900">
                        <li className="py-2 px-4 w-full rounded-t-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          Agile
                          <div className="border rounded-full">  
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '80%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          User Stories
                          <div className="border rounded-full">    
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '90%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          Slack
                          <div className="border rounded-full">     
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '90%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full rounded-b-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          Trello
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '90%'}}></div>
                        </div>
                        </div>
                        </li>
                        </ul>
                    </div>
          </motion.div>
          <motion.div transition={spring}  whileHover={{scale: 1.1}} className="lg:text-center lg:w-full mb-20">
         <h2 id="accordion-flush-heading-3">
                        <button type="button" className="w-full relative flex items-center py-1 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="true" aria-controls="accordion-flush-body-3">
                        <ServerStackIcon className='w-7 h-7 text-purple mr-2'/>
                        <div className='flex flex-col'>
                        <h3 className="text-[#1A1A1A] dark:text-[#FFFF]">Test Tools</h3>
                        <span className='text-xs text-[#7E7E7E] dark:text-[#A9AFC3]'>One Year</span>
                        </div>
                        <ArrowSmallDownIcon name='arrow3'id='arrowIcon3' className='absolute right-0 w-7 h-7 text-purple ms:ml-10 md:ml-20 lg:ml-30 rotate-0' onClick={(e)=> Menu(e)}/>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                      <ul className="text-sm font-medium text-gray-900">
                        <li className="py-2 px-4 w-full rounded-t-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          Test Cases
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '80%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          Postman
                          <div className="border rounded-full"> 
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '90%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          GitHub
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '90%'}}></div>
                        </div>
                        </div>
                        </li>
                        </ul>
                    </div>
                   </motion.div> 
                   <motion.div transition={spring}  whileHover={{scale: 1.1}} className="lg:text-center lg:w-full mb-20">
                    <h2 id="accordion-flush-heading-4">
                        <button type="button" className="w-full relative flex items-center py-1 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-4" aria-expanded="true" aria-controls="accordion-flush-body-4">
                        <BiCodeCurly className='w-7 h-7 text-purple mr-2'/>
                        <div className='flex flex-col'>
                        <h3 className="text-[#1A1A1A] dark:text-[#FFFF]">Programming Languages</h3>
                        <span className='text-xs text-[#7E7E7E] dark:text-[#A9AFC3]'>Entry Level</span>
                        </div>
                        <ArrowSmallDownIcon name='arrow4'id='arrowIcon4' className='absolute right-0 w-7 h-7 text-purple ms:ml-10 md:ml-20 lg:ml-30 rotate-0' onClick={(e)=> Menu(e)}/>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                      <ul className="text-sm font-medium text-gray-900">
                        <li className="py-2 px-4 w-full rounded-t-lg">
                        <div className="w-full bg-gray-200 rounded-full">
                          Java
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '60%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          Python
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '50%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          NodeJS
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '60%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full rounded-b-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          MySQL
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '80%'}}></div>
                        </div>
                        </div>
                        </li>
                        <li className="py-2 px-4 w-full rounded-b-lg">
                        <div className="w-full bg-gray-200 rounded-full text-[#1A1A1A] dark:text-[#FFFF]">
                          MongoDB
                          <div className="border rounded-full">
                        <div className="bg-purple text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full h-3" style={{width: '70%'}}></div>
                        </div>
                        </div>
                        </li>
                        </ul>
                    </div>
                   </motion.div>    
                  </motion.div>
         <h2 className="font-bold text-4xl relative flex justify-center items-center text-[#666666] dark:text-[#FFFFFF]">
         <AcademicCapIcon className="w-7 h-7 text-purple mr-2"/>
          Education
         </h2>
        <span className="text-center font-normal text-sm pt-2">Personal Journey</span>
        <motion.div variants={show} initial="hiddenPhoto" animate="visiblePhoto" className="bg-blue-500 flex flex-col justify-center items-center sm:py-12 p-5">  
         <motion.ol transition={spring}  whileHover={{scale: 1.1}} className="relative border-l border-purple dark:border-gray-700">                  
          <li className="mb-10 ml-4">
           <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border bg-purple border-purple dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-[#7E7E7E] dark:text-[#A9AFC3]"><CalendarIcon className="w-5 h-5 text-purple mr-1 inline"/>Sept-2014 - Sept-2019</time>
            <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-[#FFFF]">BA: Computer Science</h3>
            <p className="mb-4 font-normal text-sm sm:text-base text-purple dark:text-gray-400">Faculty of Science - Cairo University</p>
          </li>
          <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border bg-purple border-purple dark:border-gray-900 dark:bg-gray-700"></div>
           <time className="mb-1 text-sm font-normal leading-none text-[#7E7E7E] dark:text-[#A9AFC3]"><CalendarIcon className="w-5 h-5 text-purple mr-1 inline"/>Aug-2022 - Sept-2022</time>
           <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-[#FFFF]">React Development Cross-Skilling</h3>
           <p className="font-normal text-sm sm:text-base text-purple dark:text-gray-400">Nanodegree Program - Udacity</p>
         </li>
         </motion.ol>
          </motion.div>
          <h2 className="font-bold text-4xl relative flex justify-center items-center text-[#666666] dark:text-[#FFFFFF]">
         <BriefcaseIcon className="w-7 h-7 text-purple mr-2"/>
         Work Experience
         </h2>
        <span className="text-center font-normal text-sm pt-2">Personal Journey</span>
        <div className="bg-blue-500 flex flex-col justify-center items-center sm:py-12 sm:px-4">  
         <motion.ol transition={spring}  whileHover={{scaleX: 0.9}} className="relative border-l border-purple dark:border-gray-700">                  
          <li className="mb-10 ml-4">
           <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border bg-purple border-purple dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-[#7E7E7E] dark:text-[#A9AFC3]"><CalendarIcon className="w-5 h-5 text-purple mr-1 inline"/>Nov-2019 - Jun-2020</time>
            <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-[#FFFF]">Scrum Master</h3>
            <p className="mb-4 font-normal text-sm sm:text-base text-purple dark:text-gray-400">Phantasm Solutions</p>
            <ul className="marker:text-purple list-disc p-2 text-sm text-[#666666] dark:text-[#FFFFFF]">
              <li>Write user stories for project after take a brief from client</li>
              <li>Put a timeline for all sprints</li>
              <li>Assigning tasks for all teams with priority and deadline with assign people whose make it</li>
              <li>Follow up all the analysis, design, implementation, and testing stages in projects</li>
              <li>Manage communicate between client and all teams</li>
            </ul>
          </li>
          <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border bg-purple border-purple dark:border-gray-900 dark:bg-gray-700"></div>
           <time className="mb-1 text-sm font-normal leading-none text-[#7E7E7E] dark:text-[#A9AFC3]"><CalendarIcon className="w-5 h-5 text-purple mr-1 inline"/>Mar-2019 - Nov-2019</time>
           <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-[#FFFF]">Quality Control Engineer</h3>
           <p className="font-normal text-sm sm:text-base text-purple dark:text-gray-400">Phantasm Solutions</p>
           <ul className="marker:text-purple list-disc p-2 text-sm text-[#666666] dark:text-[#FFFFFF]">
              <li>Making test cases scenarios.</li>
              <li>Testing Apis for back-end for applications and websites.</li>
              <li>Testing ui & ux for Design for applications and websites.</li>
              <li>Testing implementation for mobile application versions and front-end for websites.</li>
            </ul>
         </li>
         <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border bg-purple border-purple dark:border-gray-900 dark:bg-gray-700"></div>
           <time className="mb-1 text-sm font-normal leading-none text-[#7E7E7E] dark:text-[#A9AFC3]"><CalendarIcon className="w-5 h-5 text-purple mr-1 inline"/>Nov-2018 - Mar-2019</time>
           <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-[#FFFF]">Frontend Developer</h3>
           <p className="font-normal text-sm sm:text-base text-purple dark:text-gray-400">Mandolin</p>
           <ul className="marker:text-purple list-disc p-2 text-sm text-[#666666] dark:text-[#FFFFFF]">
              <li>Make a website for Tourism Company called mandolin using Angular framework.</li>
              <li>Make a website to add, edit and delete cars, drivers, rods, traffic lines and times of work.</li>
              <li>Work as a frontend developer with a team.</li>
            </ul>
         </li>
         </motion.ol>
          </div>
        </section>
        )
}
export default Skills;