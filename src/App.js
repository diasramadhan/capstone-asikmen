import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './pages/RegisterPage';
import useAuth from './hooks/useAuth';
import { auth } from './utils/firebaseConfig';

function App() {
  const currentUser = useAuth();

  const dummyLogOutHandler = async () => {
    await signOut(auth);
  };

  if (currentUser === null) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={(
            <>
              <h1>HALAMAN DASHBOARD USER</h1>
              <p>{`Haloo ${currentUser.displayName}`}</p>
              <button type="button" onClick={dummyLogOutHandler}>logout</button>
            </>
          )}
        />
      </Routes>
    </>
  );
}

export default App;
