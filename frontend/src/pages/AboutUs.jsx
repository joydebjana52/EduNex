import React from "react";
import aboutUsImage from '../assets/about-us.jpg';

function About() {
  return (
    <div className="container mt-5 pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary mb-3">About EduNex</h1>
        <p className="text-muted lead">
          Empowering students and teachers through modern, interactive learning.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src={aboutUsImage}
            alt="EduNex Learning"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold mb-3 text-dark">Our Mission</h4>
          <p className="text-muted">
            EduNex aims to bridge the gap between students and instructors by providing a seamless
            learning experience. We focus on interactive content, progress tracking, and real-time
            communication to make education more engaging and effective.
          </p>

          <h4 className="fw-semibold mb-3 text-dark">Our Vision</h4>
          <p className="text-muted">
            To become a trusted learning partner for every student and educator by building an
            inclusive platform that encourages continuous growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;