import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "../../assets/style/HeroNews.css";
import 'swiper/css/pagination';

// import data
import { heroNews } from '../../data';

import {AiOutlineRight} from 'react-icons/ai';

const HeroNews = () => {
  return (
    <section className="h-[600px] w-full bg-hero bg-center bg-cover bg-no-repeat text-white relative mb-6 news">
        <div className='px-4 lg:px-[100px] pt-[120px] lg:pt-[150px]'>
            <Swiper 
                slidesPerView={1}
                pagination={{ dynamicBullets: true, clickable: true, }} 
                autoplay={{ delay: 5000, disableOnInteraction: false, }}
                modules={[Pagination, Autoplay]} 
                className="swiperNews"
                >
                {heroNews.map((news, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='flex lg:justify-between flex-col lg:flex-row mx-auto'>
                                <div className='text-left text-white w-[350px] lg:w-[500px]'>
                                    <h1 className='font-semibold text-[30px] lg:text-[40px] leading-10 mb-5'>{news.title}</h1>
                                    <p className='text-sm mb-2'>{news.date}</p>
                                    <div className='absolute bottom-[100px] left-0 hidden lg:block'>
                                        <button className='px-4 py-1 text-[15px] text-white bg-[#1C6DD0] hover:bg-[#1f76e0] rounded-md flex items-center'>Baca Selengkapnya <AiOutlineRight className='text-[20px] ml-2' /></button>
                                    </div>
                                </div>
                                <div className='w-[350px] lg:w-[600px]'>
                                    <img src={news.image.type} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    </section>
  )
}

export default HeroNews