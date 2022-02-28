import React from "react";

const styles = {
  fontSize: "100px",
  marginTop: "300px",
};

const Snipper = () => {
  return (
    <div className="d-flex justify-content-center text-light" style={styles}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Snipper;
