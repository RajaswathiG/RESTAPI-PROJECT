import React, { useState } from 'react';
import './Cart.css';
import img1 from "../Assets/tomatos.png";
import img2 from "../Assets/capcicum.png";
import img3 from "../Assets/strawberies.png";
import img4 from "../Assets/tomato 2.png";
import img11 from "../Assets/mushroom.png";
import img22 from "../Assets/pickles.png";
import img33 from "../Assets//pickles 2.png";
import img44 from "../Assets/juice.png";
import bg from "../Assets/bg_1.jpg";
import { useNavigate } from 'react-router-dom';

  
const ShoppingCart = () => {
  const navigate = useNavigate();
  const handleDate = ()=> {
    navigate('/cart');
  }


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemToRemove.name);
    setCartItems(updatedCart);
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  

  return (
    
    <>
    
     <div >

       <h2> OUR PRODUCTS </h2> 
    
    <div className="cart-container">
           
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-details">
                  <img src={`images/${item.image}`} alt={item.name} />
                  <div>
                    <span>{item.name}</span>
                    <span>Quantity: {item.quantity}</span>
                  </div>
                </div>
                <div className="item-actions">
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              
              </li>
            ))}
          </ul>
        )}
          <div className="total">
              <span>Total: ₹{calculateTotal().toFixed(2)}</span>
            </div>
      </div>

      <div className="items">
        <h2>Available Items</h2>
        <ul className="item-list">
          <li className="item">
            <div className="item-details">
            <img src={img1} alt="" />
              <span>TOMATOES</span>
            </div>
            <div className="item-actions">
              <span>₹300</span>
              <button onClick={() => addToCart({ name: 'TOMATOES', price: 300, image: {img1} })}>
                Add to Cart
              </button>
            </div>
          </li>
          <li className="item">
            <div className="item-details">
            <img src={img2} alt="" />
              <span>CAPSICUM</span>
            </div>
            <div className="item-actions">
              <span>₹150</span>
              <button onClick={() => addToCart({ name: 'CAPSICUM', price: 150, image: {img2} })}>
                Add to Cart
              </button>
            </div>
          </li>
          <li className="item">
            <div className="item-details">
            <img src={img4} alt="" />
              <span>FARM FRESH TOMATO</span>
            </div>
            <div className="item-actions">
              <span>₹350</span>
              <button onClick={() => addToCart({ name: 'TOMATO', price: 350, image: {img4} })}>
                Add to Cart
              </button>
            </div>
          </li>
          <li className="item">
            <div className="item-details">
            <img src={img3} alt="" />
              <span>RASPBERRIES</span>
            </div>
            <div className="item-actions">
              <span>₹200</span>
              <button onClick={() => addToCart({ name: 'RASPBERRIES', price: 200, image: {img3} })}>
                Add to Cart
              </button>
            </div>
          </li>
          <li className="item">
            <div className="item-details">
            <img src={img1} alt="" />
              <span>CHILE TOMATO</span>
            </div>
            <div className="item-actions">
              <span>₹150</span>
              <button onClick={() => addToCart({ name: 'CHILE', price: 150, image: {img1} })}>
                Add to Cart
              </button>
            </div>
          </li>
          <li className="item">
            <div className="item-details">
            <img src={img2} alt="" />
              <span>CAPSICUM FARM MADE</span>
            </div>
            <div className="item-actions">
              <span>₹120</span>
              <button onClick={() => addToCart({ name: 'CAPSICUM FARM', price: 120, image: {img2} })}>
                Add to Cart
              </button>
            </div>
          </li>
          <li className="item">
            <div className="item-details">
            <img src={img3} alt="" />
              <span>ALPS RASPBERRY</span>
            </div>
            <div className="item-actions">
              <span>₹180</span>
              <button onClick={() => addToCart({ name: 'ALPS', price: 180, image: {img3} })}>
                Add to Cart
              </button>
            </div>
          </li>
          <li className="item">
            <div className="item-details">
            <img src={img1} alt="" />
              <span>TIN TOMATO</span>
            </div>
            <div className="item-actions">
              <span>₹180</span>
              <button onClick={() => addToCart({ name: 'TIN', price: 180, image: {img1} })}>
                Add to Cart
              </button>
            </div>
          </li>

         

         
          {/* Add more items here */}
        </ul>
      </div>
    </div>
    </div>
    </>
  );
};

export default ShoppingCart;