import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MovieCards from "./MovieCards";
import WatchlistModal from "./WatchlistModal";
import { useSelector, useDispatch } from "react-redux";
import { fetch_movies } from "../redux/Action";
import "../App.css";

function Movies() {
  const [searchText, setsearchText] = useState("");
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [openWishList, setWishListOpen] = useState(false);
  const handleClose = () => setWishListOpen(false);

  //gets the watchlist
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  //handle for pagination
  const handleNext = () => {
    setPageCount((prevCount) => prevCount + 1);
    getMovies(pageCount + 1);
  };

  //API call to fetch an API from OMDB
  async function getMovies(count) {
    const data = await fetch(
      `http://www.omdbapi.com/?s=${searchText}&plot="full"&apikey=5a9ef7a8&page=${count}`
    );
    const json = await data.json();
    setfilteredMovies(json.Search);
  }

  //dispatches movies and adds to the store
  const onWishList = (movie) => {
    let allMovie = [...movies];
    allMovie.push(movie);
    dispatch(fetch_movies(allMovie));
  };

  return (
    <React.Fragment>
      <div className="search-container">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies
            </Typography>
            <Button
              id="watchlistBtn"
              onClick={() => setWishListOpen(true)}
              variant="contained"
            >
              Watchlist
            </Button>
          </Toolbar>
        </AppBar>

        <input
          type="text"
          id="searchField"
          className="search-input"
          placeholder="Search for any movies..."
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
            return (
              <MovieCards
                key={item.imdbID}
                item={item}
                onWishList={onWishList}
                onDisableBtn
              />
            );
          })}
      </div>
      <WatchlistModal
        openWishList={openWishList}
        handleClose={handleClose}
        movies={movies}
      />
    </React.Fragment>
  );
}

export default Movies;
