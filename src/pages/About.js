import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Return from "../components/Return";
const About = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="About" />
        <PageTitle page_title="About" />
      </div>
    </div>
  );
};

export default About;
