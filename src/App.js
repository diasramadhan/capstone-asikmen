import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './pages/RegisterPage';
import useAuth from './hooks/useAuth';
import Loading from './components/Loading/Loading';
import AuthContext from './contexts/AuthContext';
import DashboardPage from './pages/DashboardPage';
import NavbarAuth from './components/NavbarAuth/NavbarAuth';
import HomePage from './pages/HomePage';


function App() {
  const [currentUser, loading] = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (currentUser === null) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <AuthContext.Provider value={currentUser}>
      <NavbarAuth />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
