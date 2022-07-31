import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <h1>
        <Link to="/" className="title">RepoSearch</Link>
      </h1>
    </div>
  );
};

export default NavBar;
