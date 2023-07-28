import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillPersonFill, BsFillEnvelopeFill, BsLockFill } from 'react-icons/bs';
import './register.css';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmit(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: name,
        email: email,
        password: password
      });

      console.log(response.status);
      if (response.status === 200) {
        setUsername("");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate("/Login");
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  return (
    <div className='container1234'>
      <div className="form1234">
        <h4><center>SIGNUP</center></h4>
        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="inputContainer1234">
            <span className="icon1234"><BsFillPersonFill /></span>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer1234">
            <span className="icon1234"><BsFillEnvelopeFill /></span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer1234">
            <span className="icon1234"><BsLockFill /></span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer1234">
            <span className="icon1234"><BsLockFill /></span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <center>
            <button className="button1234" type="submit">
              Sign Up
            </button>
          </center>
          <div className='tiy1234'>
            <div style={{ marginLeft: "50px" }}>
              Already have an account? <Link to="/">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
