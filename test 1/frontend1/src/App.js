import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import Grid from "@material-ui/core/Grid";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <Grid container direction="row" justify="start" alignItems="center">
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
            <UserCard key={user.id} user={user} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default App;
