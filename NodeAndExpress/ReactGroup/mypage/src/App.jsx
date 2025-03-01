// filepath: /Users/uddavdhakal/Desktop/AdvanceWEB/NodeAndExpress/ReactGroup/mypage/src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="navigation">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your service needs.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>We are a company dedicated to providing the best services to our customers.</p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1: Custom Solutions</li>
          <li>Service 2: Expert Consulting</li>
          <li>Service 3: Reliable Support</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@ourcompany.com</p>
        <p>Phone: +123 456 7890</p>
      </section>

      <footer>
        <p>© 2025 Our Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

