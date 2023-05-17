import React from 'react';

export default function TransitionTiming() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        class=' w-36 max-h-24 hover:w-50% bg-orange-300 rounded-md text-center p-2 mb-1 transition-all duration-1000 ease-linear hover:w-64 focus:w-64 '
        tabindex='0'
      >
        linear
      </div>
      <div
        class=' w-36 max-h-24 hover:w-50% bg-orange-300 rounded-md text-center p-2 mb-1 transition-all duration-1000 ease hover:w-64 focus:w-64 '
        tabindex='0'
      >
        ease
      </div>
      <div
        class=' w-36 max-h-24 hover:w-50% bg-orange-300 rounded-md text-center p-2 mb-1 transition-all duration-1000 ease-out hover:w-64 focus:w-64'
        tabindex='0'
      >
        ease-in
      </div>
      <div
        class='w-36 max-h-24 hover:w-50% bg-orange-300 rounded-md text-center p-2 mb-1 transition-all duration-1000 ease-in-out hover:w-64 focus:w-64'
        tabindex='0'
      >
        ease-out
      </div>
      <div
        class=' w-36 max-h-24 hover:w-50% bg-orange-300 rounded-md text-center p-2 mb-1 transition-all duration-1000 ease-in-out hover:w-64 focus:w-64'
        tabindex='0'
      >
        ease-in-out
      </div>
      <div
        class='w-36 max-h-24 hover:w-50% bg-orange-300 rounded-md text-center p-2 mb-1 transition-all duration-1000 ease-step-start hover:w-64 focus:w-64 cubic-bezier(0.68,-0.55,0.27,1.55)'
        tabindex='0'
      >
        cubic
      </div>
    </div>
  );
}
