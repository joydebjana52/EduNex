import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import UploadCourse from "./pages/UploadCourse";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Main content area */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
          {/* <Route path="/upload-course" element={<UploadCourse />} /> */}
          <Route path="/upload-course" element={ <RoleProtectedRoute requiredRole="teacher"> <UploadCourse /> </RoleProtectedRoute> } />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
