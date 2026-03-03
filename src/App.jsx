import React from 'react'

// Student Details
const student = {
  name: "Manikanta",
  regNo: "2500040223",
  department: "Computer Science Engineering",
};

// Attendance Data
const subjects = [
  { name: "Data Structures", attendance: 82 },
  { name: "Operating Systems", attendance: 74 },
  { name: "Database Management", attendance: 68 },
  { name: "Computer Networks", attendance: 59 },
  { name: "Software Engineering", attendance: 91 },
];

// Function for color coding
const getColor = (percentage) => {
  if (percentage > 75) return "bg-green-200 border-green-500";
  if (percentage >= 60) return "bg-yellow-200 border-yellow-500";
  return "bg-red-200 border-red-500";
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <h1 className="text-xl font-bold">
            Student Attendance Dashboard
          </h1>

          <div className="space-y-1 md:space-y-0 md:space-x-6 md:flex">
            <p><span className="font-semibold">Name:</span> {student.name}</p>
            <p><span className="font-semibold">Reg No:</span> {student.regNo}</p>
            <p><span className="font-semibold">Dept:</span> {student.department}</p>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md border-l-8 ${getColor(
              subject.attendance
            )}`}
          >
            <h2 className="text-lg font-semibold mb-3">
              {subject.name}
            </h2>

            <p className="text-2xl font-bold">
              {subject.attendance}%
            </p>

            <p className="mt-2 text-sm text-gray-700">
              {subject.attendance > 75
                ? "Good Attendance"
                : subject.attendance >= 60
                ? "Warning Zone"
                : "Low Attendance"}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}
