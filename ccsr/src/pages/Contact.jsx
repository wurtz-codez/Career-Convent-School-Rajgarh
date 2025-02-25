import React from 'react'
import schoolLogo from '../assets/CCSR_logo-removebg-preview.png'

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-16 bg-[#1C4D7F]"> 
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src={schoolLogo} alt="School Logo" className="max-w-[300px] mx-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <form 
            action="mailto:cscsrajgarh@email.com" 
            method="post" 
            encType="text/plain"
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#1C4D7F]">Contact Us</h2>
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" rows="4" className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="w-full bg-[#F7DC07] text-[#1C4D7F] py-2 rounded font-bold hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full mt-8 text-white text-center">
          <p className="mb-2">📞 Contact: +91 9425194152, +91 7694094152</p>
          <p>📍 Location: 46, Shikshak (Teacher's) Colony, Rajgarh</p>
        </div>
      </div>
    </div>
  )
}

export default Contact