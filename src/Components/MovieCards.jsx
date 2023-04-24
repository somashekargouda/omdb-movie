import React from "react";

const MovieCards = (props) => {
  return (
    <div className="card">
      <img src={props?.Poster} />
      <h2>Movie name : {props.Title}</h2>
      <h3>Year of release : {props.Year}</h3>
      <h3>Type : {props.Type}</h3>
    </div>
  );
};

export default MovieCards;
