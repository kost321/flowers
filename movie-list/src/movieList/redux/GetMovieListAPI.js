import { URL } from "../../constants";

export const getPostsFromServer = async (paramsFromDispatch) => {
  const paramsObj = {};
  if (paramsFromDispatch.limit) {
    paramsObj.limit = paramsFromDispatch.limit;
  }

  if (paramsFromDispatch.filter) {
    paramsObj.filter = paramsFromDispatch.filter;
  }

  if (paramsFromDispatch.offset) {
    paramsObj.offset = paramsFromDispatch.offset;
  }

  if (paramsFromDispatch.sortOrder) {
    paramsObj.sortOrder = paramsFromDispatch.sortOrder;
    paramsObj.sortBy = "vote_average";
  }
  
  if (paramsFromDispatch.search) {
    paramsObj.search = paramsFromDispatch.search;
    paramsObj.searchBy = "title";
  }
  
  const params = new URLSearchParams (paramsObj)
  const url = URL  + `?${params.toString()}`;
  const response = await fetch(url);
  const responseInJson = await response.json();
  return responseInJson;
};

export const getPostFromServerById = async (id) => {
  const response = await fetch(`http://localhost:4000/movies/${id}`);
  const post = await response.json();
  return post;
};

export const deletePostsFromServer = async (id) => {
  await fetch(`http://localhost:4000/movies/${id}`, { method: "DELETE" });
};

export const editPostFromServer = async (paramDispatchEdit) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: paramDispatchEdit.valueTitle,
      release_date: paramDispatchEdit.valueRelease,
      poster_path: paramDispatchEdit.valueUrl,
      overview: paramDispatchEdit.valueOverview,
      runtime: +paramDispatchEdit.valueRuntime,
      id: paramDispatchEdit.id,
      genres: [paramDispatchEdit.valueGenres],
    }),
  };

  const response = await fetch(`http://localhost:4000/movies`, requestOptions).catch(error => console.log(error));
  const post = await response.json();
  return post;
};

export const addPostFromServer = async (paramDispatch) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: paramDispatch.valueTitle,
      release_date: paramDispatch.valueRelease,
      poster_path: paramDispatch.valueUrl,
      overview: paramDispatch.valueOverview,
      runtime: +paramDispatch.valueRuntime,
      genres: [paramDispatch.valueGenres],
    }),
  };
  const response = await fetch(`http://localhost:4000/movies`, requestOptions);
  const post = await response.json();
  return post;
};
