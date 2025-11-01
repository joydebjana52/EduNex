import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import InfoCard from "../components/InfoCard";

function Dashboard() {
  const [user, setUser] = useState(null);
  const obj = {
    title: "Total Courses",
    description: "You are enrolled in 5 courses.",
    icon: "bi bi-journal-bookmark",
  }

  useEffect(() => {
    // Get user details from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);
  return (
    <div className="container mt-4 pt-5">
      {/* Profile Section */}
      <div className="d-flex justify-content-end mb-4">
        <ProfileCard user={user} />
      </div>

      {/* InfoCard Section */}
      <h2 className="text-center text-primary mb-4">User Information</h2>
      <div className="row">
        <InfoCard obj={obj} color="red" />
      </div>

      {/* Course section */}
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
