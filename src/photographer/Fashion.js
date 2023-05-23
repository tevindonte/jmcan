import React from 'react'
import { Link } from 'react-router-dom';
import PNav from '../components/PNav'
import FashionGrid from './FashionGrid';


export default function Fashion() {
  return (
    <div className='bg-[#F8F8F8]'>
      <PNav />
      
      <div className="flex bg-[#F8F8F8] underline font-Aeonik items-center justify-center py-4 md:py-8 flex-wrap">
      <Link to="/photographer/fashion" className="text-blue-700 text-sm hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">FASHION</Link>
      <Link to="/photographer/landscape" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">LANDSCAPE</Link>
      <Link to="/photographer/journalistic" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">JOURNALISTIC</Link>
    </div>
    <FashionGrid />

    <footer className="bg-[#F8F8F8] rounded-lg dark:bg-[#F8F8F8]">
        <div className="w-full max-w-screen-xl p-4 md:[#F8F8F8] flex md:items-center md:justify-between">
          <span className="text-sm text-black font-Strange sm:text-center dark:text-gray-400 ml-0">
            © 2023 <a href="https://jmcanboy.com" className="hover:underline">Tevin Parboosingh</a>. All Rights Reserved
          </span>
        </div>
      </footer>

    </div>
  )
}
