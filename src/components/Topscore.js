import React from 'react'

// import data
import { topScore } from '../data.js';

const Topscore = () => {
  return (
    <div className='bg-[#F6F9FD] p-6 w-full rounded-md'>
      {/* head */}
      <div className='flex justify-between mb-4'>
        <h1 className='font-medium text-xl'>Top Score</h1>
        <p className='text-sm'>View All</p>
      </div>
      {/* list */}
      <div className=''>
        {topScore.map((top, index) => {
          return(
            <div className='bg-white rounded-lg shadow-md w-full py-2 px-4 flex justify-between mb-4' key={index}>
              <img className='h-[50px]' src={top.photo.type} alt='' />
              <div className='w-[200px]'>
                <h1 className='font-semibold'>{index+1}. {top.name}</h1>
                <p className='text-[10px]'>{top.club}</p>
              </div>
              <div className='rounded-full bg-[#ECECEC] h-[50px] w-[50px] font-medium flex items-center justify-center'>{top.goal}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Topscore