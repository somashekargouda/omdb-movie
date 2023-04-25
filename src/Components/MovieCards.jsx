import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MovieCards = (props) => {
  return (
    <Card sx={{ padding: "10px", marginTop: "10px", width: "280px" }}>
      <CardMedia sx={{ height: 190 }} image={props.Poster} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to watchlist</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCards;
