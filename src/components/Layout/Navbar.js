import React from "react";
import NavbarCurrent from "./NavbarCurrent";
import classes from "./Navbar.module.css";

const Navbar = () => (
  <ul className={classes.Navbar}>
    <li>
      <NavbarCurrent link="/">Home</NavbarCurrent>
    </li>
    <li>
      <NavbarCurrent link="/about">About</NavbarCurrent>
    </li>
  </ul>
);

export default Navbar;
