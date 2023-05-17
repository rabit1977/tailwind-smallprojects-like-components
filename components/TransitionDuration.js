import React from 'react';

export default function TransitionDuration() {
  return (
    <div className='div'>
      <div class='wrapper'>
        <div class='square td-instant'>
          instant<p class='duration'>0ms</p>
        </div>
        <div class='square td-speedy'>
          speedy<p class='duration'>200ms</p>
        </div>
        <div class='square td-middling'>
          middling<p class='duration'>500ms</p>
        </div>
        <div class='square td-glacial'>
          glacial<p class='duration'>700ms</p>
        </div>
      </div>
    </div>
  );
}
