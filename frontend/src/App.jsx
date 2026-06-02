import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ListService = lazy(() => import('./pages/ListService'));

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/auth' element={<AuthPage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/services/:id' element={<ServiceDetailPage />} />

        <Route path='/list-service' element={<ListService />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App