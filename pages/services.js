import { ArrowSmallRightIcon} from "@heroicons/react/24/solid";
import { CheckCircleIcon} from "@heroicons/react/24/outline";
import { FaReact,FaCode,FaLayerGroup,FaIndent } from "react-icons/fa";
import { motion} from 'framer-motion';

const show = {
  hidden: {
    opacity: 0,
    y: "-100vh"
},
hiddenPhoto: {
  opacity: 0,
    x: "100vw"
},
visiblePhoto: {
  opacity: 1,
  x: "0px",
  transition: {delay: 1.5,duration: 2}
},
visible: {
    opacity: 1,
    y: "0px",
    transition: {delay: .5,duration: 2}
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
        <motion.div transition={spring}  whileHover={{scale: 1.1}} className="block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaReact className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">Dynamic Websites Development</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className=" inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
        Dynamic Websites Development
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Flexible and quick change on the user’s computer without new page request to the web browser.</p>
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Provide ability to simply update and add new content to the site.</p>
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Share your project requirements for the perfect mix of talent and expertise.</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-white text-purple border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="flex justify-center w-full p-8">
      <motion.div transition={spring} whileHover={{scale: 1.1}} className="block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaLayerGroup className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">System development to manage your organization</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter2" className=" inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter2" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
        Dynamic Websites Development
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Flexible and quick change on the user’s computer without new page request to the web browser.</p>
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Provide ability to simply update and add new content to the site.</p>
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Share your project requirements for the perfect mix of talent and expertise.</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-white text-purple border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </motion.div>
    <motion.div variants={show} initial="hiddenPhoto" animate="visiblePhoto" className='flex flex-row justify-evenly items-center md:flex-col'>
    <div className="flex justify-center w-full p-8">
    <motion.div transition={spring}  whileHover={{scale: 1.1}} className="block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaIndent className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">UI/UX Development</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter3" className=" inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter3" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
        Dynamic Websites Development
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Build interactive UIs and impressive web applications that attract users.</p>
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Deliver highly-engaging interface development using the latest features of ReactJS.</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-white text-purple border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="flex justify-center w-full p-8">
    <motion.div transition={spring}  whileHover={{scale: 1.1}} className="block rounded-lg shadow-xl bg-white dark:bg-[#121212] w-4/5 p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"><FaCode className="text-purple h-7 w-7"/></h5>
        <h2 className="text-[#1A1A1A] dark:text-[#FFFF] text-base mb-4">Maintenance and Support</h2>
        <div className='flex flex-row justify-start items-center'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter4" className=" inline-block px-1 py-2.5 font-medium text-xs leading-tight uppercase text-[#7E7E7E] dark:text-[#A9AFC3]">View more</button>
        <ArrowSmallRightIcon className='text-purple w-4 h-4 hover:translate-x-1'/>
        </div>
      </motion.div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter4" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
        Dynamic Websites Development
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-4">
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>Renders maintenance and support services for consistent and stable performance of applications.</p>
        <p className="text-base dark:text-white"><CheckCircleIcon className="h-5 w-5 text-purple mr-1 inline"/>I can also update your app functionality on demand.</p>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-white text-purple border-purple font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </motion.div>
        </section>
        )
}
export default Services;