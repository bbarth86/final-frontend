import React from "react";

const Alert = props => {
  return (
    <div className="alert alert-danger ">
      {props.error.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};
export default Alert;