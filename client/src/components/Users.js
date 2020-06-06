import React, { useState, useEffect } from "react";
import axios from "axios"

function Users() {
  const [users, setUsers] = useState();
  const [status, setStatus] = useState()

  useEffect(() => {
      axios
        .get("http://localhost:5000/api/users/")
        .then((res) => {
          setUsers(res.data);
          setStatus(undefined);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setStatus("Error handling request");
        });
    }, []);

  const handleLogOut = () => {
    axios
      .get("http://localhost:5000/api/users/logout")
      .then((res) => {
        console.log(res);
        setStatus(undefined);
      })
      .catch((err) => {
        setStatus("Uh... idk what happened");
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={() => handleLogOut()}>Logout</button>
      {users && users.map((user, i) => <h2 key={i}>{user.username}</h2>)}
    </div>
  );
}

export default Users