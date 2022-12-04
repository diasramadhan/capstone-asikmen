import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Overview from '../components/Overview/Overview';
import Footer from '../components/Footer/Footer';
import Coba from '../components/Coba/Coba';
import Feture from '../components/CardFeature/Feature';
import Artikel from '../components/Artikel/Artikel';

function HomePage() {
  return (
    <>
      <Navbar />
      <Overview />
      <Feture />
      <Artikel />
      <Coba />
      <Footer />
    </>
  );
}

export default HomePage;
