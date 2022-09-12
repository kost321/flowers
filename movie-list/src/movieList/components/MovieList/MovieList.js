import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/MovieListSlice";
import { Header } from "../Header/Header";
import { Filters } from "../Filters/Filters";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Movie } from "./Movie/Movie";
import { UsePagination } from "../UsePagination/UsePagination";

import "./movielist.css"

export const MovieList = () => {
  const { posts } = useSelector((state) => state.movie);
  const loadFilms = useSelector((state) => state.movie.loading);
  const totalCount = useSelector((state) => state.movie.totalCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);


  let stateOfPage;
  if (loadFilms === true) {
    stateOfPage = <div className="loader">Loading...</div>;
  } else if (loadFilms === false && posts.length > 0) {
    stateOfPage = (
      <section className="container__movie-list">
        {posts.map((post) => (
          <article className="block__movie-list" key={post.id}>
            <Movie
              key={post.id}
              id={post.id}
              title={post.title}
              img={post.poster_path}
              genres={post.genres}
              date={post.release_date}
              rating={post.vote_average}
            />
          </article>
        ))}
      </section>
    );
  } else if (loadFilms === false && posts.length === 0) {
    stateOfPage = <PageNotFound />;
  }

  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <div className="container__content">
        <div className="line-gap"></div>
        <Filters />
        <div className="block__count-movies">{totalCount} MOVIES FOUND</div>
        {stateOfPage}
        <UsePagination />
      </div>
    </div>
  );
};
