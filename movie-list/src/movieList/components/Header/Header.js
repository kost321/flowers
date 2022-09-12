import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { movieSearch } from "../../redux/MovieListSlice";
import { AddPost } from "./AddPost/AddPost";
import { movieFilter } from "../../redux/MovieListSlice";

import "./header.css";

export function Header() {
  const [value, setValue] = useState("");
  const [changeAddWindow, setChangeAddWindow] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
    dispatch(movieSearch(value));
  };

function handleClickEdit (event) {
  if( event.target.className === "btn__add-movie") {
    setChangeAddWindow(!changeAddWindow);
    event.preventDefault();
  }
}

  return (
    <>
      <nav className="header">
        <div onClick={() => dispatch(movieFilter(""))} className="header__logo">
          Netflix
        </div>
        <button
          className="btn__add-movie"
          onClick={(event) => handleClickEdit(event)}
        >
          + ADD MOVIE
        </button>
        {changeAddWindow ? (
            <AddPost 
              changeAddWindow={changeAddWindow}
              setChangeAddWindow={setChangeAddWindow}
            />
          ) : null}
      </nav>
      <div className="container__search">
        <div className="title-text">
          Discover thousands of movies and series from all over the world.
        </div>
        <div className="block__search">
          <input
            className="search__input"
            type="text"
            placeholder="What do you want to watch?"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button className="btn__search" onClick={onSubmit}>
            SEARCH
          </button>
        </div>
      </div>
    </>
  );
}
