import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  // const token = localStorage.getItem("token");
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm fixed-top">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold text-primary text-white" to="/">
          EduNex
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-white" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-white" to="/dashboard">
                Dashboard
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link fw-semibold text-white" to="/upload-course">
                Upload Course
              </Link>
            </li> */}
            {/* Show Upload Course only if user is a teacher */}
            {user && user.role === "teacher" && (
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-white" to="/upload-course">
                  Upload Course
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-white" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
