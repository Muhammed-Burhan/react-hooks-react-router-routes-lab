import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map((movie, index) => {
    return (
      <div key={index}>
        title:{movie.title} time:{movie.time}
        <ul>
          {movie.genres.map((genre, index1) => {
            return <li key={index1}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}

export default Movies;
