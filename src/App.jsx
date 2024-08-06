import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

import Userdetails from "./components/Userdetails";
import { useEffect, useState } from "react";
import Form from "./components/Form";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home users={users}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users/:id" element={<Userdetails/>}></Route>
        <Route path="/users/add" element= {<Form users={users} setUsers={setUsers}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
