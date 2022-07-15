import React from "react";
import Navigation from "../components/Navigation";
import Return from "../components/Return";
import PageTitle from "../components/PageTitle";
const Contact = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="Contacts" />
        <div className="about__title">
          <PageTitle page_title="Contacts" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
