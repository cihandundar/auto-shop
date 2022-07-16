import React from "react";
import Bestseller1 from "../assets/images/bestseller1.jpeg";
import Bestseller2 from "../assets/images/bestseller2.jpeg";
import Button from "./Button";
const ContentCard = () => {
  return (
    <>
      <div className="content__card">
        <div className="content__card__title">
          <h3>best sellers</h3>
        </div>
        <div className="content__wrapper">
          <div className="content__col">
            <div className="content__col__img">
              <img src={Bestseller1} alt="" />
            </div>
            <div className="content__col__wrapper">
              <div className="content__col__wrapper__text">
                <p>From</p>
                <span>$ 199.00</span>
              </div>
              <span>A-T Steeler Front Shocks wSingle-Rate Spring</span>
              <p>So, if you like listening to the sound of your engin...</p>
              <Button btn="Details" />
            </div>
          </div>
          <div className="content__col">
            <div className="content__col__img">
              <img src={Bestseller2} alt="" />
            </div>
            <div className="content__col__wrapper">
              <div className="content__col__wrapper__text">
                <p>From</p>
                <span>60.00</span>
              </div>
              <span>Acura RSX Type-S HKS Hi-Power Exhaust</span>
              <p>Even if you don't like speed and power, racing and a...</p>
              <Button btn="Details" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
