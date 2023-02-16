import Image from "next/image";
import Link from 'next/link';
import {BsGithub} from "react-icons/bs";
import { motion} from 'framer-motion';
const show = {
  hidden: {
    opacity: 0,
    y: "100vh"
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
function Portfolio() {
    return(
  <section id="portfolio"className="flex-col flex justify-center items-center  w-screen max-h-max py-10 bg-[#f5f8fc] dark:bg-silver pt-5 overflow-hidden min-w-fit">
    <h2 className="text-center font-bold text-4xl text-[#666666] dark:text-[#FFFFFF]">My Projects</h2>
        <span className="text-center font-normal text-sm pt-2">portfolio</span>
        <motion.div variants={show} initial="hidden" animate="visible"  transition={spring}  whileHover={{scaleX: 1.1}}  id="carouselExampleCaptions" className="carousel slide relative border rounded-2xl bg-[#1A1A1A] dark:bg-dark pt-5 mt-10 pb-8"  data-bs-ride="carousel">
     <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
    <div className="grid grid-rows-3 grid-flow-col  pt-2">
  <div className="row-span-2 grid grid-cols-3 px-14 py-14">
    <div className="w-full h-full">
      <Image
        src="/web7.png"
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
        alt="Gallery image 4"
        className="active max-full h-full rounded-full hover:scale-95 transition duration-300 ease-in-out"
        width={235} height={250} priority
      />
    </div>
  </div>
  <div className="">
     <div className="flex justify-center items-center mt-3">
     <motion.button transition={spring}  whileHover={{scale: 1.1}} type="button" className="inline-block sm:px-3 px-6 py-2 bg-[#0f57ff] text-black dark:text-[#fff] mr-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">NodeJS</motion.button>
     <motion.button transition={spring}  whileHover={{scale: 1.1}} type="button" className="inline-block sm:px-3 px-6 py-2 bg-[#0f57ff] text-black dark:text-[#FFFF] mr-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">ReactJs</motion.button>
     <motion.button transition={spring}  whileHover={{scale: 1.1}} type="button" className="inline-block sm:px-3 px-6 py-2 bg-[#0f57ff] text-black dark:text-[#FFFF] mr-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">MongoDb</motion.button>
     <motion.button transition={spring}  whileHover={{scale: 1.1}} type="button" className="flex flex-row sm:px-3 px-6 py-2 bg-[#0f57ff] text-black dark:text-[#FFFF] mr-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">GitHub <Link href="https://github.com/CSmohaned/A-Book-Tracking-App" scroll={false}><BsGithub className='inline ml-2 mr-3 hover:translate-x-1'/></Link></motion.button>
  </div>
  <p className="text-center mt-2 mb-2 text-[#FFFF] dark:text-[#FFFF]">Project managment all tasks in your projects</p>
  </div>
</div>
    </div>
    <div className="carousel-item relative float-left w-full">
    <div className="grid grid-rows-3 grid-flow-col gap-4 p-8">
    <div className="row-span-2 grid grid-cols-2 gap-4">
    <div className="">
      <div className="lightbox">
        <Image
          src="/web1.png"
          alt="Gallery image 1"
          className="ecommerce-gallery-main-img active max-w-full h-auto rounded-full hover:scale-95 transition duration-300 ease-in-out"
          width={235} height={250} priority
        />
      </div>
    </div>
    <div className="">
      <Image
        src="/web2.png"
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
        alt="Gallery image 1"
        className="active max-w-full h-auto rounded-full hover:scale-95 transition duration-300 ease-in-out"
        width={235} height={250} priority
      />
    </div>
  </div>
  <div className="">
     <div className="flex justify-center items-center mt-3">
     <motion.button transition={spring}  whileHover={{scale: 1.1}} type="button" className="inline-block sm:px-3 px-6 py-2 bg-[#0f57ff] text-black mr-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">ReactJs</motion.button>
     <motion.button transition={spring}  whileHover={{scale: 1.1}} type="button" className="inline-block sm:px-3 px-6 py-2 bg-[#0f57ff] text-black mr-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">Project With Udacity</motion.button>
     <motion.button transition={spring}  whileHover={{scale: 1.1}} type="button" className="flex flex-row sm:px-3 px-6 py-2 bg-[#0f57ff] text-black mr-2 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">GitHub <Link href="https://github.com/CSmohaned/Task-Management" scroll={false}><BsGithub className='inline ml-2 mr-3 hover:translate-x-1'/></Link></motion.button>
  </div>
  <p className="text-center mt-2 mb-2 text-[#FFFF] dark:text-[#FFFF]">A Book Tracking App</p>
  </div>
</div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon bg-purple inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute text-purple top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon bg-purple inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</motion.div> 
    </section>
        )
}
export default Portfolio;