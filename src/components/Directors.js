import React from "react";
import { directors } from "../data";

function Directors() {
  const displaydirectors = directors.map((director, index) => {
    return (
      <div key={index}>
        name :{director.name}
        <ul>
          {director.movies.map((movie, index1) => {
            return <li key={index1}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {displaydirectors}
    </div>
  );
}

export default Directors;
