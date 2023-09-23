import React from 'react';
// import "./Footer.css";
import logo from "../Assets/brand1.png";



const Footer = () => {
  
    const centeredStyle = {
      backgroundImage:'url("https://png.pngtree.com/background/20210715/original/pngtree-simple-gradient-green-leaf-background-picture-image_1281150.jpg")',
      textAlign: 'center', // Center text horizontally
      display: 'flex', // Use flexbox for vertical and horizontal centering
      justifyContent: 'center', // Center text horizontally
      backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
      // height: '100vh', // Set a fixed height for centering in the viewport
    };
  
    return (
      <div style={centeredStyle}>
        <div className='mt-[29px] bg-[#9FB846] h-[507px] relative overflow-hidden' >

            



            <div className='mx-[320px] flex justify-between items-center gap-[335px] pt-[23px]' >

                <div className='flex justify-between  justify-items-center items-center  w-[60%]'>
                    <div>
                       <center><img src={logo} className="w-[146px] h-[93px]" alt="" /></center> 
                    
                      <center> <h3>Call Us <br /> <span>+91 987654321</span> </h3></center> 
                    </div>
                   
                </div>

                
            </div>

            <div className='mt-[24px] mx-[320px] hr-line  ' />


            <div className='pla' >
<div className='play'>
                    <div className='footer-info w-[250px] h-[250px]  z-[5]' >
                        <h2 className="text-[22px] font-[600] mb-[30px]">Location</h2>
                        <p>4/58 <br /> Location</p>
                        <p> KUNIYAMUTHUR</p>
                        <p>COIMBATORE</p>
                        <p>PINCODE:641008</p>
                        <p>support@rcd.com</p>
                    </div>
                

                     <div className='footer-info w-[250px] h-[250px]  z-[2]' >
                        <h2 className="text-[22px] font-[600] mb-[30px]">Categories</h2>
                        <p>FRUITS</p>
                        <p>DRY FRUITS</p>
                        <p>VEGETABLE</p>
                        <p>HEALTHY FOOD</p>
                    </div>
                

                    </div>      
                
            </div>

            <div className='mt-[68px] mx-[320px] hr-line  ' />



            </div>
        </div>
    );
};

export default Footer;

