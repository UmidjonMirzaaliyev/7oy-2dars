import React from "react";

const Card = ({ image, title, start_production, carClass }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {start_production && <p>Start Production: {start_production}</p>}
      <p>Class: {carClass}</p>
    </div>
  );
};

export default Card;
