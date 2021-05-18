import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  nameOfRepair: {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "black",
  },
  root: {
    minWidth: "20rem",
    margin: "2rem",
    minHeight: "5vh",
  },
  media: {
    minHeight: "10rem",
    maxWidth: "20rem",
  },
}));
const RepairCard = ({ repair }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={`/${repair.id}`} className={classes.nameOfRepair}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://assets.new.siemens.com/siemens/assets/api/uuid:c74ea29f-c0f9-47b6-b6cf-d3e6471dce31/width:1125/quality:high/reparatur-72dpi.jpg"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link className={classes.nameOfRepair} to={`/${repair.id}`}>
                {repair.name}
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to={`/${repair.id}`} className={classes.nameOfRepair}>
          <Button size="large">Детали</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default RepairCard;
