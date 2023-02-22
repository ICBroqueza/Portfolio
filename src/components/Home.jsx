import React from 'react';
import GitHub from '@mui/icons-material/GitHub';
import { FacebookOutlined, LinkedIn, Menu, Twitter } from '@mui/icons-material';

export default function Home() {
  return (
    <section
      className='min-h-screen flex items-center z-0 mx-auto container'
      id='home'
    >
      <div className='px-12 pb-32'>
        <p className='text-3xl font-thin'>Hello, my name is</p>
        <h1 className='lg:text-8xl text-6xl font-bold'>Ian Czar Broqueza</h1>
        <p className='lg:text-6xl text-4xl'>Web Developer</p>
        <p className='lg:text-4xl text-3xl font-thin my-6'>
          An organized and hard-working employee with a year of experience in
          financial services rapidly transitioned into the world of coding.
          Currently, I am seeking a job to further broaden my knowledge and
          passion for a new career in Software Development.
        </p>
        <div className='flex items-center mt-4 gap-2'>
          <a
            href='https://github.com/ICBroqueza'
            className='hover:translate-y-1'
            target='_blank'
          >
            <GitHub fontSize='large' />
          </a>

          <a
            href='https://www.linkedin.com/in/icbroqueza/'
            className='hover:translate-y-1'
            target='_blank'
          >
            <LinkedIn fontSize='large' />
          </a>

          <a
            href='https://www.facebook.com/ICBroqueza13/'
            className='hover:translate-y-1'
            target='_blank'
          >
            <FacebookOutlined fontSize='large' />
          </a>
        </div>
        <button className='mt-10 flex items-center gap-2 hover:gap-4'>
          <a href='#' className='underline text-2xl'>
            RESUME
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
