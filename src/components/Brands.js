import React from "react";

const Brands = (props) => {
  return (
    <>
      <div className="brands">
        <div className="brands__container">
          <div className="brands__img">
            <img src={props.brand_img} alt="" />
            <p>{props.brand_text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
