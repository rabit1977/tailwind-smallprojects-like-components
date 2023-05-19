import React from 'react';

export default function AnimatedLoader() {
  return (
    <div className=' mt-8 w-64 h-64 flex justify-center items-center bg-[#010113]'>
      <div className='relative overflow-hidden boxShadow inset h-52 w-52 rounded-full before:absloute before:content-[""] before:z-10 before:opacity-10 before:top-6 before:left-6 before:right-6 before:bottom-6 before:bg-[#010113] before:rounded-full before:boxShadow, before:inset'>
        <span className='absolute h-full w-full filter rounded-full bg-gradient-to-r from-[#0e11d4] to-[#0b8f84] animate-loader '></span>
      </div>
    </div>
  );
}
