import React from 'react'
import schoolLogo from '../assets/CCSR_logo-removebg-preview.png'

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-16 bg-[#1C4D7F] min-h-[calc(100vh-4rem)]"> 
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={schoolLogo} alt="School Logo" className="max-w-[400px] mx-auto" />
        </div>
        <div className="w-full md:w-1/3">
          <form 
            action="mailto:cscsrajgarh@email.com" 
            method="post" 
            encType="text/plain"
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#1C4D7F]">Contact Us</h2>
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border rounded text-lg" 
                required 
              />
            </div>
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border rounded text-lg" 
                required 
              />
            </div>
            <div className="mb-6">
              <textarea 
                placeholder="Your Message" 
                rows="6" 
                className="w-full p-3 border rounded text-lg" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#F7DC07] text-[#1C4D7F] py-3 rounded font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 text-white text-center">
          <p className="mb-4 text-xl">📞 Contact: +91 9425194152, +91 7694094152</p>
          <p className="text-xl">📍 Location: 46, Shikshak (Teacher's) Colony, Rajgarh</p>
        </div>


      </div>
    </div>
  )
}

export default Contact