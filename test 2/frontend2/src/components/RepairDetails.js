import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchRepairDetails, hideAlert } from "../redux/actions";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "./Alert";

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

const RepairDetails = () => {
  let { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const repair = useSelector((state) => state.repairs.selectedRepair);
  const alert = useSelector((state) => state.app.alert);
  const isLoading = useSelector((state) => state.app.loading);
  useEffect(() => {
    dispatch(fetchRepairDetails(id));
  }, []);

  if (alert) {
    return (
      <Alert
        onReset={() => {
          dispatch(hideAlert());
          dispatch(fetchRepairDetails());
        }}
        alert={alert}
      />
    );
  }
  if (isLoading) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <div>
      {repair && (
        <Grid container direction="column" justify="center" alignItems="center">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://brunswickbowling.com/imgr/bowlingcenters/Service-Support/Electronic-Repair/14478/s-s_exchange_repair_1220x1220_dd9d0b66416c016d8a8d3ed0a7095888.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {repair.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {repair.price.toLocaleString()} ₽
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/" className={classes.nameOfRepair}>
                <Button size="large">Назад</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      )}
    </div>
  );
};
export default RepairDetails;
