import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';
import { PlayArrow } from '@mui/icons-material';

import React from 'react';
import Resume from '../assets/Resume.pdf';

export default function Hero() {
  return (
    <div
      className='flex flex-col justify-between w-3/4 py-5 px-5 text-white '
      id='home'
    >
      <p className=' mb-4 font-light text-blue-400 md:text-lg lg:text-xl'>
        Hi, my name is
      </p>
      <h1 className='mb-4 text-2xl font-bold leading-none tracking-tight md:text-4xl xl:text-6xl '>
        Ian Czar Broqueza.
      </h1>
      {/* <p className='w-10/12 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>
          An organized and hard-working employee with a year of experience in
          financial services rapidly transitioned into the world of coding.
          Currently, I am seeking a job to further broaden my knowledge and
          passion for a new career in Software Development
        </p> */}
      <div className='w-auto mb-6 font-light lg:mb-8 md:text-sm lg:text-base'>
        <p>
          Hello! My name is Ian and since I was a child I was into creating
          things that involves computer. My interest in web development started
          back in 2019 when I teamed up with other developers to{' '}
          <span className='text-blue-400'>build a new lending system</span> for
          the company. They introduce me to web development and some of more
          technical side of computer which awaken the passion that was inside
          me.
        </p>
        <br />
        <p>
          Fast-forward to today, and I’ve had the privilege of learning at an
          intensive bootcamp that covers{' '}
          <span className='text-blue-400'>programming fundamentals</span>,
          <span className='text-blue-400'> full-stack web development</span>,
          learning about both <span className='text-blue-400'>front-end</span>{' '}
          and <span className='text-blue-400'>back-end</span> programming. The
          bootcamp requires learners to complete multiple hands-on projects.
        </p>
        <br />

        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className='grid grid-cols-3 mt-2'>
          <li>
            {' '}
            <PlayArrow style={{ color: '#60a5fa', fontSize: 12 }} /> HTML & CSS
          </li>
          <li>
            {' '}
            <PlayArrow style={{ color: '#60a5fa', fontSize: 12 }} /> JavaScript
            (ES6+){' '}
          </li>
          <li>
            {' '}
            <PlayArrow style={{ color: '#60a5fa', fontSize: 12 }} /> React
          </li>
          <li>
            {' '}
            <PlayArrow style={{ color: '#60a5fa', fontSize: 12 }} /> Python
          </li>
          <li>
            {' '}
            <PlayArrow style={{ color: '#60a5fa', fontSize: 12 }} /> Node.js
          </li>
        </ul>
      </div>

      <button className='border hover:bg-blue-900 hover:-translate-y-0.5 w-1/4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'>
        <a href={Resume} download>
          Resume
        </a>
      </button>
    </div>
  );
}
