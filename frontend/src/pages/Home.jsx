import React from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="d-flex flex-column min-vh-100 mt-4">
      {/* Hero Section */}
      <section
        className="py-5 text-center text-dark glass-hero mx-3 mx-md-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,110,253,0.08) 0%, rgba(0,123,255,0.06) 100%)",
        }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold text-primary">Welcome to EduNex</h1>
          <p className="lead mb-4">
            Learn, grow, and build your career with our interactive e-learning
            platform.
          </p>
          <a href="/register" className="btn btn-primary btn-lg me-2">
            Get Started
          </a>
          <a href="/login" className="btn btn-outline-primary btn-lg">
            Login
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 glass-section mx-3 mx-md-5 my-4">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold text-primary">Why Choose EduNex?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100 glass-card">
                <div className="card-body">
                  <div className="text-primary mb-3 fs-1">
                    <i className="bi bi-journal-check"></i>
                  </div>
                  <h5 className="card-title fw-bold">Interactive Courses</h5>
                  <p className="card-text text-muted">
                    Learn with video lectures, assignments, and quizzes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100 glass-card">
                <div className="card-body">
                  <div className="text-primary mb-3 fs-1">
                    <i className="bi bi-people"></i>
                  </div>
                  <h5 className="card-title fw-bold">Expert Teachers</h5>
                  <p className="card-text text-muted">
                    Courses designed and taught by industry professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100 glass-card">
                <div className="card-body">
                  <div className="text-primary mb-3 fs-1">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h5 className="card-title fw-bold">Track Your Progress</h5>
                  <p className="card-text text-muted">
                    Stay motivated with a personalized dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-5 glass-section mx-3 mx-md-5 my-4">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-primary">
            Popular Courses
          </h2>
          <div className="row g-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
