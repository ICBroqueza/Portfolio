import { PlayArrow } from '@mui/icons-material';
import React from 'react';
import developer from '../assets/developer.svg';
export default function AboutMe() {
  return (
    <section
      class='min-w-screen flex flex-col justify-center px-10 py-40 mx-auto container'
      id='about'
    >
      <div class=''>
        <p class='text-2xl'>Know more about myself</p>
        <h1 class='text-8xl font-bold'>About</h1>
      </div>

      <div class='grid xl:grid-cols-2 xl:gap-40 items-center lg:flex-col-reverse'>
        <div class=''>
          <p class='mt-10 text-4xl'>
            Hello! My name is Ian and since I was a child I was into creating
            things that involves computer. My interest in web development
            started back in 2019 when I teamed up with other developers to build
            a new lending system for the company. They introduce me to web
            development and some of more technical side of computer which awaken
            the passion that was inside me.
          </p>
          <br />
          <p class='mt-10 text-4xl'>
            Fast-forward to today, and I’ve had the privilege of learning at an
            intensive bootcamp that covers programming fundamentals, full-stack
            web development, learning about both front-endand back-end
            programming. The bootcamp requires learners to complete multiple
            hands-on projects.
          </p>
          <div class='mt-10'>
            <div class='text-xl flex gap-2 flex-wrap'>
              <p class='border-2 border-gray-400 rounded px-2 py-2'>
                Front-End
              </p>
              <p class='border-2 border-gray-400 rounded px-2 py-2'>Back-End</p>
              <p class='border-2 border-gray-400 rounded px-2 py-2'>UI/UX</p>
              <p class='border-2 border-gray-400 rounded px-2 py-2'>
                Web Design
              </p>
            </div>
          </div>
        </div>
        <img
          src={developer}
          class='border-4 border-black rounded shadow-md h-3/4 w-full'
          alt=''
        />
      </div>
    </section>
  );
}
