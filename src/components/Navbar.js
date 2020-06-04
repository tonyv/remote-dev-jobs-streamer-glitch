import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="three wide column">
      <div className="ui vertical pointing menu">
        <NavLink to="/jobs" className="item">
          Filter Stream Jobs
        </NavLink>
        <NavLink to="/recent" className="item">
          Recent Search Jobs
        </NavLink>
        <NavLink to="/rules" className="item">
          Manage Rules
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
