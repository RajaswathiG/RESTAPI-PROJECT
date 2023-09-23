import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import "./doc.css";

Modal.setAppElement('#root');

function Donations() {
  const navigate = useNavigate();
  const handleProfile =()=>
  {
    navigate(`/profile/${transactionId}`);
  }
  const { transactionId } = useParams();

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [donationData, setDonationData] = useState({
    amount: '',
    donation_date: '',
    status: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Maintain a list of donations
  const [donationsList, setDonationsList] = useState([]);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await axios.get(`http://localhost:8080/showbyid/${transactionId}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }

    fetchUserDetails();
  }, [transactionId]);

  const handleAddDonation = async () => {
    try {
      const newUserDonation = {
        ...userDetails,
        d: donationData,
      };

      // Send a POST request to add the donation
      await axios.post('http://localhost:8080/adddonor', newUserDonation);

      // Add the new donation to the list
      setDonationsList([...donationsList, newUserDonation]);

      // Clear the donationData state
      setDonationData({
        amount: '',
        donation_date: '',
        status: '',
      });

      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding donation:', error);
    }
  };

  return (
<div className='polo'>
    <div className='plo'>
        <center>
      <h1 className='pl'>Welcome to the Dashboard {transactionId}</h1>
      <h3 className='p'>My Products</h3>
      <button className='bo' onClick={() => setIsModalOpen(true)}>Add Products</button>
      <h4 className='po'>Previous Orders</h4>
      {donationsList.map((donation, index) => (
        <div key={index}>
          <h5>{donation.d.amount}</h5>
          <h5>{donation.d.donation_date}</h5>
          <h5>{donation.d.status}</h5>
          
        </div>
      ))}
      <button onClick={handleProfile}>My Profile</button>
     
      {/* <h4>Donations Entered Inside Modal</h4>
      <h5>{donationData.amount}</h5>
      <h5>{donationData.donation_date}</h5>
      <h5>{donationData.status}</h5> */}
      <div className='pro'>
      <Modal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add"
      >
        <center>
        <h2 className='pol'>Your Products</h2>
        <label className='l'>
          Amount:
          <input
            type="number"
            name="amount"
            value={donationData.amount}
            onChange={(e) => setDonationData({ ...donationData, amount: e.target.value })}
          />
        </label>
        <label className='l'>
          Delivery Date:
          <input
            type="date"
            name="date"
            value={donationData.donation_date}
            onChange={(e) =>
              setDonationData({ ...donationData, donation_date: e.target.value })
            }
          />
        </label>
        <label className='l'>
          Product List:
          <input
            type="text"
            name="status"
            value={donationData.status}
            onChange={(e) => setDonationData({ ...donationData, status: e.target.value })}
          />
        </label>
        <button onClick={handleAddDonation}>Order</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </center>
      </Modal>
      </div>
      </center>
    </div>
    </div>
  );
}

export default Donations;