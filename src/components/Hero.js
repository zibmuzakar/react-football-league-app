import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "../assets/style/style.css";

// import logo
import Logo from '../assets/img/logo/logo-bpl.png';

// import icon
import {MdLocationPin} from 'react-icons/md';
import {MdOutlineCalendarToday} from 'react-icons/md';

// import data
import { matches } from '../data';

const Hero = () => {
  // const { game, home, logoHome, away, logoAway, vanue, date, time } = matches;
  return (
    <section className="h-[600px] w-full bg-hero bg-center bg-cover bg-no-repeat text-white pt-[100px] lg:pt-[180px] relative mb-6">
      <div className='flex flex-col relative overflow-hidden lg:flex-row mx-auto'>
        <div className='flex my-auto px-4 mb-6 lg:mb-auto'>
          {/* image */}
          <img className='max-h-[150px] lg:max-h-[200px] px-4' src={Logo} alt='bpl' />
          {/* text */}
          <h1 className='font-bold text-[40px] lg:text-[55px] leading-tight uppercase'>Bandung Premier League</h1>
        </div>
        {/* next match */}
        <div className='px-2 lg:pl-20 pr-0 md:min-w-[410px] lg:min-w-[850px] '>
          {/* text */}
            <h2 className='font-light text-[30px] mb-2 lg:mb-4'>Next Match</h2>
          {/* swipper */}
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper min-h-[320px]"
          >
            {matches.map((match, index) => {
              return (
                <SwiperSlide className='bg-nextmatch rounded-lg p-4' key={index}>
                  <div className='flex flex-col'>
                    {/* txt gameweek */}
                    <div className='font-normal text-center italic mb-4 text-[20px]'>Gameweek {match.game}</div>
                    {/* club */}
                    <div className='px-4 items-center flex flex-row justify-between mb-8 lg:mb-10'>
                      {/* home */}
                      <div className='flex flex-col items-center'>
                        {/* img */}
                        <img className='h-[75px] mb-2' src={match.logoHome.type} alt='' />
                        <p className='font-normal max-w-[120px] max-h-[20px] leading-none text-[20px]'>{match.home}</p>
                      </div>
                      {/* txt vs */}
                      <div className='font-bold text-[30px] text-center'>VS</div>
                      {/* away */}
                      <div className='flex flex-col items-center'>
                        {/* img */}
                        <img className='h-[75px] mb-2' src={match.logoAway.type} alt='' />
                        <p className='font-normal max-w-[120px] max-h-[20px] leading-none text-[20px]'>{match.away}</p>
                      </div>
                    </div>
                    {/* vanue and date */}
                    <div>
                      {/* location */}
                      <div className='text-white flex flex-row items-center'>
                        <MdLocationPin className='text-[15px] lg:text-[17px] mr-2' />
                        <p className='text-[10px] lg:text-[12px]'>{match.vanue}</p>
                      </div>
                      {/* date */}
                      <div className='text-white flex flex-row items-center'>
                        <MdOutlineCalendarToday className='text-[15px] lg:text-[17px] mr-2' />
                        <p className='text-[10px] lg:text-[12px] mt-1'>{match.date} - {match.time}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;