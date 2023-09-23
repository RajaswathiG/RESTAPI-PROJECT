import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Assets/tomatos.png";
import img2 from "../Assets/capcicum.png";
import img3 from "../Assets/strawberies.png";
import img4 from "../Assets/tomato 2.png";
import "./Slider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from 'swiper/modules';
import { MdDoubleArrow } from "react-icons/md";



const Slider = () => {

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={0}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            navigation={true}

            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>TOMATOES</h1>
                        <h2>300</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img2} alt="" />
                    <div className='content'>
                        <h1>CAPSICUM</h1>
                        <h2>150</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img3} alt="" />
                    <div className='content'>
                        <h1>FARM FRESH TOMATO</h1>
                        <h2>350</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img4} alt="" />
                    <div className='content'>
                        <h1>RASPBERRIES</h1>
                        <h2>200</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>CHILE TOMATO</h1>
                        <h2>150</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img2} alt="" />
                    <div className='content'>
                        <h1>CAPSICUM FARM MADE</h1>
                        <h2>120</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img3} alt="" />
                    <div className='content'>
                        <h1>ALPS RASPBERRY</h1>
                        <h2>180</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img4} alt="" />
                    <div className='content'>
                        <h1>TIN TOMATO</h1>
                        <h2>180</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
}

export default Slider;
