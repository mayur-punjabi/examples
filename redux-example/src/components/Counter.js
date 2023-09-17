import {
  incrementCounter,
  decrementCounter,
  incrementTwice,
} from "../actions/counterActions";
import { connect } from "react-redux";

const Counter = ({
  counter,
  incrementCounter,
  decrementCounter,
  incrementTwice,
}) => {
  return (
    <>
      <p>current value {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <br />
      <button onClick={incrementTwice}>Increment Twice</button>
    </>
  );
};

const mapStateToProps = (state) => {
  const { counter } = state.counter;
  return { counter };
};

export default connect(mapStateToProps, {
  incrementCounter,
  decrementCounter,
  incrementTwice,
})(Counter);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCounter: () => dispatch(incrementCounter()),
//     decrementCounter: () => dispatch(decrementCounter()),
//     incrementTwice: () => dispatch(incrementTwice()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
