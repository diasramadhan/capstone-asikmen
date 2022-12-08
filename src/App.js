import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './pages/RegisterPage';
import useAuth from './hooks/useAuth';
import Loading from './components/Loading/Loading';
import AuthContext from './contexts/AuthContext';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import AboutUs from './pages/AboutUs';
import Test from './pages/TestPage';
import TestPreparation from './pages/TestPreparationPage';
import Result from './pages/ResultPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [currentUser, loading] = useAuth();
  const [historyTestId, setHistoryTestId] = useState(null);

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
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    );
  }

  return (
    <AuthContext.Provider value={currentUser}>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/test" element={<TestPreparation />} />
        <Route path="/test/start" element={<Test userId={currentUser.uid} setHistoryTestId={setHistoryTestId} />} />
        <Route path="/result" element={<Result historyTestId={historyTestId} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
