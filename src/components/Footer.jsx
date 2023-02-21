import React from 'react';
import GitHub from '@mui/icons-material/GitHub';
import { FacebookOutlined, LinkedIn, Github } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer>
      <section class='bg-black relative' id='contact'>
        <section class='bg-[#edeff1] text-black border-4 border-black rounded absolute -top-20 mx-auto left-0 right-0 text-center lg:w-1/2'>
          <div class='mx-4 py-10 text-center'>
            <h1 class='text-3xl lg:text-4xl font-bold'>Let's work together</h1>
            <p class='text-xl py-4'>
              Interested in working with me? Let's have a sip of coffee and
              talk! I'll buy the coffee.
            </p>
            <button class='border-2 border-black px-2 py-2 hover:bg-black hover:text-white rounded'>
              <a href='mailto:icbroqueza13@gmail.com' class='text-xl'>
                Say hello!
              </a>
            </button>
          </div>
        </section>
        <div class='flex justify-center items-center flex-col px-10 pt-80 pb-20 text-white'>
          <h1 class='text-8xl font-bold'>ic</h1>
          <p class='text-2xl'>Wev Developer in the making.</p>
          <div className='flex items-center mt-4 gap-2 py-4'>
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
          <p class='text-xl font-thin'>made by: Ian Czar Broqueza</p>
          <p>2023</p>
        </div>
      </section>
    </footer>
  );
}
