import React from 'react'
import logo from "../assets/assets/vickyImage.png"
import{FaLinkedin} from "react-icons/fa"
import{FaGithub} from "react-icons/fa"
import{FaSquareXTwitter} from "react-icons/fa6"
import{FaInstagram} from "react-icons/fa"
import {motion} from "framer-motion"
import resume from "../assets/assets/vignesh.pdf"

const Navbar = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
  <img className='rounded-full h-10 w-10 object-cover  self-center mt-2' src={logo} alt="logo" />
    </div>
    
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a href={resume}  className='cursor-pointer' target="_blank" rel="noopener noreferrer">
    <motion.button
    
    variants={container(0.5)}
    initial="hidden"
    animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
    
    Download CV
  </motion.button>
                  
                  </a>
  
 
    <a href="https://github.com/VickyBE1994" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/vignesh-murugesan-44809b192/" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
        {/* < FaLinkedin/> */}
        <FaSquareXTwitter/>
        <FaInstagram/>
    </div>
  </nav>
   
}

export default Navbar
