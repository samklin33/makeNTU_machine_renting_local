import React from "react";

const Card = ({ task, empty }) => {
  return <div className={`card ` + (empty ? "card--empty" : "")}>{task}</div>;
};

export default Card;
