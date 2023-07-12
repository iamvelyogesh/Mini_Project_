import React from 'react';
import './nav.css';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './img/asd.png';
import img2 from './img/img2.jpg';
import img3 from './/img/img1.jpg';
import img4 from './img/img3.jpg';

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div className='free'>
        <div className='icon'>
          <FaTruckMoving />
        </div>
        <p>Free Shipping when shopping up to $1000</p>
      </div>
      <div className='main_header'>
        <div className='container'>
          <div className='logo'>
            <img src={img1} alt='logo' className='log' />
          </div>
          <div className='search_box'>
            <input type='text' value='' placeholder='Enter the product name' autoComplete='off'></input>
            <button>Search</button>
          </div>
          <div className='icon'>
            {isAuthenticated && (
              <div className='account'>
                <div className='user_icon'>
                  <AiOutlineUser />
                </div>
                <p>Hello, {user.name}</p>
              </div>
            )}
            <div className='second_icon'>
              <Link to='/' className='link'>
                <AiOutlineHeart />
              </Link>
              <Link to='/cart' className='link'>
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <Link to='/Home' className='link'>Home</Link>
              </li>
              <li>
                <Link to='/product' className='a3'>Product</Link>
              </li>
              <li>
                <Link to='/about' className='a2'>About</Link>
              </li>
              <li>
                <Link to='/contact' className='a1'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='auth'>
            {isAuthenticated ? (
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                <CiLogout />
              </button>
            ) : (
              <button onClick={loginWithRedirect}>
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='slideshow-container'>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={1}>
          <div>
            <img src={img2}  alt='Slide 1' />
          </div>
          <div>
            <img src={img3} alt='Slide 2' />
          </div>
          <div>
            <img src={img4} alt='Slide 3' />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Nav;
