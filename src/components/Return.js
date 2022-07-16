import React from "react";
import { Link } from "react-router-dom";

const Return = (props) => {
  return (
    <div className="return">
      <ul className="return__item">
        <li className="return__link">
          <Link to="/">Home</Link>
        </li>
        <span>/</span>
        <li className="return__link">{props.page_name}</li>
      </ul>
    </div>
  );
};

export default Return;
