import './Lo.css';
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountPage from './AccountPage';
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


      const navigate = useNavigate();
    
      const handleLogin = (e) => {
        e.preventDefault();
    
        const BASE_URL = "http://localhost:8080";
        axios.post(BASE_URL + '/users/login', { email, password })
          .then(response => {
            if (response.data === true) {
            console.log('Logged in:', response.data);
            
            setLoggedInUser(response.data);
            window.alert('Successful login');
            navigate('/acc');
            }else
            {
              window.alert('Invalid email/password');
            }
          })
          .catch(error => {
            console.error('Login failed:', error.response.data);
          });
      };


    

      

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
      
    </div>
  </div>
</section>



{/* {loggedInUser && <AccountPage userData={loggedInUser} />} */}
    </div>
  );
}

export default Login;
