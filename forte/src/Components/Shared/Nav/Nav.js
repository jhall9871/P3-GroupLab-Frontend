import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav({ setHideProps }) {
  // State to open and close the mobile nav
  const [open, setOpen] = useState(false);

  return (
    <div id="headerNav">
      <div id="burger-menu">
        {/* <h1 className="layout-h1">Forte</h1> */}
        <div className="title-circle">
          <div className="music-note">
            <h1>FORTE</h1>
          </div>
        </div>
        <div
          id="burger"
          onClick={() => {
            setOpen(!open);
            setHideProps(!open);
          }}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="18" rx="8"></rect>
            <rect y="30" width="100" height="18" rx="8"></rect>
            <rect y="60" width="100" height="18" rx="8"></rect>
          </svg>
        </div>
        <ul id={open ? "open" : "closed-burger-menu-list"}>
          <li className="burger-menu-item">
            <Link
              to="/"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "40px",
              }}
              onClick={() => {
                setOpen(!open);
                setHideProps(!open);
              }}
            >
              Home
            </Link>
          </li>
          <li className="burger-menu-item">
            <Link
              to="/about"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "40px",
              }}
              onClick={() => {
                setOpen(!open);
                setHideProps(!open);
              }}
            >
              About
            </Link>
          </li>
          <li className="burger-menu-item">
            <Link
              to="/meetTheTeam"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "40px",
              }}
              onClick={() => {
                setOpen(!open);
                setHideProps(!open);
              }}
            >
              Meet the Team
            </Link>
          </li>
          <li className="burger-menu-item">
            <Link
              to="/dashboard"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "40px",
              }}
              onClick={() => {
                setOpen(!open);
                setHideProps(!open);
              }}
            >
              Dashboard
            </Link>
          </li>
          <li className="burger-menu-item">
            <Link
              to="/signup"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "40px",
              }}
              onClick={() => {
                setOpen(!open);
                setHideProps(!open);
              }}
            >
              Sign Up
            </Link>
          </li>
          <li className="burger-menu-item">
            <Link
              to="/login"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "40px",
              }}
              onClick={() => {
                setOpen(!open);
                setHideProps(!open);
              }}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div id="desk-menu">
        <div className="title-circle">
          <div className="music-note">
            <h1>FORTE</h1>
          </div>
        </div>
        <ul id="desk-ul">
          <li>
            <Link
              to="/"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "20px",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "20px",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/meetTheTeam"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "20px",
              }}
            >
              Meet the Team
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "20px",
              }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "20px",
              }}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{
                fontFamily: "helvetica, sans-serif",
                textDecoration: "none",
                color: "white",
                marginTop: "15px",
                fontSize: "20px",
              }}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
