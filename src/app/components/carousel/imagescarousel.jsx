"use client";

import React, { useState } from "react"
import CountdownTimer from "../countdown/countdown";

import bg from '../../../../loadview.png';



const ImageCarousel = ({ item, images }) => {
    const [currenIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        if (currenIndex !== 0)
            setCurrentIndex(currenIndex - 1)
        else
            setCurrentIndex(images.length - 1)
    }

    const slideRight = () => {
        if (currenIndex !== images.length - 1)
            setCurrentIndex(currenIndex + 1)
        else
            setCurrentIndex(0)
    }

    const getTime = (expire) => {
        const countDownDate = new Date(expire).getTime();
        const currTime = new Date().getTime();
        return (
            <CountdownTimer
                targetDate={countDownDate}
            />)
    }

    return (
        <div className='max-[640px]:min-w-[310px] card h-[440px] rounded-2xl w-full max-w-[900px] p-4 mb-1 flex flex-col justify-between text-white box_shadow' style={{ backgroundImage: `url(${images[currenIndex]})` }}>

            <div
                className='z-[10] text-2xl text-center mt-1 text-white'
            >
                {getTime(item.expiry)}
            </div>


            <div className="z-[10] lg:mb-1">

                <div className='flex flex-col items-center gap-1 items-center lg:gap-2 w-full'>


                    {/* <div className='flex text-[12px] w-full items-center gap-2 tracking-wider antialiased justify-between lg:tracking-normal text-center'> */}
                    <div className='grid grid-cols-4 text-[12px] w-full items-center gap-1 tracking-wider antialiased justify-between lg:tracking-normal text-center'>
                        <div>SHELTON STREET</div>
                        <div>COVENT GARDEN</div>
                        <div>LONDON</div>
                        <div>WC2H</div>
                    </div>




                    {/* text-xs w-full items-center gap-2 tracking-wider */}
                    <div
                        className='text-[13px] tracking-wide text-center'
                    >UNITED KINGDOM</div>


                    <div className="flex justify-between w-full">

                        <div className="mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="59.815" height="14.633" viewBox="0 0 59.815 14.633">
                                <g id="Group_3236" data-name="Group 3236" transform="translate(-56.415 -116.364)">
                                    <path id="Path_1" data-name="Path 1" d="M74.91,128.508V128.2a4.747,4.747,0,0,0-.318-1.448,20.568,20.568,0,0,0-1.447-2.479c-.934-1.559-1.984-3.359-2.924-4.93-.773-1.293-1.495-2.955-3.415-2.98-2-.026-2.662,1.671-3.386,2.9-2.3,3.892-7,11.725-7,11.725h2.171s4.487-7.641,6.715-11.5a2.043,2.043,0,0,1,1.505-1.142c.995,0,1.492,1.139,1.939,1.921,1.2,2.1,2.351,4.1,3.473,6.128.353.637,1.07,1.475.579,2.339-.32.564-.965.529-1.881.529,0,.015-8.857,0-8.857,0v1.727h8.046a19.644,19.644,0,0,0,2.663-.084A2.615,2.615,0,0,0,74.91,128.508Z" transform="translate(0 0)" fill="#fff" />
                                    <path id="Path_2" data-name="Path 2" d="M99.743,118.854v.307a4.745,4.745,0,0,0,.318,1.448,20.575,20.575,0,0,0,1.447,2.479c.934,1.558,1.984,3.359,2.923,4.93.774,1.293,1.495,2.954,3.416,2.98,2,.027,2.662-1.67,3.386-2.9,2.3-3.892,7-11.725,7-11.725h-2.171s-4.487,7.641-6.715,11.5a2.042,2.042,0,0,1-1.5,1.142c-.995,0-1.493-1.139-1.939-1.922-1.2-2.1-2.351-4.1-3.473-6.127-.353-.637-1.07-1.475-.579-2.339.32-.564.965-.53,1.881-.53,0-.014,8.857,0,8.857,0v-1.726h-8.046a19.683,19.683,0,0,0-2.663.083A2.616,2.616,0,0,0,99.743,118.854Z" transform="translate(-28.09 0)" fill="#fff" />
                                    <path id="Path_3" data-name="Path 3" d="M149.071,128.508V128.2a4.746,4.746,0,0,0-.318-1.448,20.567,20.567,0,0,0-1.447-2.479c-.934-1.559-1.984-3.359-2.923-4.93-.774-1.293-1.495-2.955-3.416-2.98-2-.026-2.662,1.671-3.386,2.9-2.3,3.892-7,11.725-7,11.725h2.171s4.487-7.641,6.715-11.5a2.042,2.042,0,0,1,1.5-1.142c.995,0,1.493,1.139,1.939,1.921,1.2,2.1,2.351,4.1,3.473,6.128.353.637,1.07,1.475.579,2.339-.32.564-.965.529-1.881.529,0,.015-8.857,0-8.857,0v1.727h8.047a19.639,19.639,0,0,0,2.663-.084A2.615,2.615,0,0,0,149.071,128.508Z" transform="translate(-48.079 0)" fill="#fff" />
                                    <path id="Path_4" data-name="Path 4" d="M173.9,118.854v.307a4.745,4.745,0,0,0,.318,1.448,20.625,20.625,0,0,0,1.447,2.479c.934,1.558,1.984,3.359,2.924,4.93.773,1.293,1.495,2.954,3.415,2.98,2,.027,2.662-1.67,3.386-2.9,2.3-3.892,7-11.725,7-11.725h-2.171s-4.487,7.641-6.715,11.5a2.043,2.043,0,0,1-1.505,1.142c-.995,0-1.492-1.139-1.939-1.922-1.2-2.1-2.35-4.1-3.473-6.127-.353-.637-1.07-1.475-.579-2.339.32-.564.965-.53,1.882-.53,0-.014,8.857,0,8.857,0v-1.726h-8.046a19.683,19.683,0,0,0-2.663.083A2.616,2.616,0,0,0,173.9,118.854Z" transform="translate(-76.169 0)" fill="#fff" />
                                </g>
                            </svg>
                        </div>

                        <div className=''>
                            £5,000,000 GBP
                            <div className="text-xs font-light w-[36px] h-[36px] z-[1000] absolute bottom-[10%] right-[17%] text-center min-[490px]:right-[22%] md:right-[20%] lg:right-[17%] lg:bottom-[11.5%] xl:right-[15%] min-[1600px]:right-[18%]"
                                style={{
                                    backgroundImage: `url(${bg.src})`
                                }}
                            >

                                <div className="mt-[0.6rem]">{item.completion_percentage}%</div>
                            </div>
                        </div>

                        {/* <span className='ml-4'>
                            {item.completion_percentage}%
                        </span> */}


                        <div className="mt-2 mr-2">
                            <svg id="g12" xmlns="http://www.w3.org/2000/svg" width="54.222" height="18.954" viewBox="0 0 54.222 18.954">
                                <path id="path14" d="M233.4,373.986l-1.289,3.122h.3l2.45-3.122H233.4" transform="translate(-184.758 -371.154)" fill="#fff" />
                                <path id="path16" d="M169.694,380.933a4.646,4.646,0,0,1-2.091-.482l-.537.482h-.247l-.165-3.054.289-.027c.867,1.981,1.885,2.613,2.834,2.613a1.451,1.451,0,0,0,1.568-1.513c0-.825-.316-1.224-1.609-1.761-.441-.178-.949-.357-1.376-.564a2.4,2.4,0,0,1-1.471-2.242,2.7,2.7,0,0,1,2.806-2.627,3.007,3.007,0,0,1,1.609.453l.536-.467h.234l.234,2.7-.275.041c-.757-1.513-1.568-2.256-2.462-2.256a1.242,1.242,0,0,0-1.307,1.334c0,.647.276,1.142,1.252,1.568.482.22,1.046.412,1.555.66a2.4,2.4,0,0,1,1.637,2.256,2.919,2.919,0,0,1-3.012,2.888" transform="translate(-166.654 -370.535)" fill="#fff" />
                                <path id="path18" d="M179.643,381.924a3.021,3.021,0,0,1-3.122-3.329,3.208,3.208,0,0,1,3.3-3.315,2.985,2.985,0,0,1,3.095,3.3,3.2,3.2,0,0,1-3.274,3.342m.055-6.259c-.962,0-1.554,1.073-1.554,2.957,0,1.857.633,2.915,1.609,2.915,1,0,1.555-1.072,1.555-2.957,0-1.856-.592-2.916-1.61-2.916" transform="translate(-169.383 -371.513)" fill="#fff" />
                                <path id="path20" d="M188.552,381.275c-1.087,0-1.43-.536-1.43-1.526v-4.113H186.1v-.192l1.265-1,1-1.307h.206v1.788h2.091v.715H188.58V379.2c0,.551.083.88.358,1.073a1.7,1.7,0,0,0,1,.22c.22,0,.495-.014.756-.027l.014.193a4.569,4.569,0,0,1-2.159.619" transform="translate(-172.033 -370.918)" fill="#fff" />
                                <path id="path22" d="M196.895,374.886a3,3,0,0,0-1.43.344v4.552l.77.289v.192h-3.108v-.192l.866-.289v-8.307l-.948-.619v-.137l2.366-.646.055.041v4.814l.055.028a3.36,3.36,0,0,1,2.3-1.114,1.726,1.726,0,0,1,1.76,1.912v4.03l.867.289v.192h-3.109v-.192l.77-.289v-3.466c0-.894-.357-1.43-1.21-1.43" transform="translate(-173.952 -370.072)" fill="#fff" />
                                <path id="path24" d="M205.488,378.128c0,1.747.495,2.889,2.049,2.889a5.64,5.64,0,0,0,2.077-.44l.082.165a4.235,4.235,0,0,1-2.654,1.183,2.99,2.99,0,0,1-3.123-3.2,3.312,3.312,0,0,1,3.164-3.439,2.544,2.544,0,0,1,2.682,2.847Zm2.737-.467c-.055-1.293-.426-1.995-1.238-1.995s-1.417.839-1.486,2.118l2.724-.124h0" transform="translate(-176.96 -371.513)" fill="#fff" />
                                <path id="path26" d="M215.8,380.484a9.285,9.285,0,0,1-2.324-.358v-8.651l-.963-.619v-.138l2.379-.646.055.041v4.608l.055.028A2.809,2.809,0,0,1,217,373.84c1.307,0,2.489,1.2,2.489,3.164a3.461,3.461,0,0,1-3.686,3.48m.234-5.68a2.737,2.737,0,0,0-1.087.22v4.36a2.074,2.074,0,0,0,1.5.632c.811,0,1.484-.728,1.484-2.668,0-1.705-.728-2.544-1.9-2.544" transform="translate(-179.337 -370.072)" fill="#fff" />
                                <path id="path28" d="M225.969,382.214c-.688,1.692-1.334,2.435-2.187,2.435-.729,0-1.073-.426-1.073-.867a.82.82,0,0,1,.825-.783,1.325,1.325,0,0,1,1.073.66,5.325,5.325,0,0,0,.756-1.17l.234-.522-2.434-5.873-.84-.331v-.179h3.357v.179l-.88.331,1.485,4.03h.069l1.348-3.934-.8-.427v-.179h2.365v.179l-.893.454-2.407,6h0" transform="translate(-182.05 -371.597)" fill="#fff" />
                                <path id="path30" d="M237.419,381.924a5.42,5.42,0,0,1-2.036-.372l-.014-1.815.275-.027c.743,1.307,1.307,1.8,2.036,1.8a.975.975,0,0,0,1.045-1.045c0-.716-.728-.99-1.513-1.307-.867-.372-1.788-.784-1.788-1.926a2.125,2.125,0,0,1,2.366-1.953,5.9,5.9,0,0,1,1.665.247l.041,1.637-.262.069c-.674-1.114-1.113-1.541-1.746-1.541a.868.868,0,0,0-.935.88c0,.715.743,1,1.526,1.32.867.358,1.8.77,1.8,1.94a2.234,2.234,0,0,1-2.462,2.091" transform="translate(-185.658 -371.513)" fill="#fff" />
                                <path id="path32" d="M219.337,394.941h.307v-1.41l1.077-1.791h-.328l-.9,1.527-.9-1.527h-.333l1.072,1.791Zm-2.764,0h.307v-2.915h1.034v-.285H215.54v.285h1.034Zm-2.73,0h1.873v-.281h-1.566v-2.919h-.308Zm-2.638-1.259.55-1.592h.009l.549,1.592Zm-.735,1.259h.3l.341-.986h1.3l.342.986h.32l-1.134-3.214H211.6Zm-2.4,0h2v-.281h-1.7v-1.271h1.2v-.277h-1.2v-1.086h1.6v-.285h-1.912Zm-2.858-1.709v-1.211h.744c.537,0,.831.156.831.6,0,.462-.3.613-.826.613Zm-.3,1.709h.3v-1.436h.8l.783,1.436h.346l-.809-1.471a.82.82,0,0,0,.765-.865c0-.563-.4-.865-1.111-.865h-1.073Zm-3.706,0h1.873v-.281h-1.566v-2.919h-.307Zm-2.717-1.259.549-1.592h.009l.549,1.592Zm-.735,1.259h.3l.342-.986h1.3l.341.986h.32l-1.134-3.214h-.333Zm-3.222,0h.289V392.22h.009l1.821,2.721h.273v-3.2h-.29v2.638h-.009l-1.764-2.638h-.328Zm-2.332-.216c-.606,0-1.042-.514-1.042-1.384s.437-1.38,1.042-1.38,1.042.51,1.042,1.38S192.806,394.725,192.2,394.725Zm0,.277c.783,0,1.349-.658,1.349-1.661s-.566-1.661-1.349-1.661-1.35.658-1.35,1.661S191.418,395,192.2,395Zm-2.578-.061h.307v-3.2h-.307Zm-2.076,0h.307v-2.915h1.034v-.285h-2.374v.285h1.034v2.915Zm-3.1-1.259.549-1.592h.009l.55,1.592Zm-.735,1.259h.3l.341-.986h1.3l.341.986h.32l-1.134-3.214h-.333Zm-3.219,0h.29V392.22h.009l1.821,2.721h.273v-3.2h-.29v2.638h-.009l-1.764-2.638H180.5Zm-2.945-1.709v-1.211h.744c.537,0,.831.156.831.6,0,.462-.3.613-.826.613Zm-.3,1.709h.3v-1.436h.8l.783,1.436h.347l-.81-1.471a.82.82,0,0,0,.765-.865c0-.563-.4-.865-1.111-.865h-1.073Zm-2.833,0h2v-.281h-1.7v-1.271h1.2v-.277h-1.2v-1.086h1.6v-.285h-1.912Zm-2.033,0h.307v-2.915h1.034v-.285h-2.375v.285h1.034Zm-4.118,0h.29V392.22h.009l1.821,2.721h.273v-3.2h-.29v2.638h-.009l-1.764-2.638h-.329Zm-1.414,0h.307v-3.2h-.307v3.2h0" transform="translate(-166.708 -376.048)" fill="#fff" />
                            </svg>


                        </div>
                    </div>

                    <div className='absolute z-[50] bottom-0 text-[10px] w-full text-center'>
                        #ZM786123456
                    </div>

                </div>
            </div>


            {/* /////////////////////////////////////////////////////// */}
            <button
                className="arrow arrow--left"
                onClick={slideLeft}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14.472" height="20" viewBox="0 0 14.472 20">
                    <path id="Path_7682" data-name="Path 7682" d="M458.216,151.432l-.067-.047L445,142.068l-.217-.154a.605.605,0,0,0-.235-.047.62.62,0,0,0-.621.621v18.757a.622.622,0,0,0,.621.622.606.606,0,0,0,.235-.048l.217-.154,13.153-9.317.067-.047a.618.618,0,0,0,0-.87Z" transform="translate(458.395 161.867) rotate(180)" fill="#fff" />
                </svg>

            </button>
            <button
                className="arrow arrow--right"
                onClick={slideRight}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="15.472" height="21" viewBox="0 0 15.472 21">
                    <path id="Path_7667" data-name="Path 7667" d="M458.216,151.432l-.067-.047L445,142.068l-.217-.154a.605.605,0,0,0-.235-.047.62.62,0,0,0-.621.621v18.757a.622.622,0,0,0,.621.622.606.606,0,0,0,.235-.048l.217-.154,13.153-9.317.067-.047a.618.618,0,0,0,0-.87Z" transform="translate(-443.423 -141.367)" fill="#fff" stroke="rgba(0,0,0,0)" strokeMiterlimit="10" strokeWidth="1" />
                </svg>
            </button>

            <div className="dots z-[1000] max">
                {images.map((image, idx) => {
                    return (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentIndex(idx)
                            }}
                            className={"dot" + (currenIndex === idx ? " active" : "")}
                        ></button>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageCarousel



// import { useKeenSlider } from "keen-slider/react"
// // import "./styles.css"

// const ImageCarousel = ({ images }) => {
//     const [currentSlide, setCurrentSlide] = useState(0)
//     const [loaded, setLoaded] = useState(false)
//     const [sliderRef, instanceRef] = useKeenSlider({
//         initial: 0,
//         loop: true,
//         slideChanged(slider) {
//             setCurrentSlide(slider.track.details.rel)
//         },
//         created() {
//             setLoaded(true)
//         },
//     })

//     return (
//         <>
//             {/* <div className="navigation-wrapper h-full w-auto rounded-lg z-[-1000]"> */}
//             <div className="navigation-wrapper h-full w-full rounded-lg ">
//                 <div ref={sliderRef} className="keen-slider w-full h-full">
//                     {images.map((image) =>
//                         // <div className={"keen-slider__slide h-full w-full bg-[url(" + image + ")]"}>
//                         <div className={"keen-slider__slide h-full w-full bg-[url(\'" + image + "\')]"}>
//                             {/* <img src={image} alt="image"
//                                 className="object-cover object-center h-full w-full rounded-lg z-[-1000]"
//                             /> */}
//                         </div>
//                     )}
//                 </div>
//                 {loaded && instanceRef.current && (
//                     <>
//                         <Arrow
//                             left
//                             onClick={(e) =>
//                                 e.stopPropagation() || instanceRef.current?.prev()
//                             }
//                             disabled={currentSlide === 0}
//                         />

//                         <Arrow
//                             onClick={(e) =>
//                                 e.stopPropagation() || instanceRef.current?.next()
//                             }
//                             disabled={
//                                 currentSlide ===
//                                 instanceRef.current.track.details.slides.length - 1
//                             }
//                         />
//                     </>
//                 )}

//                 {loaded && instanceRef.current && (
//                     <div className="dots z-[1000] max">
//                         {[
//                             ...Array(instanceRef.current.track.details.slides.length).keys(),
//                         ].map((idx) => {
//                             return (
//                                 <button
//                                     key={idx}
//                                     onClick={() => {
//                                         instanceRef.current?.moveToIdx(idx)
//                                     }}
//                                     className={"dot" + (currentSlide === idx ? " active" : "")}
//                                 ></button>
//                             )
//                         })}
//                     </div>
//                 )}
//             </div>
//         </>
//     )
// }

// function Arrow(props) {
//     const disabeld = props.disabled ? " arrow--disabled" : ""
//     return (
//         <svg
//             onClick={props.onClick}
//             className={`z-[1000] arrow ${props.left ? "arrow--left" : "arrow--right"
//                 } ${disabeld}`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//         >
//             {props.left && (
//                 <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//             )}
//             {!props.left && (
//                 <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//             )}
//         </svg>
//     )
// }

// export default ImageCarousel;