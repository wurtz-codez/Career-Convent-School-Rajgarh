import React from 'react'

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#1C4D7F', width: '100%', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <img src="src\assets\CCSR_logo-removebg-preview.png" alt="Left Logo" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#gallery" style={linkStyle}>Gallery</a>
        <a href="#about" style={linkStyle}>About Us</a>
        <a href="#contact" style={linkStyle}>Contact Us</a>
      </div>
      <img src="src\assets\CCSR_Principle_-removebg-preview.png" alt="Right Logo" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
    </div>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  position: 'relative',
  cursor: 'pointer',
  transition: 'color 0.3s',
};

const linkHoverStyle = {
  ...linkStyle,
  '::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: '0',
    left: '0',
    backgroundColor: 'white',
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
    transition: 'transform 0.3s ease-out',
  },
  ':hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
  ':hover': {
    color: '#ddd',
  },
};

export default Navbar


