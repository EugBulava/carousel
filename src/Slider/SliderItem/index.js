import React from 'react';
import s from './s.module.css';

export const SliderItem = (props) => {
  
  return (
    <div className={s.sliderItemContainer} style={{width: `${100/props.slidesLength}%`}}>
      {props.slideHTML}
    </div>
  )
}