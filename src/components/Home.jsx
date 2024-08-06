import React, { useState, useEffect } from "react";
import User from "./User";
import Form from "./Form";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const displayUsers = users.map((user, index) => <User user={user} key={index} />);
  return (
    <div>
      <div className="form-input">
        <Form users={users} setUsers={setUsers} />
      </div>
      <div className="display bg-slate-500">{displayUsers}</div>
      {
        
      }
    </div>
  );
};

export default Home;
