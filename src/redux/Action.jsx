import axios from "axios";

export const fetchMovies = (query) => async (dispatch) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${query}&apikey=5a9ef7a8`
  );
  dispatch({ type: "FETCH_MOVIES", payload: response.data.Search });
};
