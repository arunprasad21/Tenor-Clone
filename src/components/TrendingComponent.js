import React, { useState, useEffect } from "react";
import "../app.css";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Loader from "./Loader";
import RenderError from "./RenderError";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: false,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
      slideBy: 2,
    },
    400: {
      items: 2,
      slideBy: 2,
    },
    600: {
      items: 2,
      slideBy: 2,
    },
    700: {
      items: 3,
      slideBy: 3,
    },
    1000: {
      items: 5,
      slideBy: 5,
    },
  },
};

function TrendingComponent(props) {
  let APIKey = "AIzaSyBSL2pRmSpvIx24izSEZggH5szj7sxUwXg";
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchFeatured = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const featuredResults = await axios.get(
          `https://tenor.googleapis.com/v2/trending_terms?key=${APIKey}&client_key=tenor_api`
        );
        setTrending(featuredResults.data.results);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchFeatured();
  }, []);

  const setQueryHandler = (data) => {
    navigate("/searchpage");
    dispatch({ type: "searchQuery", updatedQuery: data });
  };

  let carousel = (
    <OwlCarousel className="owl-theme" items={5} {...options}>
      {trending.map((el, index) => {
        return (
          <div className="item" onClick={() => setQueryHandler(el)}>
            <p>{el}</p>
          </div>
        );
      })}
    </OwlCarousel>
  );
  return (
    <div className="container Featured-section">
      <div className=" trending-section">
        <div>
          <h2 className="medium-heading">Trending Tenor Searches</h2>
          {isError ? (
            <RenderError isError={isError} />
          ) : (
            <section className="image-gallery">
              <div className="carousel-wrap">
                {isLoading ? <Loader /> : carousel}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrendingComponent;
