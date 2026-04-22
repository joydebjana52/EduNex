import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const url = process.env.REACT_APP_API_URL;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");

    // simple validation
    if (formData.name.trim().length < 3) {
      alert("Name should be at least 3 characters long");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${url}/api-mail/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMsg("✅ Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(result.error || "Failed to send message. Try again later.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5 pt-4">
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
            className="glass-form p-4"
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
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {successMsg && (
              <div className="alert alert-success mt-3" role="alert">
                {successMsg}
              </div>
            )}
          </form>

          <div className="text-center mt-4 text-muted small">
            <p>
              Email: <a href="mailto:support@edunex.com">support@edunex.com</a>
            </p>
            <p>
              Phone: <a href="tel:+919832267041">+91 98322 67041</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
