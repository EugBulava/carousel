import React from 'react';
import { Slider, Slide } from './Slider';
import './App.css';

export const App = () => {

  return (
    <Slider countSlidesPerView={1} loop={true} sliderWidth={900} sliderHeight={500} >
      <Slide>
        <div className="animal">
          <span>Cat</span>
          <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"></img>
        </div>
      </Slide>
      <Slide>
        <div className="animal">
          <span>Dog</span>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"></img>
        </div>
      </Slide>
      <Slide>
        <div className="animal">
          <span>Elephant</span>
          <img src="https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/T8cy0-640W8sartvA9TWmv08NbGPFxsVvf8gFtBDE08/1577112797/public/styles/600x400/public/media/int_files/elephant_in_tanzania.jpg?h=f507d761&itok=Ei8OXcGi"></img>
        </div>
      </Slide>
      <Slide>
        <div className="animal">
          <span>Panda</span>
          <img src="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg"></img>
        </div>
      </Slide>
      <Slide>
        <div className="animal">
          <span>Camel</span>
          <img src="https://cdn.britannica.com/w:1100/80/140480-131-28E57753/Dromedary-camels.jpg"></img>
        </div>
      </Slide>
    </Slider>
  )
}