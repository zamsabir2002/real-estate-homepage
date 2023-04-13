"use client";

import React, { useRef, useState } from 'react';
import ImageCarousel from './imagescarousel';
import Slider from 'react-slick';


const responsive = {
  0: { items: 1 },
  688: { items: 2 },
  1013: { items: 3 },
  1357: { items: 4 },
}


const ACarousel = ({ data }) => {

  const getTime = (expire) => {
    return expire
  }
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    // To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider.
    touchThreshold: 500,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          initialSlide: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const curSlider = useRef(null)
  const slidePrev = () => {
    console.log(curSlider.current)
    curSlider.current.slickPrev()
  };
  const slideNext = () => {
    curSlider.current.slickNext()
  };

  return (
    <div >
      <div className='flex flex-col'>


        <div className='flex flex-wrap text-2xl sm:text-3xl items-center gap-4 justify-between items-center'>
          {/* max-[478x] */}

          <div className='flex items-center gap-3 justify-between max-[456px]:flex-col w-[70%] min-[860px]:w-[62%] text-center min-[1300px]:w-[60%]'>
            {/* w-[62%] */}
            <div >FEATURED</div>
            <div >VIEW ALL HOMES</div>
          </div>


          <div className="flex gap-6 items-center">
            <button
              role='button'
              onClick={slidePrev}
              className='z-[500]'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="23.621" height="44.243" viewBox="0 0 23.621 44.243">
                <path id="Path_59" data-name="Path 59" d="M74.805,416.151l20-20-20-20" transform="translate(96.305 418.272) rotate(180)" fill="none" stroke="#000" stroke-linecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </button>
            <button
              role='button'
              onClick={slideNext}
              className='z-[3000]'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="23.621" height="44.243" viewBox="0 0 23.621 44.243">
                <path id="Path_59" data-name="Path 59" d="M74.805,416.151l20-20-20-20" transform="translate(-72.684 -374.03)" fill="none" stroke="#000" stroke-linecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </button>
          </div>
        </div>



        <div className='mt-7'>
          <Slider ref={curSlider} {...settings}>
            {data.listing.map((item, index) =>
              <div className='mx-[2px] p-0' key={item.id}>
                <div className='flex flex-col items-center rounded-2xl m-4 sm:justify-center gap-3'>

                  <ImageCarousel
                    item={item}
                    images={item.details.images.split(",")}
                  />
                  <div
                    className='h-[55px] bg-black rounded-2xl relative flex flex-row text-white justify-around w-full items-center'
                  >
                    <div className=''>£25.00 GBP</div>
                    <div className='text-lg font-medium text-center tracking-wider'>
                      Buy Entry Now
                    </div>
                    <div className='absolute z-[50] bottom-0.5 right-[18px] text-[10px] text-center'>
                      #ZM786123456
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>

      </div>

    </div>
  );
}


export default ACarousel;


