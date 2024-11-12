import React, { useState, useEffect } from "react";

function ContactList({ onLogout }) {
  const [submissions, setSubmissions] = useState([]);

  // Fetch submissions on component mount
  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const response = await fetch("http://localhost:5001/api/contacts");
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    }
    fetchSubmissions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Form Submissions</h2>
      <button onClick={onLogout} className="text-red-500">Logout</button>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission._id}>
              <td className="border p-2">{submission.firstName}</td>
              <td className="border p-2">{submission.lastName}</td>
              <td className="border p-2">{submission.email}</td>
              <td className="border p-2">{submission.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
