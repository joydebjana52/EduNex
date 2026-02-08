import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "../components/ProfileCard";
import CourseCard from "../components/CourseCard";
// import ProfileCard from "../components/ProfileCard";
import courses from "../data/courses";
import defaultUser from "../assets/defaultUser.png";
import "../styles/Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const profileRef = useRef(null);

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
      localStorage.setItem("user", JSON.stringify(updatedUser));
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
          zIndex: 2,
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
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

          {/* Hover Upload Option */}
          {showProfile && hovering && (
            <label
              htmlFor="imageUploadSmall"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              Change
              <input
                id="imageUploadSmall"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </label>
          )}
        </div>

        {/* Profile Card */}
        {showProfile && user && (
          <div
            className="position-absolute mt-2 shadow p-3 rounded glass-surface"
            style={{
              right: 0,
              zIndex: 2100,
              width: "260px",
            }}
          >
            <ProfileCard user={user} setShowImageModal={setShowImageModal} />
          </div>
        )}
      </div>

      {/* Image Popup Modal */}
      {showImageModal && (
        <div
          onClick={() => setShowImageModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3000,
          }}
        >
          <img
            src={user?.profileImage || defaultUser}
            alt="Profile Preview"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      )}

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
