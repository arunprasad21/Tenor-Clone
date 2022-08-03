import React, { useState, useEffect } from "react";
import "../app.css";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Searchbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const currentQuery = useSelector((state) => state.query);

  const homepageHandler = (event) => {
    event.preventDefault();
    navigate("/");
    dispatch({ type: "searchQuery", updatedQuery: "" });
    window.scrollTo({ top: 0 });
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const setQueryHandler = () => {
    dispatch({ type: "searchQuery", updatedQuery: search });
    localStorage.setItem("query" , search);
  };

  useEffect(() => {
    setSearch(currentQuery);    
  }, [currentQuery]);

  const searchFunc = () => {
    if (search === "") {
      alert("Please enter to search");
    } else {
      setQueryHandler();
      navigate("/searchpage/" + search);
      window.scrollTo({ top: 0 });
    }
  };

  const enterKeyHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchFunc();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFunc();
  };

  return (
    <div className="searchbar-nav" id="sticky-search">
      <div className="container searchbar ">
        <div>
          <Link to="/" className="textBrand" onClick={homepageHandler}>
            tenor
          </Link>
        </div>
        <div className="d-flex justify-content-end">
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search for GIFs and Stickers"
              name="search"
              value={search}
              onChange={searchHandler}
              onKeyPress={enterKeyHandler}
            />
            <button onClick={handleSubmit} href="#" className="search-icon">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
