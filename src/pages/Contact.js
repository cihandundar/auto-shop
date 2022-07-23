import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Return from "../components/Return";
const Contact = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="Contacts" />
        <PageTitle page_title="Contacts" />
      </div>
    </div>
  );
};

export default Contact;
