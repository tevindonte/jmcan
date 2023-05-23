import React from 'react'

export default function CNav() {
    return (
        <div>

<nav class="bg-[#F8F8F8] ml-5 text-blackish text-sm border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center">
                <img src={require('../branding/usageblack.png')} class="h-10 mr-3 animate-spinY" alt="Usage Logo" />
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-Aeonik underline flex flex-col md:flex-row md:space-x-8 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">        <li className='md:mx-auto'>
<a href="/home" class="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page">HOME</a>
                            </li>
                            <li className=''>
                                <a href="/model" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black hover:text-white">MODEL</a>
                            </li>
                            <li>
                                <a href="/designer" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black hover:text-white">DESIGNER</a>
                            </li>
                            <li>
                                <a href="/developer" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black hover:text-white">DEVELOPER</a>
                            </li>
                            <li>
                                <a href="/photographer" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white hover:text-white">PHOTOGRAPHER</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red dark:hover:bg-red dark:hover:text-white md:dark:hover:bg-transparent">|</a>
                            </li>
                            <li>
                                <a href="https://payhip.com/usage" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black hover:text-white">STORE</a>
                            </li>
                            <li>
                                <a href="contact" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black hover:text-white">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
