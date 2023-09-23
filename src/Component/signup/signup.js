import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./signup.css";
function SignUp() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      const handleChange =(e)=>
      {
        const{name,value} = e.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
      };
      const handleSubmit = async ()=>
      {
        const response = await axios.post('http://127.0.0.1:8080/adddonor', formData)
        console.log(response.data)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          });
          navigate(`/cart/${response.data.transaction_id}`);/////

      };
      const handleLogin = () =>
      {
        navigate('/login');
      }
  return (
    <div className='nn'>
      <br/>
      <br/>
        <h1 className='nnn'> &nbsp; Sign Up</h1>
        <label className='nnnn'> &nbsp;First Name </label>
        <input  name='firstName' onChange={handleChange} type='text'></input>
        <br></br>
        <label className='nnnn'>Last Name </label>
        <input name='lastName'  onChange={handleChange} type='text'></input>
        <br></br>
        <label className='nnnn'>Email </label>
        <input  name='email' onChange={handleChange} type='text'></input>
        <br></br>
        <label className='nnnn'>Password </label>
        <input  name='password' onChange={handleChange} type='text'></input>
        <br></br>
        <button  className = 'n'onClick={handleSubmit}>Sign Up</button>
        <br></br>
        
    </div>
  )
}

export default SignUp




