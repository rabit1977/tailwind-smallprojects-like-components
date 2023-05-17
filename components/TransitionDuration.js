import React from 'react';

export default function TransitionDuration() {
  return (
    <div className='div'>
      <div class='wrapper'>
        <div class='square td-instant' tabindex='0'>
          instant<p class='duration'>0ms</p>
        </div>
        <div class='square td-speedy' tabindex='0'>
          speedy<p class='duration'>200ms</p>
        </div>
        <div class='square td-middling' tabindex='0'>
          middling<p class='duration'>500ms</p>
        </div>
        <div class='square td-glacial' tabindex='0'>
          glacial<p class='duration'>700ms</p>
        </div>
      </div>
    </div>
  );
}
