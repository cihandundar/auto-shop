import React from "react";

const AboutCard = (props) => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__card__wrapper">
          <div className="about__card__image">
            <img src={props.about_img} alt="" />
          </div>
          <div className="about__card__text__wrapper">
            <div className="about__card__title">
              <h3>{props.aboutcard_title}</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
