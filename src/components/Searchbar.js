import React, { useState, useEffect } from "react";
import "../app.css";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Searchbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const currentQuery = useSelector((state) => state.query);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const setQueryHandler = () => {
    dispatch({ type: "searchQuery", updatedQuery: search });
  };
  
  useEffect(() => {
    setSearch(currentQuery);
  }, [currentQuery])
  

  const enterKeyHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if(search===""){
          alert("please enter search query");
      }else{
      setQueryHandler();
      navigate("/searchpage");
    }
}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryHandler();
    navigate("/searchpage");
  };

  return (
    <div className="searchbar-nav" id="sticky-search">
      <div className="container searchbar ">
        <div>
          <p className="textBrand">tenor</p>
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
