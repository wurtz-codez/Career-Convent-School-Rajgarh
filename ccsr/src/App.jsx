import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Gallery />
      <About />
      <Contact />
    </div>
  )
}

export default App