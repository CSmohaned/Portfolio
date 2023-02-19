import { ArrowSmallRightIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaReact,FaCode,FaLayerGroup,FaIndent } from "react-icons/fa";
import { motion} from 'framer-motion';

const show = {
 hiddenPhoto: {
  opacity: 0,
    x: "100vw"
},
visiblePhoto: {
  opacity: 1,
  x: "0px",
  transition: {delay: 1.5,duration:1.5}
}
}
const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
}

function Services() {
    return(
        <section id="services"className="flex flex-col justify-start w-screen h-full bg-light dark:bg-dark pt-20">
        <h2 className="text-center font-bold text-4xl text-[#666666] dark:text-[#FFFFFF]">Services</h2>
        <span className="text-center font-normal text-sm pt-2">What I offer</span>
        <motion.div variants={show} initial="hiddenPhoto" animate="visiblePhoto" className='flex flex-row justify-evenly items-center md:flex-col'>
        <div className="flex justify-center w-full p-8">
        <motion.div transition={spring}  whileHover={{scale:1.1}} className="z-0 block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaReact className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">Dynamic Websites Development</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className="inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
      </div>
      <div className="flex justify-center w-full p-8">
      <motion.div transition={spring} whileHover={{scale: 1.1}} className="z-0 block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaLayerGroup className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">System development to manage your organization</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter2" className=" inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
      </div>
    </motion.div>
    <motion.div variants={show} initial="hiddenPhoto" animate="visiblePhoto" className='flex flex-row justify-evenly items-center md:flex-col'>
    <div className="flex justify-center w-full p-8">
    <motion.div transition={spring}  whileHover={{scale: 1.1}} className="z-0 block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaIndent className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">UI/UX Development</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter3" className=" inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
    </div>
    <div className="flex justify-center w-full p-8">
    <motion.div transition={spring}  whileHover={{scale: 1.1}} className="z-0 block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaCode className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">Maintenance and Support</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter4" className=" inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
      </div>
    </motion.div>
    <div className="z-10 modal fade fixed sm:top-0 top-5 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-col flex-shrink-0 items-center justify-between p-4 pt-6 md:pt-2 rounded-t-md">
      <button type="button"
          className="btn-close border-4 border-purple dark:border-white rounded-full box-content w-4 h-4 p-1 dark:text-white text-black opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      <Image className='text-center w-full mt-4 rounded-2xl  hover:scale-95 transition duration-300 ease-in-out' src="/dynamic-web-pages.png" alt="Vercel Logo" width={333} height={200} priority />
        <h5 className="text-xl font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
        Dynamic Websites Development
        </h5>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">I can Develop your blog or a news page,by a dynamic website is pretty much mandatory.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">I make all updated to your Dynamic websites almost instantly.</p>
      </div>
      <h5 className="text-xl text-center font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
      What Is Dynamic Websites Development
        </h5>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">A dynamic website is the webpage on the server side where different contents are shown when assessed at different timings.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">explains the real time web pages along with client side processing and while accessing the web pages.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">the code is sent to the web server with the HTML to the web browser as all the control is with the websites being assessed by the user.</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 mb-2 py-2.5 bg-purple text-[#000] dark:bg-[#FFFFFF]  border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
    <div className="z-10 modal fade fixed sm:top-0 top-5 left-0 hidden w-screen h-screen outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter2" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-col flex-shrink-0 items-center justify-between p-4 pt-6 md:pt-2 rounded-t-md">
      <button type="button"
          className="btn-close border-4 border-purple dark:border-white rounded-full box-content w-4 h-4 p-1 dark:text-test  opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      <Image className='text-center w-full mt-4 rounded-2xl  hover:scale-95 transition duration-300 ease-in-out' src="/info-systems.jpg" alt="Vercel Logo" width={333} height={200} priority />
        <h5 className="text-xl font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
        System development to manage your organization
        </h5>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">I can develop and manage your company with a easy and simple System.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">I ensure that your systems develop in tandem with your changing business needs.</p>
      </div>
      <h5 className="text-xl text-center font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
      What Is System development to manage your organization
        </h5>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">Systems development is the process of defining, designing, testing, and implementing a new software application or program.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">It could include the internal development of customized systems, the creation of database systems, or the acquisition of third party developed software.</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 mb-2 py-2.5 bg-purple text-[#000] dark:bg-[#FFFFFF] border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
<div className="z-10 modal fade fixed sm:top-0 top-5 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter3" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-col flex-shrink-0 items-center justify-between p-4 pt-6 md:pt-2 rounded-t-md">
      <button type="button"
          className="btn-close border-4 border-purple dark:border-white rounded-full box-content w-4 h-4 p-1 dark:text-white text-black opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      <Image className='text-center w-full mt-4 rounded-2xl  hover:scale-95 transition duration-300 ease-in-out' src="/Whats.jpg" alt="Vercel Logo" width={333} height={200} priority />
        <h5 className="text-xl font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
        UI/UX Development
        </h5>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">Get awesome solutions in  UI/UX design.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">i can design web and desktop solutions with intuitive UI and optimal UX with responsive layouts.</p>
      </div>
      <h5 className="text-xl text-center font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
      What Is UI/UX Development
        </h5>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">UX design is all about identifying and solving user problems.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">UI design is all about creating intuitive, aesthetically-pleasing, interactive interfaces.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">UX design usually comes first in the product development process, followed by UI.</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 mb-2 py-2.5 bg-purple text-[#000] dark:bg-[#FFFFFF] border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
<div className="z-10 modal fade fixed sm:top-0 top-5 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter4" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-col flex-shrink-0 items-center justify-between p-4 pt-6  rounded-t-md">
      <button type="button"
          className="btn-close border-4 border-purple dark:border-white rounded-full box-content w-4 h-4 p-1 dark:text-white text-black opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      <Image className='text-center w-full mt-4 rounded-2xl  hover:scale-95 transition duration-300 ease-in-out' src="/software-maintenance-min.jpg" alt="Vercel Logo" width={333} height={200} priority />
        <h5 className="text-xl font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
        Maintenance and Support
        </h5>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">fix all bugs or issus in your software.</p>
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">add additional features that don&apos;t deteriorate the software design and user experience.</p>
      </div>
      <h5 className="text-xl text-center font-medium leading-normal text-[#0f172a] dark:text-[#FFFFFF]" id="exampleModalScrollableLabel">
      What Is Maintenance and Support
        </h5>
      <div className="modal-body relative p-4">
        <p className="text-base text-[#7e7e7e] dark:text-[#a9afc3] mb-2">Software Maintenance and Support means any software upgrades, annual updates, patches and fixes needed to improve functionality and keep the software in working order..</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 mb-2 py-2.5 bg-purple text-[#000] dark:bg-[#FFFFFF] border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
        </section>
        )
}
export default Services;