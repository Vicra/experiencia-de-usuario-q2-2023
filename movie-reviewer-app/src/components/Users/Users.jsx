import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/user/");
      const data = response.data;
      console.log(data);
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {users.length &&
        users.map((user) => {
          return (
            <>
              <h3>{user.id}</h3>
              <p>{user.email}</p>
            </>
          );
        })}
    </>
  );
};

export default Users;
