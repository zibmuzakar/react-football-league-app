import React from 'react'

// import data
import { gallery } from '../data';

const Galleri = () => {
  return (
    <div className='container mx-auto mb-2'>
        <div className='border-l-4 border-[#1C6DD0] mb-4 flex justify-between items-center'>
            <h1 className='text-[25px] font-medium px-2'>Gallery</h1>
            {/* <p className='text-sm text-slate-700 flex items-center gap-x-2'>More News <BsArrowRight className='mt-[2px]' /></p> */}
        </div>
        <div className='flex flex-col lg:flex-wrap md:-m-2 -m-1'>
            <div className='flex flex-wrap w-full lg:w-1/2'>
                <div className='md:p-2 p-1 w-1/2'>
                    <img alt='gallery' className='w-full object-cover h-full object-center block'
                        src={gallery[0].img.type}/>
                </div>
                <div className='md:p-2 p-1 w-1/2'>
                    <img alt='gallery' className='w-full object-cover h-full object-center block'
                        src={gallery[1].img.type}/>
                </div>
                <div className='md:p-2 p-1 w-full'>
                    <img alt='gallery' className='w-full h-full object-cover object-center block'
                        src={gallery[2].img.type}/>
                </div>
            </div>
            <div className='flex flex-wrap w-full lg:w-1/2'>
                <div className='md:p-2 p-1 w-full'>
                    <img alt='gallery' className='w-full h-full object-cover object-center block'
                        src={gallery[3].img.type}/>
                </div>
                <div className='md:p-2 p-1 w-1/2'>
                    <img alt='gallery' className='w-full object-cover h-full object-center block'
                        src={gallery[4].img.type}/>
                </div>
                <div className='md:p-2 p-1 w-1/2'>
                    <img alt='gallery' className='w-full object-cover h-full object-center block'
                        src={gallery[5].img.type}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Galleri