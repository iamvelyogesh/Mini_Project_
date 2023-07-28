
import { SET_CARD_INFO } from './action';

const initialState = {
  cardInfo: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_INFO:
      return {
        ...state,
        cardInfo: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

