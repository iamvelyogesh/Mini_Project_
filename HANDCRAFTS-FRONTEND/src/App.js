// import React, {useState} from 'react'
// import Nav from './Nav'
// import Rout from './Rout';
// import {BrowserRouter} from 'react-router-dom';
// import Footer from './Footer';
// import Productdetail from './Productdetails';
// import Login from './Login';
// const App = () => {
 
//   const [cart, setCart] = useState([])
  
//   const [close, setClose] = useState(false)
//   const [detail, setDetail] = useState([])
  
//   const [product, setProduct] = useState(Productdetail)
//   const searchbtn = (product) => 
//   {
//     const change = Productdetail.filter((x) => 
//     {
//       return x.Cat === product
//     })
//     setProduct(change)
//   }
//   //product detail
//   const view = (product) => 
//   {
//     setDetail([{...product}])
//     setClose(true)
//   }

//   // add to cart
//   const addtocart = (product) => 
//   {
//     const exsit = cart.find((x) => 
//     {
//       return x.id === product.id
//     })
//     if(exsit)
//     {
//       alert("This Product is already added to cart")
//     }
//     else
//     { 
//       setCart([...cart, {...product, qty:1}])
//       alert("product is added to cart")
//     }
//   } 
//   console.log(cart)
//   return (
//     <>
//     <BrowserRouter>
//     {/* <Login/> */}
//     <Nav searchbtn={searchbtn}/>
//     <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
//     <Footer />
//     </BrowserRouter>
//     </>
//   )
// }

// export default App




// import React, { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Nav from './Nav';
// import Rout from './Rout';
// import Footer from './Footer';
// import Productdetail from './Productdetails';
// import Login from './Login';

// const App = () => {
//   const [cart, setCart] = useState([]);
//   const [close, setClose] = useState(false);
//   const [detail, setDetail] = useState([]);
//   const [products, setProducts] = useState(Productdetail);


//   const addProduct = (newProduct) => {
//     // Generate a new unique id for the product
//     const newProductWithId = {
//       ...newProduct,
//       id: products.length + 1,
//     };

//     // Update the products array with the new product
//     setProducts((prevProducts) => [...prevProducts, newProductWithId]);
//   };

//   // Filter products based on category
//   const searchProductsByCategory = (category) => {
//     const filteredProducts = Productdetail.filter((product) => product.Cat === category);
//     setProducts(filteredProducts);
//   };

//   // View product details
//   const viewProduct = (product) => {
//     setDetail([product]);
//     setClose(true);
//   };

//   // Add product to cart
//   const addToCart = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);
//     if (existingProduct) {
//       toast.warning('This product is already added to the cart.', { position: 'top-right' });
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//       toast.success('Product added to cart.', { position: 'top-right' });
//     }
//   };

//   return (
//     <>
//       <BrowserRouter>
//         {/* <Login/> */}
//         <Nav searchbtn={searchProductsByCategory} />
//         <Rout
//           product={products}
//           setProduct={setProducts}
//           detail={detail}
//           view={viewProduct}
//           close={close}
//           setClose={setClose}
//           cart={cart}
//           setCart={setCart}
//           addtocart={addToCart}
//         />
//         <Footer />
//       </BrowserRouter>
//       <ToastContainer />
//     </>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountPage from './AccountPage';
import Nav from './Nav';
import Rout from './Rout';
import Footer from './Footer';
import Productdetail from './Productdetails';
import SellForm from './SellForm'; // Import the SellForm component
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [products, setProducts] = useState(Productdetail);

  const addProduct = (newProduct) => {
    // Generate a new unique id for the product
    const newProductWithId = {
      ...newProduct,
      id: products.length + 1,
    };

    // Update the products array with the new product
    setProducts((prevProducts) => [...prevProducts, newProductWithId]);
    toast.success('Product added successfully.', { position: 'top-right' });
  };

  // Filter products based on category
  const searchProductsByCategory = (category) => {
    const filteredProducts = Productdetail.filter((product) => product.Cat === category);
    setProducts(filteredProducts);
  };

  // View product details
  const viewProduct = (product) => {
    setDetail([product]);
    setClose(true);
  };

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      toast.warning('This product is already added to the cart.', { position: 'top-right' });
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success('Product added to cart.', { position: 'top-right' });
    }
  };

  return (
    <>
    <Provider store = {store}>

      <BrowserRouter>
        <Nav searchbtn={searchProductsByCategory} />
        <Rout
          product={products}
          setProduct={setProducts}
          detail={detail}
          view={viewProduct}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addToCart}
          />
        {/* <AccountPage/> */}
        
        {/* <SellForm addProduct={addProduct} />  */}
      </BrowserRouter>
      <ToastContainer />
          </Provider>
    </>
  );
};

export default App;
