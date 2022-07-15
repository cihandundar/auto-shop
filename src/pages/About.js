import React from "react";
import Navigation from "../components/Navigation";
import AboutCard from "../components/AboutCard";
import Return from "../components/Return";
import PageTitle from "../components/PageTitle";
import aboutpage from "../assets/images/aboutpage.jpeg";
import aboutpage1 from "../assets/images/aboutpage1.jpeg";
import aboutpage2 from "../assets/images/aboutpage2.jpeg";
import aboutpage3 from "../assets/images/aboutpage3.jpeg";
import aboutpage4 from "../assets/images/aboutpage4.jpeg";
import aboutpage5 from "../assets/images/aboutpage5.jpeg";
import aboutpage6 from "../assets/images/aboutpage6.jpeg";
const About = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="About" />
        <div className="about__title">
          <PageTitle page_title="About us" />
        </div>
        <div className="main__about">
          <AboutCard
            about_img={aboutpage}
            aboutcard_title="LOREM IPSUM DOLOR SIT AMET"
          />
          <AboutCard
            about_img={aboutpage1}
            aboutcard_title="ERROR, MAGNI, MODI PORRO VERO"
          />
          <AboutCard
            about_img={aboutpage2}
            aboutcard_title="ALIQUAM DOLOREMQUE"
          />
          <AboutCard
            about_img={aboutpage3}
            aboutcard_title="CONSECTETUR ADIPISICING ELIT"
          />
          <AboutCard
            about_img={aboutpage4}
            aboutcard_title="VOLUPTATEM, MINIMA VOLUPTATIBUS"
          />
          <AboutCard
            about_img={aboutpage5}
            aboutcard_title="VOLUPTATEM, VOLUPTATIBUS"
          />
          <AboutCard
            about_img={aboutpage6}
            aboutcard_title="REPREHENDERIT, CUMQUE"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
