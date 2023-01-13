import React, { useState, useEffect } from 'react';
import './teststyle.css';
import mainbg from './mainbg.jpg'
import { Animation } from 'react-animations';
import lbox from './lightbox.png';
import sun from './sunTest.png';


const MyComponent = () => {
  const [backgroundX, setBackgroundX] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundX(prevBackgroundX => prevBackgroundX - 1);
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  const bodyStyle = {
    background: `url(${mainbg}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div style={bodyStyle}>
      {/*<header>
      <img src={lbox} alt="My logo" />
      <h1>One more Light</h1>
    </header>*/}
    <body>
    <div className="sun">
      <div className="sun-ray"></div>
      <div className="sun-ray"></div>
      <div className="sun-ray"></div>
      <div className="sun-ray"></div>
      <div className="sun-ray"></div>
      <div className="sun-ray"></div>
      <div className="sun-center"></div>
    </div>
    <div>
    <sun/>
    </div>
    <main>
      <section className='white-text'>
        <h2>About Us</h2>
        <p>“No one who does good work will ever come to a bad end, either here or in the world come”
        </p>
      </section>
      <section className='white-text'>
        <h2>Our Services</h2>
        <ol>
        <button className="animated-button">Food Joints</button>
        <button className="animated-button">Cuisine</button>
        <button className="animated-button">PLaces</button>
        <button className="animated-button1">Hash</button>
        <button className="animated-button1">Map</button>
        </ol>
      </section>
    </main>
    </body>
    </div>
  );
}

export default MyComponent;
