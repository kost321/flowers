import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getPosts } from "../../redux/MovieListSlice";
import { setNumberOfPage } from "../../redux/MovieListSlice";
import { COUNT_OF_ITEMS_ON_PAGE } from "../../../constants";

import "./usePagination.css";

export const UsePagination = () => {
  let dispatch = useDispatch();
  const currentPage = useSelector((state) => state.movie.numberOfPage);
  const totalCount = useSelector((state) => state.movie.totalCount);
  let numberOfPages = Math.ceil(totalCount / COUNT_OF_ITEMS_ON_PAGE);

  function handleClickEdit(event, item) {
    let changeCountOfFilms = COUNT_OF_ITEMS_ON_PAGE * item;
    console.log(changeCountOfFilms);
    dispatch(getPosts(changeCountOfFilms));
    dispatch(setNumberOfPage(item));
    console.log("item", item);
  }

  return (
    <div className="container__pagination">
      <Stack>
        <Pagination
          count={numberOfPages}
          color="secondary"
          page={currentPage}
          onChange={handleClickEdit}
        />
      </Stack>
    </div>
  );
};
