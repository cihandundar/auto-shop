import React from "react";

const Return = (props) => {
  return (
    <div className="return">
      <div className="return__container">
        <ul className="return__item">
          <li className="return__link">
            <Link>Home</Link>
          </li>
        </ul>
        <span>/</span>
        <p>{props.page_name}</p>
      </div>
    </div>
  );
};

export default Return;
