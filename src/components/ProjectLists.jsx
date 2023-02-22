import { OpenInBrowser, OpenInNew } from '@mui/icons-material';
import React from 'react';

export default function ProjectLists() {
  const projects = [
    {
      name: 'Loan Management System',
      date: 'January 25, 2023',
      description:
        'A comprehensive web-based platform to manage different loans & lenders.',
      techs: ['PostgreSQL', 'Login-System', 'CRUD', 'React-JS', 'TailwindCSS'],
      link: 'https://github.com/ICBroqueza/Loan-Management-System',
    },
    {
      name: 'NFT Marketplace',
      date: 'November 16, 2022',
      description:
        'A Multi-Page Responsive Marketplace for NFTs which showcase my final output in Front-End Development.',
      techs: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/ICBroqueza/NFT-Marketplace',
    },
    {
      name: 'Mini-Portfolio',
      date: 'November 16, 2022',
      description:
        'A website that shows my personal info and projects which showcase basic skills in Front-End Development.',
      techs: ['HTML5', 'CSS3'],
      link: 'https://github.com/ICBroqueza/Mini-Portfolio',
    },
    {
      name: 'Hangman',
      date: 'October 22, 2022',
      description:
        'The game is about guessing a random word with a limited number of guesses.',
      techs: ['Python'],
      link: 'https://github.com/ICBroqueza',
    },
    {
      name: 'Quiz Game',
      date: 'October 22, 2022',
      description:
        'Educational game and would cover any topics related to software engineering.',
      techs: ['Python'],
      link: 'https://github.com/ICBroqueza',
    },
    {
      name: 'Text-Based Game',
      date: 'October 22, 2022',
      description:
        'A text-based game is a completely text-based input-output simple game.',
      techs: ['Python'],
      link: 'https://github.com/ICBroqueza',
    },
  ];

  // projects.map((project) => {
  //   // console.log(project);
  //   project.techs.forEach((tech) => {
  //     console.log(tech);
  //   });
  // });
  return (
    <section
      className='min-h-screen flex flex-col px-10 py-40 mx-auto container'
      id='projects'
    >
      <div className=''>
        <div>
          <p className='text-2xl'>My works throughout the years</p>
          <h1 className='text-5xl lg:text-8xl font-bold'>Projects</h1>
        </div>
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 overflow-hidden my-20'>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className='w-auto h-auto border-4 border-black rounded hover:shadow-md px-10 py-10 my-5 cursor-pointer hover:translate-y-1 hover:bg-gray-100'
            >
              <div className='flex items-center justify-between py-2'>
                <h3 className='text-2xl font-bold'>{project.name}</h3>
                <a href={project.link} target='_blank'>
                  <OpenInNew />
                </a>
              </div>
              <p className='text-xl font-thin'>{project.date}</p>
              <p className='text-2xl py-4'>{project.description}</p>
              <div className='text-xl flex gap-2 flex-wrap'>
                {project.techs.map((tech, index) => {
                  return (
                    <p
                      key={index}
                      className='border border-black rounded px-2 py-2'
                    >
                      {tech}
                    </p>
                  );
                })}
              </div>
              {/* {project.techs.forEach((tech, index) => {
                return (
                  <div key={index} className='text-xl flex gap-2 flex-wrap'>
                    <p className='border-2 border-gray-300 rounded px-2 py-2'>
                      {tech}
                    </p>
                  </div>
                );
              })} */}
            </div>
          );
        })}

        {/* <div className='w-auto h-auto border-4 border-black rounded hover:shadow-md px-10 py-10 my-5 cursor-pointer hover:translate-y-1 hover:bg-gray-100'>
          <div className='flex items-center justify-between py-2'>
            <h3 className='text-2xl font-bold'>Loan Management System</h3>
            <a href='#'>
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
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </a>
          </div>
          <p className='text-xl font-thin'>January 25, 2023</p>
          <p className='text-2xl py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='text-xl flex flex-wrap gap-2'>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
          </div>
        </div>
        <div className='w-auto h-auto border-4 border-black rounded hover:shadow-md px-10 py-10 my-5 cursor-pointer hover:translate-y-1 hover:bg-gray-100'>
          <div className='flex items-center justify-between py-2'>
            <h3 className='text-2xl font-bold'>Loan Management System</h3>
            <a href='#'>
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
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </a>
          </div>
          <p className='text-xl font-thin'>January 25, 2023</p>
          <p className='text-2xl py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='text-xl flex flex-wrap gap-2'>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
          </div>
        </div>
        <div className='w-auto h-auto border-4 border-black rounded hover:shadow-md px-10 py-10 my-5 cursor-pointer hover:translate-y-1 hover:bg-gray-100'>
          <div className='flex items-center justify-between py-2'>
            <h3 className='text-2xl font-bold'>Loan Management System</h3>
            <a href='#'>
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
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </a>
          </div>
          <p className='text-xl font-thin'>January 25, 2023</p>
          <p className='text-2xl py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='text-xl flex flex-wrap gap-2'>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
          </div>
        </div>
        <div className='w-auto h-auto border-4 border-black rounded hover:shadow-md px-10 py-10 my-5 cursor-pointer hover:translate-y-1 hover:bg-gray-100'>
          <div className='flex items-center justify-between py-2'>
            <h3 className='text-2xl font-bold'>Loan Management System</h3>
            <a href='#'>
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
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </a>
          </div>
          <p className='text-xl font-thin'>January 25, 2023</p>
          <p className='text-2xl py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='text-xl flex flex-wrap gap-2'>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
          </div>
        </div>
        <div className='w-auto h-auto border-4 border-black rounded hover:shadow-md px-10 py-10 my-5 cursor-pointer hover:translate-y-1 hover:bg-gray-100'>
          <div className='flex items-center justify-between py-2'>
            <h3 className='text-2xl font-bold'>Loan Management System</h3>
            <a href='#'>
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
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </a>
          </div>
          <p className='text-xl font-thin'>January 25, 2023</p>
          <p className='text-2xl py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='text-xl flex flex-wrap gap-2'>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
            <p className='border-2 border-gray-300 rounded px-2 py-2'>
              PostgreSQL
            </p>
          </div>
        </div> */}
      </div>
      <div className='flex justify-center'>
        <button className='border-2 border-black px-2 py-2 hover:bg-black hover:text-white rounded'>
          <a href='#'>View more on Github</a>
        </button>
      </div>
    </section>
  );
}
