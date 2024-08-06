import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  const [user, setUsers] = useState({});
  const params = useParams();
  console.log(params);

  return <div>Userdetails</div>;
};

export default Userdetails;
