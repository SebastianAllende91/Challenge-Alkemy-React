import React from "react";

const Button = ({ text, color, action, disabled }) => {
  return (
    <button
      className={`btn btn-${color} mx-2 my-1`}
      onClick={action}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
