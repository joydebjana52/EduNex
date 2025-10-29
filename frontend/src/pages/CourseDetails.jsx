import React from "react";
// import { useParams } from "react-router-dom";

function CourseDetails() {
  // Later, you'll fetch this course info using course ID from URL
  // const { id } = useParams();

  // Dummy course for now
  const course = {
    title: "React Basics for Beginners",
    description: "Learn React fundamentals like components, props, and hooks.",
    category: "Web Development",
    teacher: "John Doe",
    videoUrl: "https://youtu.be/zsjvFFKOm3c",
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-primary">{course.title}</h2>
          <p className="text-muted mb-2">
            Category: {course.category} | Instructor: {course.teacher}
          </p>
          <hr />
          <p>{course.description}</p>

          {course.videoUrl && (
            <div className="ratio ratio-16x9 mt-3">
              <iframe
                src={course.videoUrl}
                title={course.title}
                allowFullScreen
              ></iframe>
            </div>
          )}

          <button className="btn btn-outline-primary mt-4">
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
