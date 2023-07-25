const Productdetail =
[
    {
        id:1,
        Title:"Elephant Figurine Hand Carved Expecting Mother, Soapstone Elephant Good Luck Symbol",
        Cat: 'Vel',
        Price: '11,423',
        Img: './img/tp1.jpg'
    },
    {
        id:2,
        Title:"Table Decor | Room Decor | Table Art | Artifacts | Housewarming Gifts",
        Cat: 'Vinodhan',
        Price: '849+',
        Img: './img/tp2.jpg'
    },
    {
        id:3,
        Title:"Indian Artifacts - Beautifully Handmade Alter",
        Cat: 'Ujjaul',
        Price: '36,423',
        Img: './img/tp3.jpg'
    },
    {
        id:4,
        Title:"Handmade automatic Kung Fu tea set | Tea party tea set | Afternoon tea settp",
        Cat: 'Sudhir',
        Price: '7633',
        Img: './img/tp4.jpg'
    },
    {
        id:5,
        Title:"Artifact 25",
        Cat: 'Vel',
        Price: '6000',
        Img: './img/tp5.jpg'
    },
    {
        id:6,
        Title:" Antique Artifact Handmade by Indian Artisans",
        Cat: 'Vinodhan',
        Price: '5629',
        Img: './img/tp6.png'
    },
    {
        id:7,
        Title:"Handmade Replica of Ancient City of Hattusa Archaeological Artifact",
        Cat: 'Ujjaul',
        Price: '2098',
        Img: './img/tp7.jpg'
    },
    {
        id:8,
        Title:"Handmade Buddhist Healing Bowl | Sound Therapy | Meditation And Yoga",
        Cat: 'Sudhir',
        Price: '10102',
        Img: './img/tp8.jpg'
    },
    {
        id:9,
        Title:"Prince",
        Cat: 'Vel',
        Price: '10000',
        Img: './img/tp9.jpg'
    },
    {
        id:10,
        Title:"Swarn Crafted by Indian Artisian",
        Cat: 'Vinodhan',
        Price: '5036',
        Img: './img/tp10.jpg'
    },
    {
        id:11,
        Title:"Native Artifacts Southwest Metal Wall Sculpture by JasonW Studios",
        Cat: 'Ujjaul',
        Price: '6000',
        Img: './img/tp11.jpg'
    },
    {
        id:12,
        Title:"Artifact Of The Week Archives - The Museum Of Appalachia",
        Cat: 'Sudhir',
        Price: '5000',
        Img: './img/tp12.jpg'
    },
]

export default Productdetail;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; 
// const ProductList = () => {
//   const [productDetails, setProductDetails] = useState([]);

//   useEffect(() => {
//     const BASE_URL = "http://localhost:8080";
//     axios.get(BASE_URL+'/products')
//       .then(response => {
//         setProductDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product details:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {productDetails.map(product => (
//         <div key={product.id}>
//           <h2>{product.Title}</h2>
//           <p>Category: {product.Cat}</p>
//           <p>Price: {product.Price}</p>
//           <img src={product.Img} alt={product.Title} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
