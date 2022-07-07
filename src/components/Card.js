import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card__container">
          <div className="card__left__col">
            <div className="card__title">
              <h2>{props.title_1}</h2>
              <h3>{props.title_2}</h3>
            </div>
            <div className="card__text">
              <p>Lorem ipsum dolor sit amet conse ctetur adipisicing eli.</p>
            </div>
            <div className="card__btn">
              <Button btn="SHOP NOW" />
            </div>
          </div>
          <div className="card__image">
            <img src={props.card_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
