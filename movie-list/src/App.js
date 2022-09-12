import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieList } from "./movieList/components/MovieList/MovieList"
import { CurrentMovieInfo } from "./movieList/components/CurrentMovieInfo/CurrentMovieInfo";
import Footer from "./movieList/components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
        <Routes>
          <Route path="/movieInfo" element={<CurrentMovieInfo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
