import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCardInfo } from './action';
import { Navigate, useNavigate } from 'react-router-dom';
import "./Payment.css"

const Payment = ({ cardInfo, setCardInfo }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardInfo({ cardNumber, cardName, expiryDate, cvv });
  };
  
  
  const handleLogin = async (e) => {
    
      window.alert("Payment Successfull!! Enjoy Shopping");
      navigate("/product");
      
    }
  


  return (
    <div className='asdqwe'>
      <h13>Payment Page</h13>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            className='input123'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card Number"
          />
        </div>
        <div>
          <label>Card Name:</label>
          <input
            type="text"
            className='input123'
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Card Name"
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            className='input123'
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="Expiry Date (MM/YY)"
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
          className='input123'
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
          />
        </div>
        <button className="button123"type="submit">Submit</button>
      </form>
      {cardInfo && (
        <div>
            <h13>Please confirm your details</h13><br></br><br></br>
          <h13>Payment Information:</h13>
          <p>Card Number: {cardInfo.cardNumber}</p>
          <p>Card Name: {cardInfo.cardName}</p>
          <p>Expiry Date: {cardInfo.expiryDate}</p>
          <p>CVV: {cardInfo.cvv}</p>
          <button type="submit" className="button123" onClick={handleLogin}>Confirm Details</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardInfo: state.cardInfo,
});

const mapDispatchToProps = {
  setCardInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
