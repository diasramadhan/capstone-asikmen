import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Overview from '../components/Overview/Overview';
import Footer from '../components/Footer/Footer';
import Coba from '../components/Coba/Coba';

function HomePage() {
  return (
    <>
      <Navbar />
      <Overview />
      <Coba />
      <Footer />
    </>
  );
}

export default HomePage;
