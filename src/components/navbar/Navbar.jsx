import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="/logo.png" alt="" />
          <span>BohdanEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">List</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="right">
        <a href="/sign-in">Sign In</a>
        <a className="up" href="/sign-up">
          Sign Up
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/list">List</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/sign-in">Sign In</a>
          <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
