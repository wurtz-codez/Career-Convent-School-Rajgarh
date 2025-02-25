import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Gallery />
    </div>
  )
}

export default App