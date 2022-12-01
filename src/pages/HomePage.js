import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Overview from '../components/Overview/Overview';
import Footer from '../components/Footer/Footer';
import Coba from '../components/Coba/Coba';
import Feture from '../components/CardFeature/Feature';

function HomePage() {
  return (
    <>
      <Navbar />
      <Overview />
      <Feture />
      <Coba />
      <Footer />
    </>
  );
}

export default HomePage;
