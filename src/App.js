import React from 'react';
// import { neonCursor } from 'threejs-toys';
import './App.css';
import Footer from './Components/Footer';
// import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Neoncursor from './Components/Neoncursor';


function App() {

  const pStyle = {
    textAlign: 'center',
    // margin: 'calc(50vh - 80px) auto 0',
    pointerEvents: 'none',
    position: 'absolute',
    width: '621px',
    height: '485px',
    left: '444px',
    top: '140px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '96px',
    lineHeight: '110%',
    display: 'flex',
    alignItems: 'center',
    color: '#FF4700',
  }

  return (
    <div className="App">
        <Navbar />
        <Neoncursor />
        <p style={pStyle}>light defines
spatial experience
as it falls and reflects</p>
        <Footer />
    </div>
  );
}

export default App;
