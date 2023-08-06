import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home } from './pages';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
