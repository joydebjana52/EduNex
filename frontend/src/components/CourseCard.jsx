import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm glass-card">
        <div className="card-body">
          <h5 className="card-title text-primary">{course.title}</h5>
          <p className="card-text text-muted">{course.description}</p>
          <p className="text-secondary small mb-2">
            Category: {course.category}
          </p>
          <Link
            to={`/course/${course.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
