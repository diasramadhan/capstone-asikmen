import React from 'react';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './pages/RegisterPage';

function App() {
  const page = [<LoginPage />, <RegisterPage />];

  return (
    <>
      <Navbar />
      {page[1]}
    </>
  );
}

export default App;
