//All the action creators
export const fetch_movies = (movie) => {
  return {
    type: "FETCH_MOVIES",
    payload: movie,
  };
};
