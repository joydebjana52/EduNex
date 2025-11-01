import React from "react";

function InfoCard({ obj, color }) {
  return (
    <div className="card shadow-sm border-0 h-100 text-center p-3">
      <div className={`fs-1 mb-3 text-${color || "primary"}`}>
        <i className={obj.icon || "bi bi-book"}></i>
      </div>
      <h5 className="fw-bold">{obj.title}</h5>
      <p className="text-muted">{obj.description}</p>
    </div>
  );
}

export default InfoCard;
