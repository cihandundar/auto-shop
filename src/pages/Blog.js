import React from "react";
import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import Return from "../components/Return";
const Blog = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <Return page_name="News" />
        <PageTitle page_title="News" />
      </div>
    </div>
  );
};

export default Blog;
