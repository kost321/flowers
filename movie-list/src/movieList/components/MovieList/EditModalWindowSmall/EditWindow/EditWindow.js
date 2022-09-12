import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editPost } from "../../../../redux/MovieListSlice";
import closeIcon from "../media/icons8-close.svg";

export const EditWindow = ({ setchangeEditWindow, changeEditWindow, id }) => {
  const dispatch = useDispatch();
  const [valueTitle, setValueTitle] = useState("");
  const [valueRelease, setValueRelease] = useState("");
  const [valueUrl, setValueUrl] = useState("");
  const [valueOverview, setValueOverview] = useState("");
  const [valueRuntime, seValueRuntime] = useState("");
  const [valueGenres, seValueGenres] = useState("");

  const movieState = useSelector((state) => state.movie.posts);
  let currentMovieState = movieState.find((item) => item.id === id);

  const onSubmit = () => {
    setValueTitle("");
    const paramDispatch = {
      valueTitle,
      valueRelease,
      valueUrl,
      valueOverview,
      valueRuntime,
      id,
      valueGenres,
    };
    dispatch(editPost(paramDispatch));
  };

  function handleClickEdit(event) {
    if (
      event.target.className === "modal-window__close_icon-edit" ||
      event.target.className === "container__modal-window"
    ) {
      setchangeEditWindow(!changeEditWindow);
      event.preventDefault();
    } else if (event.target.className === "btn__on-submit") {
      onSubmit();
      event.preventDefault();
      setchangeEditWindow(!changeEditWindow);
    }
  }

  return (
    <div
      className="container__modal-window"
      onClick={(event) => handleClickEdit(event)}
    >
      <div className="block__modal-window">
        <img
          className="modal-window__close_icon-edit"
          src={closeIcon}
          onClick={(event) => handleClickEdit(event)}
          alt="sortDown"
        />
        <div className="modal-window__title-text">ADD MOVIE</div>
        <div className="block__input">
          <div className="current-block__input">
            MOVIE ID
            <div>{currentMovieState.id}</div>
          </div>
          <div className="current-block__input">
            <div className="input-name"> TITILE</div>
            <input
              className="input"
              type="text"
              value={valueTitle}
              placeholder={currentMovieState.title}
              onChange={(event) => setValueTitle(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RELEASE DATE</div>
            <input
              className="input"
              type="text"
              value={valueRelease}
              placeholder={currentMovieState.release_date}
              onChange={(event) => setValueRelease(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> MOVIE URL</div>
            <input
              className="input"
              type="text"
              value={valueUrl}
              placeholder={currentMovieState.poster_path}
              onChange={(event) => setValueUrl(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> OVERVIEW</div>
            <input
              className="input"
              type="text"
              value={valueOverview}
              placeholder={currentMovieState.overview}
              onChange={(event) => setValueOverview(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RUNTIME</div>
            <input
              className="input"
              type="text"
              value={valueRuntime}
              placeholder={currentMovieState.runtime}
              onChange={(event) => seValueRuntime(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> GENRES</div>
            <input
              className="input"
              type="text"
              value={valueGenres}
              placeholder={currentMovieState.genres}
              onChange={(event) => seValueGenres(event.target.value)}
            />
          </div>
          <button className="btn__on-submit" onSubmit={onSubmit}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
