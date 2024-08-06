import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
  });
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(" http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((user) => setUsers([user, ...users]));
      setFormData({
        name: "",
        username : ""
      })
  };

  return (
    <div className="form-wrapper">
      <div>
        <h1 className="text-purple-700 font-serif font-bold border-">Post user</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
