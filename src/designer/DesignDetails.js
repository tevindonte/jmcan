import React from 'react';
import header from './header.jpg';
import motion from './motion.gif';
import pack from './package.jpg';
import intro from './intro.gif';
import logo from './logo.jpg';
import misc from './misc.jpg';
import web from './web.jpg';
import art from './art.gif';
import { Link } from 'react-router-dom'; // Assuming you are using React Router


export default function DesignDetails() {
  const imageHeight = '300px';

  return (
    <div className="grid grid-cols-2 gap-4" style={{ marginLeft: '20px' }}>
            <Link to="/designer/header" className="">
      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={header} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2  text-right w-full ">
          <div>
            <h3 className='text-2xl  font-Strange'>Social Media Rebrand</h3>
          </div>
          <div>
            <p className='font-Strange'>Brand Content</p>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/designer/motion" className="">

      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={motion} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2 mr-3 text-right w-full">
          <div>
            <h3 className='text-2xl  font-Strange'>Motion Design</h3>
          </div>
          <div>
            <p className='font-Strange'>Commercial Content</p>
          </div>
        </div>
      </div>
</Link>
      <Link to="/designer/package" className="">
      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={pack} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2 text-right w-full">
          <div>
            <h3 className='text-2xl  font-Strange'>Brand Packages</h3>
          </div>
          <div>
            <p className='font-Strange'>Brand Content</p>
          </div>
        </div>
      </div>
</Link>
      <Link to="/designer/intro" className="">
      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={intro} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2 mr-3 text-right w-full">
          <div>
            <h3 className='text-2xl  font-Strange'>Intro Reveal</h3>
          </div>
          <div>
            <p className='font-Strange'>Brand Content</p>
          </div>
        </div>
      </div>
      </Link>
      <Link to="/designer/logo" className="">
      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={logo} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2 text-right w-full">
          <div>
            <h3 className='text-2xl  font-Strange'>Logo Design</h3>
          </div>
          <div>
            <p className='font-Strange'>Brand Content</p>
          </div>
        </div>
      </div>
    </Link>
      <Link to="/designer/misc" className="">
      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={misc} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2 mr-3 text-right w-full">
          <div>
            <h3 className='text-2xl  font-Strange'>Miscellaneous Work</h3>
          </div>
          <div>
            <p className='font-Strange'>Brand Content</p>
          </div>
        </div>
      </div>
    </Link>
      <Link to="/designer/web" className="">
      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={web} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2 text-right w-full">
          <div>
            <h3 className='text-2xl  font-Strange'>Web Design</h3>
          </div>
          <div>
            <p className='font-Strange'>Brand Content</p>
          </div>
        </div>
      </div>
      </Link>

      <Link to="/designer/art" className="">
      <div className="border-t-2 border-[#1E1D19] flex items-start">
        <img src={art} alt="Rectangle" className="mr-2 mt-4" style={{ height: imageHeight }} />
        <div className="flex flex-col justify-between mt-2 mr-3 text-right w-full">
          <div>
            <h3 className='text-2xl  font-Strange'>Art</h3>
          </div>
          <div>
            <p className='font-Strange'>Brand Content</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
