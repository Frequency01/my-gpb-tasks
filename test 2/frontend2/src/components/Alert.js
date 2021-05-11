import React from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";
import { fetchRepairDetails, hideAlert } from "../redux/actions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    minWidth: 275,
    minWidth: "20rem",
    margin: "0.2rem",
    minHeight: "5vh",
  },
  media: {
    minHeight: "10rem",
    maxWidth: "20rem",
  },
  nameOfRepair: {
    fontSize: "1vw",
    textDecoration: "none",
    color: "black",
  },
  snackbar: {
    background: "#ed6161",
    minHeight: "5rem",
    minWidth: "5rem",
  },
  buttonColor: {
    background: "black",
    color: "white",
    "&:hover": {
      background: "#363333",
    },
  },
});
const Alert = ({ onReset, alert }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ margin: "2rem" }}
    >
      <SnackbarContent
        message={alert}
        classes={{
          root: classes.snackbar,
        }}
        action={
          <React.Fragment>
            <Button
              variant="contained"
              color="primary"
              classes={{
                root: classes.buttonColor,
              }}
              onClick={() => {
                onReset();
              }}
            >
              Повторить запрос
            </Button>
          </React.Fragment>
        }
      />
    </Grid>
  );
};
export default Alert;
