import React from 'react'
import logo from "../assets/assets/vickyImage.png"
import{FaLinkedin} from "react-icons/fa"
import{FaGithub} from "react-icons/fa"
import{FaSquareXTwitter} from "react-icons/fa6"
import{FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
  <img className='rounded-full h-10 w-10 object-cover  self-center mt-2' src={logo} alt="logo" />
    </div>
    
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
 
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
