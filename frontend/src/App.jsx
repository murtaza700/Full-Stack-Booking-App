import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <div className='flex'>

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/login' element={<AuthPage />} />
        <Route path='/register' element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default App