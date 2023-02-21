import React from 'react';
import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

export default function Socials() {
  return (
    <div className=' flex flex-col justify-center fixed left-20 bottom-0 fill-whit text-center items-center gap-5'>
      <a
        className='hover:-translate-y-0.5 hover:fill-blue-400'
        href='https://github.com/ICBroqueza'
        target='_blank'
      >
        <GitHub fontSize='small' style={{ color: 'white' }} />
      </a>
      <a
        className='hover:-translate-y-0.5'
        href='https://www.linkedin.com/in/icbroqueza/'
        target='_blank'
      >
        <LinkedIn fontSize='medium' style={{ color: 'white' }} />
      </a>
      <a
        className='hover:-translate-y-0.5'
        href='https://www.facebook.com/icbroqueza13'
        target='_blank'
      >
        <Facebook fontSize='medium' style={{ color: 'white' }} />
      </a>
      <a
        className='hover:-translate-y-0.5'
        href='https://www.instagram.com/icbroqueza/'
        target='_blank'
      >
        <Instagram fontSize='medium' style={{ color: 'white' }} />
      </a>
      <div className='border h-20 w-0 text-center'></div>
    </div>
  );
}
