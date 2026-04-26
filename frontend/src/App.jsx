import React from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App