import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Neoncursor from '../Components/Neoncursor'

const whatwedo = () => {

  const pStyle = {
    position: 'absolute',
    top: '15%',
    left: '45%',
    textAlign: 'center',
    lineHeight: '80px',
    margin: 'calc(50vh - 80px) auto 0',
    fontSize: '60px',
    textTransform: 'uppercase',
    color: 'white',
    pointerEvents: 'none',
  }

  return (
    <div>
        <Navbar />
        <Neoncursor />
        <p style={pStyle}>What<br />We do</p>
        <Footer />
    </div>
  )
}

export default whatwedo;