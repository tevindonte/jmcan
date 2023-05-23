import React from 'react';

export default function DesignFoot() {
  return (
    <div>
      <footer className="bg-[#EEEEEE] rounded-lg dark:bg-white">
        <div className="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 font-Strange sm:text-center dark:text-gray-400 ml-0">
            © 2023 <a href="https://jmcanboy.com" className="hover:underline">Tevin Parboosingh</a>. All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
