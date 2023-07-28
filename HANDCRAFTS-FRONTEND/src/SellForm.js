import React, { useState } from 'react';
import './yo.css';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const SellForm = () => {
 
  
      const [title, setTitle] = useState('');
      const [cat, setCat] = useState('');
      const [price, setPrice] = useState('');
      const [img, setImg] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const BASE_URL = "http://localhost:8082";
    axios.post(BASE_URL + '/products', { title, cat,price,img })
      .then(response => {
        if (response.data === true) {
        
        window.alert('Your Product has been Queue for review and will be added soon');
        navigate('/Home');
        }else
        {
          window.alert('Your Product has been Queue for review and will be added soon');
          navigate('/Home');
        }
      })
      .catch(error => {
        console.error('Login failed:', error.response.data);
      });
  };

  const navigate = useNavigate('');



  return (
    <div className='contact_container'>
      <div className='contant'>
        <h2>Sell</h2>
        <div className='form'>
          <form onSubmit={handleLogin}>
            <label>
              <input
                type="text"
                placeholder='Product Name'
                name="title"
                required
                onChange={e => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                placeholder='Category'
                name="cat"
                onChange={e => setCat(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                placeholder='Price'
                name="price"
                onChange={e => setPrice(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                placeholder='Image Path'
                name="Img"
                onChange={e => setImg(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellForm;
