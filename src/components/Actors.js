import React from "react";
import { actors } from "../data";

function Actors() {
  const displaydirectors = actors.map((actor, index) => {
    return (
      <div key={index}>
        name :{actor.name}
        <ul>
          {actor.movies.map((movie, index1) => {
            return <li key={index1}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {displaydirectors}
    </div>
  );
}

export default Actors;
