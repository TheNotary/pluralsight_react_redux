import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

const AboutPage = ({ count }) => {
  return (
    <>
      <div>
        I am about. There are <span>{count}</span>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

AboutPage.propTypes = {
  count: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(AboutPage);
