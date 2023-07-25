// import React from 'react'
// import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import './Cart.css'
// const Cart = ({cart, setCart}) => {
//     // increace qty
//     const incqty = (product) => 
//     {
//         const exsit = cart.find((x) => 
//         {
//             return x.id === product.id
//         })
//         setCart(cart.map((curElm) => 
//         {
//             return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
//         }))
//     }

//     // Dec Qty
//     const decqty = (product) => 
//     {
//         const exsit = cart.find((x) => 
//         {
//             return x.id === product.id
//         })
//         setCart(cart.map((curElm) => 
//         {
//             return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
//         }))
//     }
//     //Remove cart product
//     const removeproduct = (product) => 
//     {
//         const exsit = cart.find((x) => 
//         {
//             return x.id === product.id
//         })
//         if(exsit.qty > 0)
//         {
//             setCart(cart.filter((x) => 
//             {
//                 return x.id !== product.id
//             }))
//         }
//     }
//     // Total price
//     const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
//   return (
//     <>
//     <div className='cartcontainer'>
//         {cart.length === 0 && 
//         <div className='emptycart'>
//         <h2 className='empty'>Cart is Empty</h2>
//         <Link to='/product' className='emptycartbtn'>Shop Now</Link>
//         </div>
//         }
//         <div className='contant'>
//             {
//                 cart.map((curElm) => 
//                 {
//                     return(
//                         <div className='cart_item' key={curElm.id}>
//                             <div className='img_box'>
//                                 <img src={curElm.Img} alt={curElm.Title}></img>
//                             </div>
//                             <div className='detail'>
//                                 <div className='info'>
//                                 <h4>{curElm.Cat}</h4>
//                                 <h3>{curElm.Title}</h3>
//                                 <p>Price: ${curElm.Price}</p>
//                                 <div className='qty'>
//                                     <button className='incqty' onClick={() => incqty(curElm)}>+</button>
//                                     <input type='text' value={curElm.qty}></input>
//                                     <button className='decqty' onClick={() => decqty(curElm)}>-</button>
//                                 </div>
//                                 <h4 className='subtotal'>sub total: ${curElm.Price * curElm.qty}</h4>
//                                 </div>
//                                 <div className='close'>
//                                 <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//         {
//             cart.length > 0 &&
//             <>
//             <h2 className='totalprice'>total: $ {Totalprice}</h2>
//             <button className='checkout'>Checkout</button>
//             </>
//         }
//     </div>
//     </>
//   )
// }

// export default Cart

// import React from 'react';
// import { connect } from 'react-redux';
// import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import './Cart.css';

// // Actions
// const incrementQty = (productId) => {
//   return {
//     type: 'INCREMENT_QTY',
//     payload: productId
//   };
// };

// const decrementQty = (productId) => {
//   return {
//     type: 'DECREMENT_QTY',
//     payload: productId
//   };
// };

// const removeProduct = (productId) => {
//   return {
//     type: 'REMOVE_PRODUCT',
//     payload: productId
//   };
// };

// const Cart = ({ cart, incrementQty, decrementQty, removeProduct }) => {
//   // Total price
//   const totalPrice = cart.reduce((price, item) => price + item.qty * item.Price, 0);

//   return (
//     <>
//       <div className='cartcontainer'>
//         {cart.length === 0 && (
//           <div className='emptycart'>
//             <h2 className='empty'>Cart is Empty</h2>
//             <Link to='/product' className='emptycartbtn'>
//               Shop Now
//             </Link>
//           </div>
//         )}
//         <div className='contant'>
//           {cart.map((curElm) => (
//             <div className='cart_item' key={curElm.id}>
//               <div className='img_box'>
//                 <img src={curElm.Img} alt={curElm.Title}></img>
//               </div>
//               <div className='detail'>
//                 <div className='info'>
//                   <h4>{curElm.Cat}</h4>
//                   <h3>{curElm.Title}</h3>
//                   <p>Price: ${curElm.Price}</p>
//                   <div className='qty'>
//                     <button className='incqty' onClick={() => incrementQty(curElm.id)}>+</button>
//                     <input type='text' value={curElm.qty}></input>
//                     <button className='decqty' onClick={() => decrementQty(curElm.id)}>-</button>
//                   </div>
//                   <h4 className='subtotal'>sub total: ${curElm.Price * curElm.qty}</h4>
//                 </div>
//                 <div className='close'>
//                   <button onClick={() => removeProduct(curElm.id)}>
//                     <AiOutlineClose />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {cart.length > 0 && (
//           <>
//             <h2 className='totalprice'>total: $ {totalPrice}</h2>
//             <button className='checkout'>Checkout</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementQty: (productId) => dispatch(incrementQty(productId)),
//     decrementQty: (productId) => dispatch(decrementQty(productId)),
//     removeProduct: (productId) => dispatch(removeProduct(productId))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);



import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Cart.css';
import cartReducer from './reducer';

const Cart = ({ cart, setCart }) => {
  // increase qty
  const incqty = (product) => {
    setCart((prevCart) =>
      prevCart.map((curElm) =>
        curElm.id === product.id ? { ...curElm, qty: curElm.qty + 1 } : curElm
      )
    );
  };

  // decrease qty
  const decqty = (product) => {
    setCart((prevCart) =>
      prevCart.map((curElm) =>
        curElm.id === product.id && curElm.qty > 0
          ? { ...curElm, qty: curElm.qty - 1 }
          : curElm
      )
    );
  };

  // Remove cart product
  const removeproduct = (product) => {
    setCart((prevCart) => prevCart.filter((x) => x.id !== product.id));
  };

  // Total price
  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * parseFloat(item.Price.replace(/,/g, '')),
    0
  );

  return (
    <>
      <div className='cartcontainer'>
        {cart.length === 0 && (
          <div className='emptycart'>
            <h2 className='empty'>Cart is Empty</h2>
            <Link to='/product' className='emptycartbtn'>
              Shop Now
            </Link>
          </div>
        )}
        <div className='contant'>
          {cart.map((curElm) => (
            <div className='cart_item' key={curElm.id}>
              <div className='img_box'>
                <img src={curElm.Img} alt={curElm.Title} />
              </div>
              <div className='detail'>
                <div className='info'>
                  <h4>{curElm.Cat}</h4>
                  <h3>{curElm.Title}</h3>
                  <p>Price: ₹{curElm.Price}</p>
                  <div className='qty'>
                    <button className='incqty' onClick={() => incqty(curElm)}>
                      +
                    </button>
                    <input type='text' value={curElm.qty} readOnly />
                    <button className='decqty' onClick={() => decqty(curElm)}>
                      -
                    </button>
                  </div>
                  <h4 className='subtotal'>
                    sub total: $
                    {(
                      parseFloat(curElm.Price.replace(/,/g, '')) *
                      curElm.qty
                    ).toFixed(2)}
                  </h4>
                </div>
                <div className='close'>
                  <button onClick={() => removeproduct(curElm)}>
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className='totalprice'>total: ₹ {Totalprice.toFixed(2)}</h2>
            <Link to ="/pay"><button className='checkout'>Checkout</button></Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
