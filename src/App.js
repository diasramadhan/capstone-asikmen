import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TestPreparation from './pages/TestPreparationPage';
import FooterSecondary from './components/Footer/FooterSecondary';

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestPreparation />} />
      </Routes>
      <FooterSecondary />
    </>
  );
}

export default App;
