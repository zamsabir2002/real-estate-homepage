"use client";

import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ImageCarousel from './imagescarousel';
// import * from '../../json/zp_api_listing_data.json';

// const responsive = {
//   0: { items: 0.9 },
//   380: { items: 1.01 },
//   424: { items: 1.07 },
//   480: { items: 1.13 },
//   618: { items: 1.2 },
//   650: { items: 1.3 },
//   728: { items: 1.4 },
//   785: { items: 1.56 },
//   860: { items: 1.7 },
//   915: { items: 1.9 },
//   1030: { items: 2.2 },
//   1120: { items: 2.7 },
// };

const responsive = {
  0: { items: 1 },
  874: { items: 2 },
  1024: { items: 2.2 },
  1100: { items: 2.4 },
  1120: { items: 3 },
}

// const Buttons = () => {
//   const slidePrev = ACarousel.
//     return(
//       <div className="b-refs-buttons">
//         <button onClick={slidePrev}>Prev</button>
//         <button onClick={slideNext}>Next</button>
//       </div>
//     );
// }


const ACarousel = ({ data }) => {


  const createItems = (listing, handleClick) => {
    ///
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;
    ///


    return listing.map((item, i) => {
      // console.log("acar", item.details.images.split(","))
      return (
        <div
          className="min-w-[350px] h-[600px] rounded-md max-w-[404px] sm:h-[600px] flex flex-col justify-between"
          key={item.id}

          /////
          onMouseDown={(e) => (deltaX = e.pageX)}
          onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
          onClick={() => (difference < swipeDelta) && handleClick(i)}
        // ///
        >
          <div className='basis-10/12 relative'>
            {/* Image Carousel */}


            <ImageCarousel
              images={item.details.images.split(",")}
            />
            <div
              className='z-[500] absolute top-0 p-2 w-full text-slate-50 flex flex-col justify-between h-full box_shadow rounded-lg'
            >
              <div
                className='text-4xl text-center mt-1'
              >TIME</div>


              <div>

                <div className='flex flex-col items-center  gap-1 text-sm'>


                  <div className='flex justify-center text-base font-medium w-full items-center gap-6'>
                    <div>Shelton Street</div>
                    <div>Covent Garden</div>
                    <div>London</div>
                    <div>WC2H</div>
                  </div>

                  <div
                    className='ml-[-2px]'
                  >{item.details.state}</div>


                  <div>
                    <span className='font-bold'>£5,000,000 GBP</span>
                    <span className='ml-4'>
                      {item.completion_percentage}%
                    </span>
                  </div>

                  <div className='text-xs'>
                    #ZM786123456
                  </div>

                </div>
              </div>


            </div>
            {/* <img src={item.first_image} alt="Background" className='object-cover object-center h-full w-auto rounded-lg pointer-events-none	absolute z-[-1000] top-0 right-0' /> */}
          </div>
          <div
            className='h-[59px] bg-black rounded-full relative flex flex-row text-white items-center justify-around'
          >
            <div className=''>£25.00 GBP</div>
            <div className='text-lg font-medium	'>Buy Entry Now</div>
          </div>
        </div>
      )
    });
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(createItems(data.listing, setActiveIndex));
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className='mt-7'>
      {/* <div className='flex w-full justify-center pl-[5px] mx-auto items-center min-[448px]:pl-[3%] min-[470px]:pl-[5%] min-[510px]:pl-[9%] min-[560px]:pl-[13%] sm:pl-[22%] md:pl-[25%]'> */}
      <div className='flex gap-2 w-full justify-center pl-[5px] mx-auto items-center min-[448px]:pl-[3%] min-[470px]:pl-[5%] min-[510px]:pl-[9%] min-[560px]:pl-[13%] sm:pl-[22%] md:pl-[25%] min-[874px]:pl-[1%] min-[874px]:pr-[1%] min-[960px]:pl-[3%] lg:pl-1 lg:pr-0 min-[1125px]:pl-[2%]'>
        <AliceCarousel
          // infinite
          mouseTracking
          disableButtonsControls
          disableDotsControls
          // autoWidth
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        // controlsStrategy="alternate"
        // ref={carousel}
        />
      </div>
      <div className="absolute top-1.5 right-4 flex gap-8 mt-2 ">

        <div
          role='button'
          onClick={slidePrev}
          className='z-[500]'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23.621" height="44.243" viewBox="0 0 23.621 44.243">
            <path id="Path_59" data-name="Path 59" d="M74.805,416.151l20-20-20-20" transform="translate(96.305 418.272) rotate(180)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
          </svg>
        </div>

        <div
          role='button'
          onClick={slideNext}
          className='z-[500]'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23.621" height="44.243" viewBox="0 0 23.621 44.243">
            <path id="Path_59" data-name="Path 59" d="M74.805,416.151l20-20-20-20" transform="translate(-72.684 -374.03)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
          </svg>
        </div>


      </div>






    </div>
  );
}


export default ACarousel;
// export { Buttons };
// const createItems = (length, [handleClick]) => {
//   let deltaX = 0;
//   let difference = 0;
//   const swipeDelta = 20;

//   return Array.from({ length }).map((item, i) => (
//     <div
//       data-value={i + 1}
//       className=" h-[150px] bg-rose-600 border w-[250px]"
//       onMouseDown={(e) => (deltaX = e.pageX)}
//       onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
//       onClick={() => (difference < swipeDelta) && handleClick(i)}
//     >
//       <span className="item-inner" />
//     </div>
//   ));
// };

// const ACarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [items] = useState(createItems(5, [setActiveIndex]));

//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);
//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   return <>
//     <AliceCarousel
//       mouseTracking
//       disableDotsControls
//       disableButtonsControls
//       items={items}
//       activeIndex={activeIndex}
//       responsive={responsive}
//       onSlideChanged={syncActiveIndex}
//       // controlsStrategy="alternate"

//       infinite
//       controlsStrategy="alternate"
//       paddingLeft={50}
//       paddingRight={50}

//     />,
//     <div className="b-refs-buttons">
//       <button onClick={slidePrev}>Prev</button>
//       <button onClick={slideNext}>Next</button>
//     </div>,
//   </>
// };


