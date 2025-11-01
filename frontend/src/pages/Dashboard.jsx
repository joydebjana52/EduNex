import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "../components/ProfileCard";
import CourseCard from "../components/CourseCard";
// import InfoCard from "../components/InfoCard";
import courses from "../data/courses";
import defaultUser from "../assets/defaultUser.png";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  // Load user details from localStorage
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

    if (showProfile) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfile]);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      const updatedUser = { ...user, profileImage: imageUrl };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser)); // persist change
    };
    reader.readAsDataURL(file);
  };

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
        {/* Profile Image */}
        <img
          src={user?.profileImage || defaultUser}
          alt="User"
          width={45}
          height={45}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #007bff",
          }}
          onClick={() => setShowProfile(!showProfile)}
        />

        {/* Profile Card */}
        {showProfile && user && (
          <div
            className="position-absolute mt-2 bg-white shadow p-2 rounded"
            style={{
              right: 0,
              zIndex: 2100,
              width: "260px",
            }}
          >
            <ProfileCard user={user} />

            {/* Upload Button */}
            <div className="mt-2 text-center">
              <label
                htmlFor="imageUpload"
                className="btn btn-sm btn-outline-primary"
                style={{ cursor: "pointer" }}
              >
                U
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </div>
        )}
      </div>

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
