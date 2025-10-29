import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-4 pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary mb-3">Contact Us</h1>
        <p className="text-muted lead">
          Have questions or feedback? We’d love to hear from you.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit}
            className="bg-light p-4 rounded shadow-sm"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>

          <div className="text-center mt-4 text-muted small">
            <p>Email: support@edunex.com</p>
            <p>Phone: +91 98322 67041 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
