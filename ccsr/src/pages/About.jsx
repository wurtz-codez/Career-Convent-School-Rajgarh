import React, { useState, useEffect } from 'react'
import directorImage from '../assets/CCSR_Principle_-removebg-preview.png'
import schoolImage from '../assets/school_front-removebg-preview.png'

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [
    { src: directorImage, name: "Dr. Rakesh Pande", title: "Director, CCSR", className: "h-[70%]" },
    { src: schoolImage, name: "Career Convent School", title: "Rajgarh (M.P.)", className: "h-[120%]" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade in
      }, 1000); // Half a second for fade out
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="relative mt-8 mb-8 h-[90vh]">
        <h1 className="text-7xl font-extrabold text-center text-[#1C4D7F] font-['EB_Garamond'] pt-5 mb-0">
            About CCSR
        </h1>

        <div className="flex justify-center h-[90%]">
          <div className="w-4/5 mt-5 bg-[#1C4D7F] p-6 rounded-lg h-full">
            <div className="flex gap-8 h-full">
              {/* Left side text content */}
              <div className="w-2/3 overflow-y-auto">
                <p className="text-lg text-justify text-white">
                  The Center for Cyber Security Research (CCSR) is a research center at the University of North Carolina at Charlotte. The CCSR is a multi-disciplinary research center that brings together faculty and students from the College of Computing and Informatics, the College of Engineering, and the...
                </p>
                <p className="text-lg text-justify text-white mt-4">
                  Our mission is to advance the field of cybersecurity through innovative research, education, and collaboration with industry partners. We focus on developing cutting-edge solutions to address current and emerging cybersecurity challenges.
                </p>
                <p className="text-lg text-justify text-white mt-4">
                  The center provides opportunities for students to engage in hands-on research projects and gain practical experience in cybersecurity technologies and methodologies.
                </p>

                <div className='mt-8 relative'>
                  <div className='border-animation'></div>
                  <h1 className="text-5xl text-[#F7DC07] font-['EB_Garamond'] mt-8 pt-5">
                    Message from the Director
                  </h1>
                  <p className='text-lg text-white mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, voluptates voluptatem consequatur iure minima tempora omnis perferendis quos obcaecati amet. Corporis ad facilis molestias quia error quasi iste minus repellendus.
                  </p>
                </div>
                
              </div>
              
              
              {/* Right side image */}
              <div className="w-1/3 h-full"> 
                <div className="relative h-full flex flex-col justify-center"> 
                  <img 
                    src={images[currentImage].src}
                    alt={`${images[currentImage].name}`} 
                    className={`w-full object-contain rounded-lg shadow-lg transition-opacity duration-500 ${
                      images[currentImage].className
                    } ${fade ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <div className={`absolute bottom-0 left-0 right-0 transition-opacity duration-500 ${
                    fade ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-center text-white mt-2 font-semibold">
                      {images[currentImage].name}
                    </p>
                    <p className="text-center text-white">
                      {images[currentImage].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About