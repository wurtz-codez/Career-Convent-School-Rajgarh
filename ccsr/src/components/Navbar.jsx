import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-[#1C4D7F] flex items-center justify-between px-8 fixed top-0 z-50 border-b-4 border-[#F7DC07]">
      {/* Left Logo */}
      <img 
        src="src\assets\CCSR_logo-removebg-preview.png" 
        alt="Left Logo" 
        className="h-16 w-auto rounded-full"
      />

      {/* Navigation Links */}
      <div className="flex gap-12 absolute left-1/2 transform -translate-x-1/2">
        {['Home', 'Gallery', 'About us', 'Contact us'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-white text-2xl relative group font-['Instrument_Sans']"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Right Logo */}
      <img 
        src="src\assets\CCSR_Principle_-removebg-preview.png" 
        alt="Right Logo" 
        className="h-16 w-auto rounded-full"
      />
    </nav>
  )
}

export default Navbar