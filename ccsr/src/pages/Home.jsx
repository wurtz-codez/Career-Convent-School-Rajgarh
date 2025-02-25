import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [establishCount, setEstablishCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const establishTarget = 2001;
  const studentTarget = 700;
  const duration = 4000; // Time taken by the counters of established and students to reach the number
  
  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        // Custom easing function that slows down after 80%
        let easedProgress;
        if (progress < 0.8) {
          easedProgress = progress * 1.25;
        } else {
          const remainingProgress = (progress - 0.8) / 0.2;
          easedProgress = 0.8 + (0.2 * (1 - Math.pow(1 - remainingProgress, 5)));
        }
        setEstablishCount(Math.floor(establishTarget * easedProgress));
        setStudentCount(Math.floor(studentTarget * easedProgress));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setEstablishCount(establishTarget);
        setStudentCount(studentTarget);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  // 3 seconds
    fade: true  // Add smooth fade transition
  };

  const images = [
    "src/assets/carousel1.jpg",
    "src/assets/carousel2.jpg",
    "src/assets/carousel3.jpg"
  ];

  return (
    <div className="w-full">

      <Navbar />

      {/* Home Section */}

      <div className="mt-16"> {/* This margin prevents content from going under navbar */}
        <div className="w-full h-[600px]">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-full h-[600px]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        
        <div className='bg-[#1C4D7F]'>
          <div className="relative">
            <h1 className="text-7xl font-extrabold text-center text-white font-['EB_Garamond'] pt-5 mb-0">
              Career Convent School
            </h1>
            <div className="absolute h-1 bg-[#F7DC07] left-1/2 transform -translate-x-1/2 bottom-0
              animate-underline">
            </div>
          </div>
          
          <div className="relative flex justify-between items-center px-20">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-semibold text-[#F7DC07] font-['EB_Garamond']">
                Establish Year
              </p>
              <p className="text-6xl font-bold text-[#F7DC07] font-['EB_Garamond']">
                {establishCount}
              </p>
            </div>
            
            <h3 className="text-4xl font-bold text-center text-white font-['EB_Garamond']">
              Rajgarh (M.P.)
            </h3>
            
            <div className="flex flex-col items-center">  
              <p className="text-4xl font-semibold text-[#F7DC07] font-['EB_Garamond']">
                Students
              </p>
              <p className="text-6xl font-bold text-[#F7DC07] font-['EB_Garamond']">
                {studentCount}+
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <h2 className="text-3xl mt-3 font-bold text-center border-2 border-black p-4 inline-block
              bg-[#F7DC07] text-blue-900 rounded-lg transform transition-all duration-500 hover:scale-105 animate-fadeIn">
              Discipline • Education • Ordination
            </h2>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <div className="relative mb-8">
          <h1 className="text-7xl font-extrabold text-center text-[#1C4D7F] font-['EB_Garamond'] pt-5 mb-0">
            Gallery
          </h1>
        </div>
      </div>
    </div>
  )
};
export default Home;