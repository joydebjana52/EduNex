import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import defaultUser from "../assets/defaultUser.png";

function ProfileCard({ user, setShowImageModal }) {
  const navigate = useNavigate();
  if (!user) {
    return (
      <div className="card shadow-sm border-0 text-center p-4">
        <p className="text-muted">Loading user details...</p>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear user info
    localStorage.removeItem("token"); // clear auth token
    navigate("/login");
  };

  return (
    <div className="card shadow-sm border-0 p-4 text-center">
      <div className="mb-3">
        <img
          src={user.profileImage || defaultUser}
          alt={user.name || "Default user"}
          className="rounded-circle"
          width="100"
          height="100"
          style={{ objectFit: "cover", cursor: "pointer" }}
          onClick={() => setShowImageModal(true)}
        />
      </div>
      <h5 className="fw-bold">{user.name}</h5>
      <p className="text-muted mb-1">{user.email}</p>
      <span className="badge bg-success text-capitalize">{user.role}</span>

      {/* Logout Button */}
      <div
        className="d-flex align-items-center justify-content-center mt-3 text-danger"
        style={{ cursor: "pointer" }}
        onClick={handleLogout}
      >
        <FaSignOutAlt className="me-2" />
        <span className="fw-semibold">Logout</span>
      </div>
    </div>
  );
}

export default ProfileCard;
