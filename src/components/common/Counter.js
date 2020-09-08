import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

const Counter = ({ dispatch, count }) => {
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ minWidth: 30 }} data-testid="count-value">
          {count}
        </span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  count: propTypes.number.isRequired,
  dispatch: propTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { count: state.count };
}

// function mapDispatchToProps(dispatch) {
//   return;
// }

export default connect(mapStateToProps)(Counter);
