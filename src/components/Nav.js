import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div id="nav-home"><span>i</span>Stocks</div>
      </Link>
      <Link to="/Dashboard">
        <div>Stocks</div>
      </Link>
      {/* <Link to="/Stock/:symbol">
        <div>Stock</div> */}
      {/* </Link> */}
      <Link to="/About">
        <div>About</div>
      </Link>
    </div>
  );
};
export default Nav;