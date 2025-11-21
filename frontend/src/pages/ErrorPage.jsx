import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container mt-5 pt-5 text-center">
      <h1 className="fw-bold display-4 text-primary mb-3">404</h1>

      <h2 className="fw-semibold mb-3">Page Not Found</h2>

      <p className="text-muted lead mb-4">
        Looks like the page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="d-flex justify-content-center mb-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
          alt="Not Found"
          style={{
            width: "180px",
            opacity: "0.85",
          }}
        />
      </div>

      <div className="d-flex justify-content-center gap-3">
        <Link to="/" className="btn btn-primary px-4">
          Go to Home
        </Link>

        <Link to="/contactus" className="btn btn-outline-primary px-4">
          Contact Support
        </Link>
      </div>

      <p className="mt-4 text-muted small">
        If you believe this is a mistake, feel free to reach out.
      </p>
    </div>
  );
}

export default ErrorPage;
