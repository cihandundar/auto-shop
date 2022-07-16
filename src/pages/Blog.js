import React from "react";
import Blogİtem from "../components/Blogİtem";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Return from "../components/Return";
import group1 from "../assets/images/group1.jpeg";
import group2 from "../assets/images/group2.jpeg";
import group3 from "../assets/images/group3.jpeg";
import afi1 from "../assets/images/afi1.jpeg";
import afi2 from "../assets/images/afi2.jpeg";
import ship1 from "../assets/images/ship1.jpeg";
import ship2 from "../assets/images/ship2.jpeg";
import ship3 from "../assets/images/ship3.jpeg";
import secure1 from "../assets/images/secure1.jpeg";
import secure2 from "../assets/images/secure2.jpeg";
import secure3 from "../assets/images/secure3.jpeg";
import inter1 from "../assets/images/inter1.jpeg";
import inter2 from "../assets/images/inter2.jpeg";
import inter3 from "../assets/images/inter3.jpeg";

const Blog = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="News" />
        <PageTitle page_title="News" />
        <Blogİtem
          history="15"
          blog_title="Group Sales"
          blog_img1={group1}
          blog_img2={group2}
          blog_img3={group3}
        />
        <Blogİtem
          history="15"
          blog_title="Affiliates"
          blog_img1={afi1}
          blog_img2={afi2}
          blog_img3={group1}
        />
        <Blogİtem
          history="13"
          blog_title="Shipping & Returns"
          blog_img1={ship1}
          blog_img2={ship2}
          blog_img3={ship3}
        />
        <Blogİtem
          history="12"
          blog_title="Shipping & Returns"
          blog_img1={secure1}
          blog_img2={secure2}
          blog_img3={secure3}
        />
        <Blogİtem
          history="10"
          blog_title="Shipping & Returns"
          blog_img1={inter1}
          blog_img2={inter2}
          blog_img3={inter3}
        />
      </div>
    </div>
  );
};

export default Blog;
