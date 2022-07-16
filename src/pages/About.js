import React from "react";
import AboutItem from "../components/AboutItem";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Return from "../components/Return";
import about1 from "../assets/images/about1.jpeg";
import about2 from "../assets/images/about2.jpeg";
import about3 from "../assets/images/about3.jpeg";
const About = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="About" />
        <PageTitle page_title="About" />
        <AboutItem
          about_img={about1}
          about_title="LOREM IPSUM DOLOR SIT AMET"
        />
        <AboutItem
          about_img={about2}
          about_title="ERROR, MAGNI, MODI PORRO VERO"
        />
        <AboutItem about_img={about3} about_title="ALIQUAM DOLOREMQUE" />
      </div>
    </div>
  );
};

export default About;
