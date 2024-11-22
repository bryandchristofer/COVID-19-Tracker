import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditNotePage = () => {
  const navigate = useNavigate(); // For navigation
  const { state } = useLocation(); // Access passed state
  const note = state?.note; // Extract the note details

  const [updatedNote, setUpdatedNote] = useState(note?.note || ""); // Editable note state

  if (!note) {
    // Redirect back to Note Page if no note data is available
    navigate("/notes");
    return null;
  }

  // Handle updating the note in local storage
  const handleUpdateNote = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = storedNotes.map((n) =>
      n.id === note.id ? { ...n, note: updatedNote } : n
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Save updated notes
    navigate("/notes"); // Redirect back to Note Page
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Edit {note.country}
      </h1>

      {/* Edit Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300 w-full max-w-md">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p><strong>Country:</strong> {note.country}</p>
          <p><strong>Cases:</strong> {(note.cases || 0).toLocaleString()}</p>
          <p><strong>Deaths:</strong> {(note.deaths || 0).toLocaleString()}</p>
        </div>

        {/* Editable Extra Note */}
        <div className="bg-yellow-200 p-4 rounded-lg mb-6">
          <p><strong>Existing Extra Note (Editable):</strong></p>
          <textarea
            value={updatedNote}
            onChange={(e) => setUpdatedNote(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/notes")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 focus:ring-2 focus:ring-gray-300 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateNote}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNotePage;
