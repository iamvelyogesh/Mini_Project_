// import React, { useState } from 'react';
// import './yo.css';
// import Productdetails from './Productdetails';
// const SellForm = () => {
//   const [product, setProduct] = useState({
//     Title: '',
//     Cat: '',
//     Price: '',
//     Img: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Productdetails.addProduct(product); // Use the default export directly
//     setProduct({
//       Title: '',
//       Cat: '',
//       Price: '',
//       Img: '',
//     });
//   };

//   return (
//     <div className='contact_container'>
//       <div className='contant'>
//         <h2>Sell</h2>
//         <div className='form'>
//           <form onSubmit={handleSubmit}>
//             <label>
//               <input
//                 type="text"
//                 placeholder='Product Name'
//                 name="Title"
//                 value={product.Title}
//                 required
//                 onChange={handleChange}
//               />
//             </label>
//             <br />
//             <label>
//               <input
//                 type="text"
//                 placeholder='Category'
//                 name="Cat"
//                 value={product.Cat}
//                 onChange={handleChange}
//               />
//             </label>
//             <br />
//             <label>
//               <input
//                 type="text"
//                 placeholder='Price'
//                 name="Price"
//                 value={product.Price}
//                 onChange={handleChange}
//               />
//             </label>
//             <br />
//             <label>
//               <input
//                 type="text"
//                 placeholder='Image Path'
//                 name="Img"
//                 value={product.Img}
//                 onChange={handleChange}
//               />
//             </label>
//             <br />
//             <button type="submit">Add Product</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellForm;


import React, { useState } from 'react';
import './yo.css';
import Productdetail from './Productdetails'; // Corrected import without curly braces

const SellForm = () => {
  const [product, setProduct] = useState({
    Title: '',
    Cat: '',
    Price: '',
    Img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   Productdetail.addProduct(product); // Use the default export directly
  //   setProduct({
      
  //     Title: '',
  //     Cat: '',
  //     Price: '',
  //     Img: '',
  //   });
  // };

  const addProduct = (product) => {
    product.id = Productdetail.length + 1; 
    Productdetail.push(product);

    
};

  return (
    <div className='contact_container'>
      <div className='contant'>
        <h2>Sell</h2>
        <div className='form'>
          <form onSubmit={addProduct}>
            <label>
              <input
                type="text"
                placeholder='Product Name'
                name="Title"
                value={product.Title}
                required
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                placeholder='Category'
                name="Cat"
                value={product.Cat}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                placeholder='Price'
                name="Price"
                value={product.Price}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                placeholder='Image Path'
                name="Img"
                value={product.Img}
                onChange={handleChange}
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
