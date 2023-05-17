import React from 'react';

export default function TransitionShadows() {
  return (
    <div className='grid place-items-center'>
      <div class='flex justify-center items-center gap-6 mt-8'>
        <div class='w-32 h-44 m-1 text-6xl flex justify-center items-center rounded-xl bg-white transition-all duration-100 ease-linear shadow-lg hover:shadow-2xl hover:-translate-y-4'>
          😐
        </div>

        <div class='w-32 h-44 m-1 text-6xl flex justify-center items-center rounded-xl bg-white transition-all duration-100 ease-linear shadow-lg hover:shadow-2xl hover:-translate-y-4'>
          🙂
        </div>

        <div class='w-32 h-44 m-1 text-6xl flex justify-center items-center rounded-xl bg-white transition-all duration-100 ease-linear shadow-lg hover:shadow-2xl hover:-translate-y-4'>
          😄
        </div>
      </div>
    </div>
  );
}
