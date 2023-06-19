import React, { useEffect } from 'react';
import { neonCursor } from 'threejs-toys';


const Neoncursor = () => {
    useEffect(() => {
      const initNeonCursor = () => {
        neonCursor({
          el: document.getElementById('app'),
          shaderPoints: 16,
          curvePoints: 80,
          curveLerp: 0.5,
          radius1: 5,
          radius2: 30,
          velocityTreshold: 10,
          sleepRadiusX: 100,
          sleepRadiusY: 100,
          sleepTimeCoefX: 0.0025,
          sleepTimeCoefY: 0.0025,
        });
      };
  
      initNeonCursor();
    }, []);
  
    const appStyles = {
      // backgroundSize: 'cover', 
      margin: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      touchAction: 'pan-up',
      color: '#ffffff',
      fontFamily: 'Montserrat, sans-serif',
      textAlign: 'center',
      textShadow: '0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000',
    };
  
    return (
      <div id="app" style={appStyles}>
        <div id="hero">
        </div>
      </div>
    );
  };


export default Neoncursor;