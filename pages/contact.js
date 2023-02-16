import Link from "next/link";
import {useState} from "react";
import { PhoneIcon,MapPinIcon,EnvelopeIcon as Icon} from "@heroicons/react/24/outline";
import { motion} from 'framer-motion';
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
function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
   //   Form validation state
   const [errors, setErrors] = useState({});

   //   Setting button text on form submission
   const [buttonText, setButtonText] = useState("Send");
 
   // Setting success or failure messages states
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [showFailureMessage, setShowFailureMessage] = useState(false);
 
   // Validation check method
   const handleValidation = () => {
     let tempErrors = {};
     let isValid = true;
 
     if (fullName.length <= 0) {
       tempErrors["fullname"] = true;
       isValid = false;
     }
     if (email.length <= 0) {
       tempErrors["email"] = true;
       isValid = false;
     }
     if (subject.length <= 0) {
       tempErrors["subject"] = true;
       isValid = false;
     }
     if (message.length <= 0) {
       tempErrors["message"] = true;
       isValid = false;
     }
 
     setErrors({ ...tempErrors });
     console.log("errors", errors);
     return isValid;
   };
 
   //   Handling form submit
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     let isValidForm = handleValidation();
 
     if (isValidForm) {
       setButtonText("Sending");
       const res = await fetch("/api/sendgrid", {
         body: JSON.stringify({
           email: email,
           fullname: fullName,
           subject: subject,
           message: message,
         }),
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
       });
 
       const { error } = await res.json();
       if (error) {
         console.log(error);
         setShowSuccessMessage(false);
         setShowFailureMessage(true);
         setButtonText("Send");
         return;
       }
       setShowSuccessMessage(true);
       setShowFailureMessage(false);
       setButtonText("Send");
     }
   };
    return(
        <section id="contact" className="min-w-full flex flex-col justify-start  w-screen bg-light dark:bg-silver pt-5 overflow-hidden">
    <h2 className="text-center font-bold text-4xl text-[#666666] dark:text-[#FFFFFF]">Contact Me</h2>
    <span className="text-center font-normal text-sm pt-2">Get in touch</span>
      <motion.div variants={show} initial="hidden" animate="visible" className="lg:flex-col lg:px-20 lg:justify-center lg:items-center flex flex-row py-20 px-28 sm:px-5 md:px-10">
        <div className="flex flex-col lg:w-auto  w-1/2 pt-16 lg:pt-0 lg:justify-start lg:items-start">
          <motion.div transition={spring}  whileHover={{scale: 1.1}} className="flex flex-row mb-5">
            <PhoneIcon className="h-7 w-7 mr-2"/>
          <div className="flex flex-col ">
            <h3 className="text-[#1A1A1A] dark:text-[#FFFF]">Contact Me</h3>
            <Link href="tel:+20 114 2968 654" className="text-[#7E7E7E] dark:text-[#A9AFC3]">+20 114 2968 654</Link>            
          </div>
          </motion.div>
          <motion.div transition={spring}  whileHover={{scale: 1.1}} className="flex flex-row mb-5">
            <Icon className="h-7 w-7 mr-2"/>
          <div className="flex flex-col ">
            <h3 className="text-[#1A1A1A] dark:text-[#FFFF]">Email</h3>
            <Link href="mailto:mohanedadel65@gmail.com" className="text-[#7E7E7E] dark:text-[#A9AFC3]">mohanedadel65@gmail.com</Link>            
          </div>
          </motion.div>
          <motion.div transition={spring}  whileHover={{scale: 1.1}} className="flex flex-row mb-5">
            <MapPinIcon className="h-7 w-7 mr-2"/>
          <div className="flex flex-col ">
            <h3 className="text-[#1A1A1A] dark:text-[#FFFF]">Location</h3>
            <Link href="#contact" className="text-[#7E7E7E] dark:text-[#A9AFC3]" scroll={false} >Giza, Giza, EG</Link>            
          </div>
          </motion.div>
        </div>
        <div className="flex flex-col w-1/2 lg:w-full ">
    <form onSubmit={handleSubmit} className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-dark overflow-hidden">
      <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

      <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" value={fullName} onChange={(e) => {setFullName(e.target.value);}} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
      <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value);}} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" value={subject} onChange={(e) => {setSubject(e.target.value);}} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
      <textarea name="message" value={message} onChange={(e) => {setMessage(e.target.value);}} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
        <motion.button transition={spring}  whileHover={{scale: 1.1}} className="px-10 mt-8 py-2 bg-purple text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          {buttonText}
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </motion.button>
      </div>
    </form>
        </div>
      </motion.div>
    </section>
        )
}
export default Contact;