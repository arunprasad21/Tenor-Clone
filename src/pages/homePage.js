import React, { useState, useEffect } from "react";
import "../app.css";
import axios from "axios";
import TrendingComponent from "../components/TrendingComponent";
import Searchbar from "../components/Searchbar";
import RenderGifs from "../components/RenderGifs";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroller";
import RenderError from "../components/RenderError";

function Homepage() {
  let APIKey = "AIzaSyBSL2pRmSpvIx24izSEZggH5szj7sxUwXg";
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [pos, setpos] = useState("");

  const fetchFeatured = async () => {
    setIsError(false);
    try {
      const featuredResults = await axios.get(
        `https://tenor.googleapis.com/v2/featured?key=${APIKey}&client_key=my_test_app&limit=10&media_filter=tinygif&pos=${pos}`
      );
      var a = featuredResults.data.results;
      setData([...data, ...a]);
      setpos(featuredResults.data.next);
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);



  return (
    <div>
      {isError ? (
        <RenderError isError={isError}/>
      ) : (
        <div>
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchFeatured}
            hasMore={true || false}
            loader={
              <Loader/>
            }>
            <Searchbar />
            <TrendingComponent />
            <RenderGifs images={data} />
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}
export default Homepage;
