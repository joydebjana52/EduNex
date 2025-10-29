import React, { useState } from "react";

function UploadCourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    videoUrl: "",
    documentUrl: "",
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Course:", courseData);
    // Later: Send to backend API with fetch() or axios
  };

  return (
    <div className="container mt-2 pt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4 text-primary">Upload New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter course title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            placeholder="Write a short description"
            value={courseData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="e.g., Web Development"
            value={courseData.category}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Video URL</label>
          <input
            type="url"
            name="videoUrl"
            className="form-control"
            placeholder="Paste video link (YouTube or Cloudinary)"
            value={courseData.videoUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Document URL (optional)</label>
          <input
            type="url"
            name="documentUrl"
            className="form-control"
            placeholder="Paste document link (PDF, etc.)"
            value={courseData.documentUrl}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Upload Course
        </button>
      </form>
    </div>
  );
}

export default UploadCourse;
