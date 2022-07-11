import React from "react";
import "../app.css";

const RenderError = (props) => {
  const isError = props.isError;
  if (isError) {
    return (
      <div
        className="container alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        Unable to get Gifs, Something went wrong!!!
      </div>
    );
  }
};

export default RenderError;
