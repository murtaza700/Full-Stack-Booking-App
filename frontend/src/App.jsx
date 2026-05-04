import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/auth' element={<AuthPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App