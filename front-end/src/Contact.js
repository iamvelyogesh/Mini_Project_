// import React, { useState } from 'react'
// import './Contact.css'
// import { useAuth0 } from "@auth0/auth0-react";
// const Contact = () => {
//     const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
//     const [users, setUser] = useState(
//         {
//             Name: '', Email: '', Subject: '', Message: ''
//         }
//     )
//     let name, value
//     const data = (e) => 
//     {
//         name = e.target.name;
//         value = e.target.value;
//         setUser({...users, [name]: value})
//     }
//     const senddata = async (e) => 
//     {
//         const{ Name, Email, Subject, Message} = users
//         e.preventDefault();
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'aplication/json'
//             },
//             body: JSON.stringify({
//                 Name, Email, Subject, Message
//             })
//         }
//         const res = await fetch('https://vy-handcrafts-default-rtdb.firebaseio.com/Message.json', options)
//         console.log(res)
//         if(res)
//         {
//             alert("Your Message sent")
//         }
//         else
//         {
//             alert("An error occured")
//         }
//     }
//   return (
//     <>
//     <div className='contact_container'>
//         <div className='contant'>
//             <h2># contact us</h2>
//             <div className='form'>
//                 <form method='POST'>
//                     <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
//                     <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail'  autoComplete='off' onChange={data}></input>
//                     <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject'  autoComplete='off' onChange={data}></input>
//                     <textarea name='Message' value={users.Message} placeholder='Your Message'  autoComplete='off' onChange={data}></textarea>
//                     {
//                         isAuthenticated ? 
//                         <button type='submit' onClick={senddata}>send</button>
//                         : <button type='submit' onClick={() => loginWithRedirect()}>Login to Send</button>
//                     }
//                 </form>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Contact



import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      window.alert("Thanks for your valuable feedback!!")
      navigate('/Home')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  
  
  
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
  
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleSubjectChange = (event)=>{
//     setSubject(event.target.value);
//   }
//   const handleMessageChange = (event)=>{
//     setMessage(event.target.value);
//   }
  
//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     // if (!email || !password) {
//     //   alert("please enter Email and password.");
//     //   return;
//     // }
//     // Add your login logic here
//     console.log('Login form submitted');
//     console.log('Email:', email);
//     console.log('Name:', Name);
//     console.log('Subject',Subject);
//     console.log('Message',Message);
//   //  Navigate('/Home')
//   };

  return (
    <div className="contact_container">
         <div className='contant'>
      <div className="form">
        <h2>FEEDBACK</h2>
        <form  onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
            />
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
            />
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
            />
            <input
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
            />
          <button type='submit' onChange={handleSubmit}>Submit</button>
          <div className="button">
         
          </div>
        </form>
      </div>
    </div>
    </div>

  );
};

export default FeedForm;