import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutContent from '../components/Main_About/AboutContent';
import AboutProfile from '../components/Main_About/AboutProfile';
import Footer from '../components/Footer/Footer';

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <AboutProfile />
      <Footer />
    </>
  );
}

export default AboutUs;
