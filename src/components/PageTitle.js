import React from "react";

const PageTitle = (props) => {
  return (
    <div className="page__title">
      <h3>{props.page_title}</h3>
    </div>
  );
};

export default PageTitle;
