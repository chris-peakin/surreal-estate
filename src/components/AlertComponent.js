import React from "react";
import "../styles/AlertStyles.css";
import PropTypes from "prop-types";

function Alert({ message, success }) {
  if (!message) return null;

  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
}

Alert.defaultProps = {
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

export default Alert;
