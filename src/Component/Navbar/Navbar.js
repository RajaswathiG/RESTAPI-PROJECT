import React from 'react';
// import "./Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import { BiUser } from 'react-icons/bi';

const Navbar = () => {

    const navigate = useNavigate();
    const handleDate=()=>
    {
        navigate('/date');
    }

    const handleBlog=()=>
    {
        navigate('/blog');
    }
    return (
        <div className='navbar-container'>
         </div>
    );
};

export default Navbar;