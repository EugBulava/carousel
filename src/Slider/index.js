import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import s from './s.module.css';

import { SliderItem } from './SliderItem';
import { NextSlideButton } from './Buttons/NextSlideButton';
import { PrevSlideButton } from './Buttons/PrevSlideButton';

export const Slider = (props) => {
  const slides = Array.isArray(props.children) ? props.children : [props.children];
  const countSlidesPerView = props.countSlidesPerView ? props.countSlidesPerView : 1;
  const countSlides = props.loop ? slides.length : slides.length - countSlidesPerView + 1;
  
  if(countSlidesPerView > slides.length) {
    return (<div className={s.error}>Count slides per slider more then count slides!</div>);
  }

  const [slide, setSlide] = useState(0);
  const [buttonsStatus, setButtonsStatues] = useState(true);
  const [position, setPosition] = useState(-100);

  const itemsContainer = useRef();

  const buttonHandler = (buttonType) => {
    buttonType === 'NEXT' ? setPosition(-200) : setPosition(0);
    setButtonsStatues(false);
    setTimeout(() => {
      itemsContainer.current.style.transition = '0s';
      if(buttonType === 'NEXT') {
        if(slide === slides.length - 1) {
          setSlide(0);
        } else {
          setSlide(slide + 1);
        }
      } else {
        if(slide === 0) {
          setSlide(slides.length - 1);
        } else {
          setSlide(slide - 1);
        }
      }
      setPosition(-100);
      setTimeout(() => {itemsContainer.current.style.transition = ''; setButtonsStatues(true);}, 300)
    }, 300);
  }

  const paginationClickHandler = (e) => {
    setSlide(Number(e.target.id))
  }

  const prevSlide =  slide === 0 ? [<SliderItem key={100} slideHTML={slides[slides.length - 1]} slidesLength={slides.length}/>] : [<SliderItem key={103} slideHTML={slides[slide - 1]} slidesLength={slides.length}/>];

  let nextSlide;
  if(slide === slides.length - countSlidesPerView) {
    nextSlide = [<SliderItem key={101} slideHTML={slides[0]} slidesLength={slides.length}/>]
  } else if(slides[slide + countSlidesPerView]) {
    nextSlide = [<SliderItem key={102} slideHTML={slides[slide + countSlidesPerView]} slidesLength={slides.length}/>]
  } else {
    nextSlide = [...Array(countSlidesPerView).keys()].map((el, idx) => <SliderItem key={idx} slideHTML={slides[idx]} slidesLength={slides.length}/>);
  }

  return (
    <div className={s.carouselContainer} style={{width: `${props.sliderWidth}px`, height: `${props.sliderHeight}px`}}>
      <div ref={itemsContainer} className={s.carouselItemsContainer} style={{width: `${(slides.length*100/countSlidesPerView)}%`, marginLeft: `${position/countSlidesPerView}%`}}>
        {prevSlide.concat(slides.map((el, idx) => {
          return idx >= slide && idx < countSlidesPerView + slide ?  <SliderItem key={idx} slideHTML={el} slidesLength={slides.length}/> : null;
        })).concat(nextSlide)}
      </div>
      <div className={s.controls_container}>
        <div className={s.controls}>
          <PrevSlideButton disabled={!props.loop && slide === 0 ? true: null} buttonHandler={buttonHandler} buttonsStatus={buttonsStatus} />
          <div className={s.pagination}>
            {[...Array(countSlides).keys()].map((el, idx) => {
              return slide === idx
              ? <div id={idx} key={idx} className={`${s.circle_pagination} ${s.active_circle}`}></div>
              : <div onClick={paginationClickHandler} id={idx} key={idx} className={s.circle_pagination}></div>
            })}
          </div>
          <NextSlideButton disabled={!props.loop && countSlides - 1 === slide ? true: null} buttonHandler={buttonHandler} buttonsStatus={buttonsStatus} />
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  countSlidesPerView: PropTypes.number,
  loop: PropTypes.bool,
  sliderWidth: PropTypes.number,
  sliderHeight: PropTypes.number
}

export const Slide = (props) => {

  return props.children;
}