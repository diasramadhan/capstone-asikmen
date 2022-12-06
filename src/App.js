import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TestPreparation from './pages/TestPreparationPage';
import Test from './pages/TestPage';
import FooterSecondary from './components/Footer/FooterSecondary';

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestPreparation />} />
        <Route path="/test/start" element={<Test />} />
      </Routes>
      <FooterSecondary />
    </>
  );
}

export default App;
