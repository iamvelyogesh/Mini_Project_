import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer'; 
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer);

root.render(
  <Auth0Provider
    domain="dev-nl8ng1vg32zg5lth.us.auth0.com"
    clientId="KKMU6AHE5Z9r9HQep3m8SzDXrY8iPhzh"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <App />
      </Provider>
  </Auth0Provider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
//  import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
// <App/>
//   </React.StrictMode>
// );

// reportWebVitals();