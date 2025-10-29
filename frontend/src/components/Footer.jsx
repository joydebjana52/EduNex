import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <div className="container">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} <strong>EduNex</strong>. All rights reserved.
        </p>
        <p className="text-muted small mb-0">
          Built with ❤️ using React, Node.js, and PostgreSQL
        </p>
      </div>
    </footer>
  );
}

export default Footer;
