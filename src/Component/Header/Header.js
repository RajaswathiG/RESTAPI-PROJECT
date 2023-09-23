


import React from 'react';
import "./Header.css";
import logo from "../Assets/Frame.png";
import callicon from "../Assets/call icon.svg";
import { BiSearchAlt, BiUser } from 'react-icons/bi';
import { BsHeart, BsCart2, BsCart4 } from 'react-icons/bs';
import { BiLogIn,BiLogInCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
//     const handleLogin=()=>
// {
//     navigate(`/login`);
// }
const handleSignUp=()=>
{
    navigate(`/signup`);
}
    const handleCart=()=>
    {
        navigate('/cart');
    }

    const handleBlog=()=>
    {
        navigate('/blog');
    }
    const handleDate=()=>
    {
        navigate('/date');
    }
  
    return (
        <div className='header-container'>

            <div className='logo-search-cont'>
                <img src={logo} alt="" />
                <h5 style= {{color:"#20211f",Family:"cursive"}}> MRM ONLINE VEGGIES & FRUITS STORE</h5>
           
            </div>

            <div className='contact-social-cont'>

                {/* <div className='contact'>
                    <img src={callicon} alt="" />
                </div> */}

                <div className='social-icon-cont'>
                    <div className='headerIcon'>
                        <BiUser  onClick={handleBlog} className='headerIcon-size' />
                    </div>

                    <div className='headerIcon'>
                        <BsCart4  onClick={handleDate}   className='headerIcon-size' />
                    </div>

                    {/* <div className='headerIcon'>
                        <BsCart2 onClick={handleCart} className='headerIcon-size' />
                    </div> */}

                    {/* <div className='headerIcon'>
                        <BiLogIn onClick={handleLogin} className='headerIcon-size' />
                    </div> */}

                    <div className='headerIcon'>
                        <BiLogInCircle onClick={handleSignUp} className='headerIcon-size' />
                    </div>
                </div>

            </div>
            {/* <button onClick={handleSignUp}>Login</button>
            <button onClick={handleLogin}>Sign Up</button> */}
        </div>
    );
};

export default Header;
