import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Movie card item component using Material UI
const MovieCards = (props) => {
  return (
    <Card sx={{ padding: "10px", marginTop: "10px", width: "280px" }}>
      <CardMedia sx={{ height: 190 }} image={props.item.Poster} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.Type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color={
            props.isWatchListed || !props.onDisableBtn ? "error" : "primary"
          }
          onClick={() =>
            props.onWatchlist(
              props.item,
              !props.onDisableBtn ? props.item : props.isWatchListed
            )
          }
        >
          {props.isWatchListed || !props.onDisableBtn ? (
            <span>Remove from WatchList</span>
          ) : (
            <span>Add to watchlist</span>
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCards;
