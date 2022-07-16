import React from "react";
import Button from "./Button";

const AboutItem = (props) => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__card">
          <div className="about__card__image">
            <img src={props.about_img} alt="" />
          </div>
          <div className="about__card__wrapper">
            <div className="about__card__title">
              <h3>{props.about_title}</h3>
            </div>
            <div className="about__card__text">
              <p>
                Explicabo repudiandae vitae accusamus excepturi fuga tenetur
                assumenda est in ipsam natus. Sapiente, iure vel dolorem
                consequuntur quidem ipsa eaque numquam vitae ratione doloremque
                hic quam iste earum reprehenderit aperiam quas accusantium
                perferendis eveniet ipsum repudiandae sequi reiciendis.
              </p>
            </div>
            <Button btn="READ MORE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
