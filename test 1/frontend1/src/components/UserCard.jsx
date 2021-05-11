import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: "50%",
    minHeight: "20vh",
    margin: "2%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  header: {
    fontSize: "2rem",
  },
});

const UserCard = ({ user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.header}> {user.name}</Typography>

        <Typography color="textSecondary">
          <ul>
            <li> Street: {user.address.street}</li>
            <li>Suite: {user.address.suite}</li>
            <li>City: {user.address.city}</li>
            <li>Zipcode: {user.address.zipcode}</li>
          </ul>
        </Typography>
        <Typography variant="body2" component="p">
          {user.company.catchPhrase}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
