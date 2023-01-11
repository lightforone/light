import logo from './sun.jpg';
import './App.css';
import React from 'react';
import './teststyle.css';

function App() {
return (
  <div>
    <header>
      <h1>One more Light</h1>
    </header>
    <img src={logo} className="App-logo" alt="logo" />
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
    <footer>
      <p>Beware of what's happening, we are on our way</p>
    </footer>
  </div>
);
}

export default App;
