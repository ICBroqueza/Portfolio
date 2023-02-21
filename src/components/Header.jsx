// import { Close, GitHub, Menu } from '@mui/icons-material';
import React from 'react';
import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';
export default function Header() {
  return (
    <div className=''>
      <nav className=' px-2 sm:px-4 rounded mb-20'>
        <div className='container flex items-center justify-between mx-auto'>
          <a href='https://github.com/ICBroqueza' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-blue-400'>
              IC<span className='text-white'>Broqueza</span>
            </span>
          </a>
          <div className='w-auto'>
            <ul className='flex flex-row justify-center fill-white text-center items-center gap-5 '>
              <li className='hover:-translate-y-0.5'>
                <a href='mailto: icbroqueza13@gmail.com' target='_blank'>
                  <Email fontSize='small' style={{ color: 'white' }} />
                </a>
              </li>

              <li className='hover:-translate-y-0.5'>
                <a href='https://github.com/ICBroqueza' target='_blank'>
                  <GitHub fontSize='small' style={{ color: 'white' }} />
                </a>
              </li>

              <li className='hover:-translate-y-0.5'>
                <a href='https://github.com/ICBroqueza' target='_blank'>
                  <LinkedIn fontSize='medium' style={{ color: 'white' }} />
                </a>
              </li>
              <li className='hover:-translate-y-0.5'>
                <a href='https://github.com/ICBroqueza' target='_blank'>
                  <Facebook fontSize='medium' style={{ color: 'white' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
