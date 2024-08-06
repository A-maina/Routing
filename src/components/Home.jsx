import React, {  } from "react";
import User from "./User";
const Home = ({users}) => {
 
  const displayUsers = users.map((user, index) => <User user={user} key={index} />);
  return (
    <div>
      <div className="form-input">
      </div>
      <div className="display bg-slate-500">{displayUsers}</div>
      {
        
      }
    </div>
  );
};

export default Home;
