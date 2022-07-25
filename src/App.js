import React from 'react';
import Footer from './components/Footer';
import Galleri from './components/Galleri';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import News from './components/News';
import Shop from './components/Shop';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Main />
      <News />
      <Galleri />
      <Shop />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default App;
