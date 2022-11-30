import React from 'react';
import LoginInput from './components/LoginInput/LoginInput';
import Navbar from './components/Navbar/Navbar';
import RegisterInput from './components/RegisterInput/RegisterInput';

function App() {
  const page = [<LoginInput />, <RegisterInput />];

  return (
    <>
      <Navbar />
      {page[1]}
    </>
  );
}

export default App;
