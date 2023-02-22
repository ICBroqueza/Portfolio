import { Close, Menu } from '@mui/icons-material';
import React from 'react';
import { useRef } from 'react';

export default function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    // navRef.current.classList.remove('responsive_nav');
  };

  const removeBar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  return (
    <header className='px-10 py-5 border shadow-md flex items-center justify-between h-[80px] text-black bg-[#edeff1]'>
      <h1 className='text-4xl font-bold'>
        i<span className=''>c</span>
      </h1>
      <div className='flex items-center '>
        <nav ref={navRef}>
          <a
            onClick={removeBar}
            href='#home'
            className='text-black text-xl font-bold px-2 py-2 rounded hover:bg-black hover:text-white lg:mr-10'
          >
            Home
          </a>
          <a
            onClick={removeBar}
            href='/#about'
            className='text-black text-xl font-bold  px-2 py-2 rounded hover:bg-black hover:text-white lg:mr-10'
          >
            About
          </a>
          <a
            onClick={removeBar}
            href='#projects'
            className='text-black text-xl font-bold  px-2 py-2 rounded hover:bg-black hover:text-white lg:mr-10'
          >
            Projects
          </a>
          <a
            onClick={removeBar}
            href='#contact'
            className='text-black text-xl font-bold  px-2 py-2 rounded hover:bg-black hover:text-white'
          >
            Contact
          </a>
          <button
            className='p-5 cursor-pointer bg-transparent outline-none border-none text-black lg:invisible lg:opacity-0 text-lg mr-5 lg:mr-0 nav-close-btn'
            onClick={showNavbar}
          >
            <Close />
          </button>
        </nav>
        <button
          className='p-5 cursor-pointer bg-transparent outline-none border-none mr-10 lg:mr-0 text-black lg:invisible lg:opacity-0 text-lg'
          onClick={showNavbar}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
