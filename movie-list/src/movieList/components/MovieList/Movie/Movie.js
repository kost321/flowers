import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentMovie } from "../../../redux/MovieListSlice";
import { EditModalWindowSmall } from "../EditModalWindowSmall/EditModalWindowSmall";
import menuIcon from "../media/9023521_dots_three_circle_vertical_fill_icon.svg";

import "./movie.css";

export const Movie = ({ id, title, img, genres, date, rating }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalWindow, setModalWindow] = useState(false);

  function handleClick(key) {
    dispatch(currentMovie(key));
    navigate("/movieInfo");
  }

  function changeStateModalWindow() {
    setModalWindow(!modalWindow);
  }

  return (
    <>
    <div className="block__edit-menu">
    <div
        className={modalWindow ? "icon__menu-open" : "icon__menu"}
        onClick={(event) => changeStateModalWindow(event, id)}
      >
        <img src={menuIcon} alt="sortDown" />
      </div>
      {modalWindow ? <EditModalWindowSmall id={id} /> : null}
    </div>
      <div>
        <div>
          <img
            onClick={(event) => handleClick(id,event)}
            key={id}
            className="movie__img"
            src={img}
            alt="sd"
          />
        </div>
      </div>
      <div className="container__info">
        <div className="block__info">
          <div className="title__movie">{title}</div>
          <div className="genres__movie">{genres}</div>
        </div>
        <div className="block__info-left">
          <div className="date__movie">{date}</div>
          <div className="rating__movie">{rating}</div>
        </div>
      </div>
    </>
  );
};
