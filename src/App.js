import { useEffect } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignUp from './Component/signup/signup';
import Login from './Component/login/login';
import Cart from './Component/Navbar/Cart';
import Blog from './Component/Blog/Blog';
import ShoppingCart from './Component/DisplaySection/Cart';
import Profile from './Component/profile/profile';
function App() {

useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, [])

  return (
    <div className='App'>
      <Router>
      <Routes>
      <Route path="/*" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile/:transactionId" element={<Profile/>} />
        <Route path="/cart/:transactionId" element={<Cart/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/date" element={<ShoppingCart />} />
      </Routes>
    </Router>


    </div>
  );
}

export default App;