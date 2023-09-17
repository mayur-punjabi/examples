import types from "../types/types";
const { INCREMENT_COUNTER, DECREMENT_COUNTER } = types;

const incrementCounter = () => (dispatch) => {
  dispatch({ type: INCREMENT_COUNTER });
};

const incrementTwice = () => (dispatch) => {
  dispatch(incrementCounter());
  dispatch(incrementCounter());
};

const decrementCounter = () => (dispatch) => {
  dispatch({ type: DECREMENT_COUNTER, payload: 1 });
};

export { incrementCounter, decrementCounter, incrementTwice };
