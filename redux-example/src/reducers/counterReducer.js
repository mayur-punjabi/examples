import types from "../types/types";
const { INCREMENT_COUNTER, DECREMENT_COUNTER } = types;

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let { counter } = state;
  switch (type) {
    case INCREMENT_COUNTER:
      counter = counter + 1;
      return {
        ...state,
        counter,
      };
    case DECREMENT_COUNTER:
      counter = counter - payload;
      return {
        ...state,
        counter,
      };
    default:
      return state;
  }
};
