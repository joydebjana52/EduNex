import React from "react";
import defaultUser from "../assets/defaultUser.png";

function ProfileCard({ user, setShowImageModal }) {
  if (!user) {
    return (
      <div className="card shadow-sm border-0 text-center p-4">
        <p className="text-muted">Loading user details...</p>
      </div>
    );
  }

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
      <span className="badge bg-success text-uppercase">{user.role}</span>
    </div>
  );
}

export default ProfileCard;
