import React from "react";
import Navigation from "../components/Navigation";
import BlogItem from "../components/BlogItem";
import Return from "../components/Return";
import PageTitle from "../components/PageTitle";
import group from "../assets/images/group.jpeg";
import group1 from "../assets/images/group1.jpeg";
import group3 from "../assets/images/group3.jpeg";
import affili from "../assets/images/affili.jpeg";
import affili1 from "../assets/images/affili1.jpeg";
import ship from "../assets/images/ship.jpeg";
import ship1 from "../assets/images/ship1.jpeg";
import ship2 from "../assets/images/ship2.jpeg";
import secure from "../assets/images/secure.jpeg";
import secure1 from "../assets/images/secure1.jpeg";
import secure2 from "../assets/images/secure2.jpeg";
import inter from "../assets/images/inter.jpeg";
import inter1 from "../assets/images/inter1.jpeg";
import inter2 from "../assets/images/inter2.jpeg";

const Blog = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="News" />
        <div className="about__title">
          <PageTitle page_title="news" />
        </div>
        <div className="main__blog__item">
          <BlogItem
            history="15"
            blog_img1={group}
            blog_img2={group1}
            blog_img3={group3}
          />
          <BlogItem
            history="15"
            blog_img1={affili}
            blog_img2={affili1}
            blog_img3={group1}
          />
          <BlogItem
            history="14"
            blog_img1={ship}
            blog_img2={ship1}
            blog_img3={ship2}
          />
          <BlogItem
            history="13"
            blog_img1={secure}
            blog_img2={secure1}
            blog_img3={secure2}
          />
          <BlogItem
            history="11"
            blog_img1={inter}
            blog_img2={inter1}
            blog_img3={inter2}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
