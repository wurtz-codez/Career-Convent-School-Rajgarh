import React from 'react'
import { Link } from 'react-scroll'
import schoolLogo from '../assets/CCSR_logo-removebg-preview.png'
import principalLogo from '../assets/CCSR_Principle_-removebg-preview.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1C4D7F] px-8 py-2 z-50 border-b-4 border-[#F7DC07]">
      <div className="flex justify-between items-center">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img 
            src={schoolLogo} 
            alt="School Logo" 
            className="h-16 w-auto"
          />
        </div>

        {/* Center Navigation Links */}
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-12">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link relative px-4 py-2 text-white cursor-pointer text-lg font-semibold transition-all duration-300 hover:text-white active:bg-[#F7DC07] active:text-[#1C4D7F] rounded-md"
              activeClass="active-nav-link"
            >
              Home
            </Link>
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link relative px-4 py-2 text-white cursor-pointer text-lg font-semibold transition-all duration-300 hover:text-white active:bg-[#F7DC07] active:text-[#1C4D7F] rounded-md"
              activeClass="active-nav-link"
            >
              Gallery
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link relative px-4 py-2 text-white cursor-pointer text-lg font-semibold transition-all duration-300 hover:text-white active:bg-[#F7DC07] active:text-[#1C4D7F] rounded-md"
              activeClass="active-nav-link"
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link relative px-4 py-2 text-white cursor-pointer text-lg font-semibold transition-all duration-300 hover:text-white active:bg-[#F7DC07] active:text-[#1C4D7F] rounded-md"
              activeClass="active-nav-link"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0">
          <img 
            src={principalLogo} 
            alt="Principal Logo" 
            className="h-16 w-auto rounded-full"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar