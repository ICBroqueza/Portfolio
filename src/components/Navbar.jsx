import React from 'react';

export default function Navbar() {
  return (
    <div className='px-10 py-5 border shadow-md '>
      <nav className='flex justify-between items-center container mx-auto'>
        <div>
          <h1 className='text-4xl font-bold'>ic</h1>
        </div>
        <div>
          <ul className='lg:flex flex-row gap-4 hidden items-center'>
            <li className='w-full hover:text-white hover:bg-black rounded px-10 py-4 font-bold'>
              <a className='text-2xl' href='#home'>
                Home
              </a>
            </li>

            <li className='w-full hover:text-white hover:bg-black rounded px-10 py-4 font-bold'>
              <a className='text-2xl' href='#about'>
                About
              </a>
            </li>
            <li className='w-full hover:text-white hover:bg-black rounded px-10 py-4 font-bold'>
              <a className='text-2xl' href='#projects'>
                Projects
              </a>
            </li>
            <li className='w-full hover:text-white hover:bg-black rounded px-10 py-4 font-bold'>
              <a className='text-2xl' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <button className='lg:hidden cursor-pointer' id='menu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-10 h-10'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* <div
        id='navlinks'
        className='lg:hidden bg-[#edeff1] rounded absolute w-screen mx-auto top-20 left-0 right-0 text-center shadow-md z-10'
      >
        <ul className='text-center'>
          <li className='w-full hover:text-white hover:bg-black px-10 py-4 font-bold rounded'>
            <a className='text-2xl' href='#home'>
              Home
            </a>
          </li>

          <li className='w-full hover:text-white hover:bg-black px-10 py-4 font-bold rounded'>
            <a className='text-2xl' href='#about'>
              About
            </a>
          </li>
          <li className='w-full hover:text-white hover:bg-black px-10 py-4 font-bold rounded'>
            <a className='text-2xl' href='#projects'>
              Projects
            </a>
          </li>
          <li className='w-full hover:text-white hover:bg-black px-10 py-4 font-bold rounded'>
            <a className='text-2xl' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
