// import { createStore, combineReducers } from 'redux';
// import loginReducer from './reducer';

// const rootReducer = combineReducers({
//   login: loginReducer,
// });

// const store = createStore(rootReducer);

// export default store;
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;
