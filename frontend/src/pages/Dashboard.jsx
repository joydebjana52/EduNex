// import React from "react";

// function Dashboard() {
//   // Later: fetch user info or courses from backend
//   const user = { name: "Joydeb", role: "Student" };

//   return (
//     <div className="container mt-4 pt-5">
//       <div className="card shadow-sm">
//         <div className="card-body text-center">
//           <h3 className="card-title text-primary mb-3">
//             Welcome, {user.name}!
//           </h3>
//           <p className="text-muted">Role: {user.role}</p>
//           <hr />
//           <h5>Your Courses</h5>
//           <p className="text-muted">You’re not enrolled in any courses yet.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import CourseCard from "../components/CourseCard";

function Dashboard() {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn React fundamentals.",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Node.js Essentials",
      description: "Server-side programming basics.",
      category: "Backend",
    },
    {
      id: 3,
      title: "SQL with PostgreSQL",
      description: "Master relational databases.",
      category: "Database",
    },
  ];

  return (
    <div className="container mt-4 pt-5">
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
