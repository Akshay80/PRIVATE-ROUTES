import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = { name, password };
    localStorage.setItem("user", JSON.stringify(data));
    // SETTING TOKEN HERE
    localStorage.setItem("token", 12345);
    navigate("/home");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
