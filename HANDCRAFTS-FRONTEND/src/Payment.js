// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { setCardInfo } from './action';
// import { Navigate, useNavigate } from 'react-router-dom';
// import "./Payment.css"

// const Payment = ({ cardInfo, setCardInfo }) => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardName, setCardName] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
  
//   const navigate = useNavigate(); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setCardInfo({ cardNumber, cardName, expiryDate, cvv });
//   };
  
  
//   const handleLogin = async (e) => {
    
//       window.alert("Payment Successfull!! Enjoy Shopping");
//       navigate("/product");
      
//     }
  


//   return (
//     <div className='asdqwe'>
//       <h13>Payment Page</h13>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Card Number:</label>
//           <input
//             type="text"
//             className='input123'
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             placeholder="Card Number"
//           />
//         </div>
//         <div>
//           <label>Card Name:</label>
//           <input
//             type="text"
//             className='input123'
//             value={cardName}
//             onChange={(e) => setCardName(e.target.value)}
//             placeholder="Card Name"
//           />
//         </div>
//         <div>
//           <label>Expiry Date:</label>
//           <input
//             type="text"
//             className='input123'
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             placeholder="Expiry Date (MM/YY)"
//           />
//         </div>
//         <div>
//           <label>CVV:</label>
//           <input
//           className='input123'
//             type="text"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             placeholder="CVV"
//           />
//         </div>
//         <button className="button123"type="submit">Submit</button>
//       </form>
//       {cardInfo && (
//         <div>
//             <h13>Please confirm your details</h13><br></br><br></br>
//           <h13>Payment Information:</h13>
//           <p>Card Number: {cardInfo.cardNumber}</p>
//           <p>Card Name: {cardInfo.cardName}</p>
//           <p>Expiry Date: {cardInfo.expiryDate}</p>
//           <p>CVV: {cardInfo.cvv}</p>
//           <button type="submit" className="button123" onClick={handleLogin}>Confirm Details</button>
//         </div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   cardInfo: state.cardInfo,
// });

// const mapDispatchToProps = {
//   setCardInfo,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Payment);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCardInfo } from './action';
import { useNavigate } from 'react-router-dom';
import "./Payment.css"

const CardPayment = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ cardNumber, cardName, expiryDate, cvv });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          className='input123'
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Card Number"
          required
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
          required
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
          required
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
          required
        />
      </div>
      <button className="button123" type="submit">Submit</button>
    </form>
  );
};

const CashOnDelivery = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ address });
  };

  return (
    <form onSubmit={handleSubmit} className='zxc'>
      <div>
        <label>Address:</label>
        <input
          type="text"
          className='input123'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          required
        />
      </div>
      <button className="button123" type="submit">Submit</button>
    </form>
  );
};

const Payment = ({ cardInfo, setCardInfo }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setSubmissionStatus(null); // Reset submission status when payment method changes
  };

  const handleSubmit = (data) => {
    setCardInfo(data);
    setSubmissionStatus(paymentMethod);
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    window.alert("Payment Successful!! Enjoy Shopping");
    navigate("/product");
  };

  return (
    <div className='asdqwe'>
      <h1>Payment Page</h1>
      <div className='fgh'>
        <label className='label1'>Payment Method:</label>
        <select value={paymentMethod} className='select1' onChange={handlePaymentMethodChange}>
          <option value="card">Card</option>
          <option value="cash">Cash on Delivery</option>
        </select>
      </div>
      {paymentMethod === 'card' && <CardPayment onSubmit={handleSubmit} />}
      {paymentMethod === 'cash' && <CashOnDelivery onSubmit={handleSubmit} />}
      {submissionStatus && (
        <div>
          <h3>Please confirm your details</h3>
          <br></br><br></br>
          <h3>Payment Information:</h3>
          {submissionStatus === 'card' && (
            <>
              <p>Card Number: {cardInfo.cardNumber}</p>
              <p>Card Name: {cardInfo.cardName}</p>
              <p>Expiry Date: {cardInfo.expiryDate}</p>
              <p>CVV: {cardInfo.cvv}</p>
            </>
          )}
          {submissionStatus === 'cash' && <p>Address: {cardInfo.address}</p>}
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
