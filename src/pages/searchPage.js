import React, { useState, useEffect } from "react";
import "../app.css";
import Searchbar from "../components/Searchbar";
import axios from "axios";
import RenderGifs from "../components/RenderGifs";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../components/Loader";
import RenderError from "../components/RenderError";
import { useSelector } from "react-redux";

function Searchpage(props) {
  let APIKey = "AIzaSyBSL2pRmSpvIx24izSEZggH5szj7sxUwXg";
  const [data, setData] = useState([]);
  const [pos, setpos] = useState("");
  const [isError, setIsError] = useState(false);

  let search = useSelector((state) => state.query);
  console.log(search);

  async function fetchdata() {
    setIsError(false);
    try {
      const searchResults = await axios.get(
        `https://g.tenor.com/v2/search?q=${search}&key=${APIKey}&limit=30&media_filter=tinygif&pos=${pos}`
      );
      var fetchResult = searchResults.data.results;
      setData(fetchResult);
    } catch (err) {
      setIsError(true);
    }
  }

  async function getinfinitedata() {
    setIsError(false);
    try {
      const searchResults = await axios.get(
        `https://g.tenor.com/v2/search?q=${search}&key=${APIKey}&limit=30&media_filter=tinygif&pos=${pos}`
      );
      var fetchResult = searchResults.data.results;
      setData([...data, ...fetchResult]);
      setpos(searchResults.data.next);
    } catch (err) {
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [search]);

  return (
    <div>
      {isError ? (
        <RenderError isError={isError} />
      ) : (
        <div>
          <InfiniteScroll
            pageStart={0}
            loadMore={getinfinitedata}
            hasMore={true || false}
            loader={
                <Loader/>
            }
          >
            <Searchbar />
            <RenderGifs images={data} title={search} />
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}

export default Searchpage;
