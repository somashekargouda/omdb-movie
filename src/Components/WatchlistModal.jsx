import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MovieCards from "./MovieCards";

const style = {
  display: "flex",
  flexFlow: "wrap",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  minWidth: "900px",
  maxWidth: "1000px",
  maxHeight: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "overlay",
};

//Modal for watchlist feature using Material UI
export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.openWishList}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={props.handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          {props?.movies?.map((movie) => {
            return (
              <MovieCards
                key={movie.imdbID}
                item={movie}
                onWishList={() => {}}
              />
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
