import React from 'react';

// import data 
import { news } from '../data';

// import icon
import {BsArrowRight} from 'react-icons/bs';

const News = () => {
  return (
    <div className='container mx-auto mb-8'>
        <div className='border-l-4 border-[#1C6DD0] mb-4 flex justify-between items-center'>
            <h1 className='text-[25px] font-medium px-2'>News</h1>
            <p className='text-sm text-slate-700 flex items-center gap-x-2'>More News <BsArrowRight className='mt-[2px]' /></p>
        </div>
        <div className='flex flex-col lg:flex-row gap-x-4 gap-y-4'>
            <div className='w-full lg:w-[50%] hover:shadow-lg'>
                <img className='h-80 w-full object-cover object-center' src={news[0].img.type} alt="content" />
                <div className='h-[5px] w-full bg-gradient-to-r from-[#00F260] to-[#0575E6]'></div>
                <div className='px-6 py-4'>
                    <h3 className='tracking-widest text-[#1C6DD0] text-xs font-medium title-font'>{news[0].subtitle}</h3>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>{news[0].title}</h2>
                    <p className='leading-relaxed text-sm line-clamp-2'>{news[0].desc}</p>
                </div>
            </div>
            <div className='w-full lg:w-[50%] grid grid-cols-2 gap-x-4 gap-y-4'>
                {news.slice(1, 5).map((news, i) => {
                    return(
                        <div className='w-full hover:shadow-lg mb-2' key={i}>
                            <img className='h-[150px] w-full object-cover object-center hover:scale-105 transition-all' src={news.img.type} alt="content" />
                            <div className='h-[5px] w-full bg-gradient-to-r from-[#00F260] to-[#0575E6]'></div>
                            <div className='px-6 py-4'>
                                <h3 className='tracking-widest text-[#1C6DD0] text-xs font-medium title-font'>{news.subtitle}</h3>
                                <h2 className='text-sm text-gray-900 font-medium title-font'>{news.title}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}

export default News;