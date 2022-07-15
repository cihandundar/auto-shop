import React from "react";

const PageTitle = (props) => {
  return (
    <div className="page__title">
      <h2>{props.page_title}</h2>
    </div>
  );
};

export default PageTitle;
