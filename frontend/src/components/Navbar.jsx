import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  // const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark glass-navbar shadow-sm fixed-top">
      <div className="container" ref={menuRef}>
        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          EduNex
        </Link>

        {/* Hamburger Button */}
        <button
          className={`navbar-toggler ${menuOpen ? "collapsed" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          style={{
            border: "none",
            outline: "none",
          }}
        >
          {/* Change icon when toggled */}
          {menuOpen ? (
            <span style={{ fontSize: "1.5rem", color: "white" }}>✖</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            menuOpen ? "show" : ""
          }`}
          id="navbarNav"
          style={{
            zIndex: menuOpen ? 3000 : "auto",
            position: menuOpen ? "relative" : "static",
          }}
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
                <Link
                  className="nav-link fw-semibold text-white"
                  to="/upload-course"
                >
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
