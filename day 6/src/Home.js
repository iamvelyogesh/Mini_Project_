import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import HomeProduct from './Homeproduct';
import './Home.css'
const Home = ({detail, view, close, setClose, addtocart}) => {
  return (
    <>
        {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>The artifact which is the most satisfactory </p>
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The BestMade ArtiFacts Colletion of 2023</h2>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/sam.png' alt='sliderimg'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/tp1.jpg' alt='Ivory'></img>
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/tp2.jpg' alt='Plastic'></img>
          </div>
          <div className='detail'>
            <p>18 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/tp3.jpg' alt='Decor'></img>
          </div>
          <div className='detail'>
            <p>52 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/tp4.jpg' alt='Setup '></img>
          </div>
          <div className='detail'>
            <p>63 products</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Oder above $1000</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Gaurenty</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every Oder</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          HomeProduct.map((curElm) => 
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                    <li onClick={() => view (curElm)}><BsEye /></li>
                    <li><AiOutlineHeart /></li>                                     
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h4>LATEST ARTIFACT ADDED</h4>
        <h3>Ancient Kadesh Treaty Artifact, Ancient City of Hattusa Archaeological Artifact Replica, Ancient Kadesh Seal and Treaty Replica Set</h3>
        <p>14,220</p>
        <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
      </div>
      <div className='img_box'>
        <img src='./img/slider-img.png' alt='sliderimg'></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home