import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieFilter, movieSort } from "../../redux/MovieListSlice";
import sortDown from "./media/sort-down_icon-icons.com_73402.svg";
import sortUp from "./media/sort-up_icon-icons.com_73400.svg";

import "./filters.css";

export const Filters = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.movie.currentFilter);
  const [btnAsc, setBtnAsc] = useState(false);

  const changeBtnAsc = () => {
    setBtnAsc(!btnAsc);
    dispatch(movieSort("asc"));
  };

  const changeBtnDesc = () => {
    setBtnAsc(!btnAsc);
    dispatch(movieSort("desc"));
  };

  let sortBtn;
  if (btnAsc) {
    sortBtn = (
      <>
        <button className="btn__sort" onClick={changeBtnAsc}>
          ASC
        </button>
        <img className="icon-sort" src={sortUp} alt="sortDown" />
      </>
    );
  } else {
    sortBtn = (
      <>
        <button className="btn__sort" onClick={changeBtnDesc}>
          DESC
        </button>
        <img className="icon-sort" src={sortDown} alt="sortUp" />
      </>
    );
  }

  return (
    <div className="container__filter">
      <div className="block__filter">
        <button
          onClick={() => dispatch(movieFilter(""))}
          className={
            currentFilter === "" ? "btn__filter-complete" : "btn__filter"
          }
        >
          ALL
        </button>
        <button
          onClick={() => dispatch(movieFilter("Fantasy"))}
          className={
            currentFilter === "Fantasy" ? "btn__filter-complete" : "btn__filter"
          }
        >
          FANTASY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Adventure"))}
          className={
            currentFilter === "Adventure"
              ? "btn__filter-complete"
              : "btn__filter"
          }
        >
          ADVENTURE
        </button>
        <button
          onClick={() => dispatch(movieFilter("Family"))}
          className={
            currentFilter === "Family" ? "btn__filter-complete" : "btn__filter"
          }
        >
          FAMILY
        </button>
        <button
          onClick={() => dispatch(movieFilter("COMEDY"))}
          className={
            currentFilter === "COMEDY" ? "btn__filter-complete" : "btn__filter"
          }
        >
          COMEDY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Thriller"))}
          className={
            currentFilter === "Thriller"
              ? "btn__filter-complete"
              : "btn__filter"
          }
        >
          THRILLER
        </button>
        <button
          onClick={() => dispatch(movieFilter("Drama"))}
          className={
            currentFilter === "Drama" ? "btn__filter-complete" : "btn__filter"
          }
        >
          DRAMA
        </button>
        <button
          onClick={() => dispatch(movieFilter("Documentary"))}
          className={
            currentFilter === "Documentary"
              ? "btn__filter-complete"
              : "btn__filter"
          }
        >
          DOCUMENTARY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Horror"))}
          className={
            currentFilter === "Horror" ? "btn__filter-complete" : "btn__filter"
          }
        >
          HORROR
        </button>
      </div>
      <div className="block__sort">
        <div className="sort__text"> SORT BY RATING</div>
        {sortBtn}
      </div>
    </div>
  );
};
