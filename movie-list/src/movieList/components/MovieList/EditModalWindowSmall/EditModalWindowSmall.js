import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/MovieListSlice";
import { EditWindow } from "./EditWindow/EditWindow";

import "./editModalWindowSmall.css";

export const EditModalWindowSmall = ({ id }) => {
  const [changeEditWindow, setchangeEditWindow] = useState(false);
  const dispatch = useDispatch();

  function handleClickDelete(key) {
    dispatch(deletePost(key));
  }

  function handleClickEdit(event) {
    if (event.target.className === "btn__change-edit") {
      setchangeEditWindow(!changeEditWindow);
    }
  }

  return (
    <>
      <div className="modal__window-small">
        <button
          className="btn__change-edit"
          onClick={(event) => handleClickEdit(event, id)}
        >
          EDIT
        </button>
        {changeEditWindow ? (
          <EditWindow
            setchangeEditWindow={setchangeEditWindow}
            changeEditWindow={changeEditWindow}
            id={id}
          />
        ) : null}

        <button
          className="btn__change-delete"
          onClick={(event) => handleClickDelete(id,event)}
        >
          DELETE
        </button>
      </div>
    </>
  );
};
