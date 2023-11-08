import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("token", null);
    navigate("/login");
  };


// CHECKING IF USER IS ALREADY LOGGED IN, THEN DON'T GO BACK
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token !== 'null') {
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function (event) {
        window.history.go(1);
      };
    }
  }, []);

  return (
    <div>
      <h4>Home page</h4>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default Home;
