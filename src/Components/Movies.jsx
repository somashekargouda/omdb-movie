import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import MovieCards from "./MovieCards";
import WatchlistModal from "./WatchlistModal";
import { useSelector, useDispatch } from "react-redux";
import { fetch_movies } from "../redux/Action";
import "../App.css";

function Movies() {
  const [searchText, setsearchText] = useState("");
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [openWatchList, setOpenWatchList] = useState(false);

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
  const onWatchlist = (movie, movieToRemove) => {
    let allMovie = [...movies];
    if (movieToRemove) {
      allMovie = movies.filter(
        (movie) => movie.imdbID !== movieToRemove.imdbID
      );
      dispatch(fetch_movies(allMovie));
      return;
    }
    allMovie.push(movie);
    dispatch(fetch_movies(allMovie));
  };

  const isWatchListed = (id) => {
    return movies?.find((movie) => movie.imdbID === id);
  };

  return (
    <React.Fragment>
      <div className="search-container">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies
            </Typography>
            <Badge badgeContent={movies.length} color="secondary">
              <Button
                id="watchlistBtn"
                onClick={() => setOpenWatchList(true)}
                variant="contained"
              >
                Watchlist
              </Button>
            </Badge>
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
          disabled={filteredMovies.length === 0 ? true : false}
          onClick={() => {
            handleNext();
          }}
          variant="contained"
        >
          Next
        </Button>
      </div>
      <div className="movie-list">
        {filteredMovies?.map((item) => {
          return (
            <MovieCards
              key={item.imdbID}
              item={item}
              onWatchlist={onWatchlist}
              onDisableBtn
              isWatchListed={isWatchListed(item.imdbID)}
            />
          );
        })}
      </div>
      <WatchlistModal
        openWatchList={openWatchList}
        handleClose={() => setOpenWatchList(false)}
        movies={movies}
        onWatchlist={onWatchlist}
      />
    </React.Fragment>
  );
}

export default Movies;
