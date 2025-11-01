import React from "react";

function ProfileCard({ user }) {
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
        <i className="bi bi-person-circle fs-1 text-primary"></i>
      </div>
      <h5 className="fw-bold">{user.name}</h5>
      <p className="text-muted mb-1">{user.email}</p>
      <span className="badge bg-success text-uppercase">{user.role}</span>
    </div>
  );
}

export default ProfileCard;
