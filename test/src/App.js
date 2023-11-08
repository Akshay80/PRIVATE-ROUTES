import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  useEffect(() => {
    localStorage.setItem("token", null);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
