import React from "react";

const Button = ({ text, color, action }) => {
  return (
    <button className={`btn btn-${color} mx-2 my-1`} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
