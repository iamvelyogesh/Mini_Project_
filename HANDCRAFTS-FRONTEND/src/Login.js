import './Lo.css';
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {

  useEffect(() => {
    
    const handleSignupClick = () => {
      userForms.classList.remove('bounceRight');
      userForms.classList.add('bounceLeft');
        };
    
        const handleLoginClick = () => {
          userForms.classList.remove('bounceLeft');
          userForms.classList.add('bounceRight');
        };
        
        const signupButton = document.getElementById('signup-button');
        const loginButton = document.getElementById('login-button');
        const userForms = document.getElementById('user_options-forms');
        
        signupButton.addEventListener('click', handleSignupClick);
        loginButton.addEventListener('click', handleLoginClick);
        
        return () => {
          signupButton.removeEventListener('click', handleSignupClick);
          loginButton.removeEventListener('click', handleLoginClick);
        };
      }, []);
      
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [name, setName] = useState('');
      const [loggedInUser, setLoggedInUser] = useState(null);
      const [isLoggedIn, setIsLoggedIn] = useState(false);


      const navigate = useNavigate();
    


      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:8080/api/v1/auth/authenticate",
            {
              email: email,
              password: password,
            }
          );
    
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          console.log(localStorage.getItem('token'));
          window.alert("Successfully Logged In");
          navigate("/home");
          setEmail('');
          setPassword('');
        } catch (error) {
          console.log(error);
          window.alert("Invalid Credentials");
        }
      };
    
     
      const [confirmPassword, setConfirmPassword] = useState('');
      const [error, setError] = useState('');
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmit(true);
    
        // if (password !== confirmPassword) {
        //   setError('Passwords do not match');
        //   setIsSubmit(false);
        //   return;
        // }
    
        // Validate the email format using a regular expression
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!email.match(emailRegex)) {
        //   setError('Invalid email address');
        //   setIsSubmit(false);
        //   return;
        // }
    
        try {
          const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
            name: name,
            email: email,
            password: password
          });
    
          console.log(response.status);
          if (response.status === 200) {
            setName("");
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate("/");
          }
        } catch (error) {
          alert(error);
          setIsSubmit(false);
        }
      };
    
      // const handleSignUp = (e) => {
      //   e.preventDefault();
      //   const BASE_URL = "http://localhost:8080";
      //   axios.post(BASE_URL + '/users/register', { name, email, password })
      //     .then(response => {
      //       console.log('Registered:', response.data);
      //     })
      //     .catch(error => {
      //       console.error('Registration failed:', error.response.data);
      //     });
      // };


      

      

  return (
    <div >
        
<section class="user12">
  <div class="user_options-container">
    <div class="user_options-text">
      <div class="user_options-unregistered">
        <h2 class="user_unregistered-title">Don't have an account?</h2>
        <p class="user_unregistered-text">Feel free to join with us</p>
        <button class="user_unregistered-signup" id="signup-button">Sign up</button>
      </div>

      <div class="user_options-registered">
        <h2 class="user_registered-title">Have an account?</h2>
        <p class="user_registered-text">Welcome Back My Friend</p>
        <button class="user_registered-login" id="login-button">Login</button>
      </div>
    </div>
    
    <div class="user_options-forms" id="user_options-forms">
      <div class="user_forms-login">
        <h2 class="forms_title">Login</h2>
        <form class="forms_form" onSubmit={handleLogin}>
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" name="email" required autofocus onChange={e => setEmail(e.target.value)}/>
            </div>
            <div class="forms_field">
            
              <input type="password" placeholder="Password" class="forms_field-input" name ="password" required onChange={e => setPassword(e.target.value)}/>
              
            </div>
          </fieldset>
          <div class="forms_buttons">
            <button type="button" class="forms_buttons-forgot">Forgot password?</button>
            <input type="submit" value="Log In" class="forms_buttons-action" />
          </div>
        </form>
      </div>
      <div class="user_forms-signup">
        <h2 class="forms_title">Sign Up</h2>
        <form class="forms_form" onSubmit={handleSubmit}>
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="text" placeholder="Full Name" class="forms_field-input" name="name" value={name} required autofocus onChange={e => setName(e.target.value)}/>
            </div>
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" name="email"  value={email} required onChange={e => setEmail(e.target.value)}/>
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input"  name = "password" value={password} required onChange={e => setPassword(e.target.value)}/>
            </div>
          </fieldset>
          <div class="forms_buttons">
            <input type="submit" value="Sign up" class="forms_buttons-action" />
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



{/* {loggedInUser && <AccountPage userData={loggedInUser} />} */}
    </div>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { setEmail } from './action';
// import { setPass } from './action';
// import { setName } from './action';
// import axios from 'axios';

// import './Lo.css';

// function Login({
//   email,
//   pass,
//   name,
//   setEmail,
//   setPass,
// }) {
//   const check = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/v1/auth/authenticate",
//         {
//           email: email,
//           password: pass,
//         }
//       );

//       console.log(response.data);
//       localStorage.setItem('token', response.data.token);
//       console.log(localStorage.getItem('token'));
//       window.alert("Successfully Logged In");
//       navigate("/home");
//       setEmail('');
//       setPass('');
//     } catch (error) {
//       console.log(error);
//       window.alert("Invalid Credentials");
//     }
//   };

//   const navigate = useNavigate();
//   const [checkpass, setCheckPass] = useState(false);

//   return (
//     <div className='container123'>
//       <div className='login123'>
//         <form onSubmit={check}>
//           <center><h4>LOGIN</h4></center>
//           <div className='formGroup123'>
//             <input
//               className='input123'
//               type='email'
//               name='email'
//               value={email}
//               placeholder='Email'
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className='formGroup123'>
//             <input
//               className='input123'
//               type='password'
//               name='pass'
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               placeholder='Password'
//               required
//             />
//           </div>
//           <center>
//             <button className='button123' type='submit'>
//               Login
//             </button>
//           </center>
//           {checkpass && alert('Successful login ' + name)}
//           {checkpass && navigate('/home')}
//           <Link to='/reg' className='registerLink'>
//             Don't have an account? Register
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     email: state.login.email,
//     pass: state.login.pass,
//     name: state.login.name,
//   };
// };

// const mapDispatchToProps = {
//   setEmail,
//   setPass,
//   setName,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
