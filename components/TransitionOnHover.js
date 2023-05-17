'use client';

// Based on web search results, you can convert your JavaScript code to ReactJS by using JSX syntax, which is a way of writing HTML-like elements in JavaScript. JSX is transpiled into JavaScript by a tool like Babel. You can also use React hooks to manage state and effects in your functional components. Here is a possible way to convert your code to ReactJS:

import { useState, useEffect } from 'react';

export default function Home() {
  // Use state hook to store the checkbox value
  const [checked, setChecked] = useState(false);

  // Use effect hook to add or remove the class name based on the checkbox value
  useEffect(() => {
    const square = document.querySelector('.square');
    if (checked) {
      square.classList.add('has-transition');
    } else {
      square.classList.remove('has-transition');
    }
  }, [checked]); // Run the effect only when checked changes

  // Handle the change event of the checkbox
  function handleChange(event) {
    setChecked(event.target.checked);
  }

  return (
    <div className='App flex flex-col justify-center items-center space-y-3'>
      <div className='square flex flex-col'></div>

      <div className='flex items-center space-x-2 justify-center'>
        <input
          type='checkbox'
          className='accent-orange-700 h-6 w-6'
          onChange={handleChange}
        />
        <label>Enable Transition</label>
      </div>
    </div>
  );
}
