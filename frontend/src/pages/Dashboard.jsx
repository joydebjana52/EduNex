import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard";
import CourseCard from "../components/CourseCard";
import InfoCard from "../components/InfoCard";
import courses from "../data/courses";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null); // Reference for detecting outside clicks

  const obj = {
    title: "Total Courses",
    description: "You are enrolled in 5 courses.",
    icon: "bi bi-journal-bookmark",
  };

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  // Close profile card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <div className="container mt-4 pt-5 position-relative">
      {/* Profile Icon (Top Right) */}
      <div
        ref={profileRef}
        className="position-fixed"
        style={{
          top: "60px",
          right: "30px",
          cursor: "pointer",
          zIndex: 2000,
        }}
      >
        <FaUserCircle
          size={40}
          color="#007bff"
          onClick={() => setShowProfile(!showProfile)}
        />

        {/* Profile Card */}
        {showProfile && user && (
          <div
            className="position-absolute mt-2"
            style={{
              right: 0,
              zIndex: 2100,
              width: "260px",
            }}
          >
            <ProfileCard user={user} />
          </div>
        )}
      </div>

      {/* InfoCard Section */}
      {/* <h2 className="text-center text-primary mb-4">User Information</h2>
      <div className="row mb-4">
        <InfoCard obj={obj} color="red" />
      </div> */}

      {/* Course Section */}
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