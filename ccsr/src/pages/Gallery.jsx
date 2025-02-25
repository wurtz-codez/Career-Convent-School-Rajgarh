import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import betiBachaoImage from '../assets/gallery/lt_box/beti_bachao_image.jpg';
import facultyImage from '../assets/gallery/lt_box/faculty_image.jpg';
import vandeMatramImage from '../assets/gallery/lt_box/vande_matram_image.jpg';
import schoolLogo from '../assets/CCSR_logo-removebg-preview.png'

const Gallery = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,        
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
    className: "h-full"
  };

  // Sample image arrays for each box (replace with your actual images)
  const box1Images = [
    betiBachaoImage,
    facultyImage,
    vandeMatramImage,
  ];

  const box3Images = [
    betiBachaoImage,
    facultyImage,
    vandeMatramImage,
  ];

  const box4Images = [
    betiBachaoImage,
    facultyImage,
    vandeMatramImage,
  ];

  const box7Images = [
    betiBachaoImage,
    facultyImage,
    vandeMatramImage,
  ];

  const box9Images = [
    betiBachaoImage,
    facultyImage,
    vandeMatramImage,
  ];

  return (
    <div>
      {/* Gallery Section */}
      <div className="relative mb-8">
        <h1 className="text-7xl font-extrabold text-center text-[#1C4D7F] font-['EB_Garamond'] pt-5 mb-0">
          Gallery
        </h1>

        {/* Main Gallery Container */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px]">
            {/* Box 1 - Large */}
            <div className="col-span-6 row-span-4 border-2 border-[#1C4D7F] overflow-hidden h-full">
              <Slider {...carouselSettings} className="!h-full">
                {box1Images.map((image, index) => (
                  <div key={index} className="h-full w-full aspect-[16/9]">
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover"
                      style={{ display: 'block' }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Box 2 */}
            <div className="col-span-3 row-span-2 border-2 border-[#1C4D7F] bg-[#1C4D7F] p-4">
              <p className="text-[#F7DC07] font-['EB_Garamond'] text-3xl">
                "Education is not preparation for life; education is life itself."
              </p>
            </div>

            {/* Box 3 */}
            <div className="col-span-3 row-span-2 border-2 border-[#1C4D7F] overflow-hidden h-full">
              <Slider {...carouselSettings} className="!h-full">
                {box3Images.map((image, index) => (
                  <div key={index} className="h-full w-full aspect-[16/9]">
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover"
                      style={{ display: 'block' }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Box 4 */}
            <div className="col-span-3 row-span-2 border-2 border-[#1C4D7F] overflow-hidden flex items-center justify-center p-4">
              <img 
                src={schoolLogo} 
                alt="Gallery Image" 
                className="max-w-[100%] max-h-[100%] object-contain" 
              />
            </div>

            {/* Box 5 */}
            <div className="col-span-3 row-span-2 border-2 border-[#1C4D7F] bg-[#1C4D7F] p-4">
              <p className="text-[#F7DC07] font-['EB_Garamond'] text-3xl">
                "Learning is not attained by chance, it must be sought for with ardor."
              </p>
            </div>

            {/* Box 6 */}
            <div className="col-span-3 row-span-2 border-2 border-[#1C4D7F] bg-[#1C4D7F] p-4">
              <p className="text-[#F7DC07] font-['EB_Garamond'] text-3xl">
                "The beautiful thing about learning is that no one can take it away from you."
              </p>
            </div>

            {/* Box 7 */}
            <div className="col-span-3 row-span-2 border-2 border-[#1C4D7F] overflow-hidden h-full">
              <Slider {...carouselSettings} className="!h-full">
                {box7Images.map((image, index) => (
                  <div key={index} className="h-full w-full aspect-[16/9]">
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover"
                      style={{ display: 'block' }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Box 8 */}
            <div className="col-span-2 row-span-2 border-2 border-[#1C4D7F] bg-[#1C4D7F] p-4">
              <p className="text-[#F7DC07] font-['EB_Garamond'] text-3xl">
                "Knowledge is power."
              </p>
            </div>

            {/* Box 9 */}
            <div className="col-span-4 row-span-2 border-2 border-[#1C4D7F] overflow-hidden h-full">
              <Slider {...carouselSettings} className="!h-full">
                {box9Images.map((image, index) => (
                  <div key={index} className="h-full w-full aspect-[16/9]">
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover"
                      style={{ display: 'block' }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;