import React from 'react';

export default function TransitionFilters() {
  return (
    <div className='grid place-items-center mt-12'>
      <div class='flex justify-center items-center'>
        <div class='text-8xl grayscale transition-all duration-500 ease-linear hover:filter-none hover:drop-shadow-xl'>
          🐶
        </div>
        <div class='text-8xl grayscale transition-all duration-500 ease-linear hover:filter-none hover:drop-shadow-xl'>
          🐱
        </div>
        <div class='text-8xl grayscale transition-all duration-500 ease-linear hover:filter-none hover:drop-shadow-xl'>
          🐢
        </div>
      </div>
    </div>
  );
}
