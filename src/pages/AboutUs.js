import React from 'react';
import Footer from '../components/Footer/Footer';
import AboutContent from '../components/Main_About/AboutContent';
import AboutProfile from '../components/Main_About/AboutProfile';
import Navbar from '../components/Navbar/Navbar';

function AboutUs() {
  return (
    <>
      <Navbar hideNews />
      <AboutContent />
      <AboutProfile />
      <Footer />
    </>
  );
}

export default AboutUs;
