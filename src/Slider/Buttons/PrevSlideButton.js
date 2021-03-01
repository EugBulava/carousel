import React from 'react';

export const PrevSlideButton = (props) => {
  
  return <button disabled={props.disabled || !props.buttonsStatus} onClick={() => props.buttonHandler('PREV')}>Prev</button>;
}