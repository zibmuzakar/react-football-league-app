import React from 'react';

// import data
import { product } from '../data';

const Shop = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
        <div className='border-l-4 border-[#1C6DD0] mb-4 flex justify-between items-center'>
            <h1 className='text-[25px] font-medium px-2'>Shop</h1>
            {/* <p className='text-sm text-slate-700 flex items-center gap-x-2'>More News <BsArrowRight className='mt-[2px]' /></p> */}
        </div>
        <div className="flex flex-wrap -m-4">
            {product.map((product, i) => {
                return(
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-50 rounded overflow-hidden" href='/'>
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                                src={product.img.type} />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                            <p className="mt-1">Rp {product.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Shop;