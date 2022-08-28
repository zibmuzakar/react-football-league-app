import React from 'react';
import Galleri from '../components/Galleri';
import Hero from '../components/Hero';
import Main from '../components/Main';
import News from '../components/News';
import Shop from '../components/Shop';
import Sponsor from '../components/Sponsor';

const Home = () => {
  return (
    <div className='app'>
      <Hero />
      <Main />
      <News />
      <Galleri />
      <Shop />
      <Sponsor />
    </div>
  )
}

export default Home