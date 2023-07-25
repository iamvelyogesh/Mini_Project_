// export const setEmail = (email) => {
//   return {
//     type: 'SET_EMAIL',
//     payload: email,
//   };
// };
// export const setName = (name) => {
//   return {
//     type: 'SET_NAME',
//     payload: name,
//   };
// };

// export const setPass = (pass) => {
//   return {
//     type: 'SET_PASS',
//     payload: pass,
//   };
// };

// export const setCheckPass = (checkpass) => {
//   return {
//     type: 'SET_CHECKPASS',
//     payload: checkpass,
//   };
// };
// actions.js
// Assuming you have set up your Redux store and middleware correctly (e.g., using Redux Toolkit)

// Import any necessary dependencies
export const SET_CARD_INFO = 'SET_CARD_INFO';

export const setCardInfo = (cardInfo) => ({
  type: SET_CARD_INFO,
  payload: cardInfo,
});
