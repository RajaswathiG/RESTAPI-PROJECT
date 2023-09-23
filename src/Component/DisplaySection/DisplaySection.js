import React from 'react';
import img1 from "../Assets/dp-img1.png";
import img2 from "../Assets/dp-img2.jpg";
import img3 from "../Assets/dp-img3.jpg";
import img4 from "../Assets/Healthy Food.png";
import img5 from "../Assets//Home Made.png";
import img6 from "../Assets/Natural.png";
import img7 from "../Assets/Fast Delivery.png";
import img8 from "../Assets/flowerkolly.png";
import cherry from "../Assets/cherry.png";
import tomato from "../Assets/tomato-slice.png";
import orange from "../Assets/orange-slice.png";
import plate from "../Assets/plate.png";
import { MdDoubleArrow } from 'react-icons/md';
import "./DisplaySection.css";
import { TypeAnimation } from 'react-type-animation';


const DisplaySection = () => {

    return (
        <div className='mx-[320px] mt-[25px]'>

            <div className='flex gap-[51px]'>
           
                

                <div className='grid gap-[30px]'>

                    <div className='relative'>

                        <div className='content-section-two'>
                       

                            <div className='shop-now-btn'>
                                
                            </div>
                        </div>

                        

                    </div>

                    <div className='relative'>

                        <div className='content-section-three'>
                         
                            <div className='shop-now-btn'>
                                
                            </div>
                        </div>

                        
                    </div>
                 
                </div>
            </div>

            {/* Sub Section */}
            <br/>
               
                <br/> <br/>
                <br/>
                <br/>
            
            <div className='sub-section'>
           
                <div className='sub-section-cont'>
                    
                
                    <div className='main-section'>
                 
                        <img src={img4} className="w-[93px] h-[93px]" alt="" />
                        <div>
                            <h2>Healthy Food</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img5} className="w-[95px] h-[95px]" alt="" />
                        <div>
                            <h2>Home Made</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img6} className="w-[76px] h-[81px]" alt="" />
                        <div>
                            <h2>100% Natural</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img7} className="w-[119px] h-[64px]" alt="" />
                        <div>
                            <h2>Fast Delivery</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    
                </div>
            
                </div>
            </div>
           
            
        </div>
        
    );
};

export default DisplaySection;