import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fixtures from './pages/Fixtures';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/fixtures' element={<Fixtures/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
