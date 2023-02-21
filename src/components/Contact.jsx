import React from 'react';

export default function Contact() {
  return (
    <section
      id='contact'
      className='max-w-screen-xl px-4 pt-10 pb-52 mx-auto text-white flex flex-col items-center'
    >
      <div className='flex flex-col items-center'>
        <h1 className='mb-5 font-bold text-3xl text-center '>Get in Touch</h1>
        <p className='text-gray-400  w-1/2  text-center '>
          Let's work together. I'd love to talk to you and discuss your venture
          and potential collaborations
        </p>
      </div>
      <div>
        <a
          className='block border hover:bg-blue-900 hover:-translate-y-0.5 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 text-center'
          href='mailto: icbroqueza13@gmail.com'
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
