import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Cart from './Cart'
import Contact from './Contact'
import Login from './Login'
import SellForm from './SellForm'
import AccountPage from './AccountPage'
import Signup from './Register'
import Payment from './Payment'
import Footer from './Footer'
import AboutUs from './About'
const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
      {/* <Login/> */}
      {/* <AccountPage/> */}
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sell' element={<SellForm/>}/>
        <Route path='/acc' element={<AccountPage/>} />
        <Route path='/Home' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reg' element={<Signup />} />
        <Route path='/pay' element={<Payment />} />
        <Route path='/abc' element={<AboutUs />} />
    </Routes>
    <Footer />
    </>
  )
}

export default Rout