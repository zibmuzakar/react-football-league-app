import React from 'react';

// import data
import { sponsor } from '../data';

const Sponsor = () => {
  return (
    <div className='px-2 mb-8'>
        <div className='h-[5px] w-full bg-gradient-to-r from-[#00F260] to-[#0575E6] mb-8'></div>
        <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-y-4'>
            {sponsor.map((sponsor, i) => {
                return(
                    <div className='gap-x-4'>
                        <img className='h-[75px]' src={sponsor.img.type} alt='' />
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Sponsor;