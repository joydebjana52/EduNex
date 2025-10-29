// import React from "react";
import { FaFacebook, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-5">
      <div className="container text-center">
        {/* Top Section */}
        <h5 className="fw-bold mb-3 text-primary">EduNex</h5>
        <p className="mb-4 text-secondary small">
          Learn. Grow. Build your future with EduNex – your interactive e-learning platform.
        </p>

        {/* Social Links */}
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://www.facebook.com/janajoydeb083"
            className="text-light mx-3 fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/mrjoydebj"
            className="text-light mx-3 fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/3_kids_in_my_basement/"
            className="text-light mx-3 fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/joydebjana52/"
            className="text-light mx-3 fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* Bottom Section */}
        <hr className="border-secondary" />
        <p className="mb-1 small text-secondary">
          &copy; {new Date().getFullYear()} <strong>EduNex</strong>. All rights reserved.
        </p>
        <p className="small text-primary mb-0">
          Built with ❤️ using React, Node.js, and PostgreSQL.
        </p>
      </div>
    </footer>
  );
}

export default Footer;