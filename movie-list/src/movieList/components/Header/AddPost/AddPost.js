import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/MovieListSlice";
import closeIcon from "./media/icons8-close.svg";

import "./addpost.css";

export const AddPost = ({ changeAddWindow, setChangeAddWindow }) => {
  const [valueTitle, setValueTitle] = useState("");
  const [valueRelease, setValueRelease] = useState("");
  const [valueUrl, setValueUrl] = useState("");
  const [valueOverview, setValueOverview] = useState("");
  const [valueRuntime, setValueRuntime] = useState("");
  const [valueGenres, setValueGenres] = useState("");
  const dispatch = useDispatch();

  const onSubmitAdd = () => {
    const paramDispatch = {
      valueTitle,
      valueRelease,
      valueUrl,
      valueOverview,
      valueRuntime,
      valueGenres,
    };
    dispatch(addPost(paramDispatch));
  };

  function handleClickEdit(event) {
    if (
      event.target.className === "container__modal-window" ||
      event.target.className === "modal-window__close_icon"
    ) {
      setChangeAddWindow(!changeAddWindow);
      event.preventDefault();
    } else if (event.target.className === "btn__submit-movie") {
      onSubmitAdd();     
      setChangeAddWindow(!changeAddWindow);
    }
  }

  return (
    <div
      className="container__modal-window"
      onClick={(event) => handleClickEdit(event)}
    >
      <div className="block__modal-window">
        <img
          className="modal-window__close_icon"
          src={closeIcon}
          alt="sortDown"
          onClick={(event) => handleClickEdit(event)}
        />
        <div className="modal-window__title-text">ADD MOVIE</div>
        <div className="block__input">
          <div className="current-block__input">
            <div className="input-name"> TITILE</div>
            <input
              className="input"
              type="text"
              value={valueTitle}
              onChange={(event) => setValueTitle(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RELEASE DATE</div>

            <input
              className="input"
              type="text"
              value={valueRelease}
              onChange={(event) => setValueRelease(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> MOVIE URL</div>
            <input
              className="input"
              type="text"
              value={valueUrl}
              onChange={(event) => setValueUrl(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> OVERVIEW</div>

            <input
              className="input"
              type="text"
              value={valueOverview}
              onChange={(event) => setValueOverview(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> RUNTIME</div>
            <input
              className="input"
              type="text"
              value={valueRuntime}
              onChange={(event) => setValueRuntime(event.target.value)}
            />
          </div>
          <div className="current-block__input">
            <div className="input-name"> GENRES</div>

            <input
              className="input"
              type="text"
              value={valueGenres}
              onChange={(event) => setValueGenres(event.target.value)}
            />
          </div>
          <button className="btn__submit-movie" onClick={onSubmitAdd}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
