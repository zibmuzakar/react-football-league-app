import React from 'react';

import Logo from '../assets/img/logo/logo-bpl.png';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
        <div className="px-5 py-10 mx-auto bg-gray-100">
            <div className="flex flex-wrap text-left order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800" href='/'>Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                    <div
                        className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                            <label className="leading-7 text-sm text-gray-600">Placeholder</label>
                            <input type="text" id="footer-field" name="footer-field"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button
                            className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                        <br className="lg:block hidden"/>waistcoat green juice
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-[#1C6DD0] via-[#0575E6] to-[#00F260]">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white" href='/'>
                    <img className='h-[40px]' src={Logo} alt=''/>
                    <span className="ml-3 text-xl">Bandung Premiere League</span>
                </a>
                <p className="text-sm after:sm:ml-6 sm:mt-0 mt-4 text-white"> © -
                    <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1"
                        target="_blank">Muzib Muzakar</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-white" href="/">
                        <FaInstagram className='h-5'/>
                    </a>
                    <a className="ml-3 text-white" href="/">
                        <FaTwitter className='h-5'/>
                    </a>
                    <a className="ml-3 text-white" href="/">
                        <FaFacebookF className='h-5'/>
                    </a>
                    <a className="ml-3 text-white" href="/">
                        <FaYoutube className='h-5'/>
                    </a>
                </span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;