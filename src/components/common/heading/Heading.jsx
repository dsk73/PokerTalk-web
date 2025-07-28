import React from "react";
import "./heading.css";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="heading">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Heading;
