import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar.js';
import Home from './Home/Home.js';
import Aboutus from './About/AboutUs.js';
import React, { useState, useEffect } from 'react';
import Form from './Form/Form.js';
import CardList from './Services/CardList.js';
import ContactForm from './Contact/Contact.js';
import CardDetails from './Services/CardDetails.js';
import Footer from './Footer/Footer.js';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy.js';


function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <Router>
        <Navbar style={{ width: windowSize.width, height: windowSize.height }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/audition-form" element={<Form />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<CardList />} />
          <Route path="/services/:serviceId" element={<CardDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
