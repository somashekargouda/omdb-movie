import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MovieCards from "./MovieCards";
import "../App.css";

function Movies() {
  const [searchText, setsearchText] = useState("");
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  //handle for pagination
  const handleNext = () => {
    setPageCount((prevCount) => prevCount + 1);
    getMovies(pageCount + 1);
  };

  //API call to fetch an API from OMDB
  async function getMovies(count) {
    const data = await fetch(
      `http://www.omdbapi.com/?s=${searchText}&apikey=5a9ef7a8&page=${count}`
    );
    const json = await data.json();
    setfilteredMovies(json.Search);
  }

  return (
    <React.Fragment>
      <div className="search-container">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies
            </Typography>
          </Toolbar>
        </AppBar>

        <input
          type="text"
          id="searchField"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />

        <Button
          style={{ marginLeft: "10px" }}
          id="searchBtn"
          className="search-btn"
          onClick={() => {
            getMovies(1);
          }}
          variant="contained"
        >
          Search
        </Button>

        <Button
          style={{ marginTop: "20px", marginLeft: "1100px" }}
          id="paginationBtn"
          className="next"
          onClick={() => {
            handleNext();
          }}
          variant="contained"
        >
          Next
        </Button>
      </div>

      <div className="movie-list">
        {filteredMovies &&
          filteredMovies.map((item) => {
            console.log(item);
            return <MovieCards key={item.imdbID} {...item} />;
          })}
      </div>
    </React.Fragment>
  );
}

export default Movies;
