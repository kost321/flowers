import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../redux/MovieListSlice";

import "./currentMovieInfo.css";

export const CurrentMovieInfo = () => {
  const currentMovie = useSelector((state) => state.movie.currentMovie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(getPosts());
    navigate("/");
  }

  return (
    <>
      <div className="header-logo">
        <nav className="header">
          <div onClick={handleClick} className="header__logo">
            Netflix
          </div>
        </nav>
      </div>
      <div className="line-gap"></div>
      <div className="container__current-movie">
        <div className="container__movie-content">
          <div className="container__movie-info">
            <div className="block__movie-info">
              <div className="movie-info_title">{currentMovie.title}</div>
              <div className="movie-info_rating">
                {currentMovie.vote_average}
              </div>
            </div>
            <div className="block__movie-info">
              <div className="movie-info_date">{currentMovie.release_date}</div>
              <div className="movie-info_time">{currentMovie.runtime} min</div>
            </div>
            <div className="block__movie-info_content">
              <div className="movie-info_content">{currentMovie.overview}</div>
            </div>
            <div className="block__movie-info_genres">
              <div className="movie-info_genres">{currentMovie.genres}</div>
            </div>
          </div>
          <img
            className="current__movie-img"
            src={currentMovie.poster_path}
            alt="sd"
          />
        </div>
      </div>
    </>
  );
};
