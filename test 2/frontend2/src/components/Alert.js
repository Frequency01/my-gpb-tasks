import React from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert, fetchRepairs, fetchRepairDetails } from "../redux/actions";

const useStyles = makeStyles({
  container: {
    margin: "2rem",
  },
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
const Alert = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.app.alert);
  const id = useSelector((state) => state.repairs.selectedRepairId);
  if (!alert) {
    return <></>;
  }
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <SnackbarContent
        message={alert}
        classes={{
          root: classes.snackbar,
        }}
        action={
          <Button
            variant="contained"
            color="primary"
            classes={{
              root: classes.buttonColor,
            }}
            onClick={() => {
              dispatch(hideAlert());
              if (id) {
                dispatch(fetchRepairDetails(id));
              } else {
                dispatch(fetchRepairs());
              }
            }}
          >
            Повторить запрос
          </Button>
        }
      />
    </Grid>
  );
};
export default Alert;
