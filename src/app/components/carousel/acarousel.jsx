"use client";

import React, { useRef, useState } from 'react';
import ImageCarousel from './imagescarousel';
import Slider from 'react-slick';
import Header from '../header';


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
  // const createItems = (listing, handleClick) => {
  //   ///
  //   let deltaX = 0;
  //   let difference = 0;
  //   const swipeDelta = 20;
  //   ///


  //   return listing.map((item, i) => {
  //     // console.log("acar", item.details.images.split(","))
  //     return (
  //       //  sm:w-[404px]
  //       <div
  //         className="h-[600px] rounded-md sm:h-[380px] flex flex-col justify-between "
  //         key={item.id}

  //         /////
  //         onMouseDown={(e) => (deltaX = e.pageX)}
  //         onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
  //         onClick={() => (difference < swipeDelta) && handleClick(i)}
  //       // ///
  //       >
  //         <div className='basis-10/12 relative '>
  //           {/* Image Carousel */}


  //           <ImageCarousel
  //             images={item.details.images.split(",")}
  //             item={item}
  //           />
  //           <div
  //             className='z-[500] absolute top-0 p-2 w-full text-slate-50 flex flex-col justify-between h-full box_shadow rounded-md sm:min-w-[344px]  card h-[340px] rounded-md w-full max-w-[900px]'
  //           >
  //             <div
  //               className='text-2xl text-center mt-1'
  //             >
  //               {getTime(item.expiry)}
  //             </div>


  //             <div>

  //               <div className='flex flex-col items-center  gap-1 text-sm'>


  //                 <div className='flex justify-center text-base font-medium w-full items-center gap-6'>
  //                   <div>Shelton Street</div>
  //                   <div>Covent Garden</div>
  //                   <div>London</div>
  //                   <div>WC2H</div>
  //                 </div>


  //                 {/* <div>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="59.815" height="14.633" viewBox="0 0 59.815 14.633">
  //                     <g id="Group_3236" data-name="Group 3236" transform="translate(-56.415 -116.364)">
  //                       <path id="Path_1" data-name="Path 1" d="M74.91,128.508V128.2a4.747,4.747,0,0,0-.318-1.448,20.568,20.568,0,0,0-1.447-2.479c-.934-1.559-1.984-3.359-2.924-4.93-.773-1.293-1.495-2.955-3.415-2.98-2-.026-2.662,1.671-3.386,2.9-2.3,3.892-7,11.725-7,11.725h2.171s4.487-7.641,6.715-11.5a2.043,2.043,0,0,1,1.505-1.142c.995,0,1.492,1.139,1.939,1.921,1.2,2.1,2.351,4.1,3.473,6.128.353.637,1.07,1.475.579,2.339-.32.564-.965.529-1.881.529,0,.015-8.857,0-8.857,0v1.727h8.046a19.644,19.644,0,0,0,2.663-.084A2.615,2.615,0,0,0,74.91,128.508Z" transform="translate(0 0)" fill="#fff" />
  //                       <path id="Path_2" data-name="Path 2" d="M99.743,118.854v.307a4.745,4.745,0,0,0,.318,1.448,20.575,20.575,0,0,0,1.447,2.479c.934,1.558,1.984,3.359,2.923,4.93.774,1.293,1.495,2.954,3.416,2.98,2,.027,2.662-1.67,3.386-2.9,2.3-3.892,7-11.725,7-11.725h-2.171s-4.487,7.641-6.715,11.5a2.042,2.042,0,0,1-1.5,1.142c-.995,0-1.493-1.139-1.939-1.922-1.2-2.1-2.351-4.1-3.473-6.127-.353-.637-1.07-1.475-.579-2.339.32-.564.965-.53,1.881-.53,0-.014,8.857,0,8.857,0v-1.726h-8.046a19.683,19.683,0,0,0-2.663.083A2.616,2.616,0,0,0,99.743,118.854Z" transform="translate(-28.09 0)" fill="#fff" />
  //                       <path id="Path_3" data-name="Path 3" d="M149.071,128.508V128.2a4.746,4.746,0,0,0-.318-1.448,20.567,20.567,0,0,0-1.447-2.479c-.934-1.559-1.984-3.359-2.923-4.93-.774-1.293-1.495-2.955-3.416-2.98-2-.026-2.662,1.671-3.386,2.9-2.3,3.892-7,11.725-7,11.725h2.171s4.487-7.641,6.715-11.5a2.042,2.042,0,0,1,1.5-1.142c.995,0,1.493,1.139,1.939,1.921,1.2,2.1,2.351,4.1,3.473,6.128.353.637,1.07,1.475.579,2.339-.32.564-.965.529-1.881.529,0,.015-8.857,0-8.857,0v1.727h8.047a19.639,19.639,0,0,0,2.663-.084A2.615,2.615,0,0,0,149.071,128.508Z" transform="translate(-48.079 0)" fill="#fff" />
  //                       <path id="Path_4" data-name="Path 4" d="M173.9,118.854v.307a4.745,4.745,0,0,0,.318,1.448,20.625,20.625,0,0,0,1.447,2.479c.934,1.558,1.984,3.359,2.924,4.93.773,1.293,1.495,2.954,3.415,2.98,2,.027,2.662-1.67,3.386-2.9,2.3-3.892,7-11.725,7-11.725h-2.171s-4.487,7.641-6.715,11.5a2.043,2.043,0,0,1-1.505,1.142c-.995,0-1.492-1.139-1.939-1.922-1.2-2.1-2.35-4.1-3.473-6.127-.353-.637-1.07-1.475-.579-2.339.32-.564.965-.53,1.882-.53,0-.014,8.857,0,8.857,0v-1.726h-8.046a19.683,19.683,0,0,0-2.663.083A2.616,2.616,0,0,0,173.9,118.854Z" transform="translate(-76.169 0)" fill="#fff" />
  //                     </g>
  //                   </svg>

  //                 </div> */}

  //                 <div
  //                   className='ml-[-2px]'
  //                 >{item.details.state}</div>


  //                 <div>
  //                   <span className='font-bold'>£5,000,000 GBP</span>
  //                   <span className='ml-4'>
  //                     {item.completion_percentage}%
  //                   </span>
  //                 </div>

  //                 <div className='text-xs'>
  //                   #ZM786123456
  //                 </div>

  //               </div>
  //             </div>


  //           </div>
  //           {/* <img src={item.first_image} alt="Background" className='object-cover object-center h-full w-auto rounded-lg pointer-events-none	absolute z-[-1000] top-0 right-0' /> */}
  //         </div>
  //         <div
  //           className='h-[59px] bg-black rounded-full relative flex flex-row text-white items-center justify-around'
  //         >
  //           <div className=''>£25.00 GBP</div>
  //           <div className='text-lg font-medium	'>Buy Entry Now</div>
  //         </div>
  //       </div>
  //     )
  //   });
  // }

  // const [activeIndex, setActiveIndex] = useState(0);
  // const [items] = useState(createItems(data.listing, setActiveIndex));
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
      {/* <div className='flex gap-2 w-full justify-center pl-[5px] mx-auto items-center min-[448px]:pl-[3%] min-[470px]:pl-[5%] min-[510px]:pl-[9%] min-[560px]:pl-[13%] sm:pl-[22%] md:pl-[25%] min-[850px]:pl-[1%] min-[850px]:pr-[1%] min-[900px]:pl-[4%] min-[955px]:pl-[5%] min-[1000px]:pl-[7%] lg:pl-1 lg:pr-0 min-[1125px]:pl-[2%]'> */}
      {/* <div className='flex gap-2 w-full justify-center pl-[5px] mx-auto items-center  sm:'> */}
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
                <path id="Path_59" data-name="Path 59" d="M74.805,416.151l20-20-20-20" transform="translate(96.305 418.272) rotate(180)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
              </svg>
            </button>
            <button
              role='button'
              onClick={slideNext}
              className='z-[3000]'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="23.621" height="44.243" viewBox="0 0 23.621 44.243">
                <path id="Path_59" data-name="Path 59" d="M74.805,416.151l20-20-20-20" transform="translate(-72.684 -374.03)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
              </svg>
            </button>
          </div>
        </div>



        <div className='mt-7'>
          <Slider ref={curSlider} {...settings}>
            {data.listing.map((item, index) =>
              <div className='mx-[2px] p-0' key={item.id}>
                <div className='flex flex-col items-center rounded-2xl m-4 sm:justify-center gap-3'>
                  {/* <div className='sm:min-w-[344px] card h-[400px] rounded-t-3xl w-full max-w-[900px] p-4 mb-1 flex flex-col justify-between'> */}
                  <ImageCarousel
                    item={item}
                    images={item.details.images.split(",")}
                  />
                  <div
                    className='h-[59px] bg-black rounded-full relative flex flex-row text-white items-center justify-around w-full'
                  >
                    <div className=''>£25.00 GBP</div>
                    <div className='text-lg font-medium	'>Buy Entry Now</div>
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


