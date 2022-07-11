import React from "react";
import Loader from "./Loader";
import "../app.css";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 3,
  500: 2,
};

function RenderGifs(props) {
  let loading1 = props.isLoading;
  return (
    <div className="container Featured-section">
      <div>
        <h2 className="medium-heading">
          {props.title ? props.title : "Featured"} GIFs
        </h2>
        {loading1 ? (
          <Loader />
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.images.map((gifs) => {
              return (
                <div className="mItem">
                  <img src={gifs.media_formats.tinygif.url} alt={gifs.id} />
                </div>
              );
            })}
          </Masonry>
        )}
      </div>
    </div>
  );
}

export default RenderGifs;
