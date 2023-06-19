import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Neoncursor from '../Components/Neoncursor'

const Articles = () => {

  const pStyle = {
    position: 'absolute',
    top: '18%',
    left: '41%',
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
        <p style={pStyle}>Articles</p>
        <Footer />
    </div>
  )
}

export default Articles