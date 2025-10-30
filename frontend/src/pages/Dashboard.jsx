import React from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

function Dashboard() {
  return (
    <div className="container mt-4 pt-5">
      <h2 className="text-center text-primary mb-4">Your Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
