import React from 'react';

export const NextSlideButton = (props) => {
  
  return <button disabled={props.disabled || !props.buttonsStatus} onClick={() => props.buttonHandler('NEXT')}>Next</button>;
}