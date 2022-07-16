import React from "react";
import Button from "./Button";

const Blogİtem = (props) => {
  return (
    <div className="blog">
      <div className="blog__container">
        <div className="blog__title">
          <div className="blog__history">
            <span>{props.history}</span>
            <span>Dec</span>
          </div>
          <h3>{props.blog_title}</h3>
        </div>
        <div className="blog__image">
          <img src={props.blog_img1} alt="" />
          <img src={props.blog_img2} alt="" />
          <img src={props.blog_img3} alt="" />
        </div>
        <div className="blog__text">
          <p>
            Consequatur deleniti natus eligendi vel laborum pariatur officia
            nesciunt ullam dignissimos. Dicta, sapiente aliquam molestias minus
            debitis perferendis autem eaque voluptatem illum totam deleniti.
            Eos, quam dolores fugit nam quos amet eveniet error debitis nostrum
            in ipsa dolorem dicta sequi nemo libero alias fugiat beatae
            consequatur deleniti natus eligendi vel laborum pariatur officia
            nesciunt ullam dignissimos.
          </p>
        </div>
        <div className="blog__btn">
          <Button btn="READ MORE" />
        </div>
      </div>
    </div>
  );
};

export default Blogİtem;
