import React from 'react';
import "./Blog.css";
import img1 from "../Assets/blog1.png";
import img2 from "../Assets/blog2.png";
import img22 from "../Assets/capcicum.png";
import icon1 from "../Assets/milk.png";
import icon2 from "../Assets/mutton.png";
import icon3 from "../Assets/carrot.png";
import icon4 from "../Assets/shalgom.png";
import icon5 from "../Assets/greenflower.png";
import icon6 from "../Assets/mushro.png";
import icon7 from "../Assets/fish.png";

const Blog = () => {

    return (
        <div className='mx-[320px] mt-[80px] relative'>

                <div className='w-1/2 p-[80px] '>
                  <center> <h1 className='text-[35px] font-[700]'>FROM OUR FARMER FRIENDS</h1>
                    <p className='text-[23px]  text-[#7E7C7C] mt-[16px]'>
                    Buy natural, sustainable, and chemical-free products from local sellers across the country. We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. We are a democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality products.
                    </p>
                    </center>
                </div>
            <div className='flex'>

                    <div className='w-1/2 '>
                        <div className='blog-cont-img w-[572px] h-[354px]'>
                            <div className='blogImg'>
                                <center><img src={img1} className="" alt="" /></center>
                            </div>
                        </div>
                    </div>
             
                
                
            </div>


            <div className='flex mt-[40px]'>

                <div className='w-1/2 p-[80px]'>
                   <center> <h1 className='text-[35px] font-[700]'>Why Customer Love Us</h1>
                    <p className='text-[23px]  text-[#7E7C7C] mt-[16px]'>
                    we are committed to inspiring the society with all the goodness that comes from maintaining the highest standards in every aspect of our process. From selecting responsibly grown farmlands to source our products to maintaining quality and sanitary food processing and packaging systems, we try to fill our system with as much goodness as we can. 
                    </p>
                    </center>
                </div>
              
                <div className='ml-[60px] blog-cont-img w-[572px] h-[354px]'>
                    <center>
                    <div className='blogImg'>
                        <img src={img2} className="" alt="" />
                    </div>
                    </center>
                </div>
              
            </div>

            <div className='flex'>
            <div className='w-1/2 p-[80px] '>
                <center>   <h1 className='text-[35px] font-[700]'>FROM OUR LOCAL VENDORS</h1>
                 <div> <center> <p>
                    Buy natural, sustainable, and chemical-free products from local sellers across the country. We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. We are a democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality products.
                    </p>
                    </center>
                    </div>
                    </center> 
                </div>
                    <div className='w-1/2 '>
                        <center>
                        <div className='blog-cont-img w-[572px] h-[354px]'>
                            <div className='blogImg'>
                                <img src={img22} className="" alt="" />
                            </div>
                        </div>
                        </center>
                    </div>
             
                
                
            </div>

            <hr className='mt-[70px]' />
        </div>
    );
};

export default Blog;  